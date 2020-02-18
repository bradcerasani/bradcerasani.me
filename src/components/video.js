import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import styled, { css } from 'styled-components';
import Player from '@vimeo/player';

// TODO: normalize with Image component

const FluidWrapper = styled.div`
  background-color: #85a19f;
  margin-bottom: 0.75rem;
  padding-bottom: 56.25%; /* 16:9 only for now */
  position: relative;
  width: 100%;

  iframe {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition-delay: 100ms;
    transition-duration: 400ms;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    width: 100%;
    will-change: opacity;
  }

  /*  */
  ${({ isLoaded }) =>
    isLoaded &&
    css`
      iframe {
        opacity: 1;
      }
    `}
`;

const Caption = styled.figcaption`
  color: hsl(0, 0%, 40%);
  font-size: 15px;
  font-style: italic;
  text-align: center;
  margin-bottom: 3rem;

  span {
    font-size: 24px;
    font-style: normal;
    line-height: 15px;
    display: inline-block;
    bottom: -3px;
    position: relative;
    padding-right: 4px;
  }
`;

const Figure = styled.figure`
  display: block;
  margin: 0;
  margin-bottom: 1.5rem;

  ${(props) =>
    props.size === 'large' &&
    css`
      margin-left: -200px;
      margin-right: -200px;
      width: calc(100% + 400px);
    `}

  ${(props) =>
    props.size === 'full' &&
    css`
      margin-left: calc((100vw - 636px) / -2);
      margin-right: calc((100vw - 636px) / -2);
      width: 100vw;
      min-width: 100%;
      margin-top: 3rem;

      ${Caption} {
        margin-bottom: 3rem;
      }
    `}
`;

function addCuePoints(player, annotations) {
  annotations.forEach(({ time, caption }) => {
    player
      .addCuePoint(time, {
        caption,
      })
      .then(function(id) {
        console.log('added');
        // cue point was added successfully
      })
      .catch(function(error) {
        switch (error.name) {
          case 'UnsupportedError':
            // cue points are not supported with the current player or browser
            break;

          case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

          default:
            // some other error occurred
            break;
        }
      });
  });
}

export const VideoAnnotation = ({ children }) => {
  console.log('this is something', children);

  return <div>{children}</div>;
};

export const Video = ({ vimeoId, caption, size, children }, props) => {
  const [isLoaded, setLoaded] = useState(false);
  const [captionText, setCaptionText] = useState(caption);

  useEffect(() => {
    // const iframe = document.getElementById(vimeoId);
    const options = {
      byline: 0,
      color: '85a19f',
      id: vimeoId,
      portrait: 0,
      title: 0,
    };

    const player = new Player(vimeoId, options);

    player.on('loaded', () => setLoaded(true));

    if (children) {
      console.log('children are', children);

      const annotations = children.map(({ props }) => {
        if (props.mdxType !== 'Annotation') {
          return;
        }

        const annotation = {
          time: props.time,
          caption: ReactDOMServer.renderToString(props.children),
        };

        return annotation;
      });

      addCuePoints(player, annotations);

      console.log('annotations are', annotations);
    }

    player.on('cuepoint', (event) => setCaptionText(event.data.caption));

    return () => {
      player
        .getCuePoints()
        .then(function(cuePoints) {
          console.log('all the cue points are', cuePoints);

          cuePoints.forEach(({ id }) => {
            console.log(id);
            player.removeCuePoint(id);
          });
          // cuePoints = an array of cue point objects
        })
        .catch(function(error) {
          console.error(error);
        });
    };
  });

  return (
    <Figure size={size} {...props}>
      <FluidWrapper isLoaded={isLoaded}>
        <div id={vimeoId} />
      </FluidWrapper>
      {captionText && (
        <Caption>
          <div dangerouslySetInnerHTML={{ __html: captionText }} />
        </Caption>
      )}
    </Figure>
  );
};
