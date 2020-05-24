import React from 'react';
import Imgix from 'react-imgix';
import styled from 'styled-components';

import { Figure, Caption } from '../atoms';

const Img = styled(Imgix)`
  display: block;
  margin-bottom: 0.75rem;
`;

export const Image = ({ src, caption, size, alt, ...props }) => {
  const url =
    process.env.NODE_ENV === 'development'
      ? `/images/${src}`
      : `https://bradcerasani.imgix.net/images/${src}`;

  let sizes = '';

  switch (size) {
    case 'large':
      sizes = '800px';
      break;
    case 'full':
      sizes = '100vw';
      break;
    default:
      // TODO: Swap with container width
      sizes = '700px';
  }

  return (
    <Figure size={size} {...props}>
      <Img
        sizes={sizes}
        src={url}
        htmlAttributes={{
          alt,
          loading: 'lazy',
        }}
      />
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
};
