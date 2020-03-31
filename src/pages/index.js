import React, { useState, useEffect, useRef } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import { PostList, PostItem, PostItemImage } from '../components/post-list';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Home(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const [activePost, setActivePost] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const interval = 2000;

  useInterval(
    () => {
      // Reset activePost when through list of posts
      if (activePost === posts.length - 1) {
        setActivePost(0);
      } else {
        setActivePost(activePost + 1);
      }
    },
    isRunning ? interval : null
  );

  return (
    <Layout location={props.location} title={siteTitle}>
      <Head title="Design & Engineering" />

      <section>
        <div
          dangerouslySetInnerHTML={{
            __html: data.mdx.frontmatter.excerpt,
          }}
          style={{ marginBottom: '1rem' }}
        />

        <Link to={'/about/'} style={{ textDecoration: 'none' }}>
          More about me{' '}
          <span
            style={{
              bottom: '-6px',
              display: 'inline-block',
              height: '24px',
              position: 'relative',
              width: '24px',
            }}
          >
            <svg viewBox="0 0 100 100">
              <path d="M36.75 73.50L49.95 53.90L36.75 34.30L30.55 34.30L41.45 53.90L30.55 73.50ZM56.15 73.50L69.45 53.90L56.15 34.30L50.05 34.30L60.75 53.90L50.05 73.50Z"></path>
            </svg>
          </span>
        </Link>
      </section>

      <PostList
        onMouseEnter={() => setIsRunning(false)}
        onMouseLeave={() => setIsRunning(true)}
      >
        {posts.map(({ node }, index) => {
          const title = node.frontmatter.title || node.fields.slug;
          const slug = node.fields.slug;
          const date = node.frontmatter.date;
          const image = node.frontmatter.image;

          return (
            <article key={node.fields.slug}>
              <PostItem
                to={slug}
                className={activePost === index ? 'js-hover' : undefined}
                onMouseEnter={() => setActivePost(index)}
              >
                <h3>{title}</h3>
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
