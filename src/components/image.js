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
        src: `${url}?blur=100&w=100&auto=format`,
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

export const Image = ({
  alt,
  caption,
  height,
  sizes,
  src,
  width,
  ...props
}) => {
  const config = {
    width,
    height,
  };

  switch (props.$size) {
    case 'default':
      config.sizes = '640px';
      break;
    case 'large':
      config.sizes = '960px';
      break;
    case 'full':
      config.sizes = '100vw';
      break;
    default:
      config.sizes = 'var(--maxWidth)';
  }

  return (
    <Figure {...props}>
      <Img
        {...config}
        sizes={sizes || config.sizes}
        src={src}
        alt={alt || caption}
      />
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
};
