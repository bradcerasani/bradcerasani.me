import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import PostList from '../components/organisms/post-list';

function Home(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Head title="Design & Engineering" />

      <section>
        <div
          dangerouslySetInnerHTML={{
            __html: data.mdx.frontmatter.excerpt,
          }}
          style={{ marginBottom: '1rem' }}
        />

        <Link to={'/about/'} style={{ textDecoration: 'none' }}>
          More about me{' '}
          <span
            style={{
              bottom: '-6px',
              display: 'inline-block',
              height: '24px',
              position: 'relative',
              width: '24px',
            }}
          >
            <svg viewBox="0 0 100 100">
              <path d="M36.75 73.50L49.95 53.90L36.75 34.30L30.55 34.30L41.45 53.90L30.55 73.50ZM56.15 73.50L69.45 53.90L56.15 34.30L50.05 34.30L60.75 53.90L50.05 73.50Z"></path>
            </svg>
          </span>
        </Link>
      </section>

      <PostList posts={data.allMdx.edges} />
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
    mdx(fields: { slug: { eq: "/about/" } }) {
      frontmatter {
        excerpt
      }
    }
    allMdx(
      filter: { fields: { slug: { glob: "/writing/*" } } }
      sort: { fields: frontmatter___date, order: DESC }
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
