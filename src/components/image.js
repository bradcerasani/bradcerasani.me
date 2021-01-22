import React from 'react';
import Imgix from 'react-imgix';

import { Figure, Caption } from 'src/components';

export const Img = ({ alt, src, sizes, ...props }) => {
  const url =
    process.env.NODE_ENV === 'development'
      ? `/images${src}`
      : `https://bradcerasani.imgix.net/images${src}`;

  return (
    <Imgix
      className="lazyload"
      htmlAttributes={{
        alt: alt || 'Photo',
        src: `${url}?blur=100&w=400&auto=format`,
      }}
      sizes={sizes}
      src={url}
      attributeConfig={{
        src: 'data-src',
        srcSet: 'data-srcset',
        sizes: 'data-sizes',
      }}
      {...props}
    />
  );
};

export const Image = ({ src, caption, size, alt, sizes, ...props }) => {
  // TODO: Add media queries
  let sizesFallback = '';

  switch (size) {
    case 'large':
      sizesFallback = '1040px';
      break;
    case 'full':
      sizesFallback = '100vw';
      break;
    default:
      sizesFallback = 'var(--maxWidth)';
  }

  return (
    <Figure size={size} {...props}>
      <Img sizes={sizes || sizesFallback} src={src} alt={alt || caption} />
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
};
