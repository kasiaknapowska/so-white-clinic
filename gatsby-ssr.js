/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
// const React = require("react")
/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
  // setHeadComponents([
  //   <link
  //     rel="preload"
  //     href="fonts/tahu-webfont.woff2"
  //     as="font"
  //     type="font/woff2"
  //     crossOrigin="anonymous"
  //   />,

  // ]);
}
