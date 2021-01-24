import styled, { createGlobalStyle } from 'styled-components';

import { breakpoint } from 'src/settings';

export const Theme = createGlobalStyle`
  :root {
    --backgroundColor: hsl(48, 47%, 7%);
    --computedBackgroundColor: hsl(50, 32%, 7%);
  }

  body {
    background-color: transparent;
    color: hsl(29, 30%, 41%);
    min-height: 100vh;
    position: relative;

    &::before {
      background-image: url('/images/textures/tiger-pattern.jpg');
      background-repeat: repeat;
      background-size: 400px 400px;
      content: '';
      filter: contrast(0.5);
      height: 100%;
      left: 0;
      opacity: 0.05;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -2;
    }

    &::after {
      display: none;
    }
  }

  a:hover {
    color: inherit;
  }

  h1,
  h5 {
    color: inherit
  }
`;

export const Loading = styled.div`
  background-color: var(--backgroundColor);
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: opacity var(--transitionSlow);
  transition-delay: 200ms;
  width: 100%;
  z-index: 10;
`;

export const TigerBackground = styled.div`
  background-image: radial-gradient(
    transparent calc(var(--maxWidth) / 2),
    var(--backgroundColor)
  );
  height: 100%;
  left: 0;
  mix-blend-mode: multiply;
  opacity: 1;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
`;

export const VideoContainer = styled.div`
  padding-bottom: 100%;
  position: relative;
  width: 100%;

  @media (min-width: ${breakpoint.md}) {
    transform: rotate(-3deg) scale(1.2);
  }
`;

export const Video = styled.video`
  background-color: var(--backgroundColor);
  box-shadow: 0 4px 24px hsl(0, 0%, 0%, 0.2), 0 4px 64px hsl(0, 0%, 0%, 0.4);
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const VideoOverlay = styled.div`
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const VideoOverlayIcon = styled.div`
  align-items: center;
  background-color: hsl(31, 25%, 62%);
  border-radius: 1.5rem;
  display: flex;
  height: 1.75rem;
  justify-content: center;
  margin: 0.75rem;
  mix-blend-mode: screen;
  opacity: 0.8;
  pointer-events: none;
  position: relative;
  width: 1.75rem;

  svg {
    display: block;
    fill: hsl(31, 25%, 22%);
    height: 1rem;
    width: 1rem;
  }
`;

export const MuteButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: var(--fontSizeSmall);
  font-weight: 500;
  opacity: 0.5;
  outline: none;
  padding: 0;
  text-transform: uppercase;
`;

// "A page component must export a React component for it to be valid"
// Hackily sidestep rule with dummy component export
const dummyComponent = () => null;

export default dummyComponent;
