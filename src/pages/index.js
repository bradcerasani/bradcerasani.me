import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/organisms/seo';

const H4 = styled.h4`
  color: orange;
  color: hsl(0, 0%, 30%);
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 16px;
  margin-bottom: 48px;
`;

const StyledImg = styled.img`
  /* width: 200px; */
  /* height: 200px; */
  width: 100%;
  height: 100%;
  transition-duration: 800ms;
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transition-property: border-radius, transform;
  transform: scale(1) translateY(0);
`;

const StyledImgContainer = styled.div`
  width: 240px;
  height: 240px;
  position: absolute;
  left: -240px;
  top: 0;
  margin-left: 24px;
  margin-top: -16px;
  z-index: -1;
  overflow: hidden;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transition-property: transform;
  /* background-color: red; */

  transform: scale(1) rotate(0);
`;

const StyledSection = styled.section`
  h3 {
    margin-top: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: black;
    font-size: 36px;
    letter-spacing: -1px;
    line-height: 1.25;
    text-shadow: 0px 2px 16px white;

    a {
      text-decoration: none;
    }
  }

  date {
    font-size: 14px;
    margin-top: 0px;
    display: block;
    /* color: hsl(0, 0%, 36%); */
    margin-bottom: 16px;
    font-weight: 500;
    color: black;
  }

  p {
    /* font-size: 16px;
    letter-spacing: 0; */
  }

  article {
    /* height: 200px; */
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */

    &:last-of-type {
      margin-bottom: 144px;
    }

    &:hover {
      cursor: pointer;

      ${StyledImg} {
        transform: scale(1.2) translateY(16px);
      }

      ${StyledImgContainer} {
        transform: scale(0.9) rotate(-4deg);
      }
    }
  }
`;

function BlogIndex(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Brad Cerasani: Design & Engineering" />

      {/* Intro */}
      <section>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.frontmatter.excerpt,
          }}
          style={{ marginBottom: '8px' }}
        />

        <Link to={'/about'}>More about me</Link>
      </section>

      {/* Writing */}
      <StyledSection>
        <H4>LATEST WRITING</H4>

        <article style={{ position: 'relative' }}>
          <Link
            style={{ textDecoration: 'none' }}
            to={data.allMarkdownRemark.edges[0].node.fields.slug}
          >
            <StyledImgContainer>
              <StyledImg src="/images/kitchen.jpg" />
            </StyledImgContainer>
            <h3 style={{ marginBottom: '0' }}>
              {data.allMarkdownRemark.edges[0].node.frontmatter.title}
            </h3>

            <date>{data.allMarkdownRemark.edges[0].node.frontmatter.date}</date>

            <p>
              {data.allMarkdownRemark.edges[0].node.frontmatter.description}
            </p>
          </Link>
        </article>

        <Link to={'/writing'}>More writing</Link>
      </StyledSection>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: {}, fields: { slug: { eq: "/about/" } }) {
      frontmatter {
        excerpt
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { glob: "/writing/*" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
