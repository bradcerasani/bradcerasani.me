export const isImage = (fileUrl) => /\.(gif|jpe?g|png|webp)$/i.test(fileUrl);

export const stripTags = (string) => string.replace(/<[^>]*>?/gm, '');
