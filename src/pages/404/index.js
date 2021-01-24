import React, { useEffect, useState } from 'react';

import MutedIconSVG from 'src/icons/muted.inline.svg';
import UnmutedIconSVG from 'src/icons/unmuted.inline.svg';

import Layout from 'src/templates/layout';

import { Head, Grid, GridItem } from 'src/components';
import {
  Loading,
  MuteButton,
  Theme,
  TigerBackground,
  Video,
  VideoContainer,
  VideoOverlay,
  VideoOverlayIcon,
} from './styles';

function PageNotFound() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);

  return (
    <Layout headline="Page Not Found">
      <Head title="404: Page Not Found" />

      <Loading style={{ opacity: isLoaded ? 0 : 1 }} />

      <Theme />
      <TigerBackground />

      <Grid
        style={{
          marginBottom: 'var(--spaceLarge)',
          marginTop: 'var(--spaceLarge)',
        }}
        gutter="6rem"
      >
        <GridItem width={{ md: '50%' }}>
          <VideoContainer>
            <Video
              id="js-video"
              muted={muted}
              autoPlay
              loop
              playsInline
              playsinline
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

        <GridItem width={{ md: '50%' }}>
          <h5 style={{ paddingTop: 'var(--spaceDefault)' }}>Error 404</h5>

          <p
            style={{
              color: 'currentcolor',
              marginBottom: 'calc(var(--spaceDefault) / 2)',
            }}
          >
            The page you requested was not found. It could be in Carole Baskin's
            septic tank.
          </p>

          <MuteButton onClick={() => setMuted(!muted)}>
            Sound {muted ? 'off' : 'on'}
          </MuteButton>
        </GridItem>
      </Grid>
    </Layout>
  );
}

export default PageNotFound;
