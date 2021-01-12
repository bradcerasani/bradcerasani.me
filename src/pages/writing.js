import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { css } from 'styled-components';

import { NewsletterSignup } from 'src/components/molecules';
import { PostList } from 'src/components/organisms';
import { Head, Layout } from 'src/components/templates';

function WritingPage(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const [paused, setPaused] = useState(false);

  return (
    <>
      <Layout location={props.location} title={siteTitle}>
        <Head title="Writing" />

        <style>{css`
          :root {
            --backgroundColor: HSLA(39, 14%, 40%, 0.5);
            --computedBackgroundColor: HSLA(43, 8%, 82%, 1);
          }
        `}</style>

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
