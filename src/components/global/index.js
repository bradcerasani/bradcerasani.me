import { createGlobalStyle } from 'styled-components';
import { modernNormalize } from './modern-normalize';

import { font, breakpoints } from '../settings';
import { Noise } from '../atoms/noise';

export const GlobalStyle = createGlobalStyle`
  ${modernNormalize}

  html, body {
    font-family: ${font.family.sansSerif};
    font-size: ${font.size.body};
    height: 100%;
    scroll-behavior: smooth;

    @media (min-width: ${breakpoints.md}) {
      font-size: 20px;
    }
  }

  body {
    background-color: ${(props) =>
      props.backgroundColor || 'hsl(35, 10%, 86%)'};
    text-rendering: optimizeLegibility;
    transition-duration: 400ms;
    transition-property: background-color, color;
    transition-timing-function: ease-in-out;

    &::after {
      ${Noise}

      opacity: 0.2;
      z-index: 0;
    }
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    line-height: 1.25;
  }

  h6 {
    font-family: ${font.family.serif};
    font-size: 1.15rem;
    font-weight: 600;
    letter-spacing: 0;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  section {
    color: hsl(0, 0%, 20%);
    line-height: 1.4;
    margin-bottom: 64px;
  }

  p {
    margin-bottom: 1.5rem;
    margin-top: 0;
  }

  a {
    color: inherit;
    text-decoration-color: hsl(0, 0%, 36%);

    &:hover {
      color: black;
      text-decoration-color: black;
    }
  }

  ul {
    list-style-type: none;
    margin-bottom: 1rem;
    margin-left: 0;
    margin-top: 0;
    padding-left: 0;
  }

  li {
    margin-bottom: 0.5rem;
    margin-right: 2rem;
  }

  a[target="_blank"] {
    font-family: 'Untitled Sans'; /* TODO: Remove */
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

  video {
    margin-bottom: 1rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0) skewY(10deg);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
