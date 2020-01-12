import React, { useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/organisms/seo';

const PostItem = styled.h3`
  font-weight: 400;
  font-size: 32px;
  color: hsla(0, 0%, 60%, 1);

  a {
    text-decoration: none;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: firebrick;
  position: absolute;
  z-index: 0;
`;

function WritingPage(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Brad Cerasani: Writing" />

      <Box id="box" />

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const slug = node.fields.slug;

        return (
          <article key={node.fields.slug} style={{ marginBottom: `32px` }}>
            <header>
              <PostItem>
                <Link to={slug}>{title}</Link>
              </PostItem>
            </header>
          </article>
        );
      })}
    </Layout>
  );
}

export default WritingPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { glob: "/writing/*" } } }
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
