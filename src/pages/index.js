import React from 'react';
import { graphql } from 'gatsby';

import { Button } from '../components/atoms';
import { PostList } from '../components/organisms';
import { Head, Layout } from '../components/templates';

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

        <Button to={'/about/'} type="link">
          More about me
        </Button>
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
