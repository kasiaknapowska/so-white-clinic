import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GoogleMap from "../components/elements/googleMap/googleMap"

const JakDojechac = () => (
  <Layout>
    <section className="topSection">
    <div className="container">
      <h1>Jak do nas dojechać?</h1>
    </div>
    </section>
    <GoogleMap />
    {/* <Link to="/">Wróć do strony głównej</Link> */}
  </Layout>
)

export const Head = () => <Seo title="Jak do nas dojechać" />

export default JakDojechac
