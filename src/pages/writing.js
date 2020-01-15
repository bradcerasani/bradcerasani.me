import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/organisms/seo';

const PostItemImage = styled.img`
  display: none;
  opacity: 0.8;
  position: absolute;
  right: -200px;
  top: 0;
  width: 400px;
  z-index: -1;
`;

const PostItemDate = styled.div`
  font-family: 'Vulf Mono Demo', Canela;
  font-size: 15px;
  font-style: italic;
  font-weight: 400;
  left: -12rem;
  margin-left: -2rem;
  margin-top: 0.5rem;
  position: absolute;
  text-align: right;
  top: 0;
  transition-duration: 400ms;
  transition-property: color;
  transition-timing-function: ease-out;
  width: 12rem;
`;

const PostItem = styled.h3`
  color: hsla(0, 0%, 60%, 1);
  font-size: 36px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 1rem;
  margin-top: 0;
  position: relative;

  a {
    display: block;
    text-decoration: none;
  }

  &:hover {
    ${PostItemImage} {
      display: block;
    }

    ${PostItemDate} {
      font-style: normal;
    }
  }
`;

function WritingPage(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Fragment>
      <Layout location={props.location} title={siteTitle}>
        <SEO title="Brad Cerasani: Writing" />

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const slug = node.fields.slug;
          const date = node.frontmatter.date;
          const image = node.frontmatter.image;

          return (
            <article key={node.fields.slug} style={{ marginBottom: `32px` }}>
              <header>
                <PostItem>
                  <PostItemDate>{date}</PostItemDate>
                  <Link to={slug}>{title}</Link>
                  {image && <PostItemImage src={image} />}
                </PostItem>
              </header>
            </article>
          );
        })}
      </Layout>
    </Fragment>
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
            date(formatString: "MMM YYYY")
            title
            description
            image
          }
        }
      }
    }
  }
`;
