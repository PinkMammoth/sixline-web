/**
 * Feature catalogue — the single source for every capability claim on the site.
 *
 * Status (what the site is allowed to say):
 *   available  — implemented and verified. Shown as fact.
 *   preview    — committed to the launch scope but not yet implemented or
 *                verified. Shown ONLY with a visible "Launch preview" label,
 *                and never as the lead of a section.
 *   unverified — reported but awaiting verification against the desktop app.
 *                Listed only on /features as "Being verified"; never marketed.
 *
 * Longer-term concepts (performance analysis, DI/MIDI assessment, AI coaching
 * or practice maps, AI composition, mobile, cloud) are deliberately NOT in
 * this file and must not appear on the site as features.
 *
 * `source` records why a status was chosen, so claims can be audited.
 * See docs/content-status.md for the full matrix.
 */

export type FeatureStatus = 'available' | 'preview' | 'unverified';

export type FeaturePillar = 'practice' | 'create';

/** Practice features are grouped into the three stages of the practice story. */
export type PracticeStage = 'focus' | 'progress' | 'plan';

export interface Feature {
  id: string;
  pillar: FeaturePillar;
  stage?: PracticeStage;
  title: string;
  description: string;
  status: FeatureStatus;
  source: string;
}

const ROADMAP = 'Owner roadmap, 18 Oct 2026 (implemented foundation, v0.7.x)';
const RIFF_NOTES = 'Owner description of Riff Blocks (desktop app v0.6.0, commit fa0e196)';

export const pillarMeta: Record<FeaturePillar, { label: string; title: string; intro: string }> = {
  practice: {
    label: 'Practice',
    title: 'From “I can’t play this” to “I’ve got it.”',
    intro:
      'Pick a passage you can’t play yet. Isolate it, slow it down and mark each run Clean or Retry. SixLine raises the tempo as your clean runs add up, so you always know what to practise next and can see it getting better.',
  },
  create: {
    label: 'Create',
    title: 'From first riff to finished arrangement.',
    intro:
      'Capture ideas, write guitar and bass parts, build multitrack songs and explore arrangements in an editor designed around the way musicians actually work.',
  },
};

export const stageMeta: Record<PracticeStage, { label: string; title: string }> = {
  focus: { label: 'Focused practice', title: 'Isolate it' },
  progress: { label: 'Progress you can see', title: 'Build it up' },
  plan: { label: 'Practice with a plan', title: 'Organise it' },
};

