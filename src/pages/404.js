import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

function PageNotFound(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Head title="404: Page not found">
        <style>
          {`
          body {
            background-color: #0000A1;
            color: #fafafa;
            position: relative;
            text-shadow: 0 0 0.5em #060B76;
          }

          body::after {
            animation-timing-function: ease-in-out;
            animation-delay: 800ms;
            animation-direction: reverse;
            animation-duration: 400ms;
            animation-fill-mode: forwards;
            animation-name: fadeIn;
            background-color: black;
            background-image: url('/images/xp.gif');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            content: "";
            height: 100%;
            left: 0;
            pointer-events: none;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 10;
          }

          h2 {
            font-family: 'Jetbrains Mono', monospace;
            font-weight: 400;
            text-transform: uppercase;
          }


          video {
            display: block;
            margin-left: -4rem;
            opacity: 1;
            width: calc(100% + 8rem);
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
