import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

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
      hsla(35, 30%, 86%, 1) 0%,
      hsla(35, 30%, 86%, 0.6) 50%,
      hsla(35, 30%, 86%, 0.2) 100%
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

function AboutPage(props) {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;
  const backgroundColor = props.data.markdownRemark.frontmatter.backgroundColor;

  return (
    <Fragment>
      <Layout
        location={props.location}
        title={siteTitle}
        backgroundColor={backgroundColor}
      >
        <SEO title={siteTitle} description="TODO" />

        <section style={{ marginBottom: '0' }}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
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
    markdownRemark(fields: { slug: { eq: "/about/" } }) {
      id
      html
      frontmatter {
        backgroundColor
      }
    }
  }
`;
