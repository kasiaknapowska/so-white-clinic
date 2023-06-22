import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GoogleMap from "../components/elements/googleMap/googleMap"
import Locator from "../images/logo/Lokalizator.svg"

const JakDojechac = () => (
  <Layout>
    <section className="topSection">
    <div className="container dflex50" style={{justifyContent: "space-between", alignItems: "center"}}>
      <h1>Jak do nas dojechać?</h1>
      <div style={{display: "flex", gap: "1.5rem"}}>
        <img src={Locator} alt="lokalizator" className="locator"/>
        <div>
        <p>Katowice, ul. Czajek 5</p>
        <p>Współrzędne GPS (DD): 50.235478 / 19.007185</p>
        </div>
      </div>
    </div>
    </section>
    <GoogleMap />
    {/* <Link to="/">Wróć do strony głównej</Link> */}
  </Layout>
)

export const Head = () => <Seo title="Jak do nas dojechać" />

export default JakDojechac
