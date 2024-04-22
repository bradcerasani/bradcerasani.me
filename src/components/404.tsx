import { useEffect, useState } from 'react';
import { Grid, GridItem, Icon } from 'src/components';

import './404.css';

export function PageNotFound() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  });

  return (
    <>
      <div className="Loading" style={{ opacity: isLoaded ? 0 : 1 }} />
      <div className="TigerBackground" />

      <Grid
        style={{
          marginBottom: 'var(--spaceLarge)',
          marginTop: 'var(--spaceLarge)',
        }}
        gutter="6rem"
      >
        <GridItem width={{ md: '50%' }}>
          <div className="VideoContainer">
            <video
              className="Video"
              id="js-video"
              muted={muted}
              autoPlay
              loop
              playsInline
              src="/video/404-tiger-king.mp4"
            />

            <div className="VideoOverlay">
              <button
                type="button"
                className="VideoOverlay-muteToggle"
                onClick={() => setMuted(!muted)}
              >
                <Icon name={muted ? 'mute' : 'unmute'} />
              </button>
            </div>
          </div>
        </GridItem>

        <GridItem width={{ md: '50%' }}>
          <h3
            style={{
              paddingTop: 'var(--spaceDefault)',
              color: 'inherit',
              textTransform: 'uppercase',
            }}
          >
            Error 404
          </h3>

          <p
            style={{
              color: 'currentcolor',
              marginBottom: 'calc(var(--spaceDefault) / 2)',
            }}
          >
            Sorry we couldn't find the page you requested.
          </p>

          <button type="button" className="MuteButton" onClick={() => setMuted(!muted)}>
            Sound {muted ? 'off' : 'on'}
          </button>
        </GridItem>
      </Grid>
    </>
  );
}
