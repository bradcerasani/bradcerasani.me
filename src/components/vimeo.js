import React, { useEffect, useState } from 'react';
import Player from '@vimeo/player';

import { breakpoint } from 'src/settings';
import { Caption, Figure, Intrinsic } from 'src/components';

export const Vimeo = ({ vimeoId, caption, $size, commentary }) => {
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
    player.on('cuepoint', ({ data }) => setCaptionText(data.value));

    return () => {
      player.destroy();
    };
  }, [targetElementId, vimeoId, commentary]);

  return (
    <Figure $size={$size}>
      <Intrinsic aspectRatio={{ base: '16 / 9' }}>
        <div id={targetElementId} />
      </Intrinsic>

      <Caption
        dangerouslySetInnerHTML={{ __html: captionText || '&nbsp;' }}
        css={`
          @media (max-width: ${breakpoint.sm}) {
            min-height: 3em;
          }
        `}
      />
    </Figure>
  );
};
