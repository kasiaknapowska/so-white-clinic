import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Space from "../../components/elements/space/space"
import ButtonLink from "../../components/elements/buttons/buttonLink"

const Higiena = () => {
  return (
    <Layout>
      <section className="topSection">
        <div className="container">
          <h1>Estetyczna higienizacja</h1>
          <h2>Zabieg niezawodny, szybki i niezbędny każdemu Pacjentowi</h2>
          <p>
            W So White Clinic rekomendujemy wykonywać higienizację co 6
            miesięcy. Zabieg higienizacji So White Clinic, to kompleksowe SPA
            dla Twoich zębów, złożone ze skalingu, piaskowania, nitkowania,
            polerowania i fluoryzacji. Jest to kluczowy zabieg profilaktyczny,
            który pozwala zachować zdrowy i jasny uśmiech oraz minimalizuje
            ryzyko skomplikowanego i czasochłonnego leczenia.
          </p>
          <p>
            Dzięki tej technice możemy pozbyć się niebezpiecznych bakterii,
            czyli tzw. biofilmu, które niszczą zęby i otaczające je struktury
            oraz mogą przenikać głębiej do organizmu powodując na przestrzeni
            czasu poważne choroby. Higienizacja nie tylko eliminuje bakterie,
            kamień nazębny, osady i przebarwienia, ale także widocznie rozjaśnia
            zęby, pozwala odkryć ich naturalną biel nawet o 1-2 odcienie.
          </p>
          <p>
            W wykonywanej przez So White CLinic higienizacji wykorzystujemy
            specjalny, niewyczuwalny i delikatny piasek stomatologiczny, o
            atrakcyjnych walorach smakowych, który jest niezwykle dokładnym i
            komfortowym środkiem ścierającym. Dzięki temu zabieg ten możemy
            bezpiecznie stosować przy wrażliwych dziąsłach oraz wszystkich
            rodzajach uzupełnień estetycznych.
          </p>
          <Space />
          <h3>Chcesz umówić wizytę? Zadzwoń do nas!</h3>
          <ButtonLink label="Przejdź do kontaktu" url="/kontakt" />
          <Space />
          <Link className="backBtn" to="/">Wróć do strony głównej</Link>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Higienizacja zębów" />

export default Higiena
