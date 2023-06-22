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
import Reveal from "../components/effects/reveal/reveal"
import ButtonWhite from "../components/elements/buttonWhite/buttonWhite"

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
        <Reveal>
          <h1>
            Wish you <span className="decor">smile</span>
          </h1>
        </Reveal>
        <Space />
        <Space />
        <Reveal>
          <p className="narrow">
            Hollywood Smile to śnieżnobiały, perfekcyjny uśmiech dobrze znany z
            wielkiego ekranu i okładek kolorowych czasopism. Dzięki So White
            Clinic jest on teraz osiągalny również dla Ciebie!
          </p>
        </Reveal>
        <Space />
        <Reveal>
          <LinkButton label="Chcę mieć Hollywood smile" url="/kontakt" />
        </Reveal>
      </div>
    </section>

    <div className="container">
      <Reveal>
      <MotionCarousel>
         {heroWhiteButtonsLinks.map((el, i) => {
          return (
            <ButtonWhite key={el.label + i} label={el.label} url={el.url} />
          )
        })}
      </MotionCarousel>
   
      </Reveal>
    </div>
    <section>
      <div className="container">
        <h2>
          Twoja droga do <span className="decor">Hollywood smile</span>
        </h2>
        <Space />
        <Space />
        <p className="narrow">
          Chcesz wiedzieć, jakie zabiegi stomatologiczne pozwolą Ci osiągnąć
          pożądany Hollywood Smile?
        </p>
        <p className="narrow">
          Oto najpopularniejsza droga do Hollywood Smile, wykorzystująca
          wszystkie zabiegi estetyczne wykonywane w profesjonalnej klinice
          stomatologicznej So White Clinic.
        </p>
        <p>Kliknij i dowiedz się więcej!</p>
      </div>
    </section>
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
