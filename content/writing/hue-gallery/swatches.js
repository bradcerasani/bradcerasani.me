import React, { Fragment } from 'react';
import styled from 'styled-components';

const swatchDiameter = '32px';

export const SwatchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Swatch = styled.div`
  border-radius: ${swatchDiameter};
  height: ${swatchDiameter};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: ${swatchDiameter};
`;

// TODO: Atomize w/caption from image component
export const Caption = styled.div`
  color: hsl(0, 0%, 40%);
  font-size: 15px;
  font-style: italic;
  margin-bottom: 4rem;
  margin-top: -1rem;
  text-align: center;
`;

export const Swatches = ({ colors, caption }) => {
  if (!Array.isArray(colors)) {
    return;
  }

  return (
    <Fragment>
      <SwatchContainer>
        {colors.map((color, index) => (
          <Swatch key={index} style={{ backgroundColor: color }} />
        ))}
      </SwatchContainer>
      {caption && <Caption>{caption}</Caption>}
    </Fragment>
  );
};
