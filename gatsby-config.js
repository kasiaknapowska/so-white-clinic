/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `So white clinic`,
    description: `Klinika stomatologii w Katowicach`,
    author: `@KKnapowska`,
    siteUrl: `https://sowhiteclinic.pl/`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo/swc-icon-512.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-omni-font-loader`,
    //   options: {
    //     enableListener: true,
    //     preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
    //     web: [
    //       {
    //         name: `Montserrat`,
    //         file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap`,
    //       },
    //       {
    //         name: `Varela Round`,
    //         file: `https://fonts.googleapis.com/css2?family=Varela+Round&display=swap`,
    //       },
    //     ],
    //   },
    // },
  ],
}
