import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import Head from '../components/head';
import { StyledMarkdown } from '../components/markdown';

function BlogPostTemplate(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const date = post.frontmatter.date;

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      headline={post.frontmatter.title}
      backgroundColor="hsl(0, 0%, 98%)"
      date={date}
    >
      <Head
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <section>
          <StyledMarkdown>
            <MDXRenderer>{post.body}</MDXRenderer>
          </StyledMarkdown>
        </section>
      </article>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      }
    }
  }
`;
