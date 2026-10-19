# Content status

_Updated for the practice-first repositioning (18 Oct 2026)._

This tracks every public claim and its basis. The single source in code is `src/data/features.ts`: its `status` field controls what the site can say.

Current phase: **pre-launch**. Nothing can be bought or downloaded, and the site says so.

> **Audit basis.** The desktop app repository wasn't reachable from the website workspace. Statuses come from the owner's roadmap (18 Oct 2026, "implemented foundation" items), the owner's Riff Blocks description (v0.6.0, commit fa0e196) and the owner's explicit confirmations. Please re-check them against the app before launch.

## 1. Feature matrix

Statuses: **available** (shown as fact) · **preview** (committed launch scope, always labelled "Launch preview") · **concept** (exploratory, not committed, always labelled "Future concept") · **unverified** (not marketed).

### Practice: three propositions

| Proposition | Available | Launch preview | Future concept |
| --- | --- | --- | --- |
| 1 Focused practice | Practice Mode; A/B loop, tempo control, metronome, count-in and speed trainer (custom increments); manual Clean/Retry; Smart Tempo Ladder (three user-confirmed clean passes) | | |
| 2 Build your practice plan | Saved practice targets (several per song, each with its own settings) | Practice Queue (v1, within one song); bookmark while you play; passage breakdown (chunk and build-up); Riff Block → practice target | |
| 3 Pick up where you left off | Targets keep settings and progress across save and reopen; practice history (basic attempt persistence) | Resume a session (queue/session persistence); progress view (reliable tempo, clean runs, last practised) | One queue, many songs. The roadmap allows multiple projects only once safe project switching is proven |

### Create: three propositions plus the supporting editor

| Proposition | Available | Future concept |
| --- | --- | --- |
| 1 Riff Blocks and linked ideas | Riff Blocks: linked copies, library, variations, detaching | |
| 2 Experiment without risk | Riff Block variations and detached copies | Audition and compare changes side by side (non-destructive previews) |
| 3 Explore the possibilities | | Alternate voicings, fingerings, harmonies and layered suggestions |
| Supporting editor | Tab and notation; multitrack (guitar, bass, drum, notation-only); playback; GP3–5 import; MIDI import and export; print and PDF; local projects with autosave | |

> Non-destructive comparison and creative suggestions are listed in roadmap §1 without a launch commitment, so the site labels them **Future concept**. If any of them is committed launch scope, change its `status` to `preview` in `src/data/features.ts`. The label updates everywhere.

### Awaiting verification: not marketed

| Feature | Note |
| --- | --- |
| Smart Guitar Tools (Make Playable, Re-finger, fingering locks) | Listed on `/features#verifying` only |
| Track volume / mute / solo | Listed on `/features#verifying` only |
| Personal bests | Withheld everywhere until verified |

### Never on the site

Automatic grading or accuracy scores, DI/audio/MIDI input assessment, AI coaching or AI-generated practice plans, AI composition, e-drums, mobile and tablet apps, cloud sync.

## 2. Commercial and platform statements

| Statement | Where |
| --- | --- |
| Windows first; Windows installers built and tested; downloads open with the commercial beta | Hero status line, FAQ, `/download` |
| macOS **planned**, not available | `site.platformLabel` ("Windows · macOS planned"): hero, footer, social image, FAQ, `/download` |
| 14-day full-featured trial: **confirmed policy, not implemented**, always phrased as "planned" | Hero, FAQ, `/pricing`, `/download` (`pricing.trialDays`, `pricing.trialStatus`) |
| After the trial: projects stay openable and viewable; editing, saving changes and exports are disabled | FAQ, `/pricing`, `/download` |
| $9.99 Founder's Beta (planned), $19.99 from v1.0, lifetime desktop updates | Pricing card, FAQ |
| Owned software, with any future hosted services optional and separate | Pricing note, FAQ |
| SixLine doesn't listen to, record or grade playing | Homepage practice section, `/practice`, FAQ |
| SixLine is a practice tool, not a lesson course | FAQ, `/practice` |
| Not a DAW | FAQ |

## 3. Placeholders still on the site

| Placeholder | Location | Replace with (see `docs/media-capture-brief.md`) |
| --- | --- | --- |
| Tab-sheet illustration, labelled "Illustration · Real capture coming: a song opening in Practice Mode" | Homepage hero | Priority 1 capture |
| Looped tab and Tempo Ladder illustration, labelled "Illustration · no audio" | Homepage practice section | Priority 2 captures |
| Riff-to-arrangement illustration, labelled "Illustration" | Homepage Create section, `/create` | Priority 3 captures (`media.writingDemo`) |
| Logo is a traced working vector | `src/components/brand/logo-geometry.ts`, `public/brand/*.svg` | Designer's geometric master and a small-size mark |
| "Coming soon" / "Opens with the beta" (not clickable) | Pricing card, `/download`, closing section | Real URLs in `src/data/site.ts` → `actions` |
| Legal pages marked "Soon" (not linked) | Footer | Real pages. Don't publish placeholder legal text |
| "Pre-release" version, empty release notes | `/updates` | `site.appVersion`, `src/content/releases/` |
| Support contact | `/support` | `contact.supportEmail` |

## 4. Trademark notices

Guitar Pro / Arobas Music appears in the Create section, on `/create`, on `/features` and in the footer. Windows (Microsoft) and macOS (Apple) appear in the footer.

## 5. Pre-launch checklist

1. Re-verify section 1 against the desktop app, especially the practice features.
2. When a launch preview ships and is tested, set its `status` to `available`. It then moves out of the preview labels automatically.
3. Resolve the three "awaiting verification" items.
4. Supply the captures in `docs/media-capture-brief.md`.
5. Implement the trial, then set `pricing.trialStatus` to `'available'` and reword "planned" in the FAQ, hero, `/pricing` and `/download`.
6. Set download and checkout URLs, then `site.phase` and `pricing.status`.
7. Publish the legal pages, a support email and a domain (`SITE_URL`).
