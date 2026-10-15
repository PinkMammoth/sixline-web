# SixLine design system

Version 0.2, creative direction v2. This document is the shared visual reference for the website and for the upcoming redesign of the SixLine desktop app.

**North star:** a boutique recording studio, beautifully engineered analogue equipment, and disciplined Swiss/editorial graphic design.

**Values live in code.** Colours, shadows, grain and canvas are in `src/styles/tokens.css`. The type scale, radii, widths and motion are in `src/styles/global.css`. If this document and the code disagree, the code wins; please update this document when that happens.

---

## 1. Principles

1. **Made for musicians.** Every section should feel like it was made by someone who plays. The site uses tablature, strings and the vocabulary of studio gear as its motifs, not generic software imagery.
2. **Warmth with precision.** Ivory paper, amber light and walnut-tinted charcoal bring analogue warmth. Tight grids, hairlines and mono legends bring engineering precision.
3. **Light and shade.** Darkness is atmosphere, not the whole design. The page alternates between dark studio sections and warm ivory paper sections.
4. **The product is the hero.** Product visuals sit in a carefully lit frame. Until real screenshots exist, the frame shows clearly labelled *illustrations* (tablature drawn by the site) and never a fake interface.
5. **Honest by design.** Marketing copy only claims what is confirmed. Anything unverified lives in a separate "workbench" list. Pre-launch actions lead to real pages, never to a broken checkout.
6. **Bring it to life, without getting louder.** Movement comes from composition, a few deliberate motifs, and small moments of motion that happen once and stay still afterwards.

**Avoid:** generic SaaS gradients, glassmorphism, neon, 3D objects, stock photography, fake leather or woodgrain, skeuomorphic knobs, distressed or psychedelic retro styling, continuous animation, and status pills scattered across marketing copy.

---

## 2. Colour

### Brand palette

| Name     | Hex       | Role                                                           |
| -------- | --------- | -------------------------------------------------------------- |
| Ink      | `#141515` | Studio foundation                                              |
| Graphite | `#242626` | Equipment surfaces, frames                                     |
| Ivory    | `#F2EFE7` | Text on dark, and the **paper** section background             |
| Amber    | `#E8A45B` | The primary action, endpoints, indicator lights, key emphasis  |
| Sage     | `#A6B5A1` | Secondary emphasis: playhead, check marks, second headline lines |

### Three scopes

The same semantic tokens (`--sl-bg`, `--sl-text`, `--sl-accent-text` …) are redefined per scope, so every component works anywhere without variants.

| Scope    | How to apply                  | Character |
| -------- | ----------------------------- | --------- |
| Studio   | Default (`:root`), or `.studio` on an element inside a paper section | Dark, low-glare charcoal |
| Paper    | `.paper` on a section (or `data-theme="light"` on `<html>`) | Warm ivory, with ink text |
| Canvas   | `--sl-canvas-*` tokens         | The notation surface (see §9) |

### Semantic tokens

| Token (Tailwind)                   | Studio    | Paper     | Use |
| ---------------------------------- | --------- | --------- | --- |
| `bg-bg`                            | `#141515` | `#F2EFE7` | Section background |
| `bg-bg-sunken`                     | `#0F1010` | `#E8E2D5` | Footer, closing section |
| `bg-surface-1/2/3`                 | `#1B1C1C` / `#242626` / `#2E3030` | `#F7F4EE` / `#FBF9F5` / `#E8E2D5` | Panels, cards, raised controls |
| `bg-warm-1`                        | `#1C1A17` | `#E8E2D5` | Warm sections (Play, Progress) |
| `bg-warm-2`, `bg-warm-3`           | `#2A2622`, `#36312B` | `#DDD5C5`, `#CFC6B3` | Warm panels, console bodies |
| `border-line-subtle` / `border-line` | ivory 7% / 13% | ink 8% / 15% | Tonal hairlines (not hard outlines) |
| `border-line-strong`               | `#6A6D6A` | `#8A847A` | Meaningful outlines (≥ 3:1) |
| `text-fg`                          | `#F2EFE7` | `#141515` | Primary text |
| `text-fg-secondary`                | `#CFC9BD` | `#3D3B37` | Body copy, second headline lines |
| `text-fg-muted`                    | `#A39D92` | `#625D54` | Metadata, captions |
| `bg-accent`, `text-on-accent`      | `#E8A45B` on `#141515` | same | Primary buttons |
| `text-accent-text`                 | `#E8A45B` | `#8A4F12` | Amber as text (darkened on paper) |
| `text-sage`                        | `#A6B5A1` | `#4C5E47` | Secondary emphasis |
| `ink`, `ivory`, `amber`            | fixed     | fixed     | Never re-skin: logo, decorative lines |

