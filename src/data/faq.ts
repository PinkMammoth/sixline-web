import { formatPrice, pricing } from './site';

/**
 * FAQ answers are written for the CURRENT launch state (pre-launch).
 * Review every answer when `site.phase` changes. Answers are plain text so
 * they can also be reused in structured data later.
 */
export interface FaqItem {
  id: string;
  question: string;
  answer: string[];
}

const beta = formatPrice(pricing.beta.price);
const v1 = formatPrice(pricing.v1.price);

export const faq: FaqItem[] = [
  {
    id: 'free',
    question: 'Is SixLine free?',
    answer: [
      'SixLine is a paid app with a fully featured, time-limited free trial, so you can try everything before you buy.',
      'SixLine is still in development and is not available to download or buy yet.',
    ],
  },
  {
    id: 'lifetime',
    question: 'What does a lifetime licence include?',
    answer: [
      `A single one-time purchase — planned at ${beta} USD during the public beta — gives you SixLine and every future update, including major versions.`,
      'There is no subscription and no paid upgrade.',
    ],
  },
  {
    id: 'updates',
    question: 'Are future updates free?',
    answer: [
      'Yes. Every purchase is intended to include all future updates, including major versions such as v1.0 and beyond.',
    ],
  },
  {
    id: 'platforms',
    question: 'Is SixLine available on Windows and macOS?',
    answer: [
      'SixLine is being built for both Windows and macOS. System requirements will be published with the first public build.',
    ],
  },
  {
    id: 'guitar-pro',
    question: 'Can I import Guitar Pro files?',
    answer: [
      'Yes, SixLine can import Guitar Pro files. The exact list of supported Guitar Pro versions will be confirmed before the public beta.',
    ],
  },
  {
    id: 'beta',
    question: 'What does beta mean?',
    answer: [
      'Beta means SixLine is usable and actively improving, but not yet finished. You may run into bugs or missing features, and things will change between releases.',
      'Known beta limitations will be published alongside each release.',
    ],
  },
  {
    id: 'pay-again',
    question: 'Will I have to pay again at v1.0?',
    answer: [
      `No. Beta customers keep their lifetime entitlement when v1.0 arrives. The price for new customers is planned to rise to ${v1} USD at v1.0.`,
    ],
  },
  {
    id: 'trial-end',
    question: 'What happens when my trial ends?',
    answer: [
      'The trial length and exactly what happens when it ends will be published before the public beta, so you know the terms before you download.',
    ],
  },
];
