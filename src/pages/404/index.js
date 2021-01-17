import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import MutedIconSVG from 'src/icons/muted.inline.svg';
import UnmutedIconSVG from 'src/icons/unmuted.inline.svg';
import { breakpoint } from 'src/settings';

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

const StyledGrid = styled(Grid)`
  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 5rem;
    margin-top: 5rem;
  }
`;

function PageNotFound(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);

  return (
    <Layout
      location={props.location}
      title="Brad Cerasani"
      headline="Page Not Found"
    >
      <Head title="404: Page not found" />

      <Loading style={{ opacity: isLoaded ? 0 : 1 }} />

      <Theme />
      <TigerBackground />

      <StyledGrid style={{}} gutter="5rem">
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
          <h5 style={{ paddingTop: '1.5rem', marginBottom: '1rem' }}>
            Error 404
          </h5>

          <p style={{ marginBottom: '1rem' }}>
            The page you requested was not found. It could be in Carole Baskin's
            septic tank.
          </p>

          <MuteButton onClick={() => setMuted(!muted)}>
            Sound {muted ? 'off' : 'on'}
          </MuteButton>
        </GridItem>
      </StyledGrid>
    </Layout>
  );
}

export default PageNotFound;
