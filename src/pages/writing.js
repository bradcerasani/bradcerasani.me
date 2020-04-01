import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/templates/layout';
import Head from '../components/templates/head';
import PostList from '../components/organisms/post-list';

function WritingPage(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Fragment>
      <Layout location={props.location} title={siteTitle}>
        <Head title="Writing" />

        <PostList posts={data.allMdx.edges} />
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
