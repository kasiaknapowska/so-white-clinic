import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


import "../scss/_index.scss"
import FormSection from "../components/sections/formSection/formSection"

const IndexPage = () => (
  <Layout>
    
      <div className="container"><h1>Wish you smile!</h1></div>
      {/* <StaticImage
        src="../images/hero.png"
        loading="eager"
        width={1080}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{position: "fixed", bottom: "0", right: "0", height: "calc(100vh - 85px)"}}
      /> */}
   <FormSection/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
