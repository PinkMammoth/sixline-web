# Content status

This tracks which public statements are **confirmed**, which are **placeholders**, and what is **outstanding** before launch.

Current phase: **pre-launch** (`site.phase = 'pre-launch'` in `src/data/site.ts`). Nothing can be bought or downloaded, and the site says so.

---

## 1. Confirmed claims

These come directly from the project brief and are shown as fact on the site.

| Claim | Where it appears | Source |
| --- | --- | --- |
| SixLine is an independent desktop guitar tablature and music notation editor | Meta description, footer, hero | Brief |
| Built for Windows and macOS | Footer, FAQ, downloads | Brief |
| Tablature and notation editing (status: *In current build*) | Homepage, /features | Brief |
| Multi-track arrangements (*In current build*) | Homepage, /features | Brief |
| Playback (*In current build*) | Homepage, /features | Brief |
| Guitar Pro file import, versions not specified (*In current build*) | Homepage, /features, FAQ | Brief |
| MIDI support, details not specified (*In current build*) | /features | Brief |
| Planned pricing: Founder's Beta $9.99 USD one-time, $19.99 USD from v1.0 | Pricing card, /pricing, FAQ | Brief |
| All future updates included, including major versions. No subscriptions, no paid upgrades | Hero, pricing, FAQ | Brief |
| Beta customers keep their lifetime entitlement after v1.0 | Pricing, FAQ | Brief |
| A fully featured, time-limited free trial will exist | FAQ, /pricing, /download | Brief |

> "In current build" means working in the development build. Please confirm that each of these really works in the current desktop build. If any doesn't, change its `status` in `src/data/features.ts`.

## 2. Shown as "To be confirmed"

The brief asked for these to be showcased. I could not verify them against the desktop app, so the site labels each one **To be confirmed** instead of claiming it. To resolve one, set its `status` in `src/data/features.ts` to `available`, `in-development` or `planned`.

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
| Text wordmark "SixLine" | Header, footer (`Logo.astro`) | Final logo SVG. Register it in `src/data/brand.ts` |
| Favicon "S" monogram | `public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Final symbol exports |
| Social image (text only) | `public/images/og-default.png` | Final image with logo + real screenshot, 1200×630 |
| Hero screenshot area, labelled "Placeholder" | Homepage `ProductFrame` | Real app screenshot |
| Demo video areas, labelled "Placeholder" | Homepage "Writing", /features | Real product clips |
| "Coming soon" on Try free / Get lifetime access / Download | Hero, pricing, CTA, /download | Real URLs in `src/data/site.ts` → `actions` |
| "Pre-release" version | Dev status | `site.appVersion` |
| "Published with the public beta" | Upcoming priorities, beta limitations | `src/data/development.ts` |
| "No releases yet" | /updates, dev status | First file in `src/content/releases/` |
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

- Guitar Pro / Arobas Music: shown beside the compatibility table, on /features and in the footer.
- Windows (Microsoft) and macOS (Apple): footer.
- MIDI is a widely used generic term. No notice added. Review if you want one.

## 6. Pre-launch checklist

1. Confirm or reclassify every "To be confirmed" item (section 2).
2. Supply the logo, favicon set and real screenshots (`Logo`, `ProductFrame src`).
3. Decide the trial length and what happens after it ends. Update the FAQ `trial-end` and `free` answers and `pricing.trialDays`.
4. Publish the privacy policy, terms, refund policy and third-party licences, and link them in `src/data/navigation.ts`.
5. Set the support email.
6. Choose a domain and set `SITE_URL`.
7. Add the first release note and `site.appVersion`.
8. Set the download URLs and checkout URL. Switch `site.phase` to `'public-beta'` and `pricing.status` to `'on-sale'`.
9. Re-read every FAQ answer against the launch state, since they are written for pre-launch.
10. Replace the hero status text ("In development · Beta coming soon") in `src/pages/index.astro`.
