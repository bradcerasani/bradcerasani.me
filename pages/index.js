import React from 'react';

import { posts } from 'src/utils/posts.mjs';
import Layout from 'src/templates/layout';
import {
  Head,
  Header,
  Timeline,
  TimelineItem,
  Gallery,
  GalleryController,
  Grid,
  GridItem,
} from 'src/components';

function Home({ posts }) {
  const description = `I've been building on the web for 15 years, helping companies like Apple, Google, Twitter, and the American Music Awards create beautiful and useful experiences for their users.`;

  return (
    <>
      <Head
        title="Brad Cerasani"
        description={`Hi, I'm Brad. ${description}`}
      />
      <Layout>
        <Header posts={posts} />
        <main>
          <section>
            <p>
              I&apos;ve been building on the web for 15 years, helping companies
              like Apple, Google, Twitter, and the American Music Awards create
              beautiful and useful experiences for their users.
            </p>

            <p>
              I specialize in a mix of visual/interaction design and front-end
              engineering — which allows me to translate ideas into functional
              prototypes and production-ready code with the full fidelity of the
              web.
            </p>

            <p>
              Here you&apos;ll find a medly of writing and side projects that
              explore software, design, architecture, and the internet of
              things.{' '}
            </p>
          </section>

          <section>
            <Grid $gutter="4rem">
              <GridItem $width={{ sm: '50%' }}>
                <h6>Elsewhere</h6>

                <ul
                  style={{
                    fontFamily: 'var(--fontFamilySansSerif)',
                    fontSize: 'var(--fontSizeSmall)',
                    color: 'var(--colorGreyDefault)',
                  }}
                >
                  {elsewhere.map(({ title, url }) => (
                    <li key={url}>
                      <a
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </GridItem>

              <GridItem $width={{ sm: '50%' }}>
                <h6>Photos</h6>
                <GalleryController />
              </GridItem>
            </Grid>
          </section>

          <section
            style={{
              marginTop: 'var(--spaceMedium)',
              marginBottom: 'var(--spaceLarge)',
            }}
          >
            <h6>Posts &amp; Projects</h6>
            <Timeline>
              {posts.map(({ type, slug, frontmatter }) => {
                return (
                  <TimelineItem
                    slug={slug}
                    type={type}
                    frontmatter={frontmatter}
                    key={slug}
                  />
                );
              })}
            </Timeline>
          </section>
        </main>

        <Gallery />
      </Layout>
    </>
  );
}

export default Home;

export function getStaticProps() {
  return { props: { posts } };
}

const elsewhere = [
  {
    title: 'Twitter',
    url: 'https://twitter.com/bradcerasani',
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/bradcerasani',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/bradcerasani',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bradcerasani/',
  },
  {
    title: 'read.cv',
    url: 'https://read.cv/bradcerasani',
  },
];
