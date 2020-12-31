import React from 'react';
import styled from 'styled-components';

import { breakpoint } from '../../../src/components/theme';
import { Caption } from '../../../src/components/atoms';

export const SwatchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  margin-top: -0.5rem;
`;

export const Swatch = styled.div`
  --diameter: 1.5rem;
  --margin: 0.25rem;

  border-radius: var(--diameter);
  flex-grow: 0;
  flex-shrink: 0;
  height: var(--diameter);
  margin-left: var(--margin);
  margin-right: var(--margin);
  width: var(--diameter);

  @media (min-width: ${breakpoint.md}) {
    --diameter: 2rem;
    --margin: 0.5rem;
  }
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
      {caption && (
        <Caption style={{ marginTop: '-0.75rem' }}>{caption}</Caption>
      )}
    </>
  );
};
