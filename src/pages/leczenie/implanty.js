import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
          Zastanawiasz się nad uzupełnieniem brakujących zębów, ale nie wiesz,
          jaką metodę wybrać? Proteza, most, a może implanty? W So White Clinic
          stosujemy sprawdzone metody leczenia, które pozwalają naszym Pacjentom
          nie tylko szeroko się uśmiechać, ale także komfortowo funkcjonować.
        </p>
        <p>
          Implanty zębowe to metoda leczenia, która polega na wszczepieniu
          elementów zastępujących korzenie utraconych zębów. Implanty stosujemy
          w przypadku braków zębowych, bez względu na to, czy zęby zostały
          utracone na skutek chorób, urazów czy procesu starzenia. Implanty
          stanowią doskonałe rozwiązanie, ponieważ zapewniają trwałe i stabilne
          wsparcie dla protez zębowych, mostów czy koron. Dzięki nim nasi
          Pacjenci odzyskują pełnię funkcji gryzienia i estetyczny uśmiech. Co
          więcej, implanty pomagają w zachowaniu struktury kości szczęki i
          przeciwdziałają jej zanikowi. Implanty nie wymagają ingerencji w
          sąsiednie zdrowe zęby (szlifowania), co jest konieczne w przypadku
          tradycyjnych mostów. Jeśli więc zastanawiasz się, czy implanty będą
          diobrym rozwiązaniem dla Ciebie - skonsultuj się z naszym lekarzem!
        </p>
      
      </div>
    </section>
 
          <StaticImage
            src="../../images/implanty.jpg"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{
              width: "100%",
              height: "600px",
            }}
          />
    <section>
      <div className="container">
        <h3>Pełen uśmiech jest w zasięgu Twojej ręki! Umów wizytę!!</h3>
        <ButtonLink label="Chcę umówić konsultację" url="/kontakt" />
        <Space />
        <Link className="backBtn" to="/">
          Wróć do strony głównej
        </Link>
      </div>
    </section>
  </Layout>
)

export const Head = () => (
  <Seo title="Uzupełnianie brakujących zębów implantami" />
)

export default Implanty
