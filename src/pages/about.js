import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { css } from 'styled-components';

import { Grid, GridItem } from '../components/molecules';
import { Gallery, GalleryController } from '../components/organisms';
import { Head, Layout } from '../components/templates';

function AboutPage(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const images = props.data.allInstaNode.edges;

  return (
    <>
      <Layout location={props.location} title={siteTitle}>
        <Head
          title="About"
          description="About Brad Cerasani; Design & Engineering."
        />

        <style>{css`
          :root {
            --backgroundColor: HSLA(33, 44%, 41%, 0.5);
            --computedBackgroundColor: HSLA(35, 26%, 82%, 1);
          }
        `}</style>
        <section id="js-mdx-body">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>

        <Grid>
          <GridItem width={{ base: '50%', sm: '30%' }}>
            <h6>Elsewhere</h6>
            <ul style={{ marginBottom: '0' }}>
              {/* TODO: Pull from site settings? */}
              {['Instagram', 'Twitter', 'GitHub'].map((link) => (
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
            <h6>Site Archives</h6>
            <ul style={{ marginBottom: '0' }}>
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
            <h6>Photos</h6>
            <GalleryController images={images} />
          </GridItem>
        </Grid>
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
    # TODO: add dynamic filename-based(?) content lookup
    mdx(fields: { slug: { eq: "/about/" } }) {
      id
      body
      frontmatter {
        excerpt
      }
    }

    allInstaNode(sort: { fields: timestamp, order: ASC }, limit: 10, skip: 2) {
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
