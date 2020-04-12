import React from 'react';
import styled from 'styled-components';

import { breakpoint } from '../theme';

const StyledVideo = styled.video`
  --size: 150px;

  display: block;
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition-duration: 200ms;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  width: var(--size);
  will-change: opacity;
  z-index: 0;

  @media (min-width: ${breakpoint.md}) {
    --size: 250px;
  }
`;

export const Loading = ({ ...props }) => {
  return (
    <StyledVideo {...props} preload="auto" autoPlay loop muted playsInline>
      <source src="/video/loading.mp4" type="video/mp4" />
    </StyledVideo>
  );
};
