import styled from 'styled-components';

import { maxWidth } from '../../theme';

export const StyledGallery = styled.div`
  display: contents;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const StyledGalleryImage = styled.div`
  cursor: grab;
  display: block;
  height: calc((100vw - ${maxWidth}) / 3);
  opacity: 0;
  pointer-events: none;
  position: fixed;
  transition-duration: 90ms;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  width: calc((100vw - ${maxWidth}) / 3);
  z-index: 5;

  &::after {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 6;
  }

  &:active {
    cursor: grabbing;
  }

  &:nth-of-type(3n) {
    height: calc((100vw - ${maxWidth}) / 4);
    width: calc((100vw - ${maxWidth}) / 4);
  }

  img {
    display: block;
    margin-bottom: 0;
    user-select: none;
    width: 100%;
  }
`;