### Measured contrast (WCAG 2.x)

| Pair | Ratio |
| ---- | ----- |
| Ivory on ink / warm-1 | 15.9 / 15.1 |
| Secondary on warm-2 (worst studio case) | 9.1 |
| Muted on warm-2 (worst studio case) | 5.6 |
| Ink on ivory | 15.9 |
| Secondary on ivory | 9.7 |
| Muted on ivory / on paper-2 | 5.7 / 5.1 |
| Amber text on ivory / on paper-2 | 5.7 / 5.1 |
| Sage on ivory / sage on ink | 6.1 / 8.5 |
| Ink on amber (buttons) | 8.6 |

All text passes AA.

### Colour distribution on the homepage

Hero (studio) → 01 Create (**paper**) → 02 Master (warm studio) → 03 Pricing (**paper**, with a studio card) → Questions (studio) → Why SixLine (**paper**) → Closing (sunken studio) → Footer.

**Create and Master are equal partners.** They share the same structure: a numbered eyebrow, a full-width two-line display headline with the second phrase in a quieter colour, an intro set beneath on the right, then a product visual and outcomes. Create uses `fg-secondary` for its second line and Master uses `sage`. Unreleased Master features appear only inside a dashed "Coming soon · Practice Mode" panel with "Preview" labels.

**Positioning guardrails:** never present SixLine as a DAW or as an audio-production tool. Never imply it detects playing accuracy automatically. Lead with outcomes ("Catch the idea", "Loop the hard part"), not feature counts.

Rules:
- Never stack two **identical** dark treatments. Neighbouring dark sections differ in warmth (warm-1 vs ink) or in content (paper cards on dark).
- Paper sections hold the most expressive typography. Studio sections hold the product and the equipment metaphors.
- **Amber** is for: the one primary button per view, the logo endpoints, indicator lights, section-marker rules and the ending of the brand signature ("Just music."). Never use it for large fills.
- **Sage** is for: the playhead, check marks and the second line of the Play headline. One use per section at most.

---

## 3. Atmosphere and texture

| Element | Implementation | Strength |
| ------- | -------------- | -------- |
| Film grain | `grain` utility: tiled SVG noise | 6% on studio, 9% on paper. Should be felt rather than seen |
| Studio light | Radial gradients `--sl-glow-amber` / `--sl-glow-sage` | 9–16% alpha, always soft-edged and off-centre |
| Light pool | Blurred amber ellipse under the product frame | Grounds the "photographed object" |
| Tactile buttons | `shadow-button`: hairline top highlight plus a short contact shadow; 1px press | Subtle |
| Panels | `shadow-panel` (inset highlight and soft drop) | Subtle |

Never use: heavy textures, bloom, more than two glows in one section, or gradients as decoration on text or buttons.

---

## 4. Typography

| Role             | Family        | Treatment |
| ---------------- | ------------- | --------- |
| Display / headlines | Space Grotesk | 500 weight, `tracking-display` (−0.035em), deliberate line breaks |
| Body / UI        | Inter         | 400/500 |
| Legends / metadata | IBM Plex Mono | 12px uppercase, tracking 0.1em: like the legends engraved on equipment |

### Scale

| Token          | Size (fluid)   | Line height | Use |
| -------------- | -------------- | ----------- | --- |
| `text-display` | 48 → 104px     | 0.94 | Hero and section statements: once per section at most |
| `text-h1`      | 40 → 76px      | 0.98 | Inner page titles, secondary statements |
| `text-h2`      | 32 → 56px      | 1.02 | Sub-sections |
| `text-h3`      | 24px           | 31px | Card and feature titles |
| `text-h4`      | 19px           | 24px | Small titles |
| `text-lead`    | 19px           | 29px | Intros |
| `text-base` / `text-sm` | 16 / 14px | 26 / 22px | Body / UI |
| `text-label`   | 12px           | 16px | Mono legends |

### Editorial devices

