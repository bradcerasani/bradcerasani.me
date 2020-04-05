import { css } from 'styled-components';

import { breakpoint, color, font, transition } from '../theme';
import { Noise } from '../atoms/noise';

const Elements = css`
  :root {
    --backgroundColor: ${color.linen.default};
  }

  html,
  body {
    font-family: ${font.family.sansSerif};
    font-size: ${font.size.body};
    min-height: 100%;

    @media (min-width: ${breakpoint.md}) {
      font-size: 20px;
    }
  }

  body {
    background-color: var(--backgroundColor);
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    transition-duration: ${transition.slow};
    transition-property: background-color, color;
    transition-timing-function: ease-in-out;

    &::after {
      ${Noise}
      opacity: 0.2;
      z-index: 0;
    }
  }

  section {
    color: ${color.grey.darker};
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 1.5rem;
    margin-top: 0;
  }

  ol,
  ul {
    margin-left: 0;
    padding-left: 0;
  }

  ul {
    list-style-type: none;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  li {
    margin-bottom: 0;
  }

  a {
    color: inherit;
    text-decoration-color: ${color.grey.dark};

    &:hover {
      color: ${color.black};
      text-decoration-color: ${color.black};
    }
  }

  a[target='_blank'] {
    font-variant-numeric: tabular-nums;

    &::after {
      content: '↟';
      display: inline-block;
      padding-left: 8px;
      position: relative;
      transform: rotate(45deg);
      transform-origin: 100%;
      z-index: -1;
    }
  }

  img,
  video {
    display: block;
    margin-bottom: 1rem;
    width: 100%;
  }

  hr {
    background-color: transparent;
    border-bottom: 2px solid currentColor;
    border-left: none;
    border-right: none;
    border-top: 2px solid currentColor;
    height: 6px;
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
  }

  blockquote {
    display: block;
    margin-left: 0;
    padding-bottom: 0.75rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    position: relative;
    width: 80%;

    &::before {
      content: '“';
      font-family: ${font.family.serif};
      font-size: 100px;
      left: -60px;
      position: absolute;
      top: -20px;
    }

    p {
      background-color: ${color.highlight};
      display: inline;
      font-size: 22px;
      font-style: italic;
    }
  }
`;

export default Elements;
