import { formatPrice, pricing } from './site';

/**
 * FAQ answers are written for the CURRENT launch state (pre-launch).
 * Review every answer when `site.phase` or `pricing.trialStatus` changes.
 * `home: true` items appear on the homepage; all items appear on /support.
 */
export interface FaqItem {
  id: string;
  question: string;
  answer: string[];
  home?: boolean;
}

const beta = formatPrice(pricing.beta.price);
const v1 = formatPrice(pricing.v1.price);
const trial = `${pricing.trialDays}-day`;

export const faq: FaqItem[] = [
  {
    id: 'need-to-compose',
    question: 'Do I need to write music to use SixLine?',
    home: true,
    answer: [
      'No. You can import a Guitar Pro (GP3, GP4 or GP5) or MIDI file of a song you want to learn and go straight to practising it. The composition tools are there when you want them, and practice never depends on them.',
    ],
  },
  {
    id: 'skill-level',
    question: 'Is SixLine for beginners or advanced players?',
    home: true,
    answer: [
      'Both. A beginner can work towards a first song, and an advanced player can organise demanding technical practice, using the same tools.',
      'SixLine is a practice and writing tool rather than a course: it helps you practise the music you choose, but it doesn’t teach technique lessons.',
    ],
  },
  {
    id: 'listening',
    question: 'Does SixLine listen to my playing or grade it?',
    home: true,
    answer: [
      'No. After each run you mark it Clean or Retry yourself, and SixLine uses those choices to track your progress and step up the tempo. It doesn’t record, analyse or score your playing.',
    ],
  },
  {
    id: 'practice-plan',
    question: 'Can I plan a practice session across several passages or songs?',
    answer: [
      'Today you can save every hard passage in a song as a practice target, each with its own settings and progress, and pick up where you left off.',
      'Practice Queue (working through a song’s passages as one session), in-play bookmarking and passage breakdown are planned for launch. Moving between passages from different songs in one session is a future concept, not a launch commitment.',
    ],
  },
  {
    id: 'suggestions',
    question: 'Will SixLine suggest chords, voicings or fingerings?',
    answer: [
      'Not yet. Alternative voicings, fingerings and harmony options, and side-by-side comparison of edits, are ideas we’re exploring rather than launch features. You can already branch an idea safely with Riff Block variations.',
    ],
  },
  {
    id: 'free',
    question: 'Is SixLine free?',
    home: true,
    answer: [
      `SixLine is a paid app. A full-featured ${trial} free trial is planned for the commercial beta, so you can try everything before you buy.`,
      'SixLine isn’t available to download or buy yet.',
    ],
  },
  {
    id: 'lifetime',
    question: 'What does a lifetime licence include?',
    answer: [
      `A single one-time purchase (planned at ${beta} USD during the public beta) gives you the SixLine desktop app and every future update to it, including major versions.`,
      'There is no subscription and no paid upgrade.',
    ],
  },
  {
    id: 'updates',
    question: 'Are future updates free?',
    answer: [
      'Yes. Every purchase is intended to include all future updates to the desktop app, including major versions such as v1.0 and beyond.',
    ],
  },
  {
    id: 'platforms',
    question: 'Is SixLine available on Windows and macOS?',
    home: true,
    answer: [
      'Windows comes first: Windows installers have been built and tested, and downloads will open with the commercial beta. A macOS version is planned but not available yet.',
    ],
  },
  {
    id: 'guitar-pro',
    question: 'Can I import Guitar Pro files?',
    answer: [
      'Yes. SixLine imports Guitar Pro 3, 4 and 5 files (GP3, GP4 and GP5). It can also import and export MIDI.',
    ],
  },
  {
    id: 'daw',
    question: 'Is SixLine a DAW?',
    answer: [
      'No. SixLine is a practice and composition workstation built around tablature and notation. It plays back what you’ve written or imported so you can hear and learn it, but it isn’t built for recording or producing audio.',
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
    id: 'subscription',
    question: 'Will SixLine ever need a subscription?',
    answer: [
      'No. The desktop software you buy is yours to keep, with every future update included.',
      'If optional hosted services are ever offered, they would be separate and clearly priced on their own, and never required to keep using the software you own.',
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
      `The planned ${trial} trial is full-featured. When it ends, your existing projects stay openable and viewable — nothing is locked away. Editing, saving changes and exporting are disabled until you buy a licence.`,
      'The trial isn’t live yet; it will arrive with the commercial beta.',
    ],
  },
];

export const homeFaq = faq.filter((f) => f.home);
