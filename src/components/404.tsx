import { useEffect, useState } from 'react';

import { Grid, GridItem } from 'src/components';

import './404.css';

export function PageNotFound() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);

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

            <div className="VideoOverlay" onClick={() => setMuted(!muted)}>
              <div className="VideoOverlay-icons">
                {muted ? (
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M457.941 256l47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0L424 222.059l-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941L390.059 256l-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029L424 289.941l47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941zM99 160H44c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55a5 5 0 0 0 5-5V165a5 5 0 0 0-5-5zM280 56h-24a23.999 23.999 0 0 0-14.578 4.935l-103.459 79.116a5 5 0 0 0-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115a24 24 0 0 0 14.579 4.936H280c13.255 0 24-10.745 24-24V80c0-13.255-10.745-24-24-24z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M357.934 366.94a23.91 23.91 0 0 1-16.3-6.391c-9.726-9.005-10.31-24.19-1.304-33.916C358.173 307.364 368 282.279 368 256s-9.827-51.364-27.67-70.634c-9.006-9.726-8.422-24.911 1.304-33.916 9.726-9.007 24.91-8.421 33.916 1.303C401.634 180.923 416 217.591 416 256s-14.366 75.077-40.45 103.247c-4.73 5.107-11.164 7.693-17.616 7.693z" />
                    <path d="M422.19 438.59a23.924 23.924 0 0 1-16.994-7.053c-9.36-9.385-9.339-24.581.046-33.94C443.133 359.809 464 309.522 464 256s-20.867-103.809-58.758-141.597c-9.385-9.359-9.406-24.556-.046-33.94 9.359-9.387 24.555-9.406 33.941-.047C486.124 127.275 512 189.632 512 256s-25.876 128.725-72.863 175.584a23.926 23.926 0 0 1-16.947 7.006zM99 160H44c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55a5 5 0 0 0 5-5V165a5 5 0 0 0-5-5zM280 56h-24a23.999 23.999 0 0 0-14.578 4.935l-103.459 79.116a5 5 0 0 0-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115a24 24 0 0 0 14.579 4.936H280c13.255 0 24-10.745 24-24V80c0-13.255-10.745-24-24-24z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </GridItem>

        <GridItem width={{ md: '50%' }}>
          <h3
            style={{
              paddingTop: 'var(--spaceDefault)',
              color: 'inherit',
              fontFamily: 'var(--fontFamilySansSerif)',
              textTransform: 'uppercase',
              fontSize: 'var(--fontSizeDefault)',
              fontWeight: '500',
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

          <button className="MuteButton" onClick={() => setMuted(!muted)}>
            Sound {muted ? 'off' : 'on'}
          </button>
        </GridItem>
      </Grid>
    </>
  );
}
