/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
const React = require("react")
/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })

  // setHeadComponents([
  //   <link
  //     key="tahu2"
  //     rel="preload"
  //     href="./fonts/tahu-webfont.woff2"
  //     as="font"
  //     type="font/woff2"
  //     crossOrigin="anonymous"
  //   />,
  //   <link
  //     key="tahu"
  //     rel="preload"
  //     href="./fonts/tahu-webfont.woff"
  //     as="font"
  //     type="font/woff"
  //     crossOrigin="anonymous"
  //   />,
  //   <link
  //     key="montserrat"
  //     rel="preload"
  //     href="./fonts/montserrat.woff2"
  //     as="font"
  //     type="font/woff"
  //     crossOrigin="anonymous"
  //   />,
  // ])
}
