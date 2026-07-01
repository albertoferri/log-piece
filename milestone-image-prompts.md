# Log Piece — Milestone image prompts (2 at a time)

Generated from milestones.js. Covers the 264 milestones that still use placeholder.png
(East Blue milestones 1–27 already have art). New files are numbered
milestone28.png … milestone291.png, in story order.

## Workflow
1. Paste one batch below into ChatGPT (image generation).
2. It produces a PORTRAIT 1024x1536 image = two 1024x768 (4:3) scenes, stacked.
3. Slice into top/bottom, then downscale each to 200x150 (nearest-neighbor):
   magick sheet.png -crop 1x2@ +repage cell_%d.png
   magick cell_0.png -filter Point -resize 200x150! <top-filename>
   magick cell_1.png -filter Point -resize 200x150! <bottom-filename>
   (cell_0 = TOP, cell_1 = BOTTOM)
4. Drop the PNGs in images/ and set each milestone's "art" field in milestones.js.

## If ChatGPT refuses named characters (One Piece IP)
Swap the name for a look-based descriptor. Keep place names. Quick map for the crew:
- Luffy  -> young straw-hat pirate captain in a red vest
- Zoro   -> green-haired swordsman with three swords
- Nami   -> orange-haired navigator girl
- Usopp  -> long-nosed sniper with goggles
- Sanji  -> blond cook in a black suit
- Chopper-> small reindeer doctor with a pink hat
- Robin  -> dark-haired archaeologist woman
- Franky -> big blue-haired cyborg shipwright
- Brook  -> tall skeleton musician with an afro
- Jinbe  -> burly blue fish-man helmsman
- Ace    -> freckled shirtless pirate wielding fire

---

## Batch 1 — milestone28.png (top) + milestone29.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The crew docks at Whisky Peak and is welcomed as heroes... but it's a trap! Baroque Works agents attack in the middle of the celebration.

BOTTOM — Zoro vs. a hundred Baroque Works agents — then vs. Luffy! Miss All Sunday (Nico Robin) appears and reveals that Vivi is the Princess of Alabasta.
```

<sub>top → milestone28.png · commit 103 · Whisky Peak Arc &nbsp;|&nbsp; bottom → milestone29.png · commit 106 · Whisky Peak Arc</sub>

## Batch 2 — milestone30.png (top) + milestone31.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Mr. 0 is revealed to be the Warlord Crocodile. The crew's new mission: escort Princess Vivi safely back to Alabasta.

BOTTOM — Little Garden: a prehistoric island frozen in time. Two giants, Dorry and Brogy, have been dueling for 100 years over a misunderstanding of honor.
```

<sub>top → milestone30.png · commit 109 · Whisky Peak Arc &nbsp;|&nbsp; bottom → milestone31.png · commit 114 · Little Garden Arc</sub>

## Batch 3 — milestone32.png (top) + milestone33.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Mr. 3 and Miss Goldenweek spring a wax trap to kill the giants and the crew. Sanji calls for help from a Den Den Mushi.

BOTTOM — Giants Dorry and Brogy help the crew escape. Their friendship and honor move even Zoro to silence.
```

<sub>top → milestone32.png · commit 117 · Little Garden Arc &nbsp;|&nbsp; bottom → milestone33.png · commit 120 · Little Garden Arc</sub>

## Batch 4 — milestone34.png (top) + milestone35.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The crew escapes Little Garden — but Nami is gravely ill. They need a doctor, fast.

BOTTOM — Drum Island: a blizzard-covered kingdom abandoned by its ruler. The only doctor left is Kureha, atop the frozen Drum Castle.
```

<sub>top → milestone34.png · commit 123 · Little Garden Arc &nbsp;|&nbsp; bottom → milestone35.png · commit 128 · Drum Island Arc</sub>

## Batch 5 — milestone36.png (top) + milestone37.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy and Sanji carry Nami up the icy mountain. Luffy holds her in his arms the entire climb without complaint.

BOTTOM — Chopper's flashback: Dr. Hiluluk adopted the reindeer shunned by all and lived believing a broken heart can be healed with a smile.
```

<sub>top → milestone36.png · commit 131 · Drum Island Arc &nbsp;|&nbsp; bottom → milestone37.png · commit 134 · Drum Island Arc</sub>

## Batch 6 — milestone38.png (top) + milestone39.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Dr. Hiluluk dies smiling. His final act: making cherry blossoms bloom across the snow of Drum Island.

BOTTOM — The cowardly King Wapol returns. Kureha reveals everything to Chopper: Hiluluk believed in him. His dream can still live.
```

<sub>top → milestone38.png · commit 137 · Drum Island Arc &nbsp;|&nbsp; bottom → milestone39.png · commit 140 · Drum Island Arc</sub>

## Batch 7 — milestone40.png (top) + milestone41.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Tony Tony Chopper joins the crew as their doctor! His dream: to cure any illness in the world.

BOTTOM — Alabasta! The crew lands at Nanohana. The air is dry and the country is at war. Smoker is already on their trail.
```

<sub>top → milestone40.png · commit 143 · Drum Island Arc &nbsp;|&nbsp; bottom → milestone41.png · commit 148 · Alabasta Arc</sub>

## Batch 8 — milestone42.png (top) + milestone43.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy runs into his sworn brother Portgas D. Ace in Alabasta — a brief but electrifying reunion.

BOTTOM — The crew crosses the desert toward Alubarna. The drought is Crocodile's doing — his Dancing Powder is poisoning the land.
```

<sub>top → milestone42.png · commit 151 · Alabasta Arc &nbsp;|&nbsp; bottom → milestone43.png · commit 154 · Alabasta Arc</sub>

## Batch 9 — milestone44.png (top) + milestone45.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Pell, Alabasta's winged guardian, escorts the crew. His loyalty to the kingdom is absolute.

BOTTOM — Crocodile is unmasked as Mr. 0. His plan: ignite civil war and claim the ancient weapon Pluton buried beneath Alabasta.
```

<sub>top → milestone44.png · commit 157 · Alabasta Arc &nbsp;|&nbsp; bottom → milestone45.png · commit 160 · Alabasta Arc</sub>

## Batch 10 — milestone46.png (top) + milestone47.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The crew splits up. Each member faces a Baroque Works officer to clear the path to Luffy's final showdown.

BOTTOM — Luffy vs. Crocodile — Round 1. Crocodile poisons Luffy and drops him into a pit of quicksand. It seems like the end.
```

<sub>top → milestone46.png · commit 163 · Alabasta Arc &nbsp;|&nbsp; bottom → milestone47.png · commit 166 · Alabasta Arc</sub>

## Batch 11 — milestone48.png (top) + milestone49.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy vs. Crocodile — Round 2. Blood neutralizes sand. Luffy fights through poison without stopping.

BOTTOM — LUFFY DEFEATS CROCODILE! Rain falls on Alabasta for the first time in years. The kingdom is saved.
```

<sub>top → milestone48.png · commit 169 · Alabasta Arc &nbsp;|&nbsp; bottom → milestone49.png · commit 172 · Alabasta Arc</sub>

## Batch 12 — milestone50.png (top) + milestone51.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Pell carries the bomb out of the city and detonates it in the sky, sacrificing himself. Alabasta survives.

BOTTOM — The armies stop fighting. Vivi appears before her people. The civil war is over.
```

<sub>top → milestone50.png · commit 175 · Alabasta Arc &nbsp;|&nbsp; bottom → milestone51.png · commit 178 · Alabasta Arc</sub>

## Batch 13 — milestone52.png (top) + milestone53.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Robin saves Vivi from Crocodile's last strike — a mysterious act that hints at her hidden past.

BOTTOM — The crew recovers. Marines close in. The group flees through Alabasta's underground tombs.
```

<sub>top → milestone52.png · commit 181 · Alabasta Arc &nbsp;|&nbsp; bottom → milestone53.png · commit 184 · Alabasta Arc</sub>

## Batch 14 — milestone54.png (top) + milestone55.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Farewell to Vivi on the deck of the Going Merry. She weeps, wanting to come — but her duty is to stay. The crew's silence says everything.

BOTTOM — Nico Robin boards the ship quietly. "May I join you?" — The last words of the arc. She is a Straw Hat.
```

