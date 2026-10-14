import { getCollection, type CollectionEntry } from 'astro:content';

export type Release = CollectionEntry<'releases'>;

/** Published releases, newest first. Drafts are excluded. */
export async function getReleases(): Promise<Release[]> {
  const entries = await getCollection('releases', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
