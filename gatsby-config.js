/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // Plugins
  plugins: [
    // Contentful source plugin
    // This plugin allows this website to source data from contentful CMS
    // The spaceID and accessToken are exposed but will be hidden in an .env file in the future
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "9tsw91dqehj4",
        accessToken: "ue76suCe3wMvf-G5XYCHNuE3-12kE2N6G63Nc-P8Edk",
      },
    },
    `gatsby-plugin-twitter`,
  ],
}
