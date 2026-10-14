# SixLine design system

Version 0.1, the website foundation. This document is the shared visual reference for the website and for the upcoming redesign of the SixLine desktop app.

**North star:** boutique studio equipment meets disciplined editorial design.

Source of truth for values: `src/styles/tokens.css` (colours, shadows, canvas) and `src/styles/global.css` (type scale, radii, widths, motion). If this document and the code disagree, the code wins. Please fix the document when that happens.

---

## 1. Brand principles

1. **The product is the hero.** Real screenshots and real behaviour come before decoration. Never fake the UI.
2. **Quiet confidence.** Restrained type sizes, generous space, few borders. Earn attention instead of demanding it.
3. **Warmth with precision.** Ivory and amber bring analogue warmth. Tight grids, hairlines and monospace metadata bring precision.
4. **Honesty is part of the brand.** Every claim carries a status. Pre-launch actions say "Coming soon" rather than leading nowhere. No scarcity tricks, no invented numbers.
5. **Musician first.** Language and layout should feel familiar to someone who reads tab, rather than to a SaaS buyer.

**Avoid:** generic SaaS gradients, glassmorphism, glow, 3D objects, animated backgrounds, neon or gaming styling, metal-merch clichés, and visual clutter.

---

## 2. Colour

### Brand palette

| Token                  | Hex       | Role                                   |
| ---------------------- | --------- | -------------------------------------- |
| `--sl-palette-ink`      | `#141515` | Primary background                     |
| `--sl-palette-graphite` | `#242626` | Elevated surface                       |
| `--sl-palette-ivory`    | `#F2EFE7` | Primary text                           |
| `--sl-palette-amber`    | `#E8A45B` | Primary accent: CTAs, focus, emphasis  |
| `--sl-palette-sage`     | `#A6B5A1` | Secondary accent: calm, "available"    |

Components **never** use palette tokens or hex values directly. They use the semantic tokens below, through Tailwind utilities (`bg-surface-2`, `text-fg-muted`, `border-line` …) or `var(--sl-*)`. Tailwind's default palette is switched off, so stray classes like `bg-gray-800` won't compile to anything.

### Semantic tokens: dark (default, low-glare)

| Semantic token        | Tailwind            | Dark      | Light     | Use                                   |
| --------------------- | ------------------- | --------- | --------- | ------------------------------------- |
| `--sl-bg`             | `bg-bg`             | `#141515` | `#F5F2EA` | Page / window background              |
| `--sl-bg-sunken`      | `bg-bg-sunken`      | `#0F1010` | `#ECE8DE` | Wells, footer, screenshot backing     |
| `--sl-surface-1`      | `bg-surface-1`      | `#1B1C1C` | `#FBF9F4` | Quiet panels, alternate sections      |
| `--sl-surface-2`      | `bg-surface-2`      | `#242626` | `#FFFFFF` | Cards, frame shell, toolbars          |
| `--sl-surface-3`      | `bg-surface-3`      | `#2E3030` | `#ECE8DE` | Hover on cards, raised controls       |
| `--sl-border-subtle`  | `border-line-subtle`| `#242626` | `#E6E1D6` | Hairline dividers                     |
| `--sl-border`         | `border-line`       | `#343737` | `#D6D0C4` | Card and input outlines               |
| `--sl-border-strong`  | `border-line-strong`| `#6A6D6A` | `#8A857B` | Meaningful outlines (≥ 3:1)           |
| `--sl-text`           | `text-fg`           | `#F2EFE7` | `#1A1B1B` | Primary text                          |
| `--sl-text-secondary` | `text-fg-secondary` | `#C8C4BA` | `#3F403E` | Body copy, descriptions               |
| `--sl-text-muted`     | `text-fg-muted`     | `#A09C93` | `#5F5C55` | Metadata, labels                      |
| `--sl-text-disabled`  | `text-fg-disabled`  | `#6B6964` | `#A19C92` | Disabled only (exempt from contrast)  |
| `--sl-accent`         | `bg-accent`         | `#E8A45B` | `#E8A45B` | Primary button fill, indicators       |
| `--sl-accent-hover`   | `bg-accent-hover`   | `#F0B677` | `#DD9446` | Hover                                 |
| `--sl-accent-active`  | `bg-accent-active`  | `#D58F45` | `#C98236` | Pressed                               |
| `--sl-accent-text`    | `text-accent-text`  | `#E8A45B` | `#8F5414` | Amber as text (darkened in light)     |
| `--sl-on-accent`      | `text-on-accent`    | `#141515` | `#1A1B1B` | Text on amber fills                   |
| `--sl-sage`           | `text-sage`         | `#A6B5A1` | `#4F6249` | Secondary accent                      |
| `--sl-focus`          | (outline)           | `#E8A45B` | `#8F5414` | Focus ring                            |
| `--sl-success`        | `text-success`      | `#93C08F` | `#2F6B37` | Success                               |
| `--sl-warning`        | `text-warning`      | `#E6C36F` | `#7A5A00` | Warning                               |
| `--sl-danger`         | `text-danger`       | `#EE8A72` | `#A63A26` | Error / destructive                   |
| `--sl-disabled-bg`    | `bg-disabled-bg`    | `#1F2020` | `#ECE8DE` | Disabled control fill                 |

