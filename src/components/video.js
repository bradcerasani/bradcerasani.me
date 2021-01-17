import React from 'react';

import { Caption, Figure, FluidWrapper } from 'src/components';

export const Video = ({ caption, size, src, ...props }) => {
  return (
    <Figure size={size}>
      <FluidWrapper>
        <video
          playsInline
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}
          {...props}
        >
          <source src={src} />
        </video>
      </FluidWrapper>

      <Caption dangerouslySetInnerHTML={{ __html: caption }} />
    </Figure>
  );
};
