/**
 * Development status shown on the homepage and /updates.
 *
 * Only publish what is actually true. Empty lists render a deliberate
 * "published at beta launch" state rather than invented content.
 * Release notes themselves live in src/content/releases/*.md.
 */
export const development = {
  /** One-line summary of where the project is. */
  summary: 'SixLine is in active development ahead of a public beta.',
  /** Short bullet points of upcoming priorities, e.g. 'Faster score rendering'. */
  upcomingPriorities: [] as string[],
  /** Known limitations of the current beta, e.g. 'No Linux build'. */
  betaLimitations: [] as string[],
};
