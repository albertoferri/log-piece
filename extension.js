const vscode = require('vscode');
const milestones = require('./milestones');

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
    vscode.window.showInformationMessage('🏴‍☠️ One Piece Adventure loaded!');

    try {
        const gitExtensionBase = vscode.extensions.getExtension('vscode.git');
        if (!gitExtensionBase) {
            vscode.window.showErrorMessage('Git extension not found.');
            return;
        }

        if (!gitExtensionBase.isActive) {
            await gitExtensionBase.activate();
        }

        const git = gitExtensionBase.exports.getAPI(1);

        let commitCount = context.globalState.get('commitCount', 0);

        const provider = new OnePieceSidebarProvider(context, commitCount, milestones);
        context.subscriptions.push(
            vscode.window.registerWebviewViewProvider('log-piece.sidebarView', provider)
        );

        context.subscriptions.push(
            vscode.commands.registerCommand('log-piece.skipToGrandLine', async () => {
                const eastBlueEnd = Math.max(
                    ...milestones
                        .filter(m => m.saga === "East Blue Saga")
                        .map(m => m.commits)
                );

                if (commitCount >= eastBlueEnd) {
                    vscode.window.showInformationMessage(
                        `🏴‍☠️ You've already reached the Grand Line (commit #${commitCount}). Nothing to skip!`
                    );
                    return;
                }

                const choice = await vscode.window.showWarningMessage(
                    `Skip ahead to the end of the East Blue Saga (commit #${eastBlueEnd})? Your journey will continue from the Grand Line.`,
                    { modal: true },
                    'Set Sail'
                );
                if (choice !== 'Set Sail') return;

                commitCount = eastBlueEnd;
                await context.globalState.update('commitCount', commitCount);

                const milestone = milestones.find(m => m.commits === commitCount);
                provider.update(commitCount, milestone.message, milestone.art);
                vscode.window.showInformationMessage(`⚓ ${milestone.message}`);
            })
        );

        const watchedRepos = new Set();

        function watchRepo(repo) {
            if (watchedRepos.has(repo.rootUri.toString())) return;
            watchedRepos.add(repo.rootUri.toString());

            setTimeout(() => {
                let lastHead = repo.state.HEAD?.commit;
                let lastBranch = repo.state.HEAD?.name;

                repo.state.onDidChange(() => {
                    const currentHead = repo.state.HEAD?.commit;
                    const currentBranch = repo.state.HEAD?.name;
                    const currentType = repo.state.HEAD?.type;

                    if (!lastHead) {
                        lastHead = currentHead;
                        lastBranch = currentBranch;
                        return;
                    }

                    if (currentType !== 0) return;

                    if (currentBranch !== lastBranch) {
                        lastBranch = currentBranch;
                        lastHead = currentHead;
                        return;
                    }

                    if (!currentHead.match(/^[a-f0-9]{40}$/)) return;

                    if (currentHead && currentHead !== lastHead) {
                        lastHead = currentHead;
                        lastBranch = currentBranch;

                        const newCount = context.globalState.get('commitCount', 0) + 1;
                        context.globalState.update('commitCount', newCount);
                        commitCount = newCount;

                        const milestone = milestones.find(m => m.commits === newCount);
                        if (milestone) {
                            vscode.window.showInformationMessage(milestone.message);
                            provider.update(newCount, milestone.message, milestone.art);
                        } else {
                            const lastReached = [...milestones]
                                .reverse()
                                .find(m => m.commits <= newCount);
                            vscode.window.showInformationMessage(`⚓ Commit #${newCount} logged in the ship's journal.`);
                            provider.update(newCount, lastReached?.message || "⚓ Your adventure has not yet begun.", lastReached?.art);
                        }
                    }
                });
            }, 500);
        }

        git.repositories.forEach(repo => watchRepo(repo));
        git.onDidOpenRepository(repo => watchRepo(repo));

        setTimeout(() => {
            git.repositories.forEach(repo => watchRepo(repo));
        }, 3000);

    } catch (error) {
        vscode.window.showErrorMessage(`❌ Error: ${error.message}`);
    }
}

class OnePieceSidebarProvider {
    constructor(context, commitCount, milestones) {
        this._context = context;
        this._commitCount = commitCount;
        this._milestones = milestones;
        this._view = undefined;
    }

