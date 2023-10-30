import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Space from "../../components/elements/space/space"
import ButtonLink from "../../components/elements/buttons/buttonLink"

const Ortodoncja = () => {
  return (
    <Layout>
      <section className="topSection">
        <div className="container">
          <h1>Prosta korekta wad zgryzu Invisalign Go</h1>
          <h2>Komfort leczenia i szybkie efekty</h2>
          <p>
            Leczenie niewidocznymi nakładkami ortodontycznymi Invisalign GO jest
            skuteczne w przypadku prostych i umiarkowanych wad zgryzu. Leczenie
            obejmuje Pacjentów z niewielkimi stłoczeniami, drobnymi szparami
            między zębami, przesunięciami zębów. Metoda przeznaczona jest dla
            osób, które chcą zadbać o zdrowie jamy ustnej oraz poprawić estetykę
            uśmiechu, ale ich niedoskonałości w obrębie zgryzu są na tyle
            drobne, że nie jest konieczne podejmowanie właściwego leczenia
            ortodontycznego.
          </p>
          <p>
            Invisalign GO polecany jest również w celu przygotowania zgryzu
            przed kolejnymi procedurami stomatologicznymi, np. wstawieniem
            implantu, leczeniem protetycznym, odbudową zębów. Każdorazowo
            decyzję o doborze najlepszego rozwiązania podejmuje Pacjent wraz z
            lekarzem prowadzącym.
          </p>
        </div>
      </section>

      <StaticImage
        src="../../images/invisalign.jpg"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{
          width: "100%",
          height: "600px",
        }}
      />
      <Space />
      <Space />
      <section className="noPaddingSection">
        <div className="container">
          <h2>Proste zęby to nie tylko estetyka uśmiechu...</h2>
          <p>
            Nawet minimalne nieprawidłowości w ustawieniu zębów mogą prowadzić
            do uszkodzenia zębów oraz wpływać na ogólne zdrowie. Problemy takie
            jak pęknięcia szkliwa, starte zęby, próchnica oraz zaczerwienione
            dziąsła często wynikają z ukrytych wad zgryzu, które nie są widoczne
            na pierwszy rzut oka. Nieprawidłowy zgryz może także przyczyniać się
            do różnych problemów zdrowotnych, takich jak nieprawidłowa postawa
            ciała, bóle głowy, szumy w uszach, chrapanie, problemy z pamięcią i
            koncentracją. System Invisalign GO oferuje prostą i szybką możliwość
            korygowania ustawienia zębów przez stomatologa, bez konieczności
            długotrwałego leczenia ortodontycznego.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h3>Chcesz w prosty sposób skorygować zgryz? Umów wizytę!</h3>
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

export const Head = () => (
  <Seo title="Ortodoncja - prosta korekta zgryzu Invisalign Go" />
)

export default Ortodoncja
