import * as React from "react"
import "../scss/_commons.scss"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import FormSection from "../components/sections/formSection/formSection"
import Space from "../components/elements/space/space"
import LinkButton from "../components/elements/button/button"


import { heroWhiteButtonsLinks } from "../data/links"
import MotionCarousel from "../components/blocks/motionCarousel/motionCarousel"



const IndexPage = () => (
  <Layout>
    <StaticImage
      src="../images/hero.png"
      loading="eager"
      width={1080}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        height: "calc(100vh - 85px)",
        zIndex: "-1",
      }}
    />
    <section className="topSection">
      <div className="container">
      <h1>
        Wish you <span className="decor">smile</span>
      </h1>
      <Space />
      <Space />
      <p className="narrow">
        Hollywood Smile to śnieżnobiały, perfekcyjny uśmiech dobrze znany z
        wielkiego ekranu i okładek kolorowych czasopism. Dzięki So White Clinic
        jest on teraz osiągalny również dla Ciebie!
      </p>
      <Space />
      <LinkButton label="Chcę mieć Hollywood smile" url="/kontakt" />
      </div>
    </section>
 
      <div className="container">
      <MotionCarousel data={heroWhiteButtonsLinks}/>
      </div>

    <FormSection />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
