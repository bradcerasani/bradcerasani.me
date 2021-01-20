import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { css } from 'styled-components';

import Layout from 'src/templates/layout';
import {
  Gallery,
  GalleryController,
  Grid,
  GridItem,
  Head,
} from 'src/components';

function AboutPage(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const images = props.data.allInstaNode.edges.reverse();

  return (
    <>
      <Layout title={siteTitle}>
        <Head
          title="About"
          description="About Brad Cerasani; Design & Engineering."
          slug={post.slug}
        />

        <style>
          {css`
            @media (prefers-color-scheme: light) {
              :root {
                --backgroundColor: hsl(33, 44%, 41%, 0.5);
                --computedBackgroundColor: hsl(35, 26%, 82%, 1);
              }
            }
          `}
        </style>

        <main>
          <section id="js-mdx-body">
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>

          <Grid>
            <GridItem width={{ base: '50%', sm: '30%' }}>
              <h6 style={{ paddingTop: 0 }}>Elsewhere</h6>
              <ul>
                {['Twitter', 'Instagram', 'GitHub'].map((link) => (
                  <li key={link}>
                    <OutboundLink
                      href={`https://${link.toLowerCase()}.com/bradcerasani`}
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      {link}
                    </OutboundLink>
                  </li>
                ))}
              </ul>
            </GridItem>

            <GridItem width={{ base: '50%', sm: '30%' }}>
              <h6 style={{ paddingTop: 0 }}>Site Archives</h6>
              <ul>
                {['2014', '2013', '2012', '2011', '2010'].map((year) => (
                  <li key={year}>
                    <OutboundLink
                      href={`https://${year}.bradcerasani.me`}
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      {year}
                    </OutboundLink>
                  </li>
                ))}
              </ul>
            </GridItem>

            <GridItem width={{ sm: '40%' }}>
              <h6 style={{ paddingTop: 0 }}>Photos</h6>
              <GalleryController images={images} />
            </GridItem>
          </Grid>
        </main>
      </Layout>

      <Gallery images={images} />
    </>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query ContentBySlug {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: "/about/" } }) {
      id
      body
      frontmatter {
        excerpt
      }
      slug
    }
    allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 10) {
      edges {
        node {
          timestamp
          id
          mediaType
          preview
          caption
        }
      }
    }
  }
`;
