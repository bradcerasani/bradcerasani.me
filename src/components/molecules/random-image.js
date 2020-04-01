import styled from 'styled-components';

// TODO: Remove 636px and use global container width

export const RandomImage = styled.div`
  cursor: grab;
  display: block;
  height: calc((100vw - 636px) / 3);
  opacity: 0;
  pointer-events: auto;
  pointer-events: none;
  position: absolute;
  transition-duration: 90ms;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  width: calc((100vw - 636px) / 3);
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
    height: calc((100vw - 636px) / 4);
    width: calc((100vw - 636px) / 4);
  }

  img {
    display: block;
    margin-bottom: 0;
    user-select: none;
    width: 100%;
  }
`;

export const RandomImageContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
`;
