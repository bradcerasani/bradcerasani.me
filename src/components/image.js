import React from 'react';
import Imgix from 'react-imgix';

import { Figure, Caption } from 'src/components';

export const Image = ({ src, caption, size, alt, sizes, ...props }) => {
  const url =
    process.env.NODE_ENV === 'development'
      ? `/images${src}`
      : `https://bradcerasani.imgix.net/images${src}`;

  // TODO: improve and add media queries
  let sizesFallback = '';

  switch (size) {
    case 'large':
      sizesFallback = '1040px';
      break;
    case 'full':
      sizesFallback = '100vw';
      break;
    default:
      // TODO: Swap with container width
      sizesFallback = '700px';
  }

  return (
    <Figure size={size} {...props}>
      <Imgix
        className="lazyload"
        sizes={sizes || sizesFallback}
        src={url}
        attributeConfig={{
          src: 'data-src',
          srcSet: 'data-srcset',
          sizes: 'data-sizes',
        }}
        htmlAttributes={{
          alt: alt || caption || 'Photo',
          src: `${url}?blur=100&w=400&auto=format`,
        }}
      />
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
};
