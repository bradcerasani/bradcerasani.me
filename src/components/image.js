import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
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
    `
    ${Img} {
      margin-left: -200px;
      margin-right: -200px;
      width: calc(100% + 400px);
    }
  `}

  ${(props) =>
    props.size === 'fullbleed' &&
    `
    ${Img} {
      margin-left: calc((100vw - 636px) / -2);
      margin-right: calc((100vw - 636px) / -2);
      width: 100vw;
      min-width: 100%;
    }
  `}
`;

const Image = ({ src, caption, size }) => {
  return (
    <Figure size={size}>
      <Img src={src} />
      <Caption>{caption}</Caption>
    </Figure>
  );
};

export default Image;
