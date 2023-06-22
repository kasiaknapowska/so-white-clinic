import * as React from "react"
import "../scss/_commons.scss"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import FormSection from "../components/sections/formSection/formSection"
import Space from "../components/elements/space/space"
import ButtonLink from "../components/elements/buttons/buttonLink"
import TextArrowLink from "../components/elements/buttons/textArrowLink"

import { heroTextCardsLinks, offerTextLinks } from "../data/links"
import MotionCarousel from "../components/blocks/motionCarousel/motionCarousel"
import Reveal from "../components/effects/reveal/reveal"
import TextCard from "../components/blocks/textCard/textCard"


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
    <StaticImage
      src="../images/logo/swc-icon-white.png"
      loading="eager"
      width={1080}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{
        position: "absolute",
        top: "200px",
        right: "-360px",
        width: "1080px",
        overflow: "hidden",
        zIndex: "-2",
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
          <ButtonLink label="Chcę mieć Hollywood smile" url="/kontakt" />
        </Reveal>
      </div>
    </section>

    <div className="container">
      <Reveal>
        <MotionCarousel>
          {heroTextCardsLinks.map((el, i) => {
            return <TextCard key={el.label + i} label={el.label} url={el.url} />
          })}
        </MotionCarousel>
      </Reveal>
    </div>
    <section>
      <div className="container">
        <Reveal>
        <h2>
          Twoja droga do <span className="decor">Hollywood smile</span>
        </h2>
        </Reveal>
        <Space />
        <Space />
        <Reveal>
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
        </Reveal>
      </div>
      <div className="container">
        <ol>
          {offerTextLinks.map((el, i) => {
            return (
              <li>
                <Reveal>
                  <TextArrowLink url={el.url} label={el.label} i={i}/>
                </Reveal>{" "}
              </li>
            )
          })}
        </ol>
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
