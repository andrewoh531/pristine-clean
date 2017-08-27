module.exports = {
  siteMetadata: {
    title: `Pristine Clean - Home cleaning services`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-30709309-3',
      },
    }
  ],
};
