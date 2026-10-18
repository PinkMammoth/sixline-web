# Content status

_Updated for the practice-first repositioning (18 Oct 2026)._

This tracks every public claim and its basis. The single source in code is `src/data/features.ts`: its `status` field controls what the site can say.

Current phase: **pre-launch**. Nothing can be bought or downloaded, and the site says so.

> **Audit basis.** The desktop app repository wasn't reachable from the website workspace. Statuses come from the owner's roadmap (18 Oct 2026, "implemented foundation" items), the owner's Riff Blocks description (v0.6.0, commit fa0e196) and the owner's explicit confirmations. Please re-check them against the app before launch.

## 1. Feature matrix

### Implemented and verified: shown as available

| Feature | Basis |
| --- | --- |
| Practice Mode (selection → Practise, focused score, exit to editor) | Roadmap |
| Saved practice targets / bookmarks that survive save and reopen | Roadmap |
| A/B looping, speed control | Roadmap |
| Practice metronome and count-in | Roadmap |
| Clean / Retry: **manual, musician-confirmed** | Roadmap |
| Smart Tempo Ladder: initial version, three user-confirmed clean passes step the tempo up | Roadmap |
| Speed trainer with custom per-loop tempo increments | Roadmap |
| Practice history: basic attempt persistence only, no analytics claims | Roadmap |
| Riff Blocks | Owner description, v0.6.0 |
| Tab and standard notation, including chords, voices, dynamics and techniques | Brief, Riff Blocks notes |
| Multitrack: guitar, bass, drum and notation-only tracks, with tuning and capo per stringed track | Brief, Riff Blocks notes |
| Playback | Brief |
| Guitar Pro **GP3, GP4, GP5** import | Owner confirmation |
| MIDI import and export | Owner confirmation |
| Print and PDF | Roadmap |
| Local native projects with autosave | Roadmap, Riff Blocks notes |

### Committed for launch, not yet built: launch previews only

Shown only with a visible "Launch preview" label, and never as the lead of a section.

| Feature | Where it appears |
| --- | --- |
| Practice Queue | Homepage practice stage 3 (small), `/practice`, `/features` |
| Bookmark while you play (one keystroke, playback continues) | Homepage practice stage 3 (small), `/practice`, `/features` |
| Progress view | `/practice`, `/features` |
| Riff Block → practice target | Homepage "One workflow" note, `/practice`, `/features` |

### Awaiting verification: not marketed

Listed only on `/features#verifying`. Personal bests are withheld from that list too.

| Feature | Note |
| --- | --- |
| Smart Guitar Tools (Make Playable, Re-finger, fingering locks) | Awaiting verification in the desktop repository |
| Track volume / mute / solo | Awaiting verification |
| Personal bests | Don't advertise until verified |

### Future exploration: never shown as features

Performance analysis or grading, DI/audio/MIDI input assessment, AI coaching or practice maps, AI composition, footswitch control, e-drums, mobile and tablet apps, cloud sync, WAV export, MusicXML, chunk/build-up practice, practice plan presets.

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
