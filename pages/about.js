import React from 'react';
import Link from 'next/link';
import { css } from 'styled-components';

import Layout from 'src/templates/layout';
import {
  Gallery,
  GalleryController,
  Grid,
  GridItem,
  Head,
} from 'src/components';

function About() {
  return (
    <>
      <Layout>
        <Head
          title="About Brad Cerasani"
          description={`I’ve been designing and implementing software for over a decade,
              with clients and collaborators that include Apple, Twitter, and
              the American Music Awards.`}
          slug={'/about'}
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
          <section>
            <p>
              I’ve been designing and implementing software for over a decade,
              with clients and collaborators that include Apple, Twitter, and
              the American Music Awards.
            </p>
            <p>
              I’m a lifelong learner, maker, and advocate for user-centered
              design.
            </p>
            <p>
              In 2014 I joined the design team at Black Pixel; a mobile-focused
              digital products agency whose software is used by over 100 million
              people daily. In 2016, I formally transitioned into the
              engineering group, where a new Web Services Team was created under
              my lead. In the years that followed, I grew this team from three
              to more than twenty highly-engaged developers—across a wide
              variety of projects, platforms, and technologies.
            </p>
            <p>
              Black Pixel was acquired by Hypergiant in late 2018, where I am
              presently Director of Web Development.
            </p>
            <p>
              Offline I play hockey and soccer, collect twentieth-century{' '}
              <Link href="https://twitter.com/bradcerasani/status/1214300670901141504">
                furniture
              </Link>{' '}
              and{' '}
              <Link href="https://www.instagram.com/p/CEm_0otAZo1/">
                objects
              </Link>{' '}
              , and bury myself in{' '}
              <Link href="/#side-projects">side projects</Link> that follow
              themes of design, technology, and making things.
            </p>
          </section>

          <Grid>
            <GridItem $width={{ base: '50%', sm: '30%' }}>
              <h5 style={{ paddingTop: 0 }}>Elsewhere</h5>
              <ul>
                {['Twitter', 'Instagram', 'GitHub'].map((link) => (
                  <li key={link}>
                    <a
                      href={`https://${link.toLowerCase()}.com/bradcerasani`}
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </GridItem>

            <GridItem $width={{ base: '50%', sm: '30%' }}>
              <h5 style={{ paddingTop: 0 }}>Site Archives</h5>
              <ul>
                {['2010', '2011', '2012', '2013', '2014'].map((year) => (
                  <li key={year}>
                    <a
                      href={`https://${year}.bradcerasani.me`}
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      {year}
                    </a>
                  </li>
                ))}
              </ul>
            </GridItem>

            <GridItem $width={{ sm: '40%' }}>
              <h5 style={{ paddingTop: 0 }}>Photos</h5>
              <GalleryController />
            </GridItem>
          </Grid>
        </main>
      </Layout>

      <Gallery />
    </>
  );
}

export default About;