Each state colour also has a `*-soft` translucent tint for backgrounds (`bg-accent-soft`, `bg-success-soft` …).

### Measured contrast (WCAG 2.x)

| Pair                             | Dark   | Light  |
| -------------------------------- | ------ | ------ |
| Text on bg                       | 15.9:1 | 15.4:1 |
| Secondary text on bg             | 10.5:1 | 9.3:1  |
| Muted text on bg                 | 6.7:1  | 6.0:1  |
| Muted text on surface-3 (worst)  | 4.9:1  | 5.0:1  |
| Accent text on bg                | 8.6:1  | 5.5:1  |
| On-accent text on amber          | 8.6:1  | 8.1:1  |
| Success / warning / danger on bg | ≥ 7.4:1 | ≥ 5.7:1 |

All text pairs pass AA (4.5:1). Most pass AAA.

### Amber discipline

Amber marks **meaning**: the primary action, focus, the current nav item, and one accent rule per view at most. Never use it for large fills, body text, decoration or more than one primary button per section. If a screen has three amber things, two of them are wrong.

---

## 3. Typography

| Role              | Family         | Notes                                                         |
| ----------------- | -------------- | ------------------------------------------------------------- |
| Headlines         | Space Grotesk  | weight 500, tracking −0.015em, `text-wrap: balance`           |
| Body / UI         | Inter          | weight 400/500                                                 |
| Technical labels  | IBM Plex Mono  | 12px, UPPERCASE, tracking 0.08em, weight 500 (`label-mono`)  |

Fonts are self-hosted (Latin subset, WOFF2) with fallbacks sized to match each font's metrics, so text doesn't jump when the web fonts load. Headline and body fonts are preloaded. The mono font is not.

### Scale

| Token        | Size                                 | Line height | Use                         |
| ------------ | ------------------------------------ | ----------- | --------------------------- |
| `text-h1`    | clamp(36px → 60px)                   | 1.05        | One per page                |
| `text-h2`    | clamp(28px → 40px)                   | 1.15        | Section titles              |
| `text-h3`    | 22px                                 | 30px        | Card titles                 |
| `text-h4`    | 18px                                 | 24px        | Feature and FAQ titles      |
| `text-lead`  | 19px                                 | 28px        | Intros                      |
| `text-base`  | 16px                                 | 26px        | Body                        |
| `text-sm`    | 14px                                 | 22px        | Descriptions, UI            |
| `text-label` | 12px                                 | 16px        | Mono metadata               |

Rules:

- **Sentence case** for headings and buttons. Use UPPERCASE only for short mono labels.
- Keep headline sizes restrained. The hero h1 tops out at 60px.
- Body measure: 40rem (`max-w-prose`) or less.
- Numbers in technical contexts (versions, frets, file formats) go in mono.

---

## 4. Spacing, layout and grid

- **Base unit 4px** (Tailwind `--spacing: 0.25rem`). Preferred steps: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 112.
- **Section rhythm:** `section-y` gives 72px vertical padding on mobile and 112px on desktop.
- **Widths:** `container-content` 72rem (1152px), `container-wide` 82rem (1312px, hero and product), `max-w-narrow` 48rem, `max-w-prose` 40rem. Side gutters are 20px on mobile and 32px from 640px up.
- **Grid:** a 12-column editorial grid from `lg` (1024px). Common splits are 5/7 (heading / content) and 4/8 (heading / list). Below `lg`, everything stacks to one column with `grid-cols-1`, so wide children such as tables can't force the page to scroll sideways.
- **Mobile is designed separately, not just shrunk.** Buttons go full width, the screenshot uses a taller 4:3 crop, and the nav becomes a full-width list.

## 5. Corner radii

| Token         | px   | Use                                        |
| ------------- | ---- | ------------------------------------------ |
| `rounded-xs`  | 2    | Inline badges, focus ring                  |
| `rounded-sm`  | 4    | Small controls                             |
| `rounded-md`  | 6    | Buttons, inputs                            |
| `rounded-lg`  | 10   | Inner screenshot, tables, panels           |
| `rounded-xl`  | 14   | Cards, product frame                       |
| `rounded-full`| —    | Status pills, dots                         |

Nested radii: inner radius = outer radius − padding (e.g. frame `xl` 14 → screenshot `lg` 10).

