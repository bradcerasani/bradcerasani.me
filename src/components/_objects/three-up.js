import React from 'react';
import Imgix from 'react-imgix';
import styled from 'styled-components';

import { breakpoint } from 'src/settings';
import { Figure, Caption, LayoutObject, LayoutItem } from 'src/components';

const Img = styled(Imgix)`
  display: block;
`;

// See https://github.com/styled-components/styled-components/issues/1449
const StyledLayoutItem = styled((props) => <LayoutItem {...props} />)`
  margin-bottom: 1.5rem;

  @media (min-width: ${breakpoint.sm}) {
    margin-bottom: 0;
  }
`;

export const ThreeUp = ({ image1, image2, image3, caption, ...props }) => {
  function urlify(src) {
    const path =
      process.env.NODE_ENV === 'development'
        ? `/images/${src}`
        : `https://bradcerasani.imgix.net/images/${src}`;
    return path;
  }

  return (
    <Figure
      size="large"
      style={{ marginBottom: '0.75rem', marginTop: '0.75rem' }}
    >
      <LayoutObject gutterWidth="0.75rem" {...props}>
        <StyledLayoutItem width={{ sm: '1/3 * 100%' }}>
          {/* TODO: DRY */}
          {image1.includes('.mp4') ? (
            <video
              playsInline
              autoPlay
              muted
              loop
              style={{
                width: '100%',
                marginBottom: '0',
              }}
            >
              <source src={image1} />
            </video>
          ) : (
            <Img
              src={urlify(image1)}
              sizes="400px"
              htmlAttributes={{
                loading: 'lazy',
              }}
            />
          )}
        </StyledLayoutItem>
        <StyledLayoutItem width={{ sm: '1/3 * 100%' }}>
          <Img
            src={urlify(image2)}
            sizes="400px"
            htmlAttributes={{
              loading: 'lazy',
            }}
          />
        </StyledLayoutItem>

        <StyledLayoutItem width={{ sm: '1/3 * 100%' }}>
          <Img
            src={urlify(image3)}
            sizes="400px"
            htmlAttributes={{
              loading: 'lazy',
            }}
          />
        </StyledLayoutItem>
      </LayoutObject>
      {caption && <Caption style={{ marginTop: '0.75rem' }}>{caption}</Caption>}
    </Figure>
  );
};
