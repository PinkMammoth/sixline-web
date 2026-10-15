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
  /** Where SixLine is now and what comes next. Keep to facts that are already true or announced. */
  milestones: [
    {
      label: 'Now',
      title: 'In active development',
      body: 'SixLine is being built and refined ahead of its first public release.',
    },
    {
      label: 'Next',
      title: 'Public beta for Windows and macOS',
      body: 'A free trial to download, and the Founder’s Beta lifetime licence.',
    },
    {
      label: 'Then',
      title: 'Version 1.0, and every update after it',
      body: 'Included for everyone who has bought a licence, beta customers included.',
    },
  ],
};
