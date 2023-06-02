import styled, { css } from 'styled-components';

import { breakpoint } from 'src/settings';

export const StyledGallery = styled.aside`
  display: contents;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const StyledGalleryImage = styled.div`
  --minDeviation: 0;
  --maxDeviation: 10;

  --smallImage: 180px;
  --mediumImage: 225px;
  --largeImage: 250px;

  cursor: grab;
  display: block;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  transition: opacity var(--transitionFast);
  z-index: 5;

  @media (min-width: ${breakpoint.md}) {
    --minDeviation: 0;
    --maxDeviation: 10;

    --smallImage: 290px;
    --mediumImage: 320px;
    --largeImage: 360px;
  }

  @media (min-width: ${breakpoint.lg}) {
    --minDeviation: 10;
    --maxDeviation: 20;

    --smallImage: 360px;
    --mediumImage: 400px;
    --largeImage: 440px;
  }

  @media (min-width: ${breakpoint.xl}) {
    --minDeviation: 10;
    --maxDeviation: 40;

    --smallImage: 440px;
    --mediumImage: 480px;
    --largeImage: 540px;
  }

  /* Sizes */

  &:nth-of-type(4n + 1) {
    height: var(--mediumImage);
    width: var(--mediumImage);
  }

  &:nth-of-type(4n + 2),
  &:nth-of-type(4n + 3) {
    height: var(--largeImage);
    width: var(--largeImage);
  }

  &:nth-of-type(4n + 4) {
    height: var(--smallImage);
    width: var(--smallImage);
  }

  /* Positions */

  &:nth-of-type(6n + 1) {
    bottom: 0;
    right: 0;
  }

  &:nth-of-type(6n + 2) {
    left: 0;
    top: 0;
  }

  &:nth-of-type(6n + 3) {
    right: 0;
    top: 0;
  }

  &:nth-of-type(6n + 4) {
    bottom: 0;
    left: 0;
  }

  &:nth-of-type(6n + 5) {
    right: 0;
    top: calc(50% - calc(var(--mediumImage) / 2));
  }

  &:nth-of-type(6n + 6) {
    left: 0;
    top: calc(50% - calc(var(--mediumImage) / 2));
  }

  &::after {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:active {
    cursor: grabbing;
  }

  img {
    display: block;
    height: 100%;
    margin-bottom: 0;
    object-fit: cover;
    user-select: none;
    width: 100%;
  }
`;

export const StyledGalleryController = styled.input`
  --handleSize: 0.875rem;
  --trackHeight: 3px;
  --trackColor: var(--colorGreyLighter);

  appearance: none;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  height: var(--handleSize);
  margin-top: var(--trackHeight);
  padding: 0 0 1px 0;
  position: relative;
  width: 100%;

  ${({ $isDiscovered }) =>
    !$isDiscovered &&
    css`
      &::before {
        animation: pulse 2s ease 0s infinite;
        background-color: white;
        border-radius: 50%;
        content: '';
        display: block;
        height: var(--handleSize);
        left: 0;
        position: absolute;
        top: 0;
        width: var(--handleSize);
        will-change: opacity, scale;
      }
    `}

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background-color: var(--trackColor);
    border-radius: calc(var(--trackHeight) / 2);
    height: var(--trackHeight);
  }

  &::-moz-range-track {
    background-color: var(--trackColor);
    border-radius: calc(var(--trackHeight) / 2);
    height: var(--trackHeight);
  }

  &::-webkit-slider-thumb {
    appearance: none;
    background-color: currentColor;
    border-radius: 50%;
    height: var(--handleSize);
    margin-top: calc(var(--trackHeight) / 2);
    transform: translateY(-50%);
    width: var(--handleSize);
    transition: transform var(--transitionFast);

    &:active {
      transform: scale(0.95) translateY(-50%);
    }
  }

  &::-moz-range-thumb {
    appearance: none;
    border: none;
    background-color: currentColor;
    border-radius: 50%;
    height: var(--handleSize);
    margin-top: 1rem calc(var(--trackHeight) / 2);
    width: var(--handleSize);
    transition: transform var(--transitionFast);

    &:active {
      transform: scale(0.95);
    }
  }

  &::-ms-fill-lower,
  &::-ms-fill-upper {
    background-color: var(--trackColor);
  }
`;
