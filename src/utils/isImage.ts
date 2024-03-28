export function isImage(fileUrl: string): boolean {
  return /\.(gif|jpe?g|png|webp)$/i.test(fileUrl);
}
