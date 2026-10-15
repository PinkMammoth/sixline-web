/**
 * Feature catalogue.
 *
 * Every public capability claim on the site comes from this file.
 *
 * `status` is what the site displays:
 *   available       — works in the current development build
 *   in-development  — actively being built, not yet usable
 *   planned         — intended, work not started
 *   unconfirmed     — not yet verified against the desktop app; shown as
 *                     "To be confirmed" so nothing is over-claimed
 *
 * `source` records why the status was chosen, so claims can be audited.
 * Before launch, every `unconfirmed` entry must be verified against the
 * desktop app and moved to a real status. See docs/content-status.md.
 */

export type FeatureStatus = 'available' | 'in-development' | 'planned' | 'unconfirmed';

export type FeatureGroup = 'writing' | 'playback' | 'compatibility';

export interface Feature {
  id: string;
  group: FeatureGroup;
  title: string;
  description: string;
  status: FeatureStatus;
  source: string;
}

export const statusMeta: Record<FeatureStatus, { label: string; description: string }> = {
  available: {
    label: 'In current build',
    description: 'Working in the current development build of SixLine.',
  },
  'in-development': {
    label: 'In development',
    description: 'Actively being built. Not yet usable.',
  },
  planned: {
    label: 'Planned',
    description: 'On the roadmap. Work has not started.',
  },
  unconfirmed: {
    label: 'To be confirmed',
    description: 'Details are being verified and will be confirmed before launch.',
  },
};

/**
 * The two product promises: Create (writing) and Master (playback & practice).
 * Copy here is shared by the homepage and /features.
 */
export const groupMeta: Record<FeatureGroup, { label: string; title: string; intro: string }> = {
  writing: {
    label: 'Create',
    title: 'From first riff to finished arrangement.',
    intro:
      'Capture ideas, write guitar and bass parts, build multitrack songs and explore arrangements in an editor designed around the way musicians actually work.',
  },
  playback: {
    label: 'Master',
    title: 'Don’t just learn the notes. Own them.',
    intro:
      'Loop difficult passages, slow things down and build your speed with flexible tempo training. SixLine helps turn notation into focused practice.',
  },
  compatibility: {
    label: 'Compatibility',
    title: 'Bring your existing tabs with you.',
    intro: 'Open the files you already have and keep working on them in SixLine.',
  },
};

