/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '9tsw91dqehj4',
        accessToken: 'ue76suCe3wMvf-G5XYCHNuE3-12kE2N6G63Nc-P8Edk'
      }
    }
  ]
}
