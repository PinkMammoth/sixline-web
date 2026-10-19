/**
 * Feature catalogue — the single source for every capability claim on the site.
 *
 * Status (what the site is allowed to say):
 *   available  — implemented and verified. Shown as fact.
 *   preview    — committed to the launch scope but not yet implemented or
 *                verified. Shown ONLY with a visible "Launch preview" label.
 *   concept    — exploratory, NOT committed to launch. Shown only with a
 *                visible "Future concept" label, never as a promise.
 *   unverified — reported but awaiting verification against the desktop app.
 *                Listed only on /features as "Being verified"; never marketed.
 *
 * Never on the site in any form: automatic performance grading, DI/audio/MIDI
 * input assessment, AI coaching or AI-generated practice plans.
 *
 * `source` records why a status was chosen, so claims can be audited.
 * See docs/content-status.md for the full matrix.
 */

export type FeatureStatus = 'available' | 'preview' | 'concept' | 'unverified';

export type FeaturePillar = 'practice' | 'create';

/** Practice features are grouped into the three propositions of the practice story. */
export type PracticeStage = 'focus' | 'plan' | 'resume';

/** Create features are grouped into three propositions plus the supporting editor. */
export type CreateTheme = 'ideas' | 'experiment' | 'possibilities' | 'editor';

export interface Feature {
  id: string;
  pillar: FeaturePillar;
  stage?: PracticeStage;
  theme?: CreateTheme;
  title: string;
  description: string;
  status: FeatureStatus;
  source: string;
}

const ROADMAP = 'Owner roadmap, 18 Oct 2026 (implemented foundation, v0.7.x)';
const LAUNCH = 'Owner roadmap: first-class launch priority, not yet implemented';
const RIFF_NOTES = 'Owner description of Riff Blocks (desktop app v0.6.0, commit fa0e196)';

export const statusLabel: Record<Exclude<FeatureStatus, 'available'>, string> = {
  preview: 'Launch preview',
  concept: 'Future concept',
  unverified: 'Being verified',
};

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
      'Capture ideas, link and reuse them across a song, and shape them into complete pieces, in an editor designed around the way musicians actually work.',
  },
};

export const stageMeta: Record<PracticeStage, { label: string; title: string }> = {
  focus: { label: 'Focused practice', title: 'Work on what’s hard' },
  plan: { label: 'Build your practice plan', title: 'Assemble a session' },
  resume: { label: 'Pick up where you left off', title: 'Carry on tomorrow' },
};

export const themeMeta: Record<Exclude<CreateTheme, 'editor'>, { title: string }> = {
  ideas: { title: 'Riff Blocks and linked ideas' },
  experiment: { title: 'Experiment without risk' },
  possibilities: { title: 'Explore the possibilities' },
};

