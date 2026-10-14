import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Release notes. One Markdown file per desktop app release.
 * Files starting with an underscore are ignored (see _template.md).
 */
const releases = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/releases' }),
  schema: z.object({
    version: z.string(),
    date: z.coerce.date(),
    channel: z.enum(['beta', 'stable']).default('beta'),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { releases };
