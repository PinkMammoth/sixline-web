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

Requires Node.js **24.22.1** (see `.nvmrc`). Run `nvm use` in this repository to select it without changing your global default.

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
  brand/            logo exports: symbol, wordmark, stacked lockup (ivory + ink)
  demos/            product demo videos (none yet)
  images/           og-default.png social image
  favicon.svg …     favicons built from the logo symbol
src/
  assets/screenshots/   real app screenshots (optimised by Astro)
  components/
    brand/              Logo.astro (inline SVG, 4 variants) + logo-geometry.ts
    home/               homepage sections: Hero, Pathways, Practice, Create,
                        Workflow, Pricing, Questions, Story, Closing
    music/              TabStaff, TabSheet, Arrangement: tablature illustrations
    ui/                 Button, Eyebrow, SectionHeading, PageHeader, ProductFrame,
                        MediaSlot, PricingCard, DownloadCard, Faq, Logbook
    SiteHeader.astro, SiteFooter.astro, Seo.astro
  content/releases/     release notes (Markdown, one file per release)
  content.config.ts     content collection schema
  data/                 site state, features, FAQ, navigation, development, riffs
  layouts/BaseLayout.astro
  pages/                /, /practice, /create, /features, /pricing, /download,
                        /updates, /support, 404, robots.txt
  styles/tokens.css     every raw colour value lives here
  styles/global.css     Tailwind theme mapping, base styles, utilities
docs/
  design-system.md      brand and design specification (also the reference for the app)
  content-status.md     feature matrix (available / launch preview / awaiting
                        verification), placeholders and outstanding content
  media-capture-brief.md  what real product captures to record, and where they go
```

## Editing content

Almost everything public is driven by data files, so a content change should rarely mean touching a component.

| To change…                                   | Edit                                   |
| -------------------------------------------- | -------------------------------------- |
| Launch phase, app version                    | `src/data/site.ts` → `site`            |
| Checkout / download URLs                     | `src/data/site.ts` → `actions`         |
| Prices, trial length                         | `src/data/site.ts` → `pricing`         |
| Support email                                | `src/data/site.ts` → `contact`         |
| Feature list and each feature's status       | `src/data/features.ts` (`available`, `preview`, `unverified`) |
| Trial length and status                      | `src/data/site.ts` → `pricing.trialDays`, `pricing.trialStatus` |
| FAQ answers                                  | `src/data/faq.ts`                      |
| Upcoming priorities, beta limitations        | `src/data/development.ts`              |
| Release notes                                | `src/content/releases/*.md` (copy `_template.md`) |
| Logo geometry                                | `src/components/brand/logo-geometry.ts` (+ re-export `public/brand/`) |
| Hero screenshot                              | `src/assets/screenshots/` + `src`/`alt` on `<ProductFrame>` in `src/components/home/Hero.astro` |
| Riff Blocks demo video                       | `public/demos/` + `src/data/site.ts` → `media.writingDemo` |
| Milestones (Now / Next / Then)               | `src/data/development.ts`              |

### Launch safety

- The main calls to action ("Try SixLine free", "Get lifetime access") link to the real `/download` and `/pricing` pages. Those pages explain the pre-launch state, so the buttons are never broken.
- The actual checkout and download buttons have no destination until real URLs are set in `actions`. Until then they show a **"Coming soon" / "Opens with the beta"** state that can't be clicked, at the final button's size.
- Marketing sections lead with features whose `status` is `'available'`. `preview` features (committed for launch, not built yet) only appear with a visible "Launch preview" label. `unverified` features are listed only on `/features#verifying`. Longer-term concepts never appear.
- Product visuals are illustrations drawn by the site (tablature SVG), each visibly labelled as such until real screenshots and video exist.
- While the releases folder is empty, the build prints `The collection "releases" does not exist or is empty`. This warning is harmless and stops once the first real release note is added.

### Before launch checklist

See `docs/content-status.md`. In short: re-verify the feature matrix against the app, supply the captures in `docs/media-capture-brief.md`, set the trial terms, publish the legal pages, add a support contact, set the download and checkout URLs, then set `site.phase` and `pricing.status`.

## Deployment

Out of scope for this phase. `npm run build` produces a fully static `dist/` folder, which any static host can serve.
