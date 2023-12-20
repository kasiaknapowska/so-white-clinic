import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Space from "../components/elements/space/space"
import ButtonLink from "../components/elements/buttons/buttonLink"
import RevealOnScroll from "../components/effects/reveal/revealOnScroll"
import { contact } from "../data/contact"

const PolitykaPrywatnosci = () => {
    const {email, phoneLabel} = contact;
  return (
    <Layout>
      <RevealOnScroll>
        <section className="paddingSection topSection">
          <div className="container">
            <h1>Polityka prywatności</h1>
            <h2>Bezpieczeństwo Twoich danych</h2>
            <p>
              Administratorem danych osobowych jest firma Roman Borczyk Klinika
              Implantologii i Stomatologii Estetycznej sp.j. w Katowicach, ul.
              Czajek 5a, 40-533 Katowice. Podanie danych oraz zgoda na ich
              przetwarzanie w celach nie związanych z procesem leczenia jest
              dobrowolna. Niniejsze zgody obejmują przetwarzanie danych w
              przyszłości, jeśli nie zmieni się cel przetwarzania lub jeśli
              zgoda nie zostanie cofnięta. Przysługuje Państwu prawo dostępu do
              treści danych osobowych, ich poprawienia, złożenia sprzeciwu wobec
              przetwarzania danych w celach marketingowych lub przekazania ich
              innym odbiorcom, w tym prawo do zaprzestania ich przetwarzania w
              celach marketingowych. W tym celu prosimy skontaktować się z
              recepcją Kliniki przy ulicy Czajek 5a w Katowicach osobiście,
              telefonicznie ${phoneLabel} lub mailowo ${email}
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <section className="paddingSection">
        <div className="container">
          <h3>
            Chcesz mieć pewność, że Twój uśmiech jest w dobrych rękach?
            Zapraszamy do So White Clinic!
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

export const Head = () => (
  <Seo title="PolitykaPrywatnosci" description="PolitykaPrywatnosci" />
)

export default PolitykaPrywatnosci
