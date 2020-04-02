import React from 'react';
import { graphql } from 'gatsby';

import { Noise } from '../components/atoms';
import { Head, Layout } from '../components/templates';

function PageNotFound(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Head title="404: Page not found">
        <style>
          {`
            body {
              background-color: #0000a1 !important;
              color: #fafafa;
              position: relative;
              text-shadow: 0 0 0.5em #060b76;
            }

            body::after {
              animation-timing-function: ease-in-out;
              animation-delay: 800ms;
              animation-direction: reverse;
              animation-duration: 1s;
              animation-fill-mode: forwards;
              animation-name: fadeIn;
              background-color: black;
              background-image: url('/images/xp.gif');
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
              content: '';
              height: 100%;
              left: 0;
              pointer-events: none;
              position: absolute;
              top: 0;
              width: 100%;
              z-index: 10;
            }

            body::before {
              ${Noise}
            }

            h2 {
              font-family: 'Jetbrains Mono', monospace;
              font-size: 56px;
              font-weight: 400;
              margin-top: 120px;
              padding-top: calc(50vh - (316px + 32px + 120px));
              text-transform: uppercase;
              white-space: nowrap;
            }

            video {
              display: block;
              height: 100%;
              left: 0;
              margin-bottom: 0;
              object-fit: cover;
              opacity: 1;
              position: absolute;
              top: 0;
              width: 100%;
              z-index: -1;
            }

            a,
            a.active,
            a:hover {
              color: inherit !important;
            }
          `}
        </style>
      </Head>

      <video
        muted
        autoPlay
        loop
        playsInline
        src="/video/404-blue.mp4"
        type="video/mp4"
      />

      <h2>404: Page not found</h2>
    </Layout>
  );
}

export default PageNotFound;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
