import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <section className="topSection">
      <div className="container">
        <h1>404: Nie znaleziono strony</h1>
        <p>Strona o podanym adresie nie istnieje</p>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
