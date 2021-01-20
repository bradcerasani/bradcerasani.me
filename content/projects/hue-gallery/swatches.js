import React from 'react';
import styled from 'styled-components';

import { Caption } from 'src/components';

export const SwatchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spaceDefault);
`;

export const Swatch = styled.div`
  --diameter: 2rem;
  --margin: 0.5rem;

  border-radius: var(--diameter);
  flex-grow: 0;
  flex-shrink: 0;
  height: var(--diameter);
  margin-left: var(--margin);
  margin-right: var(--margin);
  width: var(--diameter);
`;

export const Swatches = ({ colors, caption }) => {
  if (!Array.isArray(colors)) {
    return;
  }

  return (
    <>
      <SwatchContainer>
        {colors.map((color, index) => (
          <Swatch key={index} style={{ backgroundColor: color }} />
        ))}
      </SwatchContainer>
      {caption && <Caption>{caption}</Caption>}
    </>
  );
};
