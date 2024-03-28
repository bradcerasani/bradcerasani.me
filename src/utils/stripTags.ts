export function stripTags(string: string) {
  return string.replace(/<[^>]*>?/gm, '');
}
