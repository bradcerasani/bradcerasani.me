module.exports = {
  siteMetadata: {
    title: `Hey, I'm Brad`,
    author: `Brad Cerasani`,
    description: `Brad Cerasani: Design & Engineering`,
    siteUrl: `https://bradcerasani.me`,
    image: `/brad-cerasani-office-wide.jpg`,
    social: {
      twitter: `bradcerasani`,
      instagram: `bradcerasani`,
      github: `bradcerasani`,
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
          default: require.resolve(`./src/templates/layout.js`),
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
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.title.replace(/<[^>]*>?/gm, ''),
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  filter: { frontmatter: { status: { ne: "draft" }, skipPage: { ne: true } } }
                  sort: { fields: frontmatter___date, order: DESC }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                        type
                      }
                      frontmatter {
                        date(formatString: "YYYY")
                        daterange
                        description
                        image
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Brad Cerasani's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
    },
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        showInProduction: false,
        axeOptions: {},
      },
    },
  ],
};
