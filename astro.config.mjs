// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * The production domain has not been chosen yet. Set SITE_URL (e.g. in a
 * deployment environment) to enable canonical URLs, absolute Open Graph
 * URLs and the generated sitemap. Without it the site still builds.
 */
const site = process.env.SITE_URL || undefined;

/**
 * Fonts are self-hosted from the installed @fontsource packages (Latin subset)
 * through Astro's local font provider, so builds never depend on a font CDN.
 * Astro generates metric-matched fallbacks and preload links.
 */
/** @param {string} pkg @param {string} file */
const fontFile = (pkg, file) => `./node_modules/${pkg}/files/${file}`;

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: site ? [sitemap()] : [],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            weight: '100 900',
            style: 'normal',
            src: [fontFile('@fontsource-variable/inter', 'inter-latin-wght-normal.woff2')],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            weight: '300 700',
            style: 'normal',
            src: [fontFile('@fontsource-variable/space-grotesk', 'space-grotesk-latin-wght-normal.woff2')],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-plex-mono',
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      options: {
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: [fontFile('@fontsource/ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff2')],
          },
          {
            weight: 500,
            style: 'normal',
            src: [fontFile('@fontsource/ibm-plex-mono', 'ibm-plex-mono-latin-500-normal.woff2')],
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
