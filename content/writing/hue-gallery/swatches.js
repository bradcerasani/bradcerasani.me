import React from 'react';
import styled from 'styled-components';

import { Caption } from '../../../src/components/atoms';

const swatchDiameter = '2rem';

export const SwatchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: -0.5rem;
`;

export const Swatch = styled.div`
  border-radius: ${swatchDiameter};
  height: ${swatchDiameter};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: ${swatchDiameter};
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
      {caption && <Caption style={{ marginTop: '-1rem' }}>{caption}</Caption>}
    </>
  );
};
