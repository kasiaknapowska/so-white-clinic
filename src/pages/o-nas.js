import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Space from "../components/elements/space/space"
import ButtonLink from "../components/elements/buttons/buttonLink"
import Accordion from "../components/blocks/accordion/accordion"
import Carousel from "../components/blocks/carousel/carousel"
import RevealOnScroll from "../components/effects/reveal/revealOnScroll"


const ONas = ({ data }) => {
  const carouselImg = data.allFile.nodes
  return (
    <Layout>
      <section className="paddingSection topSection">
        <div className="container dflexLayout">
          <article>
            <h1>Prosta droga do uśmiechu</h1>
            <h2>Hollywood Smile, czyli uśmiech doskonały. Jak go uzyskać?</h2>
            <p>
              Aby osiągnąć efekt Hollywood Smile, w So White Clinic stosuje się
              różne techniki i zabiegi stomatologiczne, takie jak wybielanie
              zębów, licówki ceramiczne, korony, implanty czy ortodoncja.
              Kluczowym elementem jest indywidualne dopasowanie do pacjenta,
              uwzględniające kształt, wielkość, kolor zębów oraz proporcje
              twarzy.
            </p>
            <p>
              Za każdy etap metamorfozy pacjenta odpowiada ekspert So White
              Clinic, wykwalifikowany lekarz stomatolog specjalista w swojej
              dziedzinie. Aby osiągnąć zamierzony efekt, stomatolog ściśle
              współpracuje z pacjentem, uwzględniając jego preferencje i
              oczekiwania.
            </p>
            <p>
              Efekt Hollywood Smile jest oszałamiający. Pacjent, który poddał
              się tej kompleksowej terapii w So White Clinic, może spodziewać
              się pięknych, białych, równych i harmonijnych zębów. Uśmiech staje
              się w pełni atrakcyjny i pełen pewności siebie. Hollywood Smile ma
              również pozytywny wpływ na ogólną estetykę twarzy, poprawiając
              symetrię i proporcje.
            </p>
            <Space />
          </article>

          <aside>
            <Accordion />
          </aside>
        </div>
      </section>

      <RevealOnScroll>
      <Carousel carouselImg={carouselImg} />
      </RevealOnScroll>

      <section className="paddingSection">
        <div className="container">
          <h3>
            Chcesz poznać swoją drogę do Hollywood smile? Skonsultuj się z
            naszym lekarzem!
          </h3>
          <ButtonLink label="Chcę umówić konsultację" url="/kontakt" />
          <Space />
          <Link className="backBtn" to="/">
            Wróć do strony głównej
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "oNasCarousel" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export const Head = () => <Seo title="Odkryj swoją drogę do pięknego uśmiechu" description="Pełen zakres zabiegów stomatologicznych. Ortodoncja. Wybielanie zębów. Korony i licówki. Implanty zębowe. Zadzwoń 32 60 60 400. "/>

export default ONas
