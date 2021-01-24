import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'styled-components';

import Layout from 'src/templates/layout';
import { Button, Head, Timeline, TimelineItem } from 'src/components';

function Home(props) {
  const contents = props.data.allMdx.edges;

  return (
    <Layout>
      <Head
        title="Design & Engineering"
        description="The personal site of designer & developer Brad Cerasani."
      />

      <style>
        {css`
          @media (prefers-color-scheme: light) {
            :root {
              --backgroundColor: hsl(30, 32%, 40%, 0.5);
              --computedBackgroundColor: hsl(32, 18%, 82%, 1);
            }
          }
        `}
      </style>

      <main>
        <section style={{ marginBottom: 'var(--spaceMedium)' }}>
          <p
            dangerouslySetInnerHTML={{
              __html: props.data.mdx.frontmatter.excerpt,
            }}
            style={{ marginBottom: 'calc(var(--spaceDefault) / 2)' }}
          />

          <Button
            to={'/about/'}
            $variant="link"
            style={{ textUnderlinePosition: 'under' }}
          >
            More about me
          </Button>
        </section>

        <section>
          <h2 style={{ paddingTop: '0' }}>Side Projects</h2>
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
            status
            title
          }
        }
      }
    }
  }
`;
