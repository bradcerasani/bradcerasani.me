import React from 'react';
import Imgix from 'react-imgix';
import styled from 'styled-components';

import { Figure, Caption } from '../atoms';

const Img = styled(Imgix)`
  display: block;
  margin-bottom: 0.75rem;
`;

export const Image = ({ src, caption, size, alt }) => {
  // TODO: Refactor assumption that image component is only used within /writing/*
  const url =
    process.env.NODE_ENV === 'development'
      ? `/images/writing/${src}`
      : `https://bradcerasani.imgix.net/images/writing/${src}`;

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
    <Figure size={size}>
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
