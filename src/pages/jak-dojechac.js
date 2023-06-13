import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GoogleMap from "../components/elements/googleMap/googleMap"

const SecondPage = () => (
  <Layout>
    <div className="container">
      <h1>Jak do nas dojechać?</h1>
    </div>
    <GoogleMap />
    {/* <Link to="/">Wróć do strony głównej</Link> */}
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
