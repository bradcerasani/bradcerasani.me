import styled, { css } from 'styled-components';

export const FluidWrapper = styled.div`
  background-color: #85a19f;
  margin-bottom: 0.75rem;
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;

  &::after {
    background-image: url('/images/gifs/loading.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 480px 370px;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  iframe {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition-delay: 100ms;
    transition-duration: 400ms;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    width: 100%;
    will-change: opacity;
    z-index: 1;
  }

  /* stylelint-disable-next-line */
  ${({ isLoaded }) =>
    isLoaded &&
    css`
      iframe {
        opacity: 1;
      }
    `}
`;
