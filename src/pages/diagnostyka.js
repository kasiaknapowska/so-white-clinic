import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Space from "../components/elements/space/space"
import ButtonLink from "../components/elements/buttons/buttonLink"


const Diagnostyka = () => (
  <Layout>
    <section className="topSection">
      <div className="container dflexLayout">
        <article>
          <h1>Diagnostyka w So White Clinic</h1>
          <h2>Jak dbamy o bezpieczeństo i komfort Pacjentów?</h2>
          <p>
            lorem ipsum
          </p>
          <p>
            lorem ipsum
          </p>
          <Space />
        </article>

        <aside>
        <StaticImage
            src="../images/diagnostyka.jpg"
            loading="eager"
            width={1080}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{
              width: "100%"
            }}
          />
        </aside>
      </div>
    </section>
    <section className="noPaddingSection">
      <div className="container">
        <h3>
          Chcesz mieć pewność, że Twój uśmiech jest w dobrych rękach? Zapraszamy do So White Clinic!
        </h3>
        <ButtonLink label="Chcę umówić konsultację" url="/kontakt" />
      </div>
    </section>
    <section>
      <div className="container">
        <Link className="backBtn" to="/">
          Wróć do strony głównej
        </Link>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Diagnostyka" />

export default Diagnostyka
