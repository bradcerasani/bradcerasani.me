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

          @keyframes grain {
            0%, 100% { transform:translate(0, 0) }
            10% { transform:translate(-5%, -10%) }
            20% { transform:translate(-15%, 5%) }
            30% { transform:translate(7%, -25%) }
            40% { transform:translate(-5%, 25%) }
            50% { transform:translate(-15%, 10%) }
            60% { transform:translate(15%, 0%) }
            70% { transform:translate(0%, 15%) }
            80% { transform:translate(3%, 35%) }
            90% { transform:translate(-10%, 10%) }
          }

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
            content: "";
            height: 100%;
            left: 0;
            pointer-events: none;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 10;
          }

          body::before {
            animation: grain 8s steps(10) infinite;
            background-image: url('/images/noise.png');
            content: "";
            display: block;
            height: 300%;
            left: -100%;
            opacity: 0.6;
            pointer-events: none;
            position: fixed;
            top: -100%;
            width: 300%;
            z-index: 5;
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
