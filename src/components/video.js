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
      {...props}
    >
      <source src={src.replace('mp4', 'webm')} type="video/webm" />
      <source src={src} type="video/mp4" />
    </video>
  );
};

export const PostVideo = ({ caption, src, ...props }) => {
  return (
    <Figure {...props}>
      <Intrinsic aspectRatio={{ base: '16 / 9' }}>
        <Video src={src} />
      </Intrinsic>

      {caption && <Caption dangerouslySetInnerHTML={{ __html: caption }} />}
    </Figure>
  );
};