<sub>top → milestone54.png · commit 187 · Alabasta Arc &nbsp;|&nbsp; bottom → milestone55.png · commit 190 · Alabasta Arc</sub>

## Batch 15 — milestone56.png (top) + milestone57.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Jaya — Mock Town. A port of brutal pirates. Luffy and Zoro are mocked by Bellamy, the pirate of the new age.

BOTTOM — "There are no more dreams" — Bellamy humiliates Luffy in front of everyone. Luffy doesn't respond. His eyes say everything.
```

<sub>top → milestone56.png · commit 203 · Jaya Arc &nbsp;|&nbsp; bottom → milestone57.png · commit 206 · Jaya Arc</sub>

## Batch 16 — milestone58.png (top) + milestone59.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy takes down Bellamy in a single punch to defend the honor of Montblanc Cricket. End of story.

BOTTOM — Montblanc Cricket, heir to the "liar" Noland, prepares the crew for the Knock-Up Stream. Skypiea is real.
```

<sub>top → milestone58.png · commit 209 · Jaya Arc &nbsp;|&nbsp; bottom → milestone59.png · commit 212 · Jaya Arc</sub>

## Batch 17 — milestone60.png (top) + milestone61.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Knock-Up Stream! A colossal underwater geyser launches the Going Merry straight into the sky in seconds.

BOTTOM — Skypiea — an island in the clouds, white and silent. The sky is a world of its own. But the crew is not welcome.
```

<sub>top → milestone60.png · commit 215 · Jaya Arc &nbsp;|&nbsp; bottom → milestone61.png · commit 220 · Skypiea Arc</sub>

## Batch 18 — milestone62.png (top) + milestone63.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Skypieans speak of "tribute" and Enel, their absolute God. Those who disobey are struck by lightning.

BOTTOM — Upper Yard: ruins of Shandora, the golden city buried in the clouds 400 years ago. Robin senses the Poneglyph's call.
```

<sub>top → milestone62.png · commit 223 · Skypiea Arc &nbsp;|&nbsp; bottom → milestone63.png · commit 226 · Skypiea Arc</sub>

## Batch 19 — milestone64.png (top) + milestone65.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Enel reveals his Mantra: he can hear every thought and heartbeat across all of Skypiea.

BOTTOM — Flashback: the story of Noland and King Calgara. 400 years ago, two friends parted without getting to say goodbye.
```

<sub>top → milestone64.png · commit 229 · Skypiea Arc &nbsp;|&nbsp; bottom → milestone65.png · commit 232 · Skypiea Arc</sub>

## Batch 20 — milestone66.png (top) + milestone67.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Dorry and Brogy once heard the bell of Shandora. They have been waiting for it ever since. It hasn't rung in 400 years.

BOTTOM — The Shandians attack Upper Yard to reclaim their ancestral land. The war in the sky ignites.
```

<sub>top → milestone66.png · commit 235 · Skypiea Arc &nbsp;|&nbsp; bottom → milestone67.png · commit 238 · Skypiea Arc</sub>

## Batch 21 — milestone68.png (top) + milestone69.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Enel's game: he eliminates fighters one by one with lightning, toying with their lives as if it were sport.

BOTTOM — Enel reveals Plan Raigo: destroy all of Skypiea with a colossal lightning bolt and leave with his followers.
```

<sub>top → milestone68.png · commit 241 · Skypiea Arc &nbsp;|&nbsp; bottom → milestone69.png · commit 244 · Skypiea Arc</sub>

## Batch 22 — milestone70.png (top) + milestone71.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Gan Fall, the former God of Skypiea, fights to protect his people. Zoro and Robin try to hold back the inevitable.

BOTTOM — Luffy vs. Enel — Round 1! Enel's lightning is useless against Luffy's rubber body. Enel is stunned.
```

<sub>top → milestone70.png · commit 247 · Skypiea Arc &nbsp;|&nbsp; bottom → milestone71.png · commit 250 · Skypiea Arc</sub>

## Batch 23 — milestone72.png (top) + milestone73.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Enel transforms his staff into a golden serpent and uses cunning to ground Luffy. But Luffy doesn't stop.

BOTTOM — Luffy is trapped inside molten gold. Nami faces Enel alone while the great bell looms ahead.
```

<sub>top → milestone72.png · commit 253 · Skypiea Arc &nbsp;|&nbsp; bottom → milestone73.png · commit 256 · Skypiea Arc</sub>

## Batch 24 — milestone74.png (top) + milestone75.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy breaks free from the gold block, becoming a living hammer. The impact with Enel is devastating.

BOTTOM — LUFFY DEFEATS ENEL! The Golden Bell of Shandora rings for the first time in 400 years. The whole world hears it. Noland was right.
```

<sub>top → milestone74.png · commit 259 · Skypiea Arc &nbsp;|&nbsp; bottom → milestone75.png · commit 262 · Skypiea Arc</sub>

## Batch 25 — milestone76.png (top) + milestone77.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The crew descends back to the Blue Sea loaded with gold. The Shandians and Skypieans make peace. The sky can smile again.

BOTTOM — Long Ring Long Land — a bizarre archipelago. Foxy the Silver Fox challenges the crew to the Davy Back Fight: losers hand over a crewmate.
```

<sub>top → milestone76.png · commit 265 · Skypiea Arc &nbsp;|&nbsp; bottom → milestone77.png · commit 278 · Long Ring Long Land Arc</sub>

## Batch 26 — milestone78.png (top) + milestone79.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Davy Back Fight is full of cheating. Foxy steals Chopper. Luffy fights to win him back.

BOTTOM — Luffy defeats Foxy! The crew is whole again — but something far more dangerous approaches.
```

<sub>top → milestone78.png · commit 281 · Long Ring Long Land Arc &nbsp;|&nbsp; bottom → milestone79.png · commit 284 · Long Ring Long Land Arc</sub>

## Batch 27 — milestone80.png (top) + milestone81.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Admiral Aokiji freezes the entire ocean around them. Robin freezes in fear — she knows him. He is from the era of Ohara.

BOTTOM — Aokiji defeats the entire crew in seconds and lets Luffy go with a warning: Robin will only bring misfortune.
```

<sub>top → milestone80.png · commit 287 · Long Ring Long Land Arc &nbsp;|&nbsp; bottom → milestone81.png · commit 290 · Long Ring Long Land Arc</sub>

## Batch 28 — milestone82.png (top) + milestone83.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Water 7 — the city of water. Canals, bridges, shipyards. The Going Merry is in desperate need of repairs.

BOTTOM — The master shipwrights of Galley-La examine the Going Merry. The verdict: she is beyond repair. The ship is dying.
```

<sub>top → milestone82.png · commit 295 · Water 7 Arc &nbsp;|&nbsp; bottom → milestone83.png · commit 298 · Water 7 Arc</sub>

## Batch 29 — milestone84.png (top) + milestone85.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Franky Family robs the crew's repair money. Luffy and the others chase them through the water city streets.

BOTTOM — Robin disappears without a word. A coded message: "Don't come looking for me." The crew is torn apart.
```

<sub>top → milestone84.png · commit 301 · Water 7 Arc &nbsp;|&nbsp; bottom → milestone85.png · commit 304 · Water 7 Arc</sub>

## Batch 30 — milestone86.png (top) + milestone87.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Usopp leaves the crew after a brutal argument with Luffy over the Going Merry. The most painful break of the journey.

BOTTOM — Head shipwright Iceberg is found nearly dead. Robin is accused. CP9 lurks in the shadows.
```

<sub>top → milestone86.png · commit 307 · Water 7 Arc &nbsp;|&nbsp; bottom → milestone87.png · commit 310 · Water 7 Arc</sub>

