import React from 'react';
import styled from 'styled-components';
import Imgix from 'react-imgix';
import { ReactCompareSlider } from 'react-compare-slider';

import { Intrinsic, Figure, Caption } from 'src/components';

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
  // TODO: abstract
  function urlify(src) {
    const path =
      process.env.NODE_ENV === 'development'
        ? `/images/${src}`
        : `https://bradcerasani.imgix.net/images/${src}`;
    return path;
  }

  let sizes = '';

  switch (size) {
    case 'large':
      sizes = '1040px';
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
      <Intrinsic aspect="3 / 2">
        <ImageSliderWrapper>
          <ReactCompareSlider
            handle={<ImageSliderHandle />}
            itemOne={
              <Imgix
                sizes={sizes}
                src={urlify(image1)}
                htmlAttributes={{
                  alt,
                  loading: 'lazy',
                }}
              />
            }
            itemTwo={
              <Imgix
                sizes={sizes}
                src={urlify(image2)}
                htmlAttributes={{
                  alt,
                  loading: 'lazy',
                }}
              />
            }
            {...props}
          />
        </ImageSliderWrapper>
      </Intrinsic>
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
};
