import type { Entry } from 'src/types';

export function filterEntriesByStatus(entries: Entry[], status: string) {
  return entries.filter((entry: Entry) => entry.data.status === status);
}
