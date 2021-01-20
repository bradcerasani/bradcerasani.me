import styled from 'styled-components';

import { breakpoint } from 'src/settings';

export const ChatBubble = styled.div`
  --size: 0.875rem;

  /* Note: em units used for sizing relative to  */
  animation-duration: var(--transitionSlow);
  animation-fill-mode: both;
  animation-name: fadeInUp;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  background-color: var(--colorGreyLightest);
  border-radius: calc(2 * var(--size));
  color: var(--colorGreyDarker);
  display: inline-block;
  font-family: var(--fontFamilySystem);
  font-size: var(--size);
  line-height: 1;
  margin-left: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 0.8em;
  padding-right: 0.8em;
  padding-top: 0.5em;
  position: absolute;
  text-align: center;
  white-space: nowrap;

  &::before,
  &::after {
    bottom: 0;
    content: '';
    position: absolute;
  }

  &::before {
    background-color: var(--colorGreyLightest);
    border-bottom-right-radius: 1em;
    height: 1em;
    left: -0.4em;
    width: 1em;
    z-index: 0;
  }

  &::after {
    background-color: var(--computedBackgroundColor);
    border-bottom-right-radius: 0.6em;
    height: 1em;
    left: -0.6em;
    width: 0.6em;
    z-index: 0;
  }

  @media (min-width: ${breakpoint.md}) {
    --size: 0.75rem;
  }
`;
