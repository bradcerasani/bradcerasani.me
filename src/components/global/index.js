import { createGlobalStyle } from 'styled-components';
import { modernNormalize } from './modern-normalize';

import { font } from '../settings';

export const GlobalStyle = createGlobalStyle`
  ${modernNormalize}

  html, body {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) =>
      props.backgroundColor || 'hsl(35, 10%, 86%)'};
    font-family: ${font.family.body};
    font-size: ${font.size.body};
    text-rendering: optimizeLegibility;
    transition-duration: 400ms;
    transition-property: background-color, color;
    transition-timing-function: ease-in-out;
  }

  section {
    color: hsl(0, 0%, 20%);
    font-size: 20px;
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