- **Two-tone headlines.** The second phrase is set in a quieter colour (`fg-secondary`, or `sage` once on the page). For example, "Your music. / Your way of writing it."
- **Deliberate breaks.** Use `<br>` where the meaning pauses. Don't let display text wrap by accident.
- **Section markers.** An amber 28px rule, then a mono index (`01`), then a mono label (`Write`), using the `Eyebrow` component.
- **Big numerals.** Price and step numbers are set at display size as graphic elements.
- Use sentence case everywhere except mono legends.

---

## 5. Layout and rhythm

- **Widths:** `container-wide` is 86rem (hero, product, expressive sections). `container-content` is 74rem (pricing, logbook, FAQ). Side gutters are 20px on mobile and 32px from 640px.
- **Grid:** 12 columns from `lg`. Mix splits between sections (7/5, 4/7, 5/7, 8/4) so neighbouring sections never share a composition.
- **Vertical rhythm:** `section-y` is 80px on mobile and 136px on desktop.
- **Variety is the rule:** each homepage section uses a different structure. These are the hero split, a full-width statement over a list and illustration, a full-bleed console, two label cards, a centred equipment card, a timeline, and an accordion.
- **Mobile is designed, not compressed.** Headlines keep their line breaks, primary actions go full width, and tab illustrations switch to one bar per system so the numbers stay legible.

## 6. Motifs

| Motif | Where | Notes |
| ----- | ----- | ----- |
| **The S mark** | Header (horizontal lockup), footer (stacked lockup), closing section (monumental, 7% opacity, bleeding off the edge), 404 | Never redrawn. Always from `logo-geometry.ts` |
| **Six strings** | Six hairlines behind the hero frame; six-segment rule on format cards; inner page headers | 1.5px lines, about 14% opacity. Amber endpoints only where they mirror the logo |
| **Three amber dots** | Hero eyebrow | Echoes the logo endpoints. Use once per page |
| **Tablature** | Hero sheet, riff-to-arrangement, playback console | Real tab notation (strings, fret numbers, techniques, rhythm stems) drawn by `TabStaff`. Always labelled as an illustration |
| **Equipment details** | Pricing card (indicator light, engraved legend strip), playback console (transport button), format "tape-box labels" | Refer to the hardware with restraint: no knobs, no fake materials |

## 7. Components

| Component | File | Notes |
| --------- | ---- | ----- |
| Logo | `brand/Logo.astro` | `horizontal`, `stacked`, `symbol`, `wordmark`. Inline SVG: strings use `currentColor` and the endpoints are always amber |
| Button | `ui/Button.astro` | `primary` (amber, tactile), `secondary` (tonal outline), `ghost`. `arrow` adds a hover nudge. There is also a pending state |
| Eyebrow | `ui/Eyebrow.astro` | Section marker |
| PageHeader | `ui/PageHeader.astro` | Inner pages: eyebrow, h1, lead, string lines, glow |
| ProductFrame | `ui/ProductFrame.astro` | Graphite shell, window chrome, light pool, and an "Illustration" label while there's no screenshot |
| TabStaff / TabSheet / Arrangement | `music/` | Tablature illustrations. `TabStaff` supports a playhead |
| PricingCard | `ui/PricingCard.astro` | `.studio` faceplate. Reads `site.ts` |
| Logbook | `ui/Logbook.astro` | Now/Next/Then timeline, latest release, known limitations |
| Faq | `ui/Faq.astro` | Native `<details>`, round +/× control |
| DownloadCard | `ui/DownloadCard.astro` | Studio card per platform |
| MediaSlot | `ui/MediaSlot.astro` | Real demo video: controls, no autoplay |

### States

| State | Treatment |
| ----- | --------- |
| Hover | Primary: lighter amber. Secondary: stronger outline plus a 4% overlay. Links: underline turns amber. Arrows nudge 2px. 200ms `ease-quiet` |
| Active | 1px press; primary loses its contact shadow |
| Focus | 2px `--sl-focus` outline, 3px offset (amber on studio, dark amber on paper) |
| Pending | Pre-launch action: dashed amber outline, soft amber fill, mono "Opens with the beta" legend. Not interactive |
| Current page | Small amber dot under the nav item, plus `aria-current` |

## 8. Motion