## Batch 31 — milestone88.png (top) + milestone89.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The crew kidnaps Franky as leverage. He builds ships — and he is the key to understanding who is behind everything.

BOTTOM — CP9 unmasked! Kaku and Califa are World Government assassins — they have been infiltrating Water 7 for years.
```

<sub>top → milestone88.png · commit 313 · Water 7 Arc &nbsp;|&nbsp; bottom → milestone89.png · commit 316 · Water 7 Arc</sub>

## Batch 32 — milestone90.png (top) + milestone91.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The truth about Robin: she is the only survivor of Ohara. The Government has wanted her dead since she was 8 years old.

BOTTOM — Robin boards the Puffing Tom toward Enies Lobby. The crew mounts the Sea Train and chases her through rain and darkness.
```

<sub>top → milestone90.png · commit 319 · Water 7 Arc &nbsp;|&nbsp; bottom → milestone91.png · commit 322 · Water 7 Arc</sub>

## Batch 33 — milestone92.png (top) + milestone93.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — On the train, Sanji fights Blueno of CP9. The first taste of the Six Powers (Rokushiki).

BOTTOM — The Sea Train flies over the night ocean. Franky joins the crew. Usopp rides in disguise.
```

<sub>top → milestone92.png · commit 325 · Water 7 Arc &nbsp;|&nbsp; bottom → milestone93.png · commit 328 · Water 7 Arc</sub>

## Batch 34 — milestone94.png (top) + milestone95.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Enies Lobby on the horizon — the World Government's judicial fortress. Impossible to storm. The crew will try anyway.

BOTTOM — The assault on Enies Lobby begins! Straw Hats and Franky Family against ten thousand soldiers and CP9.
```

<sub>top → milestone94.png · commit 331 · Water 7 Arc &nbsp;|&nbsp; bottom → milestone95.png · commit 336 · Enies Lobby Arc</sub>

## Batch 35 — milestone96.png (top) + milestone97.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy orders the World Government flag burned. Open war is declared. No one has ever dared this much.

BOTTOM — Robin's past: the destruction of Ohara. Marines burned the library and massacred the scholars. Robin was a child — the only survivor.
```

<sub>top → milestone96.png · commit 339 · Enies Lobby Arc &nbsp;|&nbsp; bottom → milestone97.png · commit 342 · Enies Lobby Arc</sub>

## Batch 36 — milestone98.png (top) + milestone99.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — "I WANT TO LIVE!" Robin screams for the first time in her life. Every wall comes down.

BOTTOM — Luffy activates Gear Second for the first time against Blueno. Speed and power doubled.
```

<sub>top → milestone98.png · commit 345 · Enies Lobby Arc &nbsp;|&nbsp; bottom → milestone99.png · commit 348 · Enies Lobby Arc</sub>

## Batch 37 — milestone100.png (top) + milestone101.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Zoro vs. Kaku — twin swords against a giraffe-Zoan. Asura: the nine-sword demon.

BOTTOM — Sanji vs. Jabra — fire kicks against wolf fangs. "Diable Jambe!" scorches Jabra from the inside.
```

<sub>top → milestone100.png · commit 351 · Enies Lobby Arc &nbsp;|&nbsp; bottom → milestone101.png · commit 354 · Enies Lobby Arc</sub>

## Batch 38 — milestone102.png (top) + milestone103.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Usopp in disguise as "Sniper King" rallies the fighters and pulls Robin back from the Buster Call.

BOTTOM — The Buster Call is activated. Six Marine warships surround Enies Lobby. The countdown begins.
```

<sub>top → milestone102.png · commit 357 · Enies Lobby Arc &nbsp;|&nbsp; bottom → milestone103.png · commit 360 · Enies Lobby Arc</sub>

## Batch 39 — milestone104.png (top) + milestone105.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy vs. Rob Lucci — the hardest fight of his life. Gear Second and Gear Third combined. Lucci is unstoppable.

BOTTOM — Luffy is down. Usopp, as Sniper King, calls out to him: "Get up! You can't lose!" Luffy stands.
```

<sub>top → milestone104.png · commit 363 · Enies Lobby Arc &nbsp;|&nbsp; bottom → milestone105.png · commit 366 · Enies Lobby Arc</sub>

## Batch 40 — milestone106.png (top) + milestone107.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — LUFFY DEFEATS ROB LUCCI! The Marine Buster Call closes in. Robin is free.

BOTTOM — The Going Merry appears out of nowhere to rescue the crew from the Buster Call. The ship's voice answers her captain.
```

<sub>top → milestone106.png · commit 369 · Enies Lobby Arc &nbsp;|&nbsp; bottom → milestone107.png · commit 372 · Enies Lobby Arc</sub>

## Batch 41 — milestone108.png (top) + milestone109.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Out of danger, the Going Merry breaks apart. The crew mourns her as she sinks — a Viking funeral at sea.

BOTTOM — Usopp apologizes before the whole crew. It takes more courage than it looks. He is welcomed back with open arms.
```

<sub>top → milestone108.png · commit 375 · Enies Lobby Arc &nbsp;|&nbsp; bottom → milestone109.png · commit 380 · Post-Enies Lobby Arc</sub>

## Batch 42 — milestone110.png (top) + milestone111.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Robin and Franky officially join the Straw Hats. Nine crew members now sail together.

BOTTOM — The Thousand Sunny is launched! Franky's masterpiece, built from Adam Wood. The crew's new home.
```

<sub>top → milestone110.png · commit 383 · Post-Enies Lobby Arc &nbsp;|&nbsp; bottom → milestone111.png · commit 386 · Post-Enies Lobby Arc</sub>

## Batch 43 — milestone112.png (top) + milestone113.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Florian Triangle: eternal fog, no moon. Ships vanish, distant screams. The Thousand Sunny cannot break free.

BOTTOM — Thriller Bark — a massive ship-island. Zombies everywhere. The master is Gecko Moria, Warlord of the Sea.
```

<sub>top → milestone112.png · commit 399 · Thriller Bark Arc &nbsp;|&nbsp; bottom → milestone113.png · commit 402 · Thriller Bark Arc</sub>

## Batch 44 — milestone114.png (top) + milestone115.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Brook! A living skeleton who plays the violin. He ate the Yomi Yomi no Mi — he died once and waits to see his shadow again.

BOTTOM — Brook's flashback: his crew died of illness, and he waited alone for years among the corpses. His grief is silent and immense.
```

<sub>top → milestone114.png · commit 405 · Thriller Bark Arc &nbsp;|&nbsp; bottom → milestone115.png · commit 408 · Thriller Bark Arc</sub>

## Batch 45 — milestone116.png (top) + milestone117.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Gecko Moria uses the Kage Kage no Mi to steal everyone's shadows. Without a shadow, the crew dies in sunlight.

BOTTOM — Luffy's shadow is placed inside the gigantic corpse Oz — a colossus that mimics all of Luffy's moves.
```

<sub>top → milestone116.png · commit 411 · Thriller Bark Arc &nbsp;|&nbsp; bottom → milestone117.png · commit 414 · Thriller Bark Arc</sub>

## Batch 46 — milestone118.png (top) + milestone119.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Perona's Negative Hollows demoralize the entire crew. Only Usopp is immune — because he is already negative.

BOTTOM — The crew reclaims shadows one by one, defeating each zombie. Oz is the final obstacle.
```

<sub>top → milestone118.png · commit 417 · Thriller Bark Arc &nbsp;|&nbsp; bottom → milestone119.png · commit 420 · Thriller Bark Arc</sub>

## Batch 47 — milestone120.png (top) + milestone121.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Nightmare Luffy — with 100 shadows inside his body, Luffy becomes a black giant and fires a Gum-Gum Pistol alone.

