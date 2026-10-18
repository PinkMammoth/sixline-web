# Media capture brief

Real product captures to replace the labelled illustrations on the website. Capture these in the **Studio Dark** theme unless noted. Use a clean project, and only use music you have the rights to show: original riffs, or public-domain or self-written material. Don't show commercially released songs.

Each placeholder on the site is labelled "Illustration" and names the capture that will replace it.

## General settings

| | |
| --- | --- |
| Theme | Studio Dark (one Studio Light variant of the hero is a nice extra) |
| Window | 1600×1000 or larger, no personal file paths or usernames visible, OS chrome hidden or neutral |
| Stills | PNG, 2× resolution (e.g. 3200×2000), uncompressed |
| Clips | H.264 MP4, 6–12 seconds, **silent**, no cursor jitter, no autoplay needed |
| For each clip | A poster frame (PNG) and a one-line description for alt text and captions |
| Score | Large enough that fret numbers are readable when the image is shown at 50% |

Files go in `public/demos/` (clips) and `src/assets/screenshots/` (stills, optimised by Astro).

## Priority 1: Hero, "a song opening in Practice Mode"

*Replaces the tab-sheet illustration in the homepage hero (`src/components/home/Hero.astro`).*

- **Story:** an imported tab (a GP5 file of an original piece) is open in the editor. The user selects four bars of a tricky passage and presses **Practise**. The score focuses on those bars, with the loop, speed, metronome and count-in visible.
- **Clip:** 8–10 s, ending on the focused Practice Mode view.
- **Still (fallback/poster):** the Practice Mode view with the selected passage, the current tempo and the Clean/Retry controls visible.
- **Must not show:** any automatic scoring, unreleased UI or unfinished dialogs.

## Priority 2: Structured practice (`src/components/home/Practice.astro`, `/practice`)

1. **Saved target.** A saved practice target for a passage, with its name, bar range and settings (tempo, loop) visible. If it's practical, show more than one target in the same song ("Intro riff", "Bridge", "Solo bars 33–36").
2. **Clean / Retry → Tempo Ladder.** A clip (10–12 s) of three runs being marked **Clean** by the musician, after which the tempo steps up. The manual Clean action must be clearly visible, so it's obvious this is the musician's own judgement.
3. **Speed trainer.** A still of the speed trainer with custom per-loop tempo increments.
4. **Practice history.** A still of the saved attempts for a target, *only if* the current UI shows them clearly. Don't stage analytics that don't exist.

Replaces: the practice console illustration (the looped tab and Tempo Ladder chips).

## Priority 3: Composition (`src/components/home/Create.astro`, `/create`)

1. **Riff Blocks.** A clip (10–12 s): select bars → *Riffs → Create Riff Block from Selection…* → name it "Main Riff" → insert it later in the song. The linked label with ↗ should be visible.
2. **Linked edit prompt.** A still of the "Update all linked instances / Edit only this instance" prompt.
3. **Multitrack.** A still of a song with guitar, bass and drum tracks, tab and standard notation visible.
4. **Riff Blocks library.** A still listing blocks with their bar counts and placements.

Replaces: the "riff → arrangement" illustration. Set `media.writingDemo` in `src/data/site.ts` for the clip.

## Later (when implemented and verified)

- Practice Queue, in-play bookmarking, the progress view, and Riff Block → practice target. Capture these only after they ship, then move each feature's `status` to `available` in `src/data/features.ts`.

## Never capture or imply

- Automatic grading, accuracy scores, audio or DI analysis, AI coaching or generated practice plans
- A macOS build (until one exists)
- Checkout or licence screens before the commercial flow is finished
