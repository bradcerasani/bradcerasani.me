export const formatDate = (date: Date) =>
  date
    .toLocaleDateString('en-CA', {
      month: 'long',
      timeZone: 'UTC',
      year: 'numeric',
    })
    .replace('.', '');
