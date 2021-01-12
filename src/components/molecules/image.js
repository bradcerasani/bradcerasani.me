import React from 'react';
import Imgix from 'react-imgix';
import styled from 'styled-components';

import { Figure, Caption } from 'src/components/atoms';

const Img = styled(Imgix)`
  display: block;
  margin-bottom: 0.75rem;
`;

export const Image = ({ src, caption, size, alt, sizes, ...props }) => {
  const url =
    process.env.NODE_ENV === 'development'
      ? `/images/${src}`
      : `https://bradcerasani.imgix.net/images/${src}`;

  // TODO: improve and add media queries
  let sizesFallback = '';

  switch (size) {
    case 'large':
      sizesFallback = '800px';
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
      <Img
        sizes={sizes || sizesFallback}
        src={url}
        htmlAttributes={{
          alt: alt || caption,
        }}
      />
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
};
