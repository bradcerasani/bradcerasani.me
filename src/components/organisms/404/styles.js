import styled, { createGlobalStyle } from 'styled-components';

export const Theme = createGlobalStyle`
  :root {
    --backgroundColor: #191609;
  }

  body {
    color: #8a694a;
  }
`;

export const TigerBackground = styled.div`
  background-color: var(--backgroundColor);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;

  &::before,
  &::after {
    bottom: 0;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  /* Tiger pattern */
  &::before {
    background-attachment: fixed;
    background-image: url('/images/textures/tiger-pattern.jpg');
    background-repeat: repeat;
    background-size: 400px 400px;
    filter: contrast(0.5);
    opacity: 0.08;
  }

  /* Vignette */
  &::after {
    background-image: radial-gradient(transparent, #1e1d11);
    mix-blend-mode: multiply;
    opacity: 0.8;
  }
`;

export const VideoContainer = styled.div`
  padding-bottom: 100%;
  position: relative;
  transform: rotate(-3deg) scale(1.2);
  width: 100%;
`;

export const Video = styled.video`
  background-color: var(--backgroundColor);
  box-shadow: 0 4px 24px rgb(0, 0, 0, 0.25), 0 4px 64px rgb(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  margin-bottom: 8rem;
  margin-left: 0;
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
  background-color: HSL(31, 25%, 62%);
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
    fill: HSL(31, 25%, 22%);
    height: 1rem;
    width: 1rem;
  }
`;
