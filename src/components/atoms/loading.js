import React from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
  display: block;
  height: 250px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition-duration: 200ms;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  width: 250px;
  will-change: opacity;
  z-index: 0;
`;

export const Loading = ({ src, ...props }) => {
  return (
    <StyledVideo {...props} controls={false} autoPlay loop muted playsInline>
      <source src={src} type="video/mp4" />
    </StyledVideo>
  );
};