export const features: Feature[] = [
  // ------------------------------------------------- Practice · focused practice
  {
    id: 'practice-mode',
    pillar: 'practice',
    stage: 'focus',
    title: 'Practice Mode',
    description:
      'Select some bars and press Practise. The score focuses on your passage, with looping, tempo, metronome and count-in ready, and you can return to the editor at any time.',
    status: 'available',
    source: ROADMAP,
  },
  {
    id: 'loop-tempo',
    pillar: 'practice',
    stage: 'focus',
    title: 'A/B loop and tempo control',
    description:
      'Loop the passage between two points and set the tempo you can manage today, with a practice metronome and count-in. Or let the speed trainer raise it loop by loop, in increments you choose.',
    status: 'available',
    source: ROADMAP,
  },
  {
    id: 'clean-retry',
    pillar: 'practice',
    stage: 'focus',
    title: 'Clean or Retry: your call',
    description:
      'After each run, mark it Clean or Retry. You decide what counts as clean. SixLine doesn’t listen to or grade your playing.',
    status: 'available',
    source: `${ROADMAP}: manual, musician-confirmed passes only`,
  },
  {
    id: 'tempo-ladder',
    pillar: 'practice',
    stage: 'focus',
    title: 'Smart Tempo Ladder',
    description: 'After three clean passes the tempo steps up, so speed follows consistency rather than the other way round.',
    status: 'available',
    source: `${ROADMAP}: initial version (three user-confirmed clean passes)`,
  },

  // ---------------------------------------------- Practice · build your plan
  {
    id: 'saved-targets',
    pillar: 'practice',
    stage: 'plan',
    title: 'Saved practice targets',
    description:
      'Save every hard passage in a song as a target (the intro riff, the bridge, the solo’s last run), each with its own loop and tempo settings.',
    status: 'available',
    source: ROADMAP,
  },
  {
    id: 'practice-queue',
    pillar: 'practice',
    stage: 'plan',
    title: 'Practice Queue',
    description:
      'Line up a song’s difficult passages and work through them as one session, moving to the next with a keystroke. Each passage opens with its own tempo, loop and count-in.',
    status: 'preview',
    source: `${LAUNCH} (v1 works within one song)`,
  },
  {
    id: 'in-play-bookmark',
    pillar: 'practice',
    stage: 'plan',
    title: 'Bookmark while you play',
    description: 'Play through a song and flag each bar that trips you up with one keystroke, without stopping, then add the bookmarks to your session.',
    status: 'preview',
    source: LAUNCH,
  },
  {
    id: 'passage-breakdown',
    pillar: 'practice',
    stage: 'plan',
    title: 'Passage breakdown',
    description: 'Split a long or difficult passage into short, editable chunks, then build them back up (A, B, A+B) into the whole phrase.',
    status: 'preview',
    source: 'Owner roadmap: pre-launch priority (simple structured chunk breakdown and transitions)',
  },
  {
    id: 'riff-to-practice',
    pillar: 'practice',
    stage: 'plan',
    title: 'Practise a Riff Block',
    description: 'Turn a Riff Block straight into a practice target.',
    status: 'preview',
    source: LAUNCH,
  },

  // ------------------------------------------ Practice · pick up where you left off
  {
    id: 'target-progress',
    pillar: 'practice',
    stage: 'resume',
    title: 'Targets that remember',
    description: 'Every saved target keeps its settings and progress with the project, ready when you reopen it.',
    status: 'available',
    source: ROADMAP,
  },
  {
    id: 'practice-history',
    pillar: 'practice',
    stage: 'resume',
    title: 'Practice history',
    description: 'Your attempts are saved with the project, so each session builds on the last.',
    status: 'available',
    source: `${ROADMAP}: basic attempt/history persistence. No analytics claims`,
  },
  {
    id: 'session-resume',
    pillar: 'practice',
    stage: 'resume',
    title: 'Resume a session',
    description: 'Stop halfway through a practice session and pick it up later, with every passage and outcome intact.',
    status: 'preview',
    source: `${LAUNCH} (queue/session persistence)`,
  },
  {
    id: 'progress-view',
    pillar: 'practice',
    stage: 'resume',
    title: 'Progress view',
    description: 'See each passage’s reliable tempo, clean runs and when you last practised it.',
    status: 'preview',
    source: 'Owner roadmap: launch priority, not yet implemented',
  },
  {
    id: 'multi-song-queue',
    pillar: 'practice',
    stage: 'resume',
    title: 'One queue, many songs',
    description:
      'Move between difficult passages from different songs in a single session, without opening and closing projects yourself.',
    status: 'concept',
    source: 'Owner roadmap: multiple projects only once safe project switching and missing-file handling are proven',
  },
  {
    id: 'personal-bests',
    pillar: 'practice',
    stage: 'resume',
    title: 'Personal bests',
    description: 'A record of the fastest tempo you’ve played each passage cleanly.',
    status: 'unverified',
    source: 'Owner: do not advertise until verified',
  },

  // --------------------------------------------------- Create · linked ideas
  {
    id: 'riff-blocks',
    pillar: 'create',
    theme: 'ideas',
    title: 'Riff Blocks',
    description:
      'Turn whole bars into named, reusable passages like “Main Riff”, “Chorus” or “Fill A” and place them throughout a song. Linked copies stay in sync, the notes stay visible and editable in the score, and any copy can become independent.',
    status: 'available',
    source: RIFF_NOTES,
  },
  {
    id: 'riff-variations',
    pillar: 'create',
    theme: 'experiment',
    title: 'Variations without losing the original',
    description:
      'Duplicate a block into a variation like “Main Riff B”, or detach one copy and change it, while every other copy stays exactly as it was.',
    status: 'available',
    source: RIFF_NOTES,
  },

  // ------------------------------------------------- Create · experimentation
  {
    id: 'compare-edits',
    pillar: 'create',
    theme: 'experiment',
    title: 'Audition and compare changes',
    description:
      'Preview a transposition, re-fingering or other change, compare versions side by side, then keep it or discard it without touching your saved song.',
    status: 'concept',
    source: 'Owner roadmap §1: non-destructive previews and side-by-side comparison (not marked as launch scope)',
  },

  // --------------------------------------------- Create · creative possibilities
  {
    id: 'creative-suggestions',
    pillar: 'create',
    theme: 'possibilities',
    title: 'Voicings, fingerings and harmonies',
    description:
      'Alternate chord voicings, alternative fingerings for the same notes, harmony options and layered suggestion parts that you can try, edit or ignore.',
    status: 'concept',
    source: 'Owner roadmap §1: alternative fingerings, voicings, harmonies, layered suggestions (not marked as launch scope)',
  },
  {
    id: 'smart-guitar-tools',
    pillar: 'create',
    theme: 'possibilities',
    title: 'Smart Guitar Tools',
    description: 'Make Playable, Re-finger and fingering locks.',
    status: 'unverified',
    source: 'Owner: awaiting verification from the desktop repository',
  },

  // ---------------------------------------------- Create · supporting editor
  {
    id: 'tab-notation',
    pillar: 'create',
    theme: 'editor',
    title: 'Tab and standard notation',
    description: 'Chords, rests, multiple voices, dynamics and playing techniques.',
    status: 'available',
    source: `Project brief; ${RIFF_NOTES}`,
  },
  {
    id: 'multi-track',
    pillar: 'create',
    theme: 'editor',
    title: 'Multitrack songs',
    description: 'Guitar, bass, drum and notation-only tracks, with tuning and capo per stringed track.',
    status: 'available',
    source: `Project brief; ${RIFF_NOTES}`,
  },
  {
    id: 'playback',
    pillar: 'create',
    theme: 'editor',
    title: 'Playback',
    description: 'Hear every track and every bar.',
    status: 'available',
    source: 'Project brief',
  },
  {
    id: 'gp-import',
    pillar: 'create',
    theme: 'editor',
    title: 'Guitar Pro import',
    description: 'GP3, GP4 and GP5 files.',
    status: 'available',
    source: 'Owner confirmation, 18 Oct 2026',
  },
  {
    id: 'midi',
    pillar: 'create',
    theme: 'editor',
    title: 'MIDI import and export',
    description: 'Bring MIDI in, and export your songs as MIDI.',
    status: 'available',
    source: 'Owner confirmation, 18 Oct 2026',
  },
  {
    id: 'print-pdf',
    pillar: 'create',
    theme: 'editor',
    title: 'Print and PDF',
    description: 'Print scores or save them as PDF.',
    status: 'available',
    source: `${ROADMAP}: print/PDF output`,
  },
  {
    id: 'native-projects',
    pillar: 'create',
    theme: 'editor',
    title: 'Local projects',
    description: 'Saved in SixLine’s own project format, with autosave.',
    status: 'available',
    source: `${ROADMAP} (.tabproj); ${RIFF_NOTES} (saves and autosaves)`,
  },
  {
    id: 'mixing',
    pillar: 'create',
    theme: 'editor',
    title: 'Track volume, mute and solo',
    description: 'Balance tracks against each other while you listen or practise.',
    status: 'unverified',
    source: 'Owner: awaiting verification',
  },
];

