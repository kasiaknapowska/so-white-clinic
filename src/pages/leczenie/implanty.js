import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Space from "../../components/elements/space/space"
import ButtonLink from "../../components/elements/buttons/buttonLink"

const Implanty = () => (
  <Layout>
    <section className="topSection">
      <div className="container">
        <h1>Uzupełnianie zębów implantami</h1>
        <h2>Poprzez brak zębów nie chcesz się uśmiechać? Mamy na to sposób!</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        <Space />
        <h3>Pełen uśmiech jest w zasięgu Twojej ręki! Umów wizytę!</h3> 
        <ButtonLink label="Chcę umówić konsultację" url="/kontakt" />
        <Space />
        <Link to="/">Wróć do strony głównej</Link>
      </div>
    </section>
  </Layout>
)

export const Head = () => (
  <Seo title="Uzupełnianie brakujących zębów implantami" />
)

export default Implanty
