export const formatYear = (date: Date) =>
  date.toLocaleDateString('en-CA', {
    timeZone: 'UTC',
    year: 'numeric',
  });
