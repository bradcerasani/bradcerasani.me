import styled, { css } from 'styled-components';

import { color } from '../theme';

export const FluidWrapper = styled.div`
  background-color: ${color.grey.darker};
  margin-bottom: 0.75rem;
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;

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
