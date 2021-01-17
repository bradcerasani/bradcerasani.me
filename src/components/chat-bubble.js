import styled from 'styled-components';

import { breakpoint } from 'src/settings';

export const ChatBubble = styled.div`
  animation-duration: 400ms;
  animation-fill-mode: both;
  animation-name: fadeInUp;
  animation-timing-function: ease-in-out;
  background-color: var(--colorGreyLightest);
  border-radius: 1em;
  color: var(--colorGreyDarker);
  display: inline-block;
  font-family: var(--fontFamilySystem);
  font-size: 0.875rem;
  line-height: 1;
  margin-left: 0.5rem;
  padding: 0.4em 0.8em 0.4em 0.7em;
  position: absolute;
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
    font-size: 0.7rem;
    margin-left: 0.75rem;
    margin-top: 0.2rem;
  }
`;
