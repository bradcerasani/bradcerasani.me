import styled, { css } from 'styled-components';

export const FluidWrapper = styled.div`
  background-color: var(--colorGreyLighter);
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
    transition: opacity var(--transitionDefault);
    transition-delay: 200ms;
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
