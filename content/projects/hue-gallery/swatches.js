import React from 'react';
import styled from 'styled-components';

import { breakpoint } from 'src/settings';
import { Caption } from 'src/components';

export const SwatchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spaceDefault);
  margin-top: calc(-1 * var(--spaceMedium));
  padding-top: var(--spaceDefault);
`;

export const Swatch = styled.div`
  --diameter: 1rem;
  --margin: 0.25rem;

  border-radius: var(--diameter);
  flex-grow: 0;
  flex-shrink: 0;
  height: var(--diameter);
  margin-left: var(--margin);
  margin-right: var(--margin);
  width: var(--diameter);

  @media (min-width: ${breakpoint.md}) {
    --diameter: var(--spaceDefault);
    --margin: 0.5rem;
  } ;
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
        <Caption style={{ marginBottom: 'var(--spaceMedium)' }}>
          {caption}
        </Caption>
      )}
    </>
  );
};
