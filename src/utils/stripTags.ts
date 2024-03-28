export const stripTags = (string: string) => string.replace(/<[^>]*>?/gm, '');
