import styled from 'styled-components';

export const Glow = styled.div`
  background-image: radial-gradient(white 0%, rgba(255, 255, 255, 0) 50%);
  display: block;
  height: var(--glowSize);
  left: calc(var(--glowSize) / -2);
  position: fixed;
  top: calc(var(--glowSize) / -2);
  width: var(--glowSize);
  z-index: -1;
`;
