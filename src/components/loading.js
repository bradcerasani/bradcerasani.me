import React from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
  --size: var(--spaceLarge);

  display: block;
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity var(--transitionDefault);
  width: var(--size);
  will-change: opacity;
  z-index: 0;
`;

export const Loading = ({ ...props }) => {
  return (
    <StyledVideo {...props} preload="auto" autoPlay loop muted playsInline>
      <source src="/video/loading.mp4" type="video/mp4" />
    </StyledVideo>
  );
};
