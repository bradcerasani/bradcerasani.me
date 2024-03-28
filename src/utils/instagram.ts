import fs from 'fs-extra';
import { downloadFile } from './downloadFile';

const INSTAGRAM_ID = '18888862';
const destinationDirectory = './public/images/instagram/';
const metadataFile = './src/content/social/instagram.json';
const limit = 16;

interface InstagramPost {
  display_url: string;
  id: string;
}

async function scrapeInstagramPosts({ userId = INSTAGRAM_ID, limit = 10 }) {
  console.log('Scraping Instagram...');

  // Sample response for when rate limited
  // const staticUrl = 'https://tmp-henna.vercel.app/download-gql.json';

  const url = `https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"${userId}","first":${limit},"after":null}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const edges = data.data.user.edge_owner_to_timeline_media.edges ?? [];
      const posts = edges.map(({ node }: { node: InstagramPost }) => ({
        ...node,
      }));

      if (posts.length) {
        posts.forEach(({ display_url, id }: InstagramPost) => {
          downloadFile(display_url, `${id}.jpg`, destinationDirectory)
            .then(() => {
              console.log('Downloaded', `${id}.jpg`);
            })
            .catch((err) => {
              console.error('Error downloading file:', err);
            });
        });

        fs.writeFileSync(metadataFile, JSON.stringify(posts.reverse()));

        console.log('Metadata written to', metadataFile);
      }
    }
  } catch (error) {
    console.warn(`Could not fetch instagram posts: ${error}`);
  }
}

scrapeInstagramPosts({ userId: INSTAGRAM_ID, limit });
