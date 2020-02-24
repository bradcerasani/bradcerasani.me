import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import { H3, Date } from '../components/atoms';
import { PostList, PostItem, PostItemImage } from '../components/post-list';

function Home(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Head title="Brad Cerasani: Design & Engineering" />

      <section>
        <div
          dangerouslySetInnerHTML={{
            __html: data.mdx.frontmatter.excerpt,
          }}
          style={{ marginBottom: '8px' }}
        />

        <Link to={'/about'}>More about me</Link>
      </section>

      <PostList>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const slug = node.fields.slug;
          const date = node.frontmatter.date;
          const image = node.frontmatter.image;

          return (
            <article key={node.fields.slug}>
              <PostItem to={slug}>
                <Date>{date}</Date>
                <H3>{title}</H3>
                {image && <PostItemImage src={image} />}
              </PostItem>
            </article>
          );
        })}
      </PostList>
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
