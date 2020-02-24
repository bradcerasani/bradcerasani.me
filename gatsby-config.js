module.exports = {
  siteMetadata: {
    title: `Brad Cerasani`,
    author: `Brad Cerasani`,
    description: `Brad Cerasani: Design & Engineering`,
    siteUrl: `https://bradcerasani.me`,
    image: `https://bradcerasani.me/images/brad-cerasani-office-wide.jpg`,
    social: {
      twitter: `bradcerasani`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              languageExtensions: [
                {
                  extend: 'js',
                  insertBefore: {
                    function: {
                      js_keyword: /(document)/,
                    },
                  },
                },
                {
                  extend: 'js',
                  insertBefore: {
                    function: {
                      js_period: /(\.)/,
                    },
                  },
                },
              ],
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-widows`,
        ],
      },
    },
    // Duplicate plugin declaration to clear doubled images
    // https://github.com/gatsbyjs/gatsby/issues/15486
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 700,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-5977667-28`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brad Cerasani: Design & Engineering`,
        short_name: `Brad Cerasani`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#74ccbc`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-remove-trailing-slashes`,
  ],
};
