import styled from 'styled-components';

export const Glow = styled.div`
  --size: 1200px;

  background-image: radial-gradient(white 0%, rgba(255, 255, 255, 0) 50%);
  display: block;
  height: var(--size);
  left: calc(var(--size) / -2);
  position: fixed;
  top: calc(var(--size) / -2);
  width: var(--size);
  z-index: -1;
`;
