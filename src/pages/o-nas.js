import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Space from "../components/elements/space/space"
import ButtonLink from "../components/elements/buttons/buttonLink"

const ONas = () => (
  <Layout>
    <section className="topSection">
      <div className="container">
        <h1>Prosta droga do uśmiechu</h1>
        <h2>Hollywood Smile, czyli uśmiech doskonały. Jak go uzyskać?</h2>
        <p>
          Aby osiągnąć efekt Hollywood Smile, w So White Clinic stosuje się
          różne techniki i zabiegi stomatologiczne, takie jak wybielanie zębów,
          licówki ceramiczne, korony, implanty czy ortodoncja. Kluczowym
          elementem jest indywidualne dopasowanie do pacjenta, uwzględniające
          kształt, wielkość, kolor zębów oraz proporcje twarzy.
        </p>
        <p>
          Za każdy etap metamorfozy pacjenta odpowiada ekspert So White Clinic,
          wykwalifikowany lekarz stomatolog specjalista w swojej dziedzinie. Aby
          osiągnąć zamierzony efekt, stomatolog ściśle współpracuje z pacjentem,
          uwzględniając jego preferencje i oczekiwania.
        </p>
        <p>
          Efekt Hollywood Smile jest oszałamiający. Pacjent, który poddał się
          tej kompleksowej terapii w So White Clinic, może spodziewać się
          pięknych, białych, równych i harmonijnych zębów. Uśmiech staje się w
          pełni atrakcyjny i pełen pewności siebie. Hollywood Smile ma również
          pozytywny wpływ na ogólną estetykę twarzy, poprawiając symetrię i
          proporcje.
        </p>
        <Space />
        <h3>
          Chcesz poznać swoją drogę do Hollywood smile? Skonsultuj się z naszym
          lekarzem!
        </h3>
        <ButtonLink label="Chcę umówić konsultację" url="/kontakt"/>
        <Space/>
        <Link to="/">Wróć do strony głównej</Link>
      </div>
    </section>
    
  </Layout>
)

export const Head = () => <Seo title="O nas" />

export default ONas