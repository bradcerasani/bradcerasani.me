import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'styled-components';

import Layout from 'src/templates/layout';
import { Button, Head, Timeline, TimelineItem } from 'src/components';

function Home(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const contents = data.allMdx.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Head
        title="Design & Engineering"
        description="The personal site of designer & developer Brad Cerasani."
      />

      <style>{css`
        :root {
          --backgroundColor: hsl(30, 32%, 40%, 0.5);
          --computedBackgroundColor: hsl(32, 18%, 82%, 1);
        }
      `}</style>

      <main>
        <section>
          <div
            dangerouslySetInnerHTML={{
              __html: data.mdx.frontmatter.excerpt,
            }}
            style={{ marginBottom: '1rem' }}
          />

          <Button to={'/about/'} variant="link">
            More about me
          </Button>
        </section>

        <section>
          <h2>Side Projects &amp; Writing</h2>
          <p>Variations on themes of design, technology, and making things.</p>
          <Timeline>
            {contents.map(({ node }) => (
              <TimelineItem
                fields={node.fields}
                frontmatter={node.frontmatter}
                key={node.fields.slug}
              />
            ))}
          </Timeline>
        </section>
      </main>
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
      filter: { fields: { slug: { ne: "/about/" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            type
          }
          frontmatter {
            cta
            date(formatString: "YYYY")
            daterange
            description
            image
            skipPage
            tags
            title
          }
        }
      }
    }
  }
`;
