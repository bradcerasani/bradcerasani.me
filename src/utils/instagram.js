const fs = require('fs');
const axios = require('axios');
const download = require('./download');

const INSTAGRAM_ID = '18888862';
const destination = 'public/images/instagram/';
const metadataFile = 'content/social/instagram.json';

async function scrapeInstagramPosts({ userId = '18888862', limit = 100 }) {
  console.log('Scraping Instagram...');

  return axios
    .get(
      `https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"${userId}","first":${limit},"after":null}`
    )
    .then((response) => {
      const photos = [];
      response.data.data.user.edge_owner_to_timeline_media.edges.forEach(
        (edge) => {
          if (edge.node) {
            photos.push(edge.node);
          }
        }
      );

      photos.forEach(({ display_url, id }) => {
        download(display_url, `${id}.jpg`, destination);
      });

      fs.writeFileSync(metadataFile, JSON.stringify(photos.reverse()));
    })
    .catch((err) => {
      console.warn(`\nCould not fetch instagram posts. Error status ${err}`);
      return null;
    });
}

scrapeInstagramPosts({ userId: INSTAGRAM_ID, limit: 12 });
