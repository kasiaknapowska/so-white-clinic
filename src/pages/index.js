import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


import "../scss/_index.scss"

const IndexPage = () => (
  <Layout>
    
      <h1>Wish you smile!</h1>
      <StaticImage
        src="../images/hero.png"
        loading="eager"
        width={1080}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{position: "fixed", bottom: "0", right: "0", height: "85vh"}}
      />
   
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
