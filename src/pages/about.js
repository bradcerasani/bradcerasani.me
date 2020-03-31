import React, { Fragment, useEffect } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Draggable from 'react-draggable';

import { BackgroundImage } from '../components/atoms';
import {
  RandomImage,
  RandomImageContainer,
} from '../components/molecules/random-image';
import Layout from '../components/layout';
import Head from '../components/head';

function AboutPage(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const backgroundColor = props.data.mdx.frontmatter.backgroundColor;
  const images = props.data.allInstaNode.edges;

  function handleChange(event) {
    const value = event.currentTarget.value;
    const imageIndex = Math.floor(value / 10);
    const elements = document.querySelectorAll(`[data-image]`);

    elements.forEach((element, index) => {
      const isVisible = index <= imageIndex && value > 1;

      element.style.opacity = isVisible ? 1 : 0;
      element.style.pointerEvents = isVisible ? 'auto' : 'none';
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

        <RandomImageContainer>
          {images.map((image, index) => (
            <Draggable key={index}>
              <RandomImage data-image={index}>
                <img src={image.node.preview} alt="IG" />
              </RandomImage>
            </Draggable>
          ))}
        </RandomImageContainer>

        <section id="js-mdx-body">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>

        <div style={{ display: 'flex' }}>
          <div style={{ width: '30%' }}>
            <h6>Elsewhere</h6>
            <ul>
              {['Instagram', 'Twitter', 'GitHub'].map((link) => (
                <li key={link}>
                  <a
                    href={`https://${link.toLowerCase()}.com/bradcerasani`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ width: '30%' }}>
            <h6>Site Archives</h6>
            <ul>
              {['2014', '2013', '2012', '2011', '2010'].map((year) => (
                <li key={year}>
                  <a
                    href={`https://${year}.bradcerasani.me`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {year}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ width: '40%', paddingLeft: '4px', paddingRight: '4px' }}
          >
            <h6>Photos</h6>
            <input
              style={{ width: '100%', paddingLeft: '0', paddingRight: '0' }}
              type="range"
              onChange={(e) => handleChange(e)}
              defaultValue="0"
            />
          </div>
        </div>
      </Layout>
      <BackgroundImage />
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
