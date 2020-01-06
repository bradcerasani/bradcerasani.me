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
  transform: scale(1.2) translateY(16px);
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
  transform: scale(0.9) rotate(0deg);
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
        transform: scale(1) translateY(0);
      }

      ${StyledImgContainer} {
        transform: scale(1) rotate(0);
      }
    }
  }
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />

        {/* Intro */}
        <section>
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.frontmatter.excerpt,
            }}
            style={{ marginBottom: '8px' }}
          />

          <a href="">More about me</a>
        </section>

        {/* Writing */}
        <StyledSection>
          <H4>LATEST WRITING</H4>

          <article style={{ position: 'relative' }}>
            <StyledImgContainer>
              <StyledImg src="/images/kitchen.jpg" />
            </StyledImgContainer>
            <h3 style={{ marginBottom: '0' }}>
              <a href="">Invest in People</a>
            </h3>

            <date>November, 2013</date>

            <p>
              Thoughts on inspiring people and recreating sketch notes on the
              web.
            </p>
          </article>

          <a href="">More writing</a>
        </StyledSection>

        {/* {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug} style={{ marginBottom: `32px` }}>
              <header>
                <h3
                  style={{
                    marginBottom: `4px`,
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        })} */}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: {}, fields: { slug: { eq: "/bio/" } }) {
      frontmatter {
        excerpt
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { date: { ne: null } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
