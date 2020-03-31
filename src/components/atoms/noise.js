import { css } from 'styled-components';

export const Noise = css`
  @keyframes grain {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    20% {
      transform: translate(-15%, 5%);
    }
    30% {
      transform: translate(7%, -25%);
    }
    40% {
      transform: translate(-5%, 25%);
    }
    50% {
      transform: translate(-15%, 10%);
    }
    60% {
      transform: translate(15%, 0%);
    }
    70% {
      transform: translate(0%, 15%);
    }
    80% {
      transform: translate(3%, 25%);
    }
    90% {
      transform: translate(-10%, 10%);
    }
  }

  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-name: grain;
  animation-timing-function: steps(10);
  background-image: url('/images/noise.png');
  background-repeat: repeat;
  content: '';
  display: block;
  height: 300vh;
  left: -100vw;
  opacity: 0.5;
  pointer-events: none;
  position: fixed;
  top: -100vh;
  width: 300vw;
  z-index: 5;
`;
