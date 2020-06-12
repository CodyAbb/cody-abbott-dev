/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
  // Site meta-data
  siteMetadata: {
    title: "My Site",
    author: "Cody Abbott",
    siteUrl: "https://cody-abbott-dev.herokuapp.com/",
    social: [
      {
        name: "github",
        url: "https://github.com/CodyAbb",
      },
    ],
  },
}
