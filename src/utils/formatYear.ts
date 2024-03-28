export function formatYear(date: Date) {
  return date.toLocaleDateString('en-CA', {
    timeZone: 'UTC',
    year: 'numeric',
  });
}
