import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

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
    margin-bottom: 0.5rem;
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

    &::after {
      content: '↟';
      display: inline-block;
      padding-left: 0.5rem;
      transform: rotate(45deg);
      transform-origin: 100%;
    }
  }
`;

function AboutPage(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const backgroundColor = props.data.mdx.frontmatter.backgroundColor;

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

        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>

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
              <a href="mailto:bradcerasani@gmail.com" target="_blank">
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
  }
`;
