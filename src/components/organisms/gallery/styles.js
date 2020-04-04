import styled, { css } from 'styled-components';

import { breakpoint } from '../../theme';

export const StyledGallery = styled.div`
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

  --smallImage: 290px;
  --mediumImage: 320px;
  --largeImage: 360px;

  cursor: grab;
  display: block;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  transition-duration: 90ms;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  z-index: 5;

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

  /* stylelint-disable-next-line */
  ${({ isForward }) =>
    isForward &&
    css`
      /* z-index: 6; */
    `}

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
    margin-bottom: 0;
    user-select: none;
    width: 100%;
  }
`;

export const StyledGalleryController = styled.input`
  padding-left: 0;
  padding-right: 0;
  width: 100%;
`;
