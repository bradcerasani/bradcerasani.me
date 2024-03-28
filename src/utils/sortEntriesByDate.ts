import type { CollectionEntry } from 'astro:content';

export function sortEntriesByDate(entries: CollectionEntry<'projects' | 'writing'>[]) {
  return entries.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}
