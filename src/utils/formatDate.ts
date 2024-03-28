export function formatDate(date: Date) {
  return date
    .toLocaleDateString('en-CA', {
      month: 'long',
      timeZone: 'UTC',
      year: 'numeric',
    })
    .replace('.', '');
}
