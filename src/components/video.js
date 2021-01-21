import React from 'react';

import { Caption, Figure, Intrinsic } from 'src/components';

export const Video = ({ src, ...props }) => {
  return (
    <video
      className="lazyload"
      data-autoplay
      loop
      muted
      playsInline
      preload="none"
      src={src}
      {...props}
    />
  );
};

export const PostVideo = ({ caption, size, src, ...props }) => {
  return (
    <Figure size={size} {...props}>
      <Intrinsic aspect="16 / 9">
        <Video src={src} />
      </Intrinsic>

      {caption && <Caption dangerouslySetInnerHTML={{ __html: caption }} />}
    </Figure>
  );
};
