import React from 'react';
import Link from 'next/link';
import { css } from 'styled-components';

import fs from 'fs';
import matter from 'gray-matter';
import { postFilePaths } from 'utils/posts';

import Layout from 'src/templates/layout';
import { Button, Head, Timeline, TimelineItem } from 'src/components';

function Home({ posts }) {
  const description = `I’ve been designing and implementing software for over a decade,
  with clients and collaborators that include Apple, Twitter, and
  the American Music Awards.`;

  return (
    <Layout>
      <Head
        title="Brad Cerasani"
        description={`Hi, I'm Brad. ${description}`}
      />

      <style>
        {css`
          @media (prefers-color-scheme: light) {
            :root {
              --backgroundColor: hsl(30, 32%, 40%, 0.5);
              --computedBackgroundColor: hsl(32, 18%, 82%, 1);
            }
          }
        `}
      </style>

      <main>
        <section style={{ marginBottom: 'calc(var(--spaceMedium) / 2)' }}>
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            style={{ marginBottom: 'calc(var(--spaceDefault) / 2)' }}
          />

          <Link href="/about" passHref>
            <Button $variant="link" style={{ textUnderlinePosition: 'under' }}>
              More about me
            </Button>
          </Link>
        </section>

        <section>
          <h2
            style={{ paddingTop: 'calc(var(--spaceMedium) / 2)' }}
            id="side-projects"
          >
            Side projects &amp; writing
          </h2>
          <Timeline>
            {posts.map((datum, index) => {
              const { type, slug, frontmatter } = datum;

              return (
                <TimelineItem
                  slug={slug}
                  type={type}
                  frontmatter={frontmatter}
                  key={index}
                />
              );
            })}
          </Timeline>
        </section>
      </main>
    </Layout>
  );
}

export default Home;

export function getStaticProps() {
  const posts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(filePath);
      const { content, data } = matter(source);
      const type = filePath.includes('/writing/') ? 'POST' : 'PROJECT';
      const slug = filePath.split('/content')[1].replace('index.md', '');

      return {
        type,
        slug,
        content,
        frontmatter: data,
        filePath,
      };
    })
    .sort((a, b) => {
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    });

  return { props: { posts } };
}