export const features: Feature[] = [
  // ---------------------------------------------------------------- Practice
  {
    id: 'practice-mode',
    pillar: 'practice',
    stage: 'focus',
    title: 'Practice Mode',
    description:
      'Select some bars and press Practise. The score focuses on your passage, with looping, speed, metronome and count-in ready, and you can return to the editor at any time.',
    status: 'available',
    source: ROADMAP,
  },
  {
    id: 'saved-targets',
    pillar: 'practice',
    stage: 'focus',
    title: 'Saved practice targets',
    description:
      'Save a tricky passage as a target with its own settings. It’s still there, progress and all, when you reopen the project.',
    status: 'available',
    source: ROADMAP,
  },
  {
    id: 'loop-speed',
    pillar: 'practice',
    stage: 'focus',
    title: 'Loop and slow it down',
    description: 'Loop a passage between two points and play it back at whatever speed you can manage today.',
    status: 'available',
    source: ROADMAP,
  },
  {
    id: 'metronome',
    pillar: 'practice',
    stage: 'focus',
    title: 'Metronome and count-in',
    description: 'Keep time with a practice metronome and get a count-in before each run.',
    status: 'available',
    source: ROADMAP,
  },
  {
    id: 'clean-retry',
    pillar: 'practice',
    stage: 'progress',
    title: 'Clean or Retry: your call',
    description:
      'After each run, mark it Clean or Retry. You decide what counts as clean. SixLine doesn’t listen to or grade your playing.',
    status: 'available',
    source: `${ROADMAP}: manual, musician-confirmed passes only`,
  },
  {
    id: 'tempo-ladder',
    pillar: 'practice',
    stage: 'progress',
    title: 'Smart Tempo Ladder',
    description: 'After three clean passes, the tempo steps up, so speed follows consistency rather than the other way round.',
    status: 'available',
    source: `${ROADMAP}: initial version (three user-confirmed clean passes)`,
  },
  {
    id: 'speed-trainer',
    pillar: 'practice',
    stage: 'progress',
    title: 'Speed trainer',
    description: 'Prefer to set the pace yourself? Raise the tempo loop by loop, using increments you choose.',
    status: 'available',
    source: ROADMAP,
  },
  {
    id: 'practice-history',
    pillar: 'practice',
    stage: 'progress',
    title: 'Practice history',
    description: 'Your attempts are saved with the project, so each session picks up where the last one left off.',
    status: 'available',
    source: `${ROADMAP}: basic attempt/history persistence. No analytics claims`,
  },
  {
    id: 'practice-queue',
    pillar: 'practice',
    stage: 'plan',
    title: 'Practice Queue',
    description: 'Line up several difficult passages and work through them as one focused session.',
    status: 'preview',
    source: 'Roadmap: first-class launch priority, not yet implemented',
  },
  {
    id: 'in-play-bookmark',
    pillar: 'practice',
    stage: 'plan',
    title: 'Bookmark while you play',
    description: 'Flag a bar that trips you up with one keystroke, without stopping playback, and come back to it later.',
    status: 'preview',
    source: 'Roadmap: first-class launch priority, not yet implemented',
  },
  {
    id: 'progress-view',
    pillar: 'practice',
    stage: 'plan',
    title: 'Progress view',
    description: 'See each passage’s reliable tempo, clean runs and when you last practised it.',
    status: 'preview',
    source: 'Roadmap: launch priority, not yet implemented',
  },
  {
    id: 'riff-to-practice',
    pillar: 'practice',
    stage: 'plan',
    title: 'Practise a Riff Block',
    description: 'Turn a Riff Block straight into a practice target.',
    status: 'preview',
    source: 'Roadmap: launch priority, not yet implemented',
  },
  {
    id: 'personal-bests',
    pillar: 'practice',
    title: 'Personal bests',
    description: 'A record of the fastest tempo you’ve played each passage cleanly.',
    status: 'unverified',
    source: 'Owner: do not advertise until verified',
  },

  // ------------------------------------------------------------------ Create
  {
    id: 'riff-blocks',
    pillar: 'create',
    title: 'Riff Blocks',
    description:
      'Turn whole bars into named, reusable passages like “Main Riff”, “Chorus” or “Fill A” and place them throughout a song. Linked copies stay in sync, the notes stay visible and editable in the score, and any copy can become independent.',
    status: 'available',
    source: RIFF_NOTES,
  },
  {
    id: 'tab-notation',
    pillar: 'create',
    title: 'Tablature and notation',
    description:
      'Write in tab with standard notation alongside, including chords, rests, multiple voices, dynamics and playing techniques.',
    status: 'available',
    source: `Project brief; ${RIFF_NOTES}`,
  },
  {
    id: 'multi-track',
    pillar: 'create',
    title: 'Multitrack arrangements',
    description: 'Guitar, bass, drum and notation-only tracks in one song, each stringed track with its own tuning and capo.',
    status: 'available',
    source: `Project brief; ${RIFF_NOTES}`,
  },
  {
    id: 'playback',
    pillar: 'create',
    title: 'Playback',
    description: 'Hear exactly what you’ve written, every track and every bar.',
    status: 'available',
    source: 'Project brief',
  },
  {
    id: 'gp-import',
    pillar: 'create',
    title: 'Guitar Pro import',
    description: 'Open Guitar Pro 3, 4 and 5 files (GP3, GP4, GP5) and practise or keep working on them.',
    status: 'available',
    source: 'Owner confirmation, 18 Oct 2026',
  },
  {
    id: 'midi',
    pillar: 'create',
    title: 'MIDI import and export',
    description: 'Bring MIDI files in, and export your songs as MIDI.',
    status: 'available',
    source: 'Owner confirmation, 18 Oct 2026',
  },
  {
    id: 'print-pdf',
    pillar: 'create',
    title: 'Print and PDF',
    description: 'Print your scores or save them as PDF.',
    status: 'available',
    source: `${ROADMAP}: print/PDF output`,
  },
  {
    id: 'native-projects',
    pillar: 'create',
    title: 'Projects that are yours',
    description: 'Songs are saved locally in SixLine’s own project format, with autosave.',
    status: 'available',
    source: `${ROADMAP} (.tabproj); ${RIFF_NOTES} (saves and autosaves)`,
  },
  {
    id: 'smart-guitar-tools',
    pillar: 'create',
    title: 'Smart Guitar Tools',
    description: 'Make Playable, Re-finger and fingering locks.',
    status: 'unverified',
    source: 'Owner: awaiting verification from the desktop repository',
  },
  {
    id: 'mixing',
    pillar: 'create',
    title: 'Track volume, mute and solo',
    description: 'Balance tracks against each other while you listen or practise.',
    status: 'unverified',
    source: 'Owner: awaiting verification',
  },
];

const by = (pillar: FeaturePillar, status: FeatureStatus) =>
  features.filter((f) => f.pillar === pillar && f.status === status);

export const availableFeatures = (pillar: FeaturePillar) => by(pillar, 'available');
export const previewFeatures = (pillar: FeaturePillar) => by(pillar, 'preview');
/** Unverified items listed publicly. Personal bests are withheld entirely until verified (owner request). */
export const unverifiedFeatures = () => features.filter((f) => f.status === 'unverified' && f.id !== 'personal-bests');
export const featureById = (id: string) => features.find((f) => f.id === id);
export const isAvailable = (...ids: string[]) => ids.every((id) => featureById(id)?.status === 'available');

export const practiceStage = (stage: PracticeStage, status: FeatureStatus = 'available') =>
  features.filter((f) => f.pillar === 'practice' && f.stage === stage && f.status === status);

export const trademarkNotice =
  'Guitar Pro is a trademark of Arobas Music. SixLine is an independent product and is not affiliated with, endorsed by or sponsored by Arobas Music.';
