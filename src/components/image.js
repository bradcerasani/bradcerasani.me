import React from 'react';
import Imgix from 'react-imgix';
import styled, { css } from 'styled-components';

const Img = styled(Imgix)`
  display: block;
  margin-bottom: 0.75rem;
`;

const Caption = styled.figcaption`
  color: hsl(0, 0%, 40%);
  font-size: 15px;
  font-style: italic;
  text-align: center;
`;

const Figure = styled.figure`
  display: block;
  margin: 0;
  margin-bottom: 1.5rem;

  ${(props) =>
    props.size === 'large' &&
    css`
      ${Img} {
        margin-left: -200px;
        margin-right: -200px;
        width: calc(100% + 400px);
      }
    `}

  ${(props) =>
    props.size === 'full' &&
    css`
      ${Img} {
        margin-left: calc((100vw - 636px) / -2);
        margin-right: calc((100vw - 636px) / -2);
        width: 100vw;
        min-width: 100%;
      }
    `}
`;

export const Image = ({ src, caption, size, alt }, props) => {
  // TODO: Refactor assumption that image component is only used within /writing/*
  const url =
    process.env.NODE_ENV === 'development'
      ? `/images/writing/${src}`
      : `https://bradcerasani.imgix.net/images/writing/${src}`;

  return (
    <Figure size={size}>
      <Img
        src={url}
        htmlAttributes={{
          alt,
          loading: 'lazy',
        }}
      />
      <Caption>{caption}</Caption>
    </Figure>
  );
};

export default Image;
