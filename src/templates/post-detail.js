import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { color } from 'src/components/theme';
import { Head, Layout } from 'src/components/templates';

function PostDetailTemplate(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const date = post.frontmatter.date;

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
      />

      <style>
        {css`
          :root {
            --backgroundColor: ${color.white};
          }
        `}
      </style>

      <article>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
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
    }
  }
`;
