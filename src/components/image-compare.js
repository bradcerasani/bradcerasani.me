import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactCompareSlider } from 'react-compare-slider';

import { Img, Intrinsic, Figure, Caption } from 'src/components';

const StyledHandle = styled.div`
  --strokeWidth: 2px;
  --handleSize: 1rem;
  --color: var(--colorBlack);

  background-color: var(--color);
  cursor: ew-resize;
  height: 100%;
  position: relative;
  width: var(--strokeWidth);

  &::before,
  &::after {
    background-color: var(--color);
    border-radius: 50%;
    content: '';
    height: var(--handleSize);
    left: 0;
    margin-left: calc(var(--handleSize) / -2 + var(--strokeWidth) / 2);
    margin-top: calc(var(--handleSize) / -2);
    position: absolute;
    top: 50%;
    width: var(--handleSize);
  }

  &::after {
    transform-origin: center;
    transition: transform var(--transitionDefault);
  }

  ${({ $isDiscovered }) =>
    !$isDiscovered &&
    css`
      &::before {
        background-color: white;
        animation: pulse 2s ease 0s infinite;
      }
    `}
`;

const Handle = () => {
  const [isDiscovered, setIsDiscovered] = useState(false);
  return (
    <StyledHandle
      onMouseDown={() => setIsDiscovered(true)}
      onTouchStart={() => setIsDiscovered(true)}
      $isDiscovered={isDiscovered}
    />
  );
};

export const ImageCompare = ({
  alt = 'Photo',
  caption,
  image1,
  image2,
  size,
  ...props
}) => {
  return (
    <Figure size={size}>
      <Intrinsic aspectRatio={{ base: '3 / 2' }}>
        <div>
          <ReactCompareSlider
            handle={<Handle />}
            itemOne={<Img sizes="1040px" src={image1} />}
            itemTwo={<Img sizes="1040px" src={image2} />}
            {...props}
          />
        </div>
      </Intrinsic>
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
};
