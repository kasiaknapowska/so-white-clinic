import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "../components/blocks/form/form"
import Contact from "../components/blocks/contact/contact"
import Space from "../components/elements/space/space"

const Kontakt = () => (
  <Layout>
    <section className="topSection">
      <div className="container dflex50">
        <div>
          <h1>Skontaktuj się z nami</h1>
          <p>
            Zadzwoń, napisz e-mail, wypełnij formularz - od pięknego uśmiechu
            dzieli Cię tylko jeden krok!
          </p>
         <Contact/>
         <Space/>
          <h2>Godziny otwarcia</h2>
          <p>Poniedziałek - piątek:&nbsp;&nbsp;&nbsp;8:00 - 20:00</p>
        </div>
        <Form />
      </div>
    </section>
    {/* <Link to="/">Wróć do strony głównej</Link> */}
  </Layout>
)

export const Head = () => <Seo title="Kontakt" />

export default Kontakt
