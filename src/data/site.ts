/**
 * Site-wide state and commercial facts.
 *
 * This file is the single switchboard for launch state. Every call to action,
 * price and download link on the site reads from here, so nothing goes live
 * until a real URL is filled in. Leave a value as `null` until it exists.
 */

export type LaunchPhase = 'pre-launch' | 'public-beta' | 'released';

export const site = {
  name: 'SixLine',
  tagline: 'Powerful music software. Fair pricing. No nonsense.',
  description:
    'SixLine is an independent guitar tablature and music notation editor for Windows and macOS. One-time purchase, every future update included, no subscriptions.',

  /**
   * 'pre-launch'  — nothing is downloadable or purchasable (current state).
   * 'public-beta' — beta is live; download and checkout URLs must be set.
   * 'released'    — v1.0 or later.
   */
  phase: 'pre-launch' as LaunchPhase,

  /** Latest public desktop app version, e.g. '0.9.0-beta.1'. Null until a public build exists. */
  appVersion: null as string | null,

  platforms: ['Windows', 'macOS'] as const,
} as const;

/** Outbound actions. `null` renders an honest "Coming soon" state instead of a link. */
export const actions = {
  /** Lemon Squeezy (or other) checkout URL — not integrated in this phase. */
  checkoutUrl: null as string | null,
  /** Trial download URLs per platform. */
  downloads: {
    windows: null as string | null,
    macos: null as string | null,
  },
} as const;

export const pricing = {
  currency: 'USD',
  /** Prices are planned, not yet on sale. Flip to 'on-sale' only when checkout is live. */
  status: 'planned' as 'planned' | 'on-sale',
  beta: {
    name: "Founder's Beta",
    price: 9.99,
  },
  v1: {
    price: 19.99,
  },
  /** Trial length in days. Null until decided. */
  trialDays: null as number | null,
} as const;

export const contact = {
  /** Public support address. Null until one is set up — do not guess. */
  supportEmail: null as string | null,
} as const;

export const formatPrice = (amount: number, currency = pricing.currency) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);

export const isPreLaunch = site.phase === 'pre-launch';

/** "Try SixLine free" goes to the download page once any build exists. */
export const trialHref: string | null =
  actions.downloads.windows || actions.downloads.macos ? '/download' : null;
