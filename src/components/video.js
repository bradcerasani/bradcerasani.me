import React from 'react';

import { Caption, Figure, FluidWrapper } from 'src/components';

export const Video = ({ caption, size, src, ...props }) => {
  return (
    <Figure size={size}>
      <FluidWrapper>
        <video
          className="lazyload"
          data-autoplay
          loop
          muted
          playsInline
          preload="none"
          src={src}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}
          {...props}
        />
      </FluidWrapper>

      <Caption dangerouslySetInnerHTML={{ __html: caption }} />
    </Figure>
  );
};
