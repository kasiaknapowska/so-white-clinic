import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Space from "../../components/elements/space/space"
import ButtonLink from "../../components/elements/buttons/buttonLink"

const UsuwanieZebow = () => {
  return (
    <Layout>
      <section className="paddingSection topSection">
        <div className="container">
          <h1>Usuwanie zębów</h1>
          <h2>Delikatne i bezbolesne ekstrakcje zębów</h2>
          <p>
            W So White Clinic procedura usuwania zęba przebiega w znieczuleniu
            miejscowym, aby zapewnić pacjentowi komfort i wyeliminować ból. Dla
            bezpieczeństwa Pacjenta i w celu dokładnego zaplanowania procedury
            usunięcia zęba, przed zabiegiem wykonujemy potrzebne badania
            diagnostyczne, m.in. zdjęcia RTG lub tomografię cyfrową. Istnieje
            możliwość wykonania zabiegu pod mikroskopem, co zapewnia maksymalną
            precyzję i kontrolę podczas usuwania zęba. Zastosowanie mikroskopu
            stomatologicznego minimalizuje ryzyko uszkodzenia sąsiednich tkanek
            oraz pozwala na delikatne usunięcie zęba. Po zabiegu Pacjent może
            bez przeszkód wrócić do codziennych obowiązków.
          </p>
          <p>
            Wskazaniami do usunięcia zęba mogą być: zaawansowana próchnica,
            nieodwracalne uszkodzenia zęba, infekcje, urazy lub kwestie związane
            z przestrzenią w jamie ustnej, takie jak zbyt ciasno ustawione zęby.
            Decyzja co do usunięcia zęba podejmowana jest wspólnie przez lekarza
            i Pacjenta, po rozważeniu wszelkich możliwych metod uratowania zęba.
            W przypadku, gdy ząb jest zbyt mocno zniszczony, a dalsze leczenie
            byłoby nieopłacalne i kompromisowe, wówczas decydujemy się usunąć
            ząb i zastąpić go odbudową protetyczną (mostem) lub implantem.
          </p>
        </div>
      </section>
      <section className="bottomSection">
        <div className="container">
          <h3>Umów konsultację z chirurgiem So White Clinic!</h3>
          <ButtonLink label="Przejdź do kontaktu" url="/kontakt" />
          <Space />
          <Link className="backBtn" to="/">
            Wróć do strony głównej
          </Link>
        </div>
      </section>{" "}
    
      <StaticImage
        src="../../images/ekstrakcja.jpg"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{
          width: "100%",
          height: "600px",
        }}
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Usuwanie zębów" />

export default UsuwanieZebow
