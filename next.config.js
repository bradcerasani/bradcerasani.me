module.exports = {
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
      {
        source: '/writing',
        destination: '/',
        permanent: false,
      },
      {
        source: '/projects',
        destination: '/',
        permanent: false,
      },
      {
        source: '/tesla',
        destination: '/writing/tesla-software-problems-in-winter',
        permanent: true,
      },
      {
        source: '/projects/home-renovation',
        destination: '/projects/designing-a-home',
        permanent: true,
      },
      {
        source: '/play',
        destination: 'https://www.youtube.com/embed/o-kOE0Uev74?autoplay=1',
        permanent: false,
      },
      {
        source: '/workspace',
        destination: 'https://www.workspaces.xyz/p/335-brad-cerasani',
        permanent: false,
      },
    ];
  },
};
