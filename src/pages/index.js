import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Container = styled.div`
  border-bottom: 4px solid firebrick;
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Container>
          <Bio />
        </Container>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug} style={{ marginBottom: `32px` }}>
              <header>
                <h3
                  style={{
                    marginBottom: `4px`,
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
