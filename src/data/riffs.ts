/**
 * Original example music used in illustrations. These are graphics drawn by
 * the website, not screenshots of the app, and are labelled as such.
 *
 * string: 1 = high e … 6 = low E (4-string parts: 1 = G … 4 = E)
 * step:   eighth-note position within the bar (0–7)
 */
export interface TabNote {
  step: number;
  string: number;
  fret: number | string;
  /** Technique into this note from the previous note on the same string. */
  tech?: 'h' | 'p' | '/';
  vibrato?: boolean;
}

export type TabBar = TabNote[];

/** A short, original A-minor arpeggio riff. */
export const riff: TabBar[] = [
  [
    { step: 0, string: 5, fret: 0 },
    { step: 0, string: 4, fret: 2 },
    { step: 1, string: 4, fret: 2 },
    { step: 2, string: 3, fret: 2 },
    { step: 3, string: 2, fret: 1 },
    { step: 4, string: 3, fret: 0 },
    { step: 5, string: 3, fret: 2, tech: 'h' },
    { step: 6, string: 2, fret: 1 },
    { step: 7, string: 1, fret: 0 },
  ],
  [
    { step: 0, string: 6, fret: 3 },
    { step: 0, string: 5, fret: 5 },
    { step: 1, string: 4, fret: 5 },
    { step: 2, string: 3, fret: 4 },
    { step: 3, string: 2, fret: 3 },
    { step: 4, string: 3, fret: 4 },
    { step: 5, string: 4, fret: 5 },
    { step: 6, string: 3, fret: 2 },
    { step: 7, string: 3, fret: 4, tech: '/', vibrato: true },
  ],
];

/** Continuation, so a full "page" can show two systems. */
export const riffAnswer: TabBar[] = [
  [
    { step: 0, string: 6, fret: 1 },
    { step: 0, string: 5, fret: 3 },
    { step: 1, string: 4, fret: 3 },
    { step: 2, string: 3, fret: 2 },
    { step: 3, string: 2, fret: 1 },
    { step: 4, string: 2, fret: 3 },
    { step: 5, string: 2, fret: 1, tech: 'p' },
    { step: 6, string: 3, fret: 2 },
    { step: 7, string: 4, fret: 3 },
  ],
  [
    { step: 0, string: 6, fret: 0 },
    { step: 0, string: 5, fret: 2 },
    { step: 0, string: 4, fret: 2 },
    { step: 2, string: 6, fret: 0 },
    { step: 3, string: 6, fret: 0 },
    { step: 4, string: 5, fret: 2 },
    { step: 4, string: 4, fret: 2 },
    { step: 6, string: 5, fret: 0 },
    { step: 6, string: 4, fret: 2, vibrato: true },
  ],
];

/** Parts used in the "riff to arrangement" illustration. */
export const arrangement = {
  rhythm: [
    [
      { step: 0, string: 5, fret: 0 },
      { step: 0, string: 4, fret: 2 },
      { step: 0, string: 3, fret: 2 },
      { step: 3, string: 5, fret: 0 },
      { step: 3, string: 4, fret: 2 },
      { step: 3, string: 3, fret: 2 },
      { step: 6, string: 6, fret: 3 },
      { step: 6, string: 5, fret: 5 },
      { step: 6, string: 4, fret: 5 },
    ],
    [
      { step: 0, string: 6, fret: 1 },
      { step: 0, string: 5, fret: 3 },
      { step: 0, string: 4, fret: 3 },
      { step: 3, string: 6, fret: 1 },
      { step: 3, string: 5, fret: 3 },
      { step: 3, string: 4, fret: 3 },
      { step: 6, string: 6, fret: 0 },
      { step: 6, string: 5, fret: 2 },
      { step: 6, string: 4, fret: 2 },
    ],
  ] as TabBar[],
  bass: [
    [
      { step: 0, string: 3, fret: 0 },
      { step: 2, string: 3, fret: 0 },
      { step: 3, string: 3, fret: 0 },
      { step: 4, string: 3, fret: 3 },
      { step: 6, string: 4, fret: 3 },
      { step: 7, string: 4, fret: 3 },
    ],
    [
      { step: 0, string: 4, fret: 1 },
      { step: 2, string: 4, fret: 1 },
      { step: 3, string: 4, fret: 1 },
      { step: 4, string: 4, fret: 3 },
      { step: 6, string: 4, fret: 0 },
      { step: 7, string: 3, fret: 2 },
    ],
  ] as TabBar[],
};