BOTTOM — LUFFY DEFEATS GECKO MORIA! The shadows return to their rightful owners. Thriller Bark's dawn is safe.
```

<sub>top → milestone120.png · commit 423 · Thriller Bark Arc &nbsp;|&nbsp; bottom → milestone121.png · commit 426 · Thriller Bark Arc</sub>

## Batch 48 — milestone122.png (top) + milestone123.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Bartholomew Kuma arrives on behalf of the Government. Zoro offers to die in Luffy's place. Nothing happened, right?

BOTTOM — Brook joins the Straw Hats as musician! His dream: to return to the giant whale Laboon who is still waiting.
```

<sub>top → milestone122.png · commit 429 · Thriller Bark Arc &nbsp;|&nbsp; bottom → milestone123.png · commit 432 · Thriller Bark Arc</sub>

## Batch 49 — milestone124.png (top) + milestone125.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Sabaody Archipelago — the bubble archipelago near the Red Line. The Eleven Supernovas cross paths for the first time.

BOTTOM — The Supernovas: Law, Kid, Hawkins, Drake, Apoo, Bonney, Urouge, Bege, Killer. All headed to the Grand Line.
```

<sub>top → milestone124.png · commit 445 · Sabaody Archipelago Arc &nbsp;|&nbsp; bottom → milestone125.png · commit 448 · Sabaody Archipelago Arc</sub>

## Batch 50 — milestone126.png (top) + milestone127.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — At a slave auction, Luffy sees a Fish-Man for sale — and punches a Celestial Dragon without hesitation.

BOTTOM — Admiral Kizaru arrives. The Pacifista attacks. Rayleigh, the Dark King, appears to cover the retreat.
```

<sub>top → milestone126.png · commit 451 · Sabaody Archipelago Arc &nbsp;|&nbsp; bottom → milestone127.png · commit 454 · Sabaody Archipelago Arc</sub>

## Batch 51 — milestone128.png (top) + milestone129.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Bartholomew Kuma scatters the entire crew using his paw powers. One by one, they vanish in seconds.

BOTTOM — Luffy is alone at Sabaody. No crewmates. For the first time in his life, he feels powerless.
```

<sub>top → milestone128.png · commit 457 · Sabaody Archipelago Arc &nbsp;|&nbsp; bottom → milestone129.png · commit 460 · Sabaody Archipelago Arc</sub>

## Batch 52 — milestone130.png (top) + milestone131.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Amazon Lily — an island of warrior women. Luffy crashes in by accident. Empress Boa Hancock sentences him to death.

BOTTOM — Luffy is immune to Hancock's powers — he's not attracted to her, he's just worried about his crew. Hancock is baffled.
```

<sub>top → milestone130.png · commit 465 · Amazon Lily Arc &nbsp;|&nbsp; bottom → milestone131.png · commit 468 · Amazon Lily Arc</sub>

## Batch 53 — milestone132.png (top) + milestone133.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy learns Ace will be executed at Marineford. Hancock helps him. Next stop: Impel Down.

BOTTOM — Impel Down — the world's most secure underwater prison. Six levels, each a different nightmare. Luffy breaks in illegally.
```

<sub>top → milestone132.png · commit 471 · Amazon Lily Arc &nbsp;|&nbsp; bottom → milestone133.png · commit 476 · Impel Down Arc</sub>

## Batch 54 — milestone134.png (top) + milestone135.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy frees Buggy and Mr. 3. Finds Bon Clay on Level 3. Every improvised ally counts.

BOTTOM — Level 4 — the Devil's Flames. Magellan poisons Luffy with the Hydra. Luffy hovers at the edge of death.
```

<sub>top → milestone134.png · commit 479 · Impel Down Arc &nbsp;|&nbsp; bottom → milestone135.png · commit 482 · Impel Down Arc</sub>

## Batch 55 — milestone136.png (top) + milestone137.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Ivankov saves Luffy with hormone therapy. Luffy wakes after 20 hours of agony — with new resistance to poison.

BOTTOM — Luffy frees Jinbe and Crocodile. An impossible alliance for an impossible escape. Ace has already been moved to Marineford.
```

<sub>top → milestone136.png · commit 485 · Impel Down Arc &nbsp;|&nbsp; bottom → milestone137.png · commit 488 · Impel Down Arc</sub>

## Batch 56 — milestone138.png (top) + milestone139.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The breakout crew smashes through every level toward the exit. Magellan pursues them. Time is running out.

BOTTOM — MARINEFORD — The War of the Best erupts. Whitebeard's fleet against the full Marine Headquarters. The world holds its breath.
```

<sub>top → milestone138.png · commit 490 · Impel Down Arc &nbsp;|&nbsp; bottom → milestone139.png · commit 495 · Marineford Arc</sub>

## Batch 57 — milestone140.png (top) + milestone141.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Whitebeard splits the sea with one hand. The Marines stand motionless before the impossible.

BOTTOM — Luffy arrives at Marineford on an improvised raft. The Impel Down escapees charge into the chaos.
```

<sub>top → milestone140.png · commit 498 · Marineford Arc &nbsp;|&nbsp; bottom → milestone141.png · commit 501 · Marineford Arc</sub>

## Batch 58 — milestone142.png (top) + milestone143.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Whitebeard is betrayed by Squard. He keeps fighting — for his sons, not for himself.

BOTTOM — Luffy reaches the scaffold. Ace is freed... one moment of hope. Then Admiral Akainu strikes.
```

<sub>top → milestone142.png · commit 504 · Marineford Arc &nbsp;|&nbsp; bottom → milestone143.png · commit 507 · Marineford Arc</sub>

## Batch 59 — milestone144.png (top) + milestone145.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — ACE DIES shielding Luffy from Akainu's magma fist. Luffy collapses. The void is total.

BOTTOM — Whitebeard's final stand. He dies upright with 267 sword wounds and 152 gunshots. "The One Piece is real!" He never showed his back.
```

<sub>top → milestone144.png · commit 510 · Marineford Arc &nbsp;|&nbsp; bottom → milestone145.png · commit 513 · Marineford Arc</sub>

## Batch 60 — milestone146.png (top) + milestone147.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Shanks and the Red Hair Pirates arrive. The war ends instantly. The era of Whitebeard is over.

BOTTOM — Luffy awakens on the island of women. The void left by Ace is unbearable. Jinbe holds him together.
```

<sub>top → milestone146.png · commit 516 · Marineford Arc &nbsp;|&nbsp; bottom → milestone147.png · commit 521 · Post-War Arc</sub>

## Batch 61 — milestone148.png (top) + milestone149.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy returns to Marineford with Jinbe. He rings the Ox Bell 16 times — a coded message to his crew: wait two years.

BOTTOM — The newspapers carry the message. The crew understands. Each one prepares, trains, and waits.
```

<sub>top → milestone148.png · commit 524 · Post-War Arc &nbsp;|&nbsp; bottom → milestone149.png · commit 527 · Post-War Arc</sub>

## Batch 62 — milestone150.png (top) + milestone151.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — THE 2-YEAR TIME SKIP. The Straw Hats scatter across the world. Luffy trains with Rayleigh on Rusukaina Island. The world changes.

BOTTOM — Two years later — the entire Straw Hat crew reunites at Sabaody. Everyone has changed. Everyone has grown.
```

<sub>top → milestone150.png · commit 530 · Post-War Arc &nbsp;|&nbsp; bottom → milestone151.png · commit 543 · Return to Sabaody Arc</sub>

## Batch 63 — milestone152.png (top) + milestone153.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy defeats a Pacifista with a single punch — where before it took the whole crew. The power gap is unmistakable.

BOTTOM — The Thousand Sunny dives into the ocean coated in a bubble. Fish-Man Island awaits at 10,000 meters depth.
```

<sub>top → milestone152.png · commit 546 · Return to Sabaody Arc &nbsp;|&nbsp; bottom → milestone153.png · commit 551 · Fish-Man Island Arc</sub>

## Batch 64 — milestone154.png (top) + milestone155.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Kraken blocks the descent. Luffy defeats it and names it Surume. A giant squid as a pet.

BOTTOM — Fish-Man Island — a beautiful underwater kingdom full of light and coral. But tension with humans runs deep.
```