- Durations: 120ms (press), 200ms (hover), 600ms (reveal). Easing: `ease-quiet` = `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- **Reveals:** sections fade up 16px **once**, with staggered `--reveal-delay`.
- **Playhead:** the playback console plays once when scrolled into view (6.4s, linear). Each fret number lights amber exactly as the playhead reaches it. "Play again" replays it. It is visual only and labelled "no audio".
- **Never:** loops, scroll-jacking, parallax, autoplaying video.
- `prefers-reduced-motion: reduce` turns off reveals and the playhead animation (the playhead rests in place and the button is hidden), and turns off smooth scrolling. Content is always visible without JS.

## 9. The notation canvas (app)

| Token | Studio | Paper | Rule |
| ----- | ------ | ----- | ---- |
| `--sl-canvas-bg` | `#1B1C1C` | `#FBF9F5` | Dark canvas sits slightly above the window. Paper is near-white with warmth |
| `--sl-canvas-staff-line` | `#5A5D5B` | `#9A958B` | Lines recede (~2.5–3:1) |
| `--sl-canvas-barline` | `#7C7F7B` | `#6F6B63` | A step stronger |
| `--sl-canvas-ink` | `#E7E3DA` | `#141515` | Fret numbers and noteheads ≥ 13:1 |
| `--sl-canvas-ink-secondary` | `#A39D92` | `#625D54` | Techniques, annotations ≥ 4.5:1 |
| `--sl-canvas-cursor` | amber | `#B36A1F` | Edit cursor / active note: the only solid amber |
| `--sl-canvas-playhead` | sage | `#4C5E47` | Playback is sage, so it's never confused with editing |
| `--sl-canvas-selection`, `--sl-canvas-loop-region` | translucent | translucent | Must never hide the notes underneath |

Offer a paper canvas even in the dark app theme. Fret numbers should use mono or tabular figures.

## 10. Logo

- **Approved artwork:** six flowing strings forming an S, with three amber endpoints at each end, in ivory/ink and amber. **Do not redesign it.**
- **Current vector:** traced from the supplied raster artwork. It matches the approved geometry, but it is a working vector, not a master. Its curves come from the trace rather than true arcs, and stroke widths vary by about 1px. **Recommendation:** have the master rebuilt as true concentric arcs and parallel lines with a single stroke width. Then replace the paths in `src/components/brand/logo-geometry.ts` and re-export `public/brand/` and the favicons.
- **Small sizes:** below about 24px the six strings blur together. Commission a simplified small-size symbol for the 16/32px favicons (for example, fewer, thicker strings). Keep the amber endpoints.
- **Lockups:** stacked (approved artwork) and horizontal (symbol with the wordmark at 56% of the symbol's height, gap 32% of height). Both are built in `Logo.astro`.
- **Clear space:** at least the diameter of three endpoint dots stacked (≈ ⅓ of the symbol's width).
- **Minimum size:** horizontal lockup 24px tall. Stacked lockup 64px tall.
- **Colour:** ivory strings on dark, ink strings on paper. Endpoints are always amber. Never use it on photographs or busy backgrounds.
- **Files:** `public/brand/sixline-{symbol,wordmark,lockup}-{ivory,ink}.svg`, `public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `images/og-default.png`.

## 11. Iconography

Use 1.5px strokes with round caps on a 16/20/24 grid ([Lucide](https://lucide.dev) or a matching custom set), inheriting `currentColor`. Music glyphs come from the notation font, not the icon set. Icon-only buttons need an accessible name.

## 12. Accessibility

- Target WCAG 2.2 AA.
- Use landmarks, a skip link, and one `h1` per page.
- Everything is keyboard reachable with visible focus. Escape closes the mobile menu.
- Status is never shown by colour alone.
- Decorative SVGs (illustrations, string lines, the large S) are `aria-hidden`. Their meaning is carried by captions and labels.
- Primary targets are ≥ 44px tall.
- Motion is reduced as described in §8.

## 13. Applying the system to the Electron app

1. Lift `tokens.css` (studio, paper and canvas) into the app as its theme layer, keeping the semantic names.
2. **Chrome ↔ theme:** studio = dark app theme, paper = warm light app theme. The canvas has its own paper/dark switch.
3. Map regions: window → `bg`, sidebars → `surface-1`/`warm-1`, toolbars and transport → `warm-2`, the score → canvas tokens.
4. Borrow the website's equipment details sparingly. Use mono legends for control labels, an amber indicator light for record/arm, and a sage playhead.
5. **Density:** UI type at 13px and mono at 11px, a 4/6/8/12 spacing scale, with the same radii and states.
6. Respect native window controls. Don't reuse the website's decorative frame inside the app.