export const features: Feature[] = [
  // ---- Create: writing & composition
  {
    id: 'riff-blocks',
    group: 'writing',
    title: 'Riff Blocks',
    description: 'Capture riffs as Riff Blocks and build your songs from them.',
    status: 'available',
    source: 'Positioning refresh brief: Riff Blocks named as an implemented editing workflow to feature. Description to be confirmed by the owner.',
  },
  {
    id: 'tab-notation',
    group: 'writing',
    title: 'Tablature and notation',
    description: 'Edit guitar tablature with standard music notation alongside it.',
    status: 'available',
    source: 'Project brief: SixLine is a tablature and music notation editor.',
  },
  {
    id: 'multi-track',
    group: 'writing',
    title: 'Multi-track composition',
    description: 'Arrange complete songs across multiple tracks in a single project.',
    status: 'available',
    source: 'Project brief: supports multi-track arrangements.',
  },
  {
    id: 'rhythm-technique',
    group: 'writing',
    title: 'Rhythm and technique editing',
    description: 'Set note durations and add playing techniques directly on the tab.',
    status: 'unconfirmed',
    source: 'Requested for showcase; specific techniques not yet verified.',
  },
  {
    id: 'instrument-tracks',
    group: 'writing',
    title: 'Instrument tracks',
    description: 'Give each part its own instrument track.',
    status: 'unconfirmed',
    source: 'Requested for showcase; instrument/tuning options not yet verified.',
  },
  {
    id: 'native-projects',
    group: 'writing',
    title: 'Native project saving',
    description: 'Save your work in SixLine’s own project format.',
    status: 'unconfirmed',
    source: 'Requested for showcase; file format details not yet verified.',
  },

  // ---- Playback & practice
  {
    id: 'playback',
    group: 'playback',
    title: 'Playback',
    description: 'Play back your arrangement to hear exactly what you have written.',
    status: 'available',
    source: 'Project brief: supports playback.',
  },
  {
    id: 'tempo',
    group: 'playback',
    title: 'Slow it down',
    description: 'Slow a passage down to learn it, then bring it back up to speed.',
    status: 'available',
    source: 'Positioning refresh brief: the Master copy (owner-supplied) states looping and slowing down as current capabilities.',
  },
  {
    id: 'ab-loop',
    group: 'playback',
    title: 'Loop the hard part',
    description: 'Loop a difficult passage between two points and repeat it as often as you need.',
    status: 'available',
    source: 'Positioning refresh brief: the Master copy (owner-supplied) states looping and slowing down as current capabilities.',
  },
  {
    id: 'metronome',
    group: 'playback',
    title: 'Metronome and count-in',
    description: 'Keep time with a click and get a count-in before playback starts.',
    status: 'unconfirmed',
    source: 'Requested for showcase; not yet verified.',
  },
  {
    id: 'mixing',
    group: 'playback',
    title: 'Track mixing',
    description: 'Balance tracks against each other while you listen or practise.',
    status: 'unconfirmed',
    source: 'Requested for showcase; not yet verified.',
  },

  // ---- Master: Practice Mode (coming soon — not released)
  {
    id: 'practice-targets',
    group: 'playback',
    title: 'Saved practice targets',
    description: 'Save the passage and target tempo you’re working towards, and pick up where you left off.',
    status: 'in-development',
    source: 'Positioning refresh brief: Practice Mode, to be shown as coming soon until released.',
  },
  {
    id: 'clean-reps',
    group: 'playback',
    title: 'Clean-repetition progression',
    description: 'Log clean run-throughs as you play them and step the tempo up as they add up.',
    status: 'in-development',
    source: 'Positioning refresh brief: Practice Mode. Must not imply automatic playing-accuracy detection.',
  },
  {
    id: 'personal-bests',
    group: 'playback',
    title: 'Personal bests',
    description: 'Keep a record of the fastest tempo you’ve played each passage cleanly.',
    status: 'in-development',
    source: 'Positioning refresh brief: Practice Mode, to be shown as coming soon until released.',
  },

  // ---- Compatibility & workflow
  {
    id: 'gp-import',
    group: 'compatibility',
    title: 'Guitar Pro import',
    description: 'Open Guitar Pro files and continue working on them in SixLine.',
    status: 'available',
    source: 'Project brief: supports Guitar Pro file import. Supported versions listed separately.',
  },
  {
    id: 'midi',
    group: 'compatibility',
    title: 'MIDI',
    description: 'Work with MIDI alongside your tablature.',
    status: 'available',
    source: 'Project brief: supports MIDI functionality. Import/export specifics listed separately.',
  },
  {
    id: 'print-pdf',
    group: 'compatibility',
    title: 'Printing and PDF export',
    description: 'Print your scores or export them as PDF.',
    status: 'unconfirmed',
    source: 'Requested for showcase; not yet verified.',
  },
];

/** File-format matrix for the compatibility section. */
export interface FormatSupport {
  format: string;
  detail: string;
  direction: 'Import' | 'Export' | 'Open & save' | 'Import & export';
  status: FeatureStatus;
}

export const formats: FormatSupport[] = [
  { format: 'GP3', detail: 'Guitar Pro 3', direction: 'Import', status: 'unconfirmed' },
  { format: 'GP4', detail: 'Guitar Pro 4', direction: 'Import', status: 'unconfirmed' },
  { format: 'GP5', detail: 'Guitar Pro 5', direction: 'Import', status: 'unconfirmed' },
  { format: 'MIDI', detail: 'Standard MIDI file', direction: 'Import & export', status: 'unconfirmed' },
  { format: 'SixLine', detail: 'Native project file', direction: 'Open & save', status: 'unconfirmed' },
  { format: 'PDF', detail: 'Printable score', direction: 'Export', status: 'unconfirmed' },
];

export const featuresByGroup = (group: FeatureGroup) => features.filter((f) => f.group === group);

/**
 * Marketing sections only ever show `available` features. Everything else is
 * listed separately and honestly as "on the workbench" (see /features).
 */
export const availableFeatures = (group?: FeatureGroup) =>
  features.filter((f) => f.status === 'available' && (!group || f.group === group));

/** Not yet verified against the app: listed only on /features#workbench. */
export const workbenchFeatures = () => features.filter((f) => f.status === 'unconfirmed');

/** Being built and shown as "Coming soon" (e.g. Practice Mode). */
export const comingSoonFeatures = (group?: FeatureGroup) =>
  features.filter((f) => (f.status === 'in-development' || f.status === 'planned') && (!group || f.group === group));

/** Formats that are confirmed, in plain language, for the compatibility section. */
export const confirmedFormats = [
  {
    name: 'Guitar Pro',
    direction: 'Import',
    description: 'Open your Guitar Pro files and carry on working on them in SixLine.',
  },
  {
    name: 'MIDI',
    direction: 'Supported',
    description: 'Work with MIDI alongside your tablature and notation.',
  },
];

export const trademarkNotice =
  'Guitar Pro is a trademark of Arobas Music. SixLine is an independent product and is not affiliated with, endorsed by or sponsored by Arobas Music.';