<sub>top → milestone154.png · commit 554 · Fish-Man Island Arc &nbsp;|&nbsp; bottom → milestone155.png · commit 557 · Fish-Man Island Arc</sub>

## Batch 65 — milestone156.png (top) + milestone157.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Princess Shirahoshi — the largest creature in the ocean, able to summon Sea Kings. She is Poseidon.

BOTTOM — Hody Jones and the New Fish-Man Pirates want to destroy humans and conquer the kingdom. They take Energy Steroids.
```

<sub>top → milestone156.png · commit 560 · Fish-Man Island Arc &nbsp;|&nbsp; bottom → milestone157.png · commit 563 · Fish-Man Island Arc</sub>

## Batch 66 — milestone158.png (top) + milestone159.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Zoro vs. Hody Jones. Luffy vs. Hody Jones. The post-time-skip crew is on another level entirely.

BOTTOM — Luffy uses Red Hawk — a Gear Second fist coated in Armament Haki, blazing even underwater.
```

<sub>top → milestone158.png · commit 566 · Fish-Man Island Arc &nbsp;|&nbsp; bottom → milestone159.png · commit 569 · Fish-Man Island Arc</sub>

## Batch 67 — milestone160.png (top) + milestone161.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Hody Jones takes a massive dose of Energy Steroids to survive. His body is consuming itself.

BOTTOM — LUFFY DEFEATS HODY JONES! Fish-Man Island is saved. Luffy vows to fight Big Mom, its fearsome protector.
```

<sub>top → milestone160.png · commit 572 · Fish-Man Island Arc &nbsp;|&nbsp; bottom → milestone161.png · commit 575 · Fish-Man Island Arc</sub>

## Batch 68 — milestone162.png (top) + milestone163.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The story of Otohime and her dream of coexistence between humans and fish-men. Fisher Tiger is the forgotten true hero.

BOTTOM — The crew leaves Fish-Man Island for the New World. Jinbe stays behind to settle things, promising to join later.
```

<sub>top → milestone162.png · commit 578 · Fish-Man Island Arc &nbsp;|&nbsp; bottom → milestone163.png · commit 581 · Fish-Man Island Arc</sub>

## Batch 69 — milestone164.png (top) + milestone165.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Punk Hazard — a forbidden island, half fire and half ice, aftermath of a failed Vegapunk and Caesar experiment.

BOTTOM — Caesar Clown experiments on kidnapped children with the Shinokuni gas. A war criminal protected by Doflamingo.
```

<sub>top → milestone164.png · commit 594 · Punk Hazard Arc &nbsp;|&nbsp; bottom → milestone165.png · commit 597 · Punk Hazard Arc</sub>

## Batch 70 — milestone166.png (top) + milestone167.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Trafalgar Law proposes a pirate alliance with Luffy. Objective: bring down one of the Emperors — Kaido.

BOTTOM — Law swaps the crew's bodies with his Ope Ope no Mi. Total chaos — and a lot of laughs.
```

<sub>top → milestone166.png · commit 600 · Punk Hazard Arc &nbsp;|&nbsp; bottom → milestone167.png · commit 603 · Punk Hazard Arc</sub>

## Batch 71 — milestone168.png (top) + milestone169.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Nami-in-Sanji's body discovers giant children held prisoner. Caesar drugged them to keep control.

BOTTOM — Shinokuni gas is released across the island. Anyone touched crystallizes. The race for survival begins.
```

<sub>top → milestone168.png · commit 606 · Punk Hazard Arc &nbsp;|&nbsp; bottom → milestone169.png · commit 609 · Punk Hazard Arc</sub>

## Batch 72 — milestone170.png (top) + milestone171.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The great escape: the crew, children, and prisoners must get off Punk Hazard before the gas reaches them.

BOTTOM — Luffy vs. Caesar Clown — Round 1. Caesar is immune to gas. But Luffy uses Haki to strike the body directly.
```

<sub>top → milestone170.png · commit 612 · Punk Hazard Arc &nbsp;|&nbsp; bottom → milestone171.png · commit 615 · Punk Hazard Arc</sub>

## Batch 73 — milestone172.png (top) + milestone173.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — LUFFY DEFEATS CAESAR CLOWN! The SAD factory is destroyed. One of Kaido's key resources is cut off.

BOTTOM — Vergo, the traitorous Marine, is exposed and defeated by Law. Doflamingo's network inside the government begins to crack.
```

<sub>top → milestone172.png · commit 618 · Punk Hazard Arc &nbsp;|&nbsp; bottom → milestone173.png · commit 621 · Punk Hazard Arc</sub>

## Batch 74 — milestone174.png (top) + milestone175.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — A grand coalition forms: Straw Hats, Law, samurai of Wano, rescued children. Destination: Dressrosa.

BOTTOM — Dressrosa — a colorful kingdom of passion, flamenco, and gladiators. But the streets are full of living "toys".
```

<sub>top → milestone174.png · commit 624 · Punk Hazard Arc &nbsp;|&nbsp; bottom → milestone175.png · commit 629 · Dressrosa Arc</sub>

## Batch 75 — milestone176.png (top) + milestone177.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Corrida Colosseum! A tournament to win Ace's Devil Fruit. Luffy enters as "Lucy" wearing a gladiator helmet.

BOTTOM — Donquixote Doflamingo rules Dressrosa from his palace. His true nature: a renegade Celestial Dragon.
```

<sub>top → milestone176.png · commit 632 · Dressrosa Arc &nbsp;|&nbsp; bottom → milestone177.png · commit 635 · Dressrosa Arc</sub>

## Batch 76 — milestone178.png (top) + milestone179.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The truth about the toys: they are humans transformed by Sugar's Hobi Hobi no Mi. No one remembers them.

BOTTOM — The SMILE factory: Doflamingo manufactures artificial fruits to turn Kaido's soldiers into Zoan-type weapons.
```

<sub>top → milestone178.png · commit 638 · Dressrosa Arc &nbsp;|&nbsp; bottom → milestone179.png · commit 641 · Dressrosa Arc</sub>

## Batch 77 — milestone180.png (top) + milestone181.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Sabo is alive! Ace's brother appears at the Colosseum and eats the Mera Mera no Mi before everyone's eyes.

BOTTOM — Usopp fights Sugar to free the toys. His "monster" face terrifies her — the curse breaks. The toys turn human again.
```

<sub>top → milestone180.png · commit 644 · Dressrosa Arc &nbsp;|&nbsp; bottom → milestone181.png · commit 647 · Dressrosa Arc</sub>

## Batch 78 — milestone182.png (top) + milestone183.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — GOD USOPP! The Tontatta dwarves proclaim him a deity. Usopp cries — he didn't want to fight — but he won.

BOTTOM — The toys reclaim their humanity and their memories. Doflamingo's own soldiers turn against him. The palace crumbles.
```

<sub>top → milestone182.png · commit 650 · Dressrosa Arc &nbsp;|&nbsp; bottom → milestone183.png · commit 653 · Dressrosa Arc</sub>

## Batch 79 — milestone184.png (top) + milestone185.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Birdcage descends on Dressrosa. Invisible, lethal strings slowly closing in. Doflamingo will trap everyone.

BOTTOM — The story of Riku and Violet: how Doflamingo seized power ten years ago, using the kingdom against itself.
```

<sub>top → milestone184.png · commit 656 · Dressrosa Arc &nbsp;|&nbsp; bottom → milestone185.png · commit 659 · Dressrosa Arc</sub>

## Batch 80 — milestone186.png (top) + milestone187.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy, Law, and the survivors race toward the palace. Every moment, the Birdcage tightens.

BOTTOM — Law vs. Doflamingo — Round 1. Law uses "Mes" to extract Doflamingo's heart... but he survives.
```

<sub>top → milestone186.png · commit 662 · Dressrosa Arc &nbsp;|&nbsp; bottom → milestone187.png · commit 665 · Dressrosa Arc</sub>

## Batch 81 — milestone188.png (top) + milestone189.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — GEAR FOURTH — BOUNDMAN! Luffy coats his body in expanded Armament Haki. A transformation that transcends normal.

