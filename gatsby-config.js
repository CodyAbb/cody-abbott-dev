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
    // Transforms markdown files
    "gatsby-transformer-remark",
    //Plugin allows access to files stored in data
    // used for images and article markdown folder
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/project_posts`, name: "projects" },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/blog_posts`, name: "posts" },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/img` },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CodyAbbottDev`,
        short_name: `CodyAbbottDev`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: "src/img/icons8-console-30.png", // This path is relative to the root of the site.
      },
    },
    //This plugin automatically generates a service worker for building apps offline
    //helps make it a progressive web app
    `gatsby-plugin-offline`,
  ],
  // Site meta-data
  siteMetadata: {
    title: "My Site",
    description: "Web development portfolio and tutorial site",
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