    resolveWebviewView(webviewView) {
        this._view = webviewView;
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.joinPath(this._context.extensionUri, 'images')
            ]
        };
        webviewView.webview.html = this._getHtml(
            this._commitCount,
            this._getCurrentMessage(),
            this._getCurrentArt(),
            webviewView.webview
        );
    }

    update(commitCount, message, artFile) {
        this._commitCount = commitCount;
        if (this._view) {
            this._view.webview.html = this._getHtml(commitCount, message, artFile, this._view.webview);
        }
    }

    _getReached() {
        return this._milestones
            .filter(m => m.commits <= this._commitCount)
            .sort((a, b) => b.commits - a.commits);
    }

    _getCurrentMessage() {
        const reached = this._getReached();
        return reached.length > 0
            ? reached[0].message
            : "⚓ Your adventure to the Grand Line has not yet begun. Make your first commit to set sail!";
    }

    _getCurrentArt() {
        const reached = this._getReached();
        return reached.length > 0 ? reached[0].art : null;
    }

    _getCurrentSaga() {
        const reached = this._getReached();
        return reached.length > 0 ? reached[0].saga : null;
    }

    _getCurrentArc() {
        const reached = this._getReached();
        return reached.length > 0 ? reached[0].arc : null;
    }

    _getArcProgress() {
        const currentArc = this._getCurrentArc();
        if (!currentArc) return null;
        const arcMilestones = this._milestones.filter(m => m.arc === currentArc);
        const reached = arcMilestones.filter(m => m.commits <= this._commitCount);
        return { current: reached.length, total: arcMilestones.length };
    }

    _getNextMilestoneText(commitCount) {
        const next = this._milestones
            .filter(m => m.commits > commitCount)
            .sort((a, b) => a.commits - b.commits)[0];

        if (!next) return "🌅 The adventure continues — the crew sails toward Laugh Tale. More chapters are coming! 🏴‍☠️";
        const remaining = next.commits - commitCount;
        return `Next milestone in ${remaining} commit${remaining === 1 ? '' : 's'}`;
    }

    _getHtml(commitCount, message, artFile, webview) {
        const saga = this._getCurrentSaga();
        const arc = this._getCurrentArc();
        const progress = this._getArcProgress();
        const nextMilestoneText = this._getNextMilestoneText(commitCount);

        let artTag = `<div class="art-placeholder">🌊⛵🌊</div>`;
        if (artFile) {
            const artUri = webview.asWebviewUri(
                vscode.Uri.joinPath(this._context.extensionUri, 'images', artFile)
            );
            artTag = `<img src="${artUri}" width="100%" style="image-rendering: pixelated; border-radius: 4px;" />`;
        }

        const sagaLabel = saga
            ? `<div class="saga-badge">${saga}</div>`
            : `<div class="saga-badge">🏴‍☠️ One Piece Adventure</div>`;

        const arcLabel = arc
            ? `<div class="arc-label">${arc}</div>`
            : '';

        let progressBar = '';
        if (progress) {
            const pct = Math.round((progress.current / progress.total) * 100);
            progressBar = `
                <div class="progress-wrap">
                    <div class="progress-bar" style="width: ${pct}%"></div>
                </div>
                <div class="progress-text">${progress.current} / ${progress.total} arc milestones</div>`;
        }

        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body {
                    font-family: 'Courier New', monospace;
                    padding: 14px;
                    background-color: #0a1628;
                    color: #e8d5a3;
                }
                .saga-badge {
                    color: #f0c040;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border-bottom: 1px solid #f0c04066;
                    padding-bottom: 6px;
                    margin-bottom: 4px;
                }
                .arc-label {
                    color: #c8a84b;
                    font-size: 11px;
                    margin-bottom: 10px;
                    font-style: italic;
                }
                .commit-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }
                .commit-count {
                    font-size: 11px;
                    color: #888;
                }
                .commit-number {
                    font-size: 20px;
                    font-weight: bold;
                    color: #f0c040;
                }
                .story-box {
                    background-color: #112244;
                    border: 1px solid #f0c04055;
                    border-left: 3px solid #f0c040;
                    border-radius: 4px;
                    padding: 10px 12px;
                    font-size: 12px;
                    line-height: 1.6;
                    margin-bottom: 12px;
                }
                .art-wrap {
                    margin-bottom: 10px;
                    border-radius: 4px;
                    overflow: hidden;
                }
                .art-placeholder {
                    text-align: center;
                    color: #223355;
                    font-size: 36px;
                    letter-spacing: 6px;
                    padding: 10px 0;
                }
                .progress-wrap {
                    background: #112244;
                    border-radius: 999px;
                    height: 5px;
                    width: 100%;
                    margin-bottom: 4px;
                    overflow: hidden;
                }
                .progress-bar {
                    background: linear-gradient(90deg, #f0c040, #e08020);
                    height: 100%;
                    border-radius: 999px;
                    transition: width 0.3s ease;
                }
                .progress-text {
                    font-size: 10px;
                    color: #666;
                    text-align: right;
                    margin-bottom: 10px;
                }
                .next-milestone {
                    font-size: 10px;
                    color: #556;
                    text-align: center;
                    font-style: italic;
                    padding-top: 6px;
                    border-top: 1px solid #112244;
                }
            </style>
        </head>
        <body>
            ${sagaLabel}
            ${arcLabel}
            <div class="commit-row">
                <span class="commit-count">Commits logged</span>
                <span class="commit-number">${commitCount}</span>
            </div>
            <div class="story-box">${message}</div>
            <div class="art-wrap">${artTag}</div>
            ${progressBar}
            <div class="next-milestone">${nextMilestoneText}</div>
        </body>
        </html>
        `;
    }
}

function deactivate() {}

module.exports = { activate, deactivate };
