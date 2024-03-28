import type { CollectionEntry } from 'astro:content';
import type { EntryEssential } from 'src/types';

export function mapEntryEssentials(entries: CollectionEntry<'projects' | 'writing'>[]): EntryEssential[] {
  return entries.map(entry => {
    return {
      id: entry.id,
      slug: entry.slug,
      data: entry.data,
      collection: entry.collection,
    }
  }) as EntryEssential[]
}

