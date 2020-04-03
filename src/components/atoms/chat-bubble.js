import styled from 'styled-components';

import { color, font } from '../theme';

export const ChatBubble = styled.div`
  animation-duration: 400ms;
  animation-fill-mode: both;
  animation-name: fadeInUp;
  animation-timing-function: ease-in-out;
  background-color: #eee;
  border-radius: 1em;
  display: inline-block;
  font-family: ${font.family.system};
  font-size: 0.8rem;
  line-height: 1;
  margin-left: 1rem;
  padding: 0.4em 0.8em 0.4em 0.7em;
  position: relative;
  position: absolute;

  &::before,
  &::after {
    bottom: 0;
    content: '';
    position: absolute;
  }

  &::before {
    background-color: #eee;
    border-bottom-right-radius: 1em;
    height: 1em;
    left: -0.4em;
    width: 1em;
    z-index: 0;
  }

  &::after {
    background-color: ${color.linen.default};
    border-bottom-right-radius: 0.6em;
    height: 1em;
    left: -0.6em;
    width: 0.6em;
    z-index: 0;
  }
`;