## 6. Borders and shadows

- Separate areas with **surface steps** first, **hairlines** second, and **shadows** last.
- Hairlines are 1px `line-subtle`. Card outlines use `line`. Outlines that carry meaning use `line-strong` (≥ 3:1).
- Hairline grids: a `gap-px` grid on a `bg-line-subtle` parent, with cells on `bg-bg`. This gives perfectly even dividers.
- Shadows: `shadow-sm` for small lift, and `shadow-frame` only for the product frame. No glows, no coloured shadows.

## 7. Components and states

| Component      | File                               | Notes |
| -------------- | ---------------------------------- | ----- |
| Logo           | `brand/Logo.astro`                 | `wordmark` / `symbol` variants. Uses a text placeholder until assets are set in `src/data/brand.ts` |
| Button         | `ui/Button.astro`                  | `primary` / `secondary` / `ghost`, sizes `md` (44px) / `lg` (48px), and a pending state |
| StatusLabel    | `ui/StatusLabel.astro`             | Shape + text + colour |
| SectionHeading | `ui/SectionHeading.astro`          | Mono eyebrow, title, lead |
| ProductFrame   | `ui/ProductFrame.astro`            | Graphite shell, window chrome, labelled placeholder |
| MediaSlot      | `ui/MediaSlot.astro`               | Video starts only when the user presses play, `preload="none"` |
| FeatureList    | `ui/FeatureList.astro`             | `list` (editorial rows) or `grid` (hairline cards) |
| PricingCard    | `ui/PricingCard.astro`             | Data-driven, shows "Planned pricing" before launch |
| DownloadCard   | `ui/DownloadCard.astro`            | Per platform |
| Faq            | `ui/Faq.astro`                     | Native `<details>`, no JS |
| DevStatus      | `ui/DevStatus.astro`               | Version, recent changes, priorities, limitations |
| TabStaff       | `ui/TabStaff.astro`                | Decorative six-line staff that draws in once |

### Interaction states

| State    | Treatment |
| -------- | --------- |
| Default  | As specified |
| Hover    | Primary: `accent-hover`. Secondary: border `fg-muted` and fill `surface-2`. Links: underline turns amber. 200ms `ease-quiet` |
| Active   | Primary: `accent-active`. All buttons move down 1px (`translate-y-px`), a small physical press |
| Focus    | 2px `--sl-focus` outline, 3px offset, on every interactive element (`:focus-visible`) |
| Disabled | `disabled-bg` fill, `fg-disabled` text, no hover, `cursor-default` |
| Pending  | Pre-launch action: muted fill or dashed outline, label plus a mono "Coming soon" badge, not interactive and not a link |
| Selected / current | Amber 1px underline (nav) or amber dot (mobile nav), plus `aria-current` |

### Status labels

| Status           | Shape          | Colour      | Label              |
| ---------------- | -------------- | ----------- | ------------------ |
| `available`      | ● filled       | sage        | In current build   |
| `in-development` | ◐ half         | amber text  | In development     |
| `planned`        | ○ ring         | secondary   | Planned            |
| `unconfirmed`    | ◌ dashed ring  | muted       | To be confirmed    |

---

## 8. Light and dark

- **Dark ("low-glare studio") is the default** for the website and the primary app theme.
- **Light ("warm paper")** is fully defined and contrast-checked under `[data-theme="light"]`. The website doesn't expose a theme switch yet (see the decisions in `content-status.md`), but every component already renders correctly in light.
- Amber fills keep the brand hex in both themes. Amber **as text** is darkened in light (`#8F5414`) to keep 4.5:1.
- Sage darkens in light (`#4F6249`) for the same reason.
- Never invert the palette by formula. Every light value was chosen by hand to keep the warm character.

## 9. The notation canvas (app)

The music canvas has its own tokens, because notation readability matters more than chrome styling:

| Token                       | Dark       | Light      | Rule |
| --------------------------- | ---------- | ---------- | ---- |
| `--sl-canvas-bg`            | `#1B1C1C`  | `#FFFDF8`  | Slightly lifted from the window bg in dark, paper-white in light |
| `--sl-canvas-staff-line`    | `#5A5D5B`  | `#9A958B`  | Lines recede: low contrast, ~2–3:1 |
| `--sl-canvas-barline`       | `#7C7F7B`  | `#6F6B63`  | A step stronger than staff lines |
| `--sl-canvas-ink`           | `#E7E3DA`  | `#1A1B1B`  | Fret numbers and noteheads: ≥ 12:1 |
| `--sl-canvas-ink-secondary` | `#A09C93`  | `#5F5C55`  | Technique text, annotations: ≥ 4.5:1 |
| `--sl-canvas-selection`     | amber 22%  | amber 30%  | Translucent, so the notes underneath stay readable |
| `--sl-canvas-cursor`        | `#E8A45B`  | `#B36A1F`  | Edit cursor: the only solid amber on the canvas |
| `--sl-canvas-playhead`      | `#A6B5A1`  | `#4F6249`  | Sage, so playback is never confused with editing |
| `--sl-canvas-loop-region`   | sage 14%   | sage 12%   | A/B loop span |

