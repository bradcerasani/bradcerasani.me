import React, { useState } from 'react';

import MutedIconSVG from '../../atoms/icons/muted.inline.svg';
import UnmutedIconSVG from '../../atoms/icons/unmuted.inline.svg';
import { Grid, GridItem } from '../../molecules';
import {
  Theme,
  TigerBackground,
  Video,
  VideoContainer,
  VideoOverlay,
  VideoOverlayIcon,
} from './styles';

export const FourOhFour = () => {
  const [muted, setMuted] = useState(true);

  return (
    <>
      <Theme />
      <TigerBackground />

      <Grid style={{ marginBottom: '5rem', marginTop: '5rem' }} gutter="5rem">
        <GridItem width={{ sm: '50%' }}>
          <VideoContainer>
            <Video
              id="js-video"
              muted={muted}
              autoPlay
              loop
              playsInline
              src="/video/404-tiger-king.mp4"
              type="video/mp4"
            />

            <VideoOverlay onClick={() => setMuted(!muted)}>
              <VideoOverlayIcon>
                {muted ? <MutedIconSVG /> : <UnmutedIconSVG />}
              </VideoOverlayIcon>
            </VideoOverlay>
          </VideoContainer>
        </GridItem>
        <GridItem width={{ sm: '50%' }}>
          {/* TODO: Refactor heading styles */}
          <h4
            style={{
              color: 'inherit',
              fontSize: '1.5rem',
              marginBottom: '1.125rem',
              textTransform: 'none',
              fontFamily: 'Canela',
              fontWeight: '500',
            }}
          >
            Error 404
          </h4>

          <p>
            The page you requested was not found. A tiger may have gotten it or
            it could be in Carole Baskin's septic tank.
          </p>

          {/* TODO: Refactor */}
          <span
            style={{
              fontSize: '0.75rem',
              opacity: 0.5,
              textTransform: 'uppercase',
              fontWeight: '500',
              cursor: 'pointer',
            }}
            onClick={() => setMuted(!muted)}
          >
            Sound {muted ? 'off' : 'on'}
          </span>
        </GridItem>
      </Grid>
    </>
  );
};
