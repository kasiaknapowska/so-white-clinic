import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GoogleMap from "../components/elements/googleMap/googleMap"
import Locator from "../images/logo/Lokalizator.svg"
import RevealOnScroll from "../components/effects/reveal/revealOnScroll"

const JakDojechac = () => (
  <Layout>
    <section className="paddingSection topSection">
    <div className="container dflexLayout" style={{justifyContent: "space-between", alignItems: "center"}}>
      <h1>Jak do nas dojechać?</h1>
      <RevealOnScroll>
      <div style={{display: "flex", gap: "1.5rem"}}>
        <img src={Locator} alt="lokalizator" className="locator"/>
        <div>
        <p>Katowice, ul. Czajek 5</p>
        <p>Współrzędne GPS (DD): 50.235478 / 19.007185</p>
        </div>
      </div>
      </RevealOnScroll>
    </div>
    </section>
    <GoogleMap />
  </Layout>
)

export const Head = () => <Seo title="Jak do nas dojechać" />

export default JakDojechac
