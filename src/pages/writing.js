import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { NewsletterSignup } from '../components/molecules';
import { PostList } from '../components/organisms';
import { Head, Layout } from '../components/templates';

function WritingPage(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const [paused, setPaused] = useState(false);

  return (
    <>
      <Layout location={props.location} title={siteTitle}>
        <Head title="Writing" />

        <NewsletterSignup
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        />

        <PostList posts={data.allMdx.edges} paused={paused} />
      </Layout>
    </>
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
