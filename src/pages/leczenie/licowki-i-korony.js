import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Space from "../../components/elements/space/space"
import ButtonLink from "../../components/elements/buttons/buttonLink"

const LicowkiKorony = () => {
  return (
    <Layout>
      <section className="paddingSection topSection">
        <div className="container">
          <h1>Licówki i korony</h1>
          <h2>Estetyczny uśmiech i mocne zęby</h2>
          <p>
            Zastanawiasz się nad poprawą estetyki uśmiechu lub chcesz wzmocnić
            zniszczone zęby? Licówki i korony protetyczne wykonywane w So White
            Clinic pozwolą poprawić wygląd oraz odtworzyć funkcję Twoich zębów.
          </p>
          <h2>Czym są licówki?</h2>
          <p>
            Licówki to cienkie, trwałe, porcelanowe "płatki" mocowane do
            przedniej powierzchni zębów. Stosowane są w celu odtworzenia
            estetyki uśmiechu. Pomagają w ukryciu przebarwień, niewielkich skaz,
            nierówności czy krzywizn zębów. Mogą być także rozwiązaniem w
            przypadku drobnych niedoskonałości zgryzu. Ich aplikacja jest
            stosunkowo nieinwazyjna, ponieważ wymaga minimalnego przygotowania
            zęba.
          </p>
        </div>
      </section>{" "}
      <StaticImage
        src="../../images/licówki.jpg"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="licówki i korony zębowe"
        style={{
          width: "100%",
          height: "600px",
        }}
      />
      <section className="paddingSection">
        <div className="container">
          <h2>Co to są korony?</h2>
          <p>
            Korony protetyczne, z kolei, są bardziej wszechstronne i mogą być
            używane zarówno w celach estetycznych, jak i funkcjonalnych. Są
            wykorzystywane, gdy ząb jest znacznie uszkodzony, ma duże ubytki lub
            jest martwy - po zabiegach endodontycznych (leczenie kanałowe).
            Korony przywracają wytrzymałość i funkcję zęba oraz zapobiegają
            pęknięciom i złamaniu. Dzięki koronom Pacjent może normalnie gryźć i
            przeżuwać pokarmy.
          </p>
          <h2>
            Z naszą pomocą piękny i zdrowy uśmiech będzie Ci towarzyszył przez
            całe życie.
          </h2>
          <p>
            Konsultacja z doświadczonym stomatologiem So White Clinic pomoże
            ustalić, która z tych metod jest najlepsza dla Ciebie. Bez względu
            na to, czy masz przebarwione, nierówne, krzywe zęby, czy też zęby z
            dużymi ubytkami, licówki i korony mogą stać się rozwiązaniem na
            miarę Twoich indywidualnych potrzeb.
          </p>
        </div>
      </section>
      <section className="bottomSection">
        <div className="container">
          <h3>Umów konsultację protetyczną!</h3>
          <ButtonLink label="Przejdź do kontaktu" url="/kontakt" />
          <Space />
          <Link className="backBtn" to="/">
            Wróć do strony głównej
          </Link>
        </div>
      </section>
    
    </Layout>
  )
}

export const Head = () => <Seo title="Licówki i korony na zęby" />

export default LicowkiKorony
