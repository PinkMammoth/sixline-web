# sixline-web

The public website, brand system and future documentation for **SixLine**, an independent guitar tablature and music notation editor for Windows and macOS.

> Powerful music software. Fair pricing. No nonsense.

The desktop application lives in a separate repository. This repo does not touch it.

## Stack

- [Astro 7](https://astro.build) — static output, no client framework
- TypeScript (strict)
- Tailwind CSS 4 via `@tailwindcss/vite`, with SixLine design tokens as the only theme values
- Self-hosted fonts (Space Grotesk, Inter, IBM Plex Mono) from `@fontsource` packages, loaded through Astro's font API. Astro adds preload links and fallback fonts sized to match, so text doesn't shift when the web fonts load
- Markdown content collection for release notes
- Client-side JS is limited to two small scripts: the mobile menu toggle and the section reveals. No hydration.

## Getting started

Requires Node.js **22.12 or later** (see `.nvmrc`).

```sh
npm install
npm run dev        # http://localhost:4321
```

| Command           | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Development server with hot reload                        |
| `npm run build`   | Production build to `dist/`                               |
| `npm run preview` | Serve the production build locally (`npx astro preview stop` to stop it) |
| `npm run check`   | Type-check `.astro` and `.ts` files                       |

### Configuration

Copy `.env.example` to `.env` if needed.

- `SITE_URL`: the production URL. **No domain has been chosen yet**, so it is unset by default. Setting it turns on canonical URLs, absolute Open Graph image URLs, the `sitemap-index.xml` and the `Sitemap:` line in `robots.txt`. Without it the site still builds and works.

## Project structure

```text
public/
  brand/            final logo files go here (none yet)
  demos/            product demo videos (none yet)
  images/           og-default.png social image (placeholder)
  favicon.svg …     placeholder favicons
src/
  assets/screenshots/   real app screenshots (optimised by Astro)
  components/
    brand/Logo.astro    wordmark / symbol slot
    ui/                 Button, StatusLabel, ProductFrame, MediaSlot, FeatureList,
                        PricingCard, DownloadCard, Faq, DevStatus, TabStaff …
    sections/           PageHeader, CtaSection
    SiteHeader.astro, SiteFooter.astro, Seo.astro
  content/releases/     release notes (Markdown, one file per release)
  content.config.ts     content collection schema
  data/                 site state, features, FAQ, navigation, development status
  layouts/BaseLayout.astro
  pages/                /, /features, /pricing, /download, /updates, /support, 404, robots.txt
  styles/tokens.css     every raw colour value lives here
  styles/global.css     Tailwind theme mapping, base styles, utilities
docs/
  design-system.md      brand and design specification (also the reference for the app)
  content-status.md     confirmed claims, placeholders and outstanding content
```

## Editing content

Almost everything public is driven by data files, so a content change should rarely mean touching a component.

| To change…                                   | Edit                                   |
| -------------------------------------------- | -------------------------------------- |
| Launch phase, app version                    | `src/data/site.ts` → `site`            |
| Checkout / download URLs                     | `src/data/site.ts` → `actions`         |
| Prices, trial length                         | `src/data/site.ts` → `pricing`         |
| Support email                                | `src/data/site.ts` → `contact`         |
| Feature list and each feature's status       | `src/data/features.ts`                 |
| FAQ answers                                  | `src/data/faq.ts`                      |
| Upcoming priorities, beta limitations        | `src/data/development.ts`              |
| Release notes                                | `src/content/releases/*.md` (copy `_template.md`) |
| Logo files                                   | `public/brand/` + `src/data/brand.ts`  |
| Hero screenshot                              | `src/assets/screenshots/` + `src` prop on `<ProductFrame>` in `src/pages/index.astro` |

### Launch safety

- Any action whose URL is `null` (checkout, downloads) shows as a **"Coming soon"** state that can't be clicked. It keeps the final button's size and position, so the layout doesn't change at launch. No checkout or download links exist until real URLs are set.
- Feature claims always show a status (`In current build`, `In development`, `Planned`, `To be confirmed`). The status is shown with both an icon shape and text, never colour alone.
- While the releases folder is empty, the build prints `The collection "releases" does not exist or is empty`. This warning is harmless and stops once the first real release note is added.

### Before launch checklist

See `docs/content-status.md`. In short: confirm every `unconfirmed` feature, set the trial terms, publish the legal pages, add a support contact, set the download and checkout URLs, then set `site.phase` and `pricing.status`.

## Deployment

Out of scope for this phase. `npm run build` produces a fully static `dist/` folder, which any static host can serve.
