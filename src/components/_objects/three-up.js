import React from 'react';
import Imgix from 'react-imgix';
import styled from 'styled-components';

import { breakpoint } from 'src/settings';
import { Figure, Caption, LayoutObject, LayoutItem } from 'src/components';

const Img = styled(Imgix)`
  display: block;
  height: 100%;
  object-fit: cover;
`;

// See https://github.com/styled-components/styled-components/issues/1449
const StyledLayoutItem = styled((props) => <LayoutItem {...props} />)`
  margin-bottom: var(--spaceDefault);

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
    <Figure size="large">
      <LayoutObject gutterWidth="calc(var(--spaceDefault) / 2)" {...props}>
        <StyledLayoutItem width={{ sm: '1/3 * 100%' }}>
          {/* TODO: DRY */}
          {image1.includes('.mp4') ? (
            <video
              className="lazyload"
              preload="none"
              loop
              muted
              data-autoplay
              playsInline
              src={image1}
              style={{
                width: '100%',
                marginBottom: '0',
              }}
            />
          ) : (
            <Img
              className="lazyload"
              sizes="400px"
              src={urlify(image1)}
              attributeConfig={{
                src: 'data-src',
                srcSet: 'data-srcset',
                sizes: 'data-sizes',
              }}
              htmlAttributes={{
                alt: caption || 'Photo',
                src: `${urlify(image1)}?blur=100&w=200&auto=format`,
              }}
            />
          )}
        </StyledLayoutItem>
        <StyledLayoutItem width={{ sm: '1/3 * 100%' }}>
          <Img
            className="lazyload"
            sizes="400px"
            src={urlify(image2)}
            attributeConfig={{
              src: 'data-src',
              srcSet: 'data-srcset',
              sizes: 'data-sizes',
            }}
            htmlAttributes={{
              alt: caption || 'Photo',
              src: `${urlify(image2)}?blur=100&w=200&auto=format`,
            }}
          />
        </StyledLayoutItem>

        <StyledLayoutItem width={{ sm: '1/3 * 100%' }}>
          <Img
            className="lazyload"
            sizes="400px"
            src={urlify(image3)}
            attributeConfig={{
              src: 'data-src',
              srcSet: 'data-srcset',
              sizes: 'data-sizes',
            }}
            htmlAttributes={{
              alt: caption || 'Photo',
              src: `${urlify(image3)}?blur=100&w=200&auto=format`,
            }}
          />
        </StyledLayoutItem>
      </LayoutObject>
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
};
