module.exports = {
  siteMetadata: {
    title: `Pristine Clean - Home cleaning services`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-30709309-3", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          respectDNT: false,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://bba3ac2fce53493aa80d5ca486fa635e@sentry.io/1351931',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        config: {
          environment: 'prod'
        }
      },
    },
  ],
};
