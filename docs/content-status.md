# Content status

_Updated for creative direction v2._

This tracks which public statements are **confirmed**, which are **placeholders**, and what is **outstanding** before launch.

Current phase: **pre-launch** (`site.phase = 'pre-launch'` in `src/data/site.ts`). Nothing can be bought or downloaded, and the site says so.

---

## 1. Confirmed claims

These come directly from the project brief and are shown as fact on the site.

| Claim | Where it appears | Source |
| --- | --- | --- |
| SixLine is an independent desktop guitar tablature and music notation editor | Meta description, footer, hero | Brief |
| Built for Windows and macOS | Footer, FAQ, downloads | Brief |
| Tablature and notation editing | Homepage "Write", /features | Brief |
| Multi-track arrangements | Homepage "Write", /features | Brief |
| Playback | Homepage "Play", /features | Brief |
| Guitar Pro file import, versions not specified | Homepage "Import", /features, FAQ | Brief |
| MIDI support, direction not specified | Homepage "Import", /features | Brief |
| Planned pricing: Founder's Beta $9.99 USD one-time, $19.99 USD from v1.0 | Pricing card, /pricing, FAQ | Brief |
| All future updates included, including major versions. No subscriptions, no paid upgrades | Hero, pricing, FAQ | Brief |
| Beta customers keep their lifetime entitlement after v1.0 | Pricing, FAQ | Brief |
| A fully featured, time-limited free trial will exist | FAQ, /pricing, /download | Brief |

> Marketing sections only show features with `status: 'available'` (meaning they work in the development build). Please confirm each of these in the current desktop build. If any doesn't work, change its `status` in `src/data/features.ts`; it then moves to the workbench automatically.

## 2. On the workbench (not claimed)

The brief asked for these to be showcased. I couldn't verify them against the desktop app, so they **don't appear in any marketing section**. They're listed only in the separate "On the workbench" section on `/features#workbench`, described as "being checked before we promise it". The Play section also mentions tempo control, looping and a metronome in one line as "being checked for the beta".

To promote one, set its `status` in `src/data/features.ts` to `available`. It then appears in its homepage and /features section automatically. Setting `in-development` or `planned` keeps it on the workbench.

| Feature / format | File | Needs |
| --- | --- | --- |
| Rhythm and technique editing | `features.ts` → `rhythm-technique` | Confirm it works, and which techniques to name |
| Instrument tracks | `features.ts` → `instrument-tracks` | Confirm, including instrument/tuning options |
| Native project saving | `features.ts` → `native-projects` | Confirm, plus the file extension name |
| Tempo adjustment | `features.ts` → `tempo` | Confirm |
| A/B looping | `features.ts` → `ab-loop` | Confirm |
| Metronome and count-in | `features.ts` → `metronome` | Confirm both parts separately |
| Track mixing | `features.ts` → `mixing` | Confirm (volume? mute/solo?) |
| Printing and PDF export | `features.ts` → `print-pdf` | Confirm both |
| GP3 / GP4 / GP5 import | `features.ts` → `formats` | Confirm each version. Also GPX / GP (7+)? |
| MIDI import & export | `features.ts` → `formats` | Confirm the direction(s) |
| Native file open & save | `features.ts` → `formats` | Confirm, plus the extension |
| PDF export | `features.ts` → `formats` | Confirm |

## 3. Placeholders currently on the site

| Placeholder | Location | Replace with |
| --- | --- | --- |
| Logo is a traced working vector | `src/components/brand/logo-geometry.ts`, `public/brand/*.svg`, favicons | A designer's clean geometric master (true arcs, uniform strokes), plus a simplified mark for 16px. Drop the paths into `logo-geometry.ts` and regenerate the exports |
| Hero product frame shows a tablature **illustration**, labelled "Illustration · App screenshot coming with the redesigned interface" | Homepage hero (`TabSheet.astro`) | Real screenshot of the redesigned app: pass `src` and `alt` to `<ProductFrame>` in `Hero.astro` |
| "Riff → arrangement" **illustration**, labelled "Illustration" | Homepage "Write" | Real screen recording. Set `media.writingDemo` in `src/data/site.ts` |
| Playback **illustration** with an animated playhead, labelled "Visual demo · no audio" | Homepage "Play" | Can stay, or be replaced by real footage |
| Social image | `public/images/og-default.png` | Can be updated to include a real screenshot once one exists |
| "Try SixLine free" / "Get lifetime access" in the hero, header and closing section | Link to `/download` and `/pricing` (real pages that explain the pre-launch state) | Nothing needed. They keep working after launch |
| "Get lifetime access · Opens with the beta" and "Download · Coming soon" (not clickable) | Pricing card, /download | Real URLs in `src/data/site.ts` → `actions` |
| "Pre-release" version | Logbook | `site.appVersion` |
| Latest release / known limitations empty states | Logbook (homepage, /updates) | First file in `src/content/releases/`; `development.betaLimitations` |
| "The first entry will be the public beta" | /updates | First file in `src/content/releases/` |
| Support contact "will be published" | /support | `contact.supportEmail` |
| Documentation, Privacy policy, Terms, Third-party licences, Refund information (marked "Soon", not linked) | Footer | Real pages. **Do not publish placeholder legal text** |
| Checksums / code-signing note | /download | Real values per build |
| "© {year} SixLine" | Footer | The legal entity / owner name for the copyright line |

## 4. Deliberately not stated

These are left out on purpose to avoid inventing facts:

- Release dates, beta launch date, version numbers
- Trial length and what happens when the trial ends (the FAQ says the terms will be published)
- System requirements
- Refund policy, taxes/VAT handling beyond "taxes may be added at checkout"
- Testimonials, reviews, user counts, download counts
- Developer name/biography (the site says only that SixLine is independent software)
- A production domain

## 5. Trademark notices

- Guitar Pro / Arobas Music: shown under the format cards on the homepage, on /features and in the footer.
- Windows (Microsoft) and macOS (Apple): footer.
- MIDI is a widely used generic term. No notice added. Review if you want one.

## 6. Pre-launch checklist

1. Confirm or reclassify every workbench item (section 2).
2. Commission the clean logo master and a small-size mark. Supply real screenshots (`ProductFrame src` in `Hero.astro`) and the demo clip (`media.writingDemo`).
3. Decide the trial length and what happens after it ends. Update the FAQ `trial-end` and `free` answers and `pricing.trialDays`.
4. Publish the privacy policy, terms, refund policy and third-party licences, and link them in `src/data/navigation.ts`.
5. Set the support email.
6. Choose a domain and set `SITE_URL`.
7. Add the first release note and `site.appVersion`.
8. Set the download URLs and checkout URL. Switch `site.phase` to `'public-beta'` and `pricing.status` to `'on-sale'`.
9. Re-read every FAQ answer against the launch state, since they are written for pre-launch.
10. Update the "Public beta coming soon" lines in `Hero.astro` and `Closing.astro`, and the milestones in `src/data/development.ts`.
