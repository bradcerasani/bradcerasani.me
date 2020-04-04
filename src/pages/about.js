import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Grid, GridItem } from '../components/molecules';
import { Gallery, GalleryController } from '../components/organisms';
import { Head, Layout } from '../components/templates';

function AboutPage(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const backgroundColor = props.data.mdx.frontmatter.backgroundColor;
  const images = props.data.allInstaNode.edges;

  return (
    <>
      <Layout
        location={props.location}
        title={siteTitle}
        backgroundColor={backgroundColor}
      >
        <Head
          title="About"
          description="About Brad Cerasani; Design & Engineering."
        />

        <section id="js-mdx-body">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>

        <Grid>
          <GridItem width={{ sm: '30%' }}>
            <h6>Elsewhere</h6>
            <ul>
              {/* TODO: Pull from site settings? */}
              {['Instagram', 'Twitter', 'GitHub'].map((link) => (
                <li key={link}>
                  <OutboundLink
                    href={`https://${link.toLowerCase()}.com/bradcerasani`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link}
                  </OutboundLink>
                </li>
              ))}
            </ul>
          </GridItem>

          <GridItem width={{ sm: '30%' }}>
            <h6>Site Archives</h6>
            <ul>
              {['2014', '2013', '2012', '2011', '2010'].map((year) => (
                <li key={year}>
                  <OutboundLink
                    href={`https://${year}.bradcerasani.me`}
                    rel="noopener noreferrer"
                    target="_blank"
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
        backgroundColor
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