BOTTOM — Luffy vs. Doflamingo — the reckoning. Gum-Gum King Kong Gun against the web of strings.
```

<sub>top → milestone188.png · commit 668 · Dressrosa Arc &nbsp;|&nbsp; bottom → milestone189.png · commit 671 · Dressrosa Arc</sub>

## Batch 82 — milestone190.png (top) + milestone191.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — LUFFY DEFEATS DOFLAMINGO! The Birdcage dissolves. Dressrosa is free. Bounty: 500,000,000 Berry.

BOTTOM — The people of Dressrosa chase the crew to arrest them... then stop. Just to thank them. Tears everywhere.
```

<sub>top → milestone190.png · commit 674 · Dressrosa Arc &nbsp;|&nbsp; bottom → milestone191.png · commit 677 · Dressrosa Arc</sub>

## Batch 83 — milestone192.png (top) + milestone193.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Straw Hat Grand Fleet — seven crews with 5,640 warriors pledge eternal loyalty to Luffy after Dressrosa.

BOTTOM — Rebecca finds her father Kyros. The tin soldier who couldn't embrace his daughter for 10 years can finally hold her.
```

<sub>top → milestone192.png · commit 680 · Dressrosa Arc &nbsp;|&nbsp; bottom → milestone193.png · commit 683 · Dressrosa Arc</sub>

## Batch 84 — milestone194.png (top) + milestone195.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Sabo faces Admiral Fujitora to cover the crew's retreat. Another impossible fight that buys precious time.

BOTTOM — The reunited crew leaves Dressrosa. Zou is next — and an even greater war is drawing near.
```

<sub>top → milestone194.png · commit 686 · Dressrosa Arc &nbsp;|&nbsp; bottom → milestone195.png · commit 689 · Dressrosa Arc</sub>

## Batch 85 — milestone196.png (top) + milestone197.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The news of Dressrosa spreads across the world. Luffy's name echoes everywhere. Kaido takes notice.

BOTTOM — The Straw Hat–Law alliance is solidified. The strategy against Kaido takes shape — Wano is the final destination.
```

<sub>top → milestone196.png · commit 692 · Dressrosa Arc &nbsp;|&nbsp; bottom → milestone197.png · commit 695 · Dressrosa Arc</sub>

## Batch 86 — milestone198.png (top) + milestone199.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Law's flashback: the kingdom of Flevance and the white disease. Donquixote Rosinante was his anchor. He loved him as a father.

BOTTOM — Doflamingo is delivered to the Marines. A Warlord in chains — the political shockwave changes the balance of the world.
```

<sub>top → milestone198.png · commit 698 · Dressrosa Arc &nbsp;|&nbsp; bottom → milestone199.png · commit 700 · Dressrosa Arc</sub>

## Batch 87 — milestone200.png (top) + milestone201.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Zou — a living island on the back of Zunesha, a millennial elephant that has walked the ocean for 1,000 years.

BOTTOM — The Minks — half-human, half-animal warriors. Enemies of Kaido's Jack, who devastated the island searching for samurai Raizo.
```

<sub>top → milestone200.png · commit 713 · Zou Arc &nbsp;|&nbsp; bottom → milestone201.png · commit 716 · Zou Arc</sub>

## Batch 88 — milestone202.png (top) + milestone203.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The samurai of Wano: Kin'emon, Kanjuro, Raizo. The Kozuki clan and its connection to the Poneglyphs.

BOTTOM — The Road Poneglyphs — four stones scattered across the world. Only those who find all four can chart the route to Laugh Tale.
```

<sub>top → milestone202.png · commit 719 · Zou Arc &nbsp;|&nbsp; bottom → milestone203.png · commit 722 · Zou Arc</sub>

## Batch 89 — milestone204.png (top) + milestone205.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Sanji's note: he's been forced to return to his biological family, the Vinsmoke family of Germa 66. He doesn't want to be saved.

BOTTOM — Kaido arrives on Zou — no, it's just Jack. But the threat of Kaido as an Emperor is becoming very real.
```

<sub>top → milestone204.png · commit 725 · Zou Arc &nbsp;|&nbsp; bottom → milestone205.png · commit 728 · Zou Arc</sub>

## Batch 90 — milestone206.png (top) + milestone207.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Whole Cake Island — Big Mom's territory. An island made of food, sugar houses, chocolate trees. Beautiful and terrifying.

BOTTOM — The Homies — creatures animated by souls stolen by Big Mom's Soru Soru no Mi. Everything on the island is alive and obeys.
```

<sub>top → milestone206.png · commit 733 · Whole Cake Island Arc &nbsp;|&nbsp; bottom → milestone207.png · commit 736 · Whole Cake Island Arc</sub>

## Batch 91 — milestone208.png (top) + milestone209.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The forced wedding between Sanji and Pudding: Big Mom planned to eliminate the Vinsmoke family during the ceremony.

BOTTOM — The Vinsmoke story: Germa 66, the nomadic scientific kingdom. Judge genetically enhanced his children — all except Sanji.
```

<sub>top → milestone208.png · commit 739 · Whole Cake Island Arc &nbsp;|&nbsp; bottom → milestone209.png · commit 742 · Whole Cake Island Arc</sub>

## Batch 92 — milestone210.png (top) + milestone211.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Sanji tells Luffy to leave and strikes him. But his hands are trembling — he doesn't want to do this. Luffy waits, absorbing every blow.

BOTTOM — Nami wields Zeus — Big Mom's own thundercloud — against Big Mom herself. A moment of total anarchic brilliance.
```

<sub>top → milestone210.png · commit 745 · Whole Cake Island Arc &nbsp;|&nbsp; bottom → milestone211.png · commit 748 · Whole Cake Island Arc</sub>

## Batch 93 — milestone212.png (top) + milestone213.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Pudding reveals her third eye and her true intentions. But something in her wavers when she sees Sanji's smile.

BOTTOM — Brook copies the Road Poneglyph inside Big Mom's Castle — alone, at night. Skeleton OP.
```

<sub>top → milestone212.png · commit 751 · Whole Cake Island Arc &nbsp;|&nbsp; bottom → milestone213.png · commit 754 · Whole Cake Island Arc</sub>

## Batch 94 — milestone214.png (top) + milestone215.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Pedro sacrifices himself, detonating a bomb to stop Baron Tamago. "My life is already well spent."

BOTTOM — Luffy vs. Katakuri in the Mirro-World — a mirror dimension. Katakuri sees the future with advanced Observation Haki.
```

<sub>top → milestone214.png · commit 757 · Whole Cake Island Arc &nbsp;|&nbsp; bottom → milestone215.png · commit 760 · Whole Cake Island Arc</sub>

## Batch 95 — milestone216.png (top) + milestone217.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy realizes: to beat Katakuri he must also see the future. He begins training in the middle of the fight.

BOTTOM — Luffy opens his eyes — he can see slightly into the future. For the first time he dodges Katakuri's attacks.
```

<sub>top → milestone216.png · commit 763 · Whole Cake Island Arc &nbsp;|&nbsp; bottom → milestone217.png · commit 766 · Whole Cake Island Arc</sub>

## Batch 96 — milestone218.png (top) + milestone219.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — LUFFY DEFEATS KATAKURI! He scars Katakuri's cheek — mirroring what Katakuri had done to him. Mutual respect.

BOTTOM — The wedding ceremony collapses. Big Mom goes on a Yonko Rampage — she must have her wedding cake at any cost.
```

<sub>top → milestone218.png · commit 769 · Whole Cake Island Arc &nbsp;|&nbsp; bottom → milestone219.png · commit 772 · Whole Cake Island Arc</sub>

## Batch 97 — milestone220.png (top) + milestone221.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Sanji bakes the wedding cake for Big Mom while the crew escapes. The only weapon against her.

