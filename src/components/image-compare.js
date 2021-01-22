import React from 'react';
import styled from 'styled-components';
import { ReactCompareSlider } from 'react-compare-slider';

import { Img, Intrinsic, Figure, Caption } from 'src/components';

const ImageSliderHandle = styled.div`
  --strokeWidth: 2px;
  --handleWidth: 1rem;
  --color: var(--colorBlack);

  background-color: var(--color);
  cursor: ew-resize;
  height: 100%;
  position: relative;
  width: var(--strokeWidth);

  &::after {
    background-color: var(--color);
    border-radius: 50%;
    content: '';
    height: var(--handleWidth);
    left: 0;
    margin-left: calc(var(--handleWidth) / -2 + var(--strokeWidth) / 2);
    margin-top: calc(var(--handleWidth) / -2);
    position: absolute;
    top: 50%;
    transform-origin: center;
    transition: transform var(--transitionDefault);
    width: var(--handleWidth);
  }
`;

const ImageSliderWrapper = styled.div`
  &:hover {
    ${ImageSliderHandle}::after {
      transform: scale(1.5);
    }
  }
`;

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
        <ImageSliderWrapper>
          <ReactCompareSlider
            handle={<ImageSliderHandle />}
            itemOne={<Img sizes="1040px" src={image1} />}
            itemTwo={<Img sizes="1040px" src={image2} />}
            {...props}
          />
        </ImageSliderWrapper>
      </Intrinsic>
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
};
