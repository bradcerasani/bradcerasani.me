import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import Player from '@vimeo/player';
import styled, { css } from 'styled-components';

import { breakpoint } from 'src/components/theme';
import { Caption, Figure, FluidWrapper, Loading } from 'src/components/atoms';

// On mobile some captions wrap to 2 lines, so we need an
// explicit min-height to prevent reflow on caption change

const VideoCaption = styled(Caption)`
  transition-duration: 400ms;
  transition-property: height, min-height;
  transition-timing-function: ease-in-out;

  /* stylelint-disable-next-line */
  ${({ isPlaying }) =>
    isPlaying &&
    css`
      min-height: 3rem;
    `}

  @media (min-width: ${breakpoint.md}) {
    min-height: 1.5rem;
  }
`;

function addCuePoints(player, annotations) {
  annotations.forEach(({ time, annotation }) => {
    player
      .addCuePoint(time, { annotation })
      .catch((error) => console.error(error));
  });
}

// Blank component not technically necessary but eliminates build errors
export const Annot = () => null;

export const Vimeo = ({ vimeoId, caption, size, children }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [captionText, setCaption] = useState(caption);
  const targetElementId = `js-${vimeoId}`;

  useEffect(() => {
    // TODO: pull color from settings or prop?
    const embedOptions = {
      byline: 0,
      color: '978eae',
      id: vimeoId,
      portrait: 0,
      title: 0,
    };

    const player = new Player(targetElementId, embedOptions);

    // Set up video annotations
    if (children) {
      // TODO: Harden and/or consider converting to JSON
      const annotations = children
        .filter(({ props }) => props.mdxType === 'Annot')
        .map(({ props }) => {
          const annotation = {
            time: props.time,
            annotation: ReactDOMServer.renderToString(props.children),
          };

          return annotation;
        });

      addCuePoints(player, annotations);
    }

    // Set up event listeners
    player.on('loaded', () => setLoaded(true));
    player.on('playing', () => setPlaying(true));
    player.on('cuepoint', (event) => setCaption(event.data.annotation));

    return () => {
      player.destroy();
    };
  }, [children, targetElementId, vimeoId]);

  return (
    <Figure size={size}>
      <FluidWrapper isLoaded={isLoaded}>
        <Loading style={{ opacity: isLoaded ? '0' : 1 }} />

        <div id={targetElementId} />
      </FluidWrapper>

      <VideoCaption
        dangerouslySetInnerHTML={{ __html: captionText }}
        isPlaying={isPlaying}
      />
    </Figure>
  );
};
