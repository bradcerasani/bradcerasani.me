import React, { Fragment, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { delay } from 'lodash';

import Layout from '../components/layout';
import Head from '../components/head';

const StyledBackground = styled.div`
  animation-delay: 400ms;
  animation-duration: 800ms;
  animation-fill-mode: both;
  animation-name: fadeIn;
  animation-timing-function: ease-in-out;
  background-image: url('/images/brad-cerasani-office-wide.jpg');
  background-position: center bottom;
  background-size: cover;
  display: block;
  display: none;
  height: 62.5vw;
  position: relative;
  width: 100vw;
  z-index: -1;

  &::after {
    background-image: linear-gradient(
      180deg,
      hsl(35, 30%, 86%, 1) 0%,
      hsl(35, 30%, 86%, 0.6) 50%,
      hsl(35, 30%, 86%, 0.2) 100%
    );
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const AboutWrapper = styled.div`
  h6 {
    font-family: Karbon, sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.1em;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin-bottom: 1rem;
    margin-left: 0;
    margin-top: 0;
    padding-left: 0;
  }

  li {
    margin-bottom: 0.5rem;
    margin-right: 2rem;

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &::after {
      content: '↟';
      display: inline-block;
      padding-left: 0.5rem;
      transform: rotate(45deg);
      transform-origin: 100%;
    }
  }
`;

const StyledImage = styled.div`
  cursor: grab;
  display: block;
  height: calc((100vw - 636px) / 3);
  margin: 2px;
  opacity: 0;
  pointer-events: auto;
  position: absolute;
  visibility: hidden;
  width: calc((100vw - 636px) / 3);
  z-index: 5;

  &:active {
    cursor: grabbing;
  }

  &:nth-of-type(3n) {
    height: calc((100vw - 636px) / 4);
    width: calc((100vw - 636px) / 4);
  }

  &::after {
    background-image: url('/images/exit.gif');
    background-size: cover;
    content: '';
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 6;
  }

  &[data-leaving='true'] {
    &::after {
      opacity: 1;
    }
  }

  img {
    display: block;
    user-select: none;
    width: 100%;
  }
`;

const Camera = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
`;

function AboutPage(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const backgroundColor = props.data.mdx.frontmatter.backgroundColor;
  const images = props.data.allInstaNode.edges;
  const [photoCount, setPhotoCount] = useState(0);

  function handleClick() {
    if (photoCount === images.length) {
      return;
    }

    setPhotoCount(photoCount + 1);

    const element = document.querySelector(`[data-image='${photoCount}']`);

    element.style.opacity = '1';
    element.style.visibility = 'visible';
  }

  function cleanUp() {
    const elements = document.querySelectorAll(`[data-image]`);

    elements.forEach((element, index) => {
      element.setAttribute('data-leaving', true);

      delay(() => {
        setPhotoCount(0);
        element.style.opacity = '0';
        element.style.visibility = 'hidden';
        element.setAttribute('data-leaving', false);
      }, 3500);
    });
  }

  useEffect(() => {
    const browserWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const browserHeight =
      window.innerHeight || document.documentElement.clientHeight;

    let flip = false;

    images.forEach((image, index) => {
      const element = document.querySelector(`[data-image='${index}']`);

      const body = document.getElementById('js-mdx-body');

      const gutterWidth = (browserWidth - body.offsetWidth) / 2;

      const xMax = gutterWidth - element.offsetWidth - 16;
      const yMax = browserHeight / 2 - element.offsetHeight;

      const x = Math.floor(Math.random() * xMax);
      const y = Math.floor(Math.random() * yMax);

      if ((index + 1) % 2 === 0) {
        flip = !flip;
        element.style.left = `calc(${x}px)`;
      } else {
        element.style.right = `calc(${x}px)`;
      }

      if (flip) {
        element.style.top = `${y}px`;
      } else {
        element.style.bottom = `${y}px`;
      }

      if ((index + 1) % 5 === 0) {
        element.style.bottom = 'auto';
        element.style.top = `${browserHeight / 2 - element.offsetHeight / 2}px`;
      }
    });
  }, [images]);

  return (
    <Fragment>
      <Layout
        location={props.location}
        title={siteTitle}
        backgroundColor={backgroundColor}
      >
        <Head
          title="About"
          description="About Brad Cerasani; Design & Engineering."
        />

        <ImageContainer>
          {images.map((image, index) => (
            <Draggable key={index}>
              <StyledImage data-image={index}>
                <img src={image.node.preview} alt="IG" />
              </StyledImage>
            </Draggable>
          ))}
        </ImageContainer>

        <section id="js-mdx-body">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>

        <div
          style={{
            position: 'relative',
            zIndex: '10',
            marginTop: '-2.5rem',
          }}
        >
          <button
            style={{
              appearance: 'none',
              fontSize: '36px',
              backgroundColor: 'transparent',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleClick()}
          >
            <Camera one>
              {photoCount === images.length ? '🤷🏻‍♀️' : '📷'}
              <span
                style={{
                  fontSize: '20px',
                  paddingLeft: '8px',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              >
                ?
              </span>
            </Camera>
          </button>
          &nbsp;
          {photoCount >= 1 && (
            <button
              style={{
                appearance: 'none',
                fontSize: '36px',
                backgroundColor: 'transparent',
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => cleanUp()}
            >
              <Camera>🗑</Camera>
            </button>
          )}
        </div>

        <AboutWrapper>
          <h6>Older versions of this site</h6>
          <ul>
            <li>
              <a
                href="https://2010.bradcerasani.me"
                rel="noopener noreferrer"
                target="blank"
              >
                2010
              </a>
            </li>
            <li>
              <a
                href="https://2011.bradcerasani.me"
                rel="noopener noreferrer"
                target="blank"
              >
                2011
              </a>
            </li>
            <li>
              <a
                href="https://2012.bradcerasani.me"
                rel="noopener noreferrer"
                target="blank"
              >
                2012
              </a>
            </li>
            <li>
              <a
                href="https://2013.bradcerasani.me"
                rel="noopener noreferrer"
                target="blank"
              >
                2013
              </a>
            </li>
            <li>
              <a
                href="https://2014.bradcerasani.me"
                rel="noopener noreferrer"
                target="blank"
              >
                2014
              </a>
            </li>
          </ul>

          <h6>Elsewhere</h6>
          <ul>
            <li>
              <a
                href="https://instagram.com/bradcerasani"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/bradcerasani"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/bradcerasani"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:bradcerasani@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Email
              </a>
            </li>
          </ul>
        </AboutWrapper>
      </Layout>
      <StyledBackground />
    </Fragment>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query ContentBySlug {
    site {
      siteMetadata {
        title
      }
    }
    # TODO: add dynamic filename-based(?) content lookup
    mdx(fields: { slug: { eq: "/about/" } }) {
      id
      body
      frontmatter {
        backgroundColor
        excerpt
      }
    }

    allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 10) {
      edges {
        node {
          timestamp
          id
          mediaType
          preview
          caption
        }
      }
    }
  }
`;
