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
import RevealOnScroll from "../components/effects/reveal/revealOnScroll"
import TextCard from "../components/blocks/textCard/textCard"

const IndexPage = () => (
  <Layout>
    <StaticImage
      className="heroImageBg"
      src="../images/logo/swc-icon-white.png"
      loading="eager"
      width={1080}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="So White Clinic logo"
    />
    {/* <div className="heroApla"></div> */}
    <StaticImage
      className="heroImage"
      src="../images/hero.png"
      loading="eager"
      width={1080}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Hollywood smile"
    />

    <section className="paddingSection topSection">
      <div className="container">
        <RevealOnScroll>
          <h1>
            Wish you <span className="decor">smile</span>
          </h1>
        </RevealOnScroll>

        <Space />
        <Space />
        <RevealOnScroll>
          <p className="narrow">
            Hollywood Smile to śnieżnobiały, perfekcyjny uśmiech dobrze znany z
            wielkiego ekranu i okładek kolorowych czasopism. Dzięki So White
            Clinic jest on teraz osiągalny również dla Ciebie!
          </p>
        </RevealOnScroll>
        <Space />
        <RevealOnScroll>
          <ButtonLink label="Chcę mieć Hollywood smile" url="/kontakt" />
        </RevealOnScroll>
      </div>
    </section>

    <section >
      <div className="container">
        <RevealOnScroll>
          <MotionCarousel>
            {heroTextCardsLinks.map((el, i) => {
              return (
                <TextCard
                  key={el.label + i}
                  label={el.label}
                  url={el.url}
                  ariaLabel={`${el.label} - dowiedz się więcej`}
                />
              )
            })}
          </MotionCarousel>
        </RevealOnScroll>
      </div>
    </section>
    <section className="paddingSection">
      <div className="container">
        <RevealOnScroll>
          <h2>
            Twoja droga do <span className="decor">Hollywood smile</span>
          </h2>
        </RevealOnScroll>
        <Space />
        <Space />
        <RevealOnScroll>
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
        </RevealOnScroll>
      </div>
      <Space />
      <div className="container">
        <ol>
          {offerTextLinks.map((el, i) => {
            return (
              <li key={el.url + i}>
                <RevealOnScroll>
                  <TextArrowLink
                    url={`/leczenie/${el.url}`}
                    label={el.label}
                    i={i}
                  />
                </RevealOnScroll>{" "}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
    <Space/>
    <FormSection />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title="Spełnij marzenia o Hollywood smile" description="W So White Clinic zadbamy o Twój piękny uśmiech! Prostowanie zębów, wybielanie, korony, licówki. Umów konsultację 32 60 60 400."/>
)

export default IndexPage