BOTTOM — A frantic escape — Big Mom chases the Thousand Sunny on Prometheus. Jinbe holds the helm with everything he has.
```

<sub>top → milestone220.png · commit 775 · Whole Cake Island Arc &nbsp;|&nbsp; bottom → milestone221.png · commit 778 · Whole Cake Island Arc</sub>

## Batch 98 — milestone222.png (top) + milestone223.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Jinbe officially joins the crew as helmsman! He has been waiting for this moment since Marineford.

BOTTOM — Sanji cooks a meal for Luffy who hasn't eaten in days. "As long as I cook for you, your life belongs to me."
```

<sub>top → milestone222.png · commit 781 · Whole Cake Island Arc &nbsp;|&nbsp; bottom → milestone223.png · commit 784 · Whole Cake Island Arc</sub>

## Batch 99 — milestone224.png (top) + milestone225.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The crew leaves Big Mom's territory. Sanji is back. All Road Poneglyphs have been copied. Destination: Wano.

BOTTOM — Wano Country — the closed samurai nation. Kaido and Orochi have oppressed the people for twenty years.
```

<sub>top → milestone224.png · commit 787 · Whole Cake Island Arc &nbsp;|&nbsp; bottom → milestone225.png · commit 800 · Wano Country Arc</sub>

## Batch 100 — milestone226.png (top) + milestone227.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The crew splits and infiltrates: Luffy works in a mine, Nami sells kimonos, Zoro wanders as a ronin.

BOTTOM — Wano has lost its beauty — poisoned rivers, barren land, starving people. Kaido has ruined everything.
```

<sub>top → milestone226.png · commit 803 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone227.png · commit 806 · Wano Country Arc</sub>

## Batch 101 — milestone228.png (top) + milestone229.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The port of Oihara — heart of the resistance. Samurai loyal to the Kozuki clan organize in secret.

BOTTOM — Luffy is captured and thrown into Udon Prison along with hundreds of inmates. Kaido wants to break his will.
```

<sub>top → milestone228.png · commit 809 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone229.png · commit 812 · Wano Country Arc</sub>

## Batch 102 — milestone230.png (top) + milestone231.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy trains with Hyogoro the Flower — the yakuza boss who knows the true Ryou (Wano's advanced Armament Haki).

BOTTOM — Luffy learns to project Armament Haki outside his body to strike from within. A massive qualitative leap.
```

<sub>top → milestone230.png · commit 815 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone231.png · commit 818 · Wano Country Arc</sub>

## Batch 103 — milestone232.png (top) + milestone233.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Yamato, Kaido's child, sides with the resistance. They want to be Kozuki Oden and open Wano's borders.

BOTTOM — THE FLASHBACK OF KOZUKI ODEN — the legendary warrior who sailed with Whitebeard, then with Roger.
```

<sub>top → milestone232.png · commit 821 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone233.png · commit 824 · Wano Country Arc</sub>

## Batch 104 — milestone234.png (top) + milestone235.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Oden on the Moby Dick with Whitebeard. His energy, charisma, and colossal strength. A very special nakama.

BOTTOM — Oden sails with Roger to Laugh Tale — the final island. Only they two will know the truth about the One Piece and the Void Century.
```

<sub>top → milestone234.png · commit 827 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone235.png · commit 830 · Wano Country Arc</sub>

## Batch 105 — milestone236.png (top) + milestone237.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Oden returns to Wano — and finds a country transformed by Orochi and Kaido. He sacrifices himself to protect his people.

BOTTOM — Oden's execution: boiled alive for an hour while holding his samurai on his shoulders. He laughed until the end. "I'll be the first to reach Laugh Tale!"
```

<sub>top → milestone236.png · commit 833 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone237.png · commit 836 · Wano Country Arc</sub>

## Batch 106 — milestone238.png (top) + milestone239.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Nine Red Scabbards — the last samurai loyal to Oden — ready themselves for vengeance. Twenty years of waiting end now.

BOTTOM — The Alliance is complete: Straw Hats, Law, samurai, Minks. A thousand warriors ready for the raid on Onigashima.
```

<sub>top → milestone238.png · commit 839 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone239.png · commit 842 · Wano Country Arc</sub>

## Batch 107 — milestone240.png (top) + milestone241.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The raid on Onigashima begins! A thousand warriors disguised as Beast Pirates board the island under cover of night.

BOTTOM — Onigashima — Kaido's fortress. The crew splits up: each member has a specific objective inside.
```

<sub>top → milestone240.png · commit 845 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone241.png · commit 848 · Wano Country Arc</sub>

## Batch 108 — milestone242.png (top) + milestone243.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy, Zoro, Law, Kid, Killer reach the rooftop — the ultimate stage against the two Emperors.

BOTTOM — The rooftop of Onigashima. The Five vs. Kaido and Big Mom. The sky cracks under the force of their clashes.
```

<sub>top → milestone242.png · commit 851 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone243.png · commit 854 · Wano Country Arc</sub>

## Batch 109 — milestone244.png (top) + milestone245.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy vs. Kaido — Round 1. Kaido defeats Luffy and hurls him off the rooftop. "Your Haki is not enough yet."

BOTTOM — Luffy wakes among the people of Wano, below Onigashima. He sees their suffering. He understands what he's fighting for.
```

<sub>top → milestone244.png · commit 857 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone245.png · commit 860 · Wano Country Arc</sub>

## Batch 110 — milestone246.png (top) + milestone247.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy climbs back up — not with rage, but with joy. A smile that no one expected.

BOTTOM — Luffy vs. Kaido — Round 2. Advanced Ryou shatters dragon scales from the inside. Kaido begins to yield.
```

<sub>top → milestone246.png · commit 863 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone247.png · commit 866 · Wano Country Arc</sub>

## Batch 111 — milestone248.png (top) + milestone249.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Kaido's flashback: his origins, the Rocks Pirates, God Valley. Why he can't die — and why he doesn't care.

BOTTOM — Advanced Conqueror's Haki — Luffy and Kaido wrap themselves in black lightning as they fight. The sky turns violet.
```

<sub>top → milestone248.png · commit 869 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone249.png · commit 872 · Wano Country Arc</sub>

## Batch 112 — milestone250.png (top) + milestone251.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — GEAR FIFTH — THE SUN GOD NIKA! Hito Hito no Mi, Model: Nika. Luffy's true awakening. His power is pure freedom.

BOTTOM — Luffy laughs. The world laughs with him. His body becomes cartoon — absolute freedom. Kaido sees a white giant.
```

<sub>top → milestone250.png · commit 875 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone251.png · commit 878 · Wano Country Arc</sub>

## Batch 113 — milestone252.png (top) + milestone253.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — LUFFY DEFEATS KAIDO! Gum-Gum Bajrang Gun sends Kaido plunging into the magma beneath Wano.

BOTTOM — Law and Kid defeat Big Mom — sending her into the ocean's depths. Two Emperors fall in a single night.
```

<sub>top → milestone252.png · commit 881 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone253.png · commit 884 · Wano Country Arc</sub>

## Batch 114 — milestone254.png (top) + milestone255.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Nine Red Scabbards defeat Orochi for the last time. Wano is free for the first time in twenty years.

BOTTOM — Momonosuke uses his dragon powers to lift Onigashima away from Flower Capital and save the city.
```

<sub>top → milestone254.png · commit 887 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone255.png · commit 890 · Wano Country Arc</sub>

## Batch 115 — milestone256.png (top) + milestone257.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The festival of Flower Capital — the people celebrate without yet knowing they are free. But they will find out.

BOTTOM — Kozuki Momonosuke opens Wano's borders to the world. A new era begins for the Land of the Samurai.
```

<sub>top → milestone256.png · commit 893 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone257.png · commit 896 · Wano Country Arc</sub>

## Batch 116 — milestone258.png (top) + milestone259.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The news spreads: Luffy is now an Emperor of the Sea. Bounty: 3,000,000,000 Berry. The world trembles.

BOTTOM — The crew prepares to leave Wano. A new crew, stronger than ever. Shanks is waiting somewhere out there.
```