const by = (pillar: FeaturePillar, status: FeatureStatus) =>
  features.filter((f) => f.pillar === pillar && f.status === status);

export const availableFeatures = (pillar: FeaturePillar) => by(pillar, 'available');
export const previewFeatures = (pillar?: FeaturePillar) => features.filter((f) => f.status === 'preview' && (!pillar || f.pillar === pillar));
export const conceptFeatures = (pillar?: FeaturePillar) => features.filter((f) => f.status === 'concept' && (!pillar || f.pillar === pillar));
/** Unverified items listed publicly. Personal bests are withheld entirely until verified (owner request). */
export const unverifiedFeatures = () => features.filter((f) => f.status === 'unverified' && f.id !== 'personal-bests');
export const featureById = (id: string) => features.find((f) => f.id === id);
export const isAvailable = (...ids: string[]) => ids.every((id) => featureById(id)?.status === 'available');

/** Practice features for a stage, in display order: available first, then previews, then concepts. Unverified never. */
export const practiceStage = (stage: PracticeStage) =>
  sortByStatus(features.filter((f) => f.pillar === 'practice' && f.stage === stage && f.status !== 'unverified'));

/** Create features for a theme, same ordering and exclusions. */
export const createTheme = (theme: CreateTheme) =>
  sortByStatus(features.filter((f) => f.pillar === 'create' && f.theme === theme && f.status !== 'unverified'));

const order: Record<FeatureStatus, number> = { available: 0, preview: 1, concept: 2, unverified: 3 };
const sortByStatus = (list: Feature[]) => [...list].sort((a, b) => order[a.status] - order[b.status]);

export const trademarkNotice =
  'Guitar Pro is a trademark of Arobas Music. SixLine is an independent product and is not affiliated with, endorsed by or sponsored by Arobas Music.';
