import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { H4 } from '../components/atoms';
import {
  PostList,
  PostItem,
  PostItemDate,
  PostItemImage,
} from '../components/post-list';

function Home(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Brad Cerasani: Design & Engineering" />

      <section>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.frontmatter.excerpt,
          }}
          style={{ marginBottom: '8px' }}
        />

        <Link to={'/about'}>More about me</Link>
      </section>

      <H4>Writing</H4>

      <PostList>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const slug = node.fields.slug;
          const date = node.frontmatter.date;
          const image = node.frontmatter.image;

          return (
            <article key={node.fields.slug}>
              <PostItem>
                <PostItemDate>{date}</PostItemDate>
                <Link to={slug}>{title}</Link>
                {image && <PostItemImage src={image} />}
              </PostItem>
            </article>
          );
        })}
      </PostList>
    </Layout>
  );
}

export default Home;

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
    ) {
      edges {
        node {
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
