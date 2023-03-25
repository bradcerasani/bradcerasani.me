import fs from 'fs-extra';
import fetch from 'node-fetch';
import get from 'lodash/get.js';
import download from './download.mjs';

const INSTAGRAM_ID = '18888862';
const destination = 'public/images/instagram/';
const metadataFile = 'content/social/instagram.json';
const limit = 16;

async function scrapeInstagramPosts({ userId = INSTAGRAM_ID, limit = 100 }) {
  console.log('Scraping Instagram...');

  // Sample response for when rate limited
  // const staticUrl = 'https://tmp-henna.vercel.app/download-gql.json';

  const url = `https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"${userId}","first":${limit},"after":null}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const posts = get(
        data,
        'data.user.edge_owner_to_timeline_media.edges',
        []
      ).map(({ node }) => ({ ...node }));

      if (posts.length) {
        posts.forEach(({ display_url, id }) => {
          download(display_url, `${id}.jpg`, destination);
        });

        fs.writeFileSync(metadataFile, JSON.stringify(posts.reverse()));
      }
    }
  } catch (error) {
    console.warn(`Could not fetch instagram posts: ${error}`);
  }
}

scrapeInstagramPosts({ userId: INSTAGRAM_ID, limit });
