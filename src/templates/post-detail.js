import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from 'src/templates/layout';
import { Head } from 'src/components';
import 'src/css/footnotes.css';
import 'src/css/prism-theme.css';

function PostDetailTemplate(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const date = post.frontmatter.date;
  const previous = props.data.sitePage.context.previous;
  const next = props.data.sitePage.context.next;

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      headline={post.frontmatter.title}
      date={date}
    >
      <Head
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.image}
        slug={post.slug}
      />

      <style>
        {css`
          @media (prefers-color-scheme: light) {
            :root {
              --backgroundColor: hsl(39, 14%, 40%, 0.5);
              --computedBackgroundColor: hsl(43, 8%, 82%, 1);
            }
          }
        `}
      </style>

      <main>
        <article>
          <section>
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </article>
      </main>

      {/* TODO: Abstract and style like DF? Create util for stripping HTML or look to store at build time? */}
      <section
        role="navigation"
        aria-label="Pagination Navigation"
        style={{
          marginTop: 'var(--spaceMedium)',
          paddingTop: 'var(--spaceMedium)',
          borderTop: '1px solid var(--colorFaded)',
          display: 'flex',
          color: 'var(--colorGreyLight)',
          fontSize: '0.9rem',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {next && (
            <>
              <h6 style={{ paddingTop: '0' }}>Newer</h6>

              <Link
                to={next.fields.slug}
                style={{ textDecorationColor: 'inherit' }}
              >
                {next.frontmatter.title.replace(/<[^>]*>?/gm, '')}
              </Link>
            </>
          )}
        </div>
        {previous && (
          <div>
            <h6 style={{ paddingTop: '0' }}>Older</h6>
            <Link
              to={previous.fields.slug}
              style={{ textDecorationColor: 'inherit' }}
            >
              {previous.frontmatter.title.replace(/<[^>]*>?/gm, '')}
            </Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default PostDetailTemplate;

export const pageQuery = graphql`
  query PostDetailBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 240)
      body
      frontmatter {
        title
        date(formatString: "MMM YYYY")
        description
        image
      }
      slug
    }
    sitePage(context: { slug: { eq: $slug } }) {
      context {
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