<sub>top → milestone258.png · commit 899 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone259.png · commit 902 · Wano Country Arc</sub>

## Batch 117 — milestone260.png (top) + milestone261.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Flashback: Oden laughed even as he died. "I'll be the first to reach Laugh Tale." Not him — but his straw hat will.

BOTTOM — The Thousand Sunny leaves Wano toward the Final Saga. The One Piece has never been closer.
```

<sub>top → milestone260.png · commit 905 · Wano Country Arc &nbsp;|&nbsp; bottom → milestone261.png · commit 908 · Wano Country Arc</sub>

## Batch 118 — milestone262.png (top) + milestone263.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Egghead Island — the "island of the future" of Dr. Vegapunk. Technology 500 years ahead of its time. Giant robots, pure sci-fi.

BOTTOM — The six Vegapunk satellites: Shaka (Good), Lilith (Evil), Edison (Thinker), Pythagoras (Wisdom), Atlas (Violence), York (Greed).
```

<sub>top → milestone262.png · commit 921 · Egghead Arc &nbsp;|&nbsp; bottom → milestone263.png · commit 924 · Egghead Arc</sub>

## Batch 119 — milestone264.png (top) + milestone265.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Bonney is on the island — she's looking for Vegapunk to learn the truth about her father, Bartholomew Kuma.

BOTTOM — The Seraphim — ultimate weapons based on former Warlords but with Lunarian blood — turn against everyone without warning.
```

<sub>top → milestone264.png · commit 927 · Egghead Arc &nbsp;|&nbsp; bottom → milestone265.png · commit 930 · Egghead Arc</sub>

## Batch 120 — milestone266.png (top) + milestone267.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — York betrayed Vegapunk to become the sole Celestial Dragon scientist in the world. Betrayal from within.

BOTTOM — Vegapunk prepares his final broadcast to the world. He wants to speak the truth before he dies.
```

<sub>top → milestone266.png · commit 933 · Egghead Arc &nbsp;|&nbsp; bottom → milestone267.png · commit 936 · Egghead Arc</sub>

## Batch 121 — milestone268.png (top) + milestone269.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Saturn of the Gorosei arrives physically on Egghead in his Mythical Zoan monster form. One of the world's darkest forces.

BOTTOM — Luffy vs. Kizaru in Gear Fifth — a surreal clash between a ray of light and a rubber cartoon man.
```

<sub>top → milestone268.png · commit 939 · Egghead Arc &nbsp;|&nbsp; bottom → milestone269.png · commit 942 · Egghead Arc</sub>

## Batch 122 — milestone270.png (top) + milestone271.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Vegapunk's broadcast reaches every Den Den Mushi in the world. The truth about the Void Century and the Ancient Kingdom.

BOTTOM — Vegapunk is killed by Kizaru before finishing the message. But the world has already heard enough.
```

<sub>top → milestone270.png · commit 945 · Egghead Arc &nbsp;|&nbsp; bottom → milestone271.png · commit 948 · Egghead Arc</sub>

## Batch 123 — milestone272.png (top) + milestone273.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Five Elders in monster form besiege Egghead. The Gorosei are not just politicians — they are ancient monsters.

BOTTOM — The crew escapes Egghead with the surviving Vegapunk satellites. Kuma reveals his story to Bonney: he was a good king.
```

<sub>top → milestone272.png · commit 951 · Egghead Arc &nbsp;|&nbsp; bottom → milestone273.png · commit 954 · Egghead Arc</sub>

## Batch 124 — milestone274.png (top) + milestone275.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The world reacts to Vegapunk's broadcast: revolutions, riots, global chaos. The World Government is shaken.

BOTTOM — The story of the Lunarians and the Sun — the same origin as Nika. The thread connecting Joyboy, Luffy, and the history of the world.
```

<sub>top → milestone274.png · commit 957 · Egghead Arc &nbsp;|&nbsp; bottom → milestone275.png · commit 960 · Egghead Arc</sub>

## Batch 125 — milestone276.png (top) + milestone277.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Ancient Kingdom fought the World Government 800 years ago. The truth is staggering. The world will never be the same.

BOTTOM — The Stella satellite survives. She carries all of Vegapunk's knowledge. The crew safeguards the world's greatest secret.
```

<sub>top → milestone276.png · commit 963 · Egghead Arc &nbsp;|&nbsp; bottom → milestone277.png · commit 966 · Egghead Arc</sub>

## Batch 126 — milestone278.png (top) + milestone279.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Egghead is behind them. The crew sails toward Elbaf. The Giants' Island is next. And Shanks is there.

BOTTOM — ELBAF — The legendary island of giants, the strongest warriors in the world. Usopp's dream materializes before his eyes.
```

<sub>top → milestone278.png · commit 968 · Egghead Arc &nbsp;|&nbsp; bottom → milestone279.png · commit 981 · Elbaf Arc</sub>

## Batch 127 — milestone280.png (top) + milestone281.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Robin meets Jaguar D. Saul — the giant she thought had died at Ohara. He survived. He had been waiting for her.

BOTTOM — The Library of Elbaf — the greatest repository of knowledge in the world. Everything the Government tried to erase is here.
```

<sub>top → milestone280.png · commit 984 · Elbaf Arc &nbsp;|&nbsp; bottom → milestone281.png · commit 987 · Elbaf Arc</sub>

## Batch 128 — milestone282.png (top) + milestone283.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Prince Loki — the chained prince of Elbaf. A story of prophecy, betrayal, and the boundaries of the island.

BOTTOM — Shanks and the Red Hair Pirates appear on Elbaf. His true connection to the island — and to Luffy — is finally revealed.
```

<sub>top → milestone282.png · commit 990 · Elbaf Arc &nbsp;|&nbsp; bottom → milestone283.png · commit 993 · Elbaf Arc</sub>

## Batch 129 — milestone284.png (top) + milestone285.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Blackbeard Pirates and Cross Guild converge on Elbaf. Every remaining power in the world is gathering here.

BOTTOM — The battles of Elbaf erupt on multiple fronts. Giants fight. Pirates fight. The world is being decided here.
```

<sub>top → milestone284.png · commit 996 · Elbaf Arc &nbsp;|&nbsp; bottom → milestone285.png · commit 999 · Elbaf Arc</sub>

## Batch 130 — milestone286.png (top) + milestone287.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Road Poneglyph of Elbaf is found. The last of the four. With this, the route to Laugh Tale can be charted.

BOTTOM — The mysteries of the Void Century converge: who was Joyboy, what the Ancient Kingdom held, what guards the One Piece.
```

<sub>top → milestone286.png · commit 1002 · Elbaf Arc &nbsp;|&nbsp; bottom → milestone287.png · commit 1005 · Elbaf Arc</sub>

## Batch 131 — milestone288.png (top) + milestone289.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — Luffy and Shanks come face to face — for the first time since Luffy was a child.

BOTTOM — The final battles of Elbaf conclude. The survivors gather their strength.
```

<sub>top → milestone288.png · commit 1008 · Elbaf Arc &nbsp;|&nbsp; bottom → milestone289.png · commit 1011 · Elbaf Arc</sub>

## Batch 132 — milestone290.png (top) + milestone291.png (bottom)

```
Portrait pixel-art image, 1024x1536. TWO separate scenes stacked vertically — a top half and a bottom half — split by one thin solid dark horizontal line. Both halves share the SAME 16-bit SNES JRPG style: flat saturated colors, a limited palette, chunky visible pixels, hard edges, no anti-aliasing, simple flat backgrounds. No text, no letters, no numbers, no watermark.

TOP — The Straw Hats prepare to leave Elbaf. Saul smiles at Robin. The giants wave goodbye.

BOTTOM — The route to Laugh Tale is charted. The One Piece is within reach. The final voyage begins. Will of D. — Joyboy's promise to the world.
```

<sub>top → milestone290.png · commit 1014 · Elbaf Arc &nbsp;|&nbsp; bottom → milestone291.png · commit 1017 · Elbaf Arc</sub>
