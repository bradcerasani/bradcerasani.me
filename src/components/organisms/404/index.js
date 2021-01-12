import React, { useState } from 'react';
import styled from 'styled-components';

import { breakpoint } from 'src/components/theme';
import MutedIconSVG from 'src/components/atoms/icons/muted.inline.svg';
import UnmutedIconSVG from 'src/components/atoms/icons/unmuted.inline.svg';
import { Grid, GridItem } from 'src/components/molecules';
import {
  Video,
  VideoContainer,
  VideoOverlay,
  VideoOverlayIcon,
  MuteButton,
} from './styles';

export { Theme, TigerBackground, Loading } from './styles';

const StyledGrid = styled(Grid)`
  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 5rem;
    margin-top: 5rem;
  }
`;

export const FourOhFour = () => {
  const [muted, setMuted] = useState(true);

  return (
    <>
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
    </>
  );
};
