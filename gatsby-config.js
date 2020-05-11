/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  /* Your site config here */
  // Plugins
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-smoothscroll`,
    // Contentful source plugin
    // This plugin allows this website to source data from contentful CMS
    // The spaceID and accessToken are exposed but will be hidden in an .env file in the future
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/img/favicon.png",
      },
    },
    `gatsby-plugin-twitter`,

    // Sourcing from github. (A temporary repository made by martin which contains 2 issues to be pulled)
    // Github
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_KEY}` // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
        queries: [
          `{
            repository(owner: "blockpass-identity-lab", name: "student-projects") {
              issues(last: 20, states: OPEN) { 
                edges {
                  node {
                    id
                    author{
                      url
                      login
                    }
                    bodyHTML
                    title
                    url
                  }
                }
              }
            }
          }`,
        ],
      },
    },
  ],
}