Canvas rules:

- In dark mode, the canvas uses off-white ink (not pure white) on a near-black that isn't pure black. This reduces halation during long sessions.
- Offer a "paper" canvas option even in the dark app theme. Many musicians prefer printed-page contrast for reading.
- Fret numbers use a monospaced or tabular-figure font so columns line up.
- Never use the accent colour for notation itself. Amber is for the edit cursor and selection only.
- Selection and loop regions must be translucent, never opaque.

## 10. Iconography

- Use **1.5px stroke, round caps and joins** on a 16 or 20px grid, with optical sizes at 16/20/24.
- Recommended set: [Lucide](https://lucide.dev) (ISC licence), or a custom set drawn to the same rules. Don't mix families.
- Icons inherit `currentColor`. They never carry meaning by colour alone.
- Music-specific glyphs (rests, techniques) belong to the notation font, not the UI icon set.
- Icon-only buttons need an accessible name (`aria-label`) and a tooltip in the app.

## 11. Logo

Final artwork is pending. Specification for the supplied files:

- **Formats:** SVG (primary, single-colour, `currentColor` fills, outlined text, no embedded fonts), plus PNG exports at 1×/2× for email and marketplaces. A 1024×1024 PNG and an `.icns`/`.ico` set of the symbol for the app and favicons.
- **Wordmark:** horizontal. Designed at a cap height of 20px in the header, so it should still read clearly at 16px. Expected aspect about 4–5:1 (set `wordmarkAspect` in `src/data/brand.ts`).
- **Symbol:** square, legible at 16×16 (favicon) and 32×32. It must work without the wordmark.
- **Clear space:** at least the cap height of the wordmark on all sides. In the header that is ≥ 20px.
- **Minimum size:** wordmark 72px wide. Symbol 16px.
- **Colour:** ivory on ink, or ink on paper. Amber is not used for the logo by default, which keeps amber for actions.
- **Placement:** top-left of the header (links to `/`) and top of the footer column. The website layout does not depend on the logo's shape.

## 12. Motion

- Durations: `fast` 120ms (press), `base` 200ms (hover/colour), `slow` 480ms (reveal). Easing: `ease-quiet` = `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- Allowed: hover transitions, a 1px press, a one-time section fade-up of 12px, a one-time tab-staff draw-in, and video that plays only when the user starts it.
- Never: scroll-jacking, parallax, loops that run continuously, autoplaying video, or animating layout properties.
- `prefers-reduced-motion: reduce` turns off reveals, the staff animation and smooth scrolling. Content is always visible without JS.

## 13. Accessibility requirements

- Target **WCAG 2.2 AA**.
- Use semantic landmarks (`header`, `nav[aria-label]`, `main#main`, `footer`). There is a skip link and one `h1` per page.
- Every interactive element can be reached by keyboard and shows a visible focus ring. Escape closes the mobile menu and returns focus to its button.
- Targets are at least 44px tall on primary actions, and never below 24×24 (2.5.8).
- Status is never shown by colour alone. Use shape and text.
- Use real alt text for screenshots, describing what the screen shows. Purely decorative SVGs are `aria-hidden`.
- Video has captions when it contains speech or important on-screen text, and never autoplays.

## 14. Applying the system to the Electron app

1. **Share the tokens, not the website CSS.** Lift `tokens.css` (or generate JSON from it) into the app as the theme layer, and keep the semantic names (`--sl-surface-2`, `--sl-text-muted` …) so design and code use the same words.
2. **Map surfaces to app regions:** window bg → `bg`, sidebars/inspectors → `surface-1`, toolbars/panels → `surface-2`, hover/pressed rows → `surface-3`, the score → the canvas tokens.
3. **Chrome vs canvas:** the theme switch (light/dark) changes the chrome. The canvas has its own switch (paper/dark) that defaults to match.
4. **Density:** the app may use a tighter spacing scale (4/6/8/12) and smaller type (13px UI, 11px mono), but the same families, radii and states.
5. **Amber in the app:** the primary action in a dialog, the edit cursor, the focus ring, record/arm states. Not the transport bar.
6. **Platform conventions:** respect native window controls (traffic lights on macOS, caption buttons on Windows). Don't recreate the website's decorative window chrome inside the app.
7. **Keyboard first:** every editing action needs a shortcut and a visible focus. Tab musicians work with the keyboard.
