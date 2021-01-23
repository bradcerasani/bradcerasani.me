import React, { useEffect, useState } from 'react';
import Player from '@vimeo/player';
import styled, { css } from 'styled-components';

import { breakpoint } from 'src/settings';
import { Caption, Figure, Intrinsic } from 'src/components';

const VideoCaption = styled(Caption)`
  transition: height var(--transitionDefault);

  @media (max-width: ${breakpoint.sm}) {
    /*
    On mobile some captions wrap to 2 lines, so we need an
    explicit min-height to prevent reflow on caption change
  */

    ${({ isPlaying }) =>
      isPlaying &&
      css`
        min-height: calc(2 * var(--spaceDefault));
      `}
  }
`;

export const Vimeo = ({ vimeoId, caption, size, commentary }) => {
  const [isPlaying, setPlaying] = useState(false);
  const [captionText, setCaptionText] = useState(caption);
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

    // Set up video commentary
    if (commentary.length) {
      commentary.forEach(({ time, value }) => {
        player
          .addCuePoint(time, { value })
          .catch((error) => console.error(error));
      });
    }

    // Set up event listeners
    player.on('playing', () => setPlaying(true));
    player.on('cuepoint', ({ data }) => setCaptionText(data.value));

    return () => {
      player.destroy();
    };
  }, [targetElementId, vimeoId, commentary]);

  return (
    <Figure size={size}>
      <Intrinsic aspectRatio={{ base: '16 / 9' }}>
        <div id={targetElementId} />
      </Intrinsic>

      <VideoCaption
        dangerouslySetInnerHTML={{ __html: captionText }}
        isPlaying={isPlaying}
      />
    </Figure>
  );
};
