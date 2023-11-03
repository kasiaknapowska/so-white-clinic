import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Space from "../../components/elements/space/space"
import ButtonLink from "../../components/elements/buttons/buttonLink"

const Bonding = () => {
  return (
    <Layout>
      <section className="paddingSection topSection">
        <div className="container">
          <h1>Bonding</h1>
          <h2>Nowoczesna metoda odbudowy zębów</h2>
          <p>
            Bonding polecany jest pacjentom, dla których czas odgrywa kluczową
            rolę i pragną hollywoodzkiego uśmiechu od ręki. To technika
            stomatologiczna pozwalająca na szybką poprawę estetyki uśmiechu,
            dzięki precyzyjnej rekonstrukcji kształtu i koloru kilku zębów lub
            całego łuku.
          </p>
          <p>
            Podczas zabiegu bondingu w So White Clinic pokrywamy zęby cienką
            warstwą jasnego i bezpiecznego kompozytu. Wykorzystywana do tego
            celu wysokiej jakości żywica kompozytowa, konsystencją przypomina
            plastelinę. Doskonale się ją modeluje, dzięki czemu możemy nadać
            zębom oczekiwany kształt. Naturalna struktura zęba pozostaje
            nienaruszona przy jednoczesnym perfekcyjnym i niewidocznym
            przyleganiu kompozytu. Na koniec utrwalamy efekt lampą
            polaryzacyjną. Wówczas żywica jest wygładzana i utwardzana, a
            pacjent może już cieszyć się pięknym uśmiechem.
          </p>
          <p>
            Bonding jest w pełni bezpieczny dla szkliwa, a sam zabieg jest
            zupełnie bezbolesny. Efekty bondingu utrzymują się nawet wiele lat,
            w zależności od stylu życia i nawyków higienicznych pacjenta. Dla
            utrzymania efektu bondingu jak najdłużej po zabiegu powinniśmy
            sumiennie przestrzegać zaleceń stomatologa.
          </p>
          <p>
            Zęby pokryte kompozytem należy myć, jak naturalne zęby, przynajmniej
            dwa razy dziennie i najlepiej szczoteczką o miękkim włosiu oraz
            czyścić nicią dentystyczną przestrzenie między zębami. Codzienną
            higienę można wesprzeć stosując irygator.
          </p>
        </div>
      </section>
      <section className="bottomSection">
        <div className="container">
          <h3>
            Czy bonding będzie dla Ciebie odpowiedni? Zapraszamy na konsultację!
          </h3>
          <ButtonLink label="Przejdź do kontaktu" url="/kontakt" />
          <Space />
          <Link className="backBtn" to="/">
            Wróć do strony głównej
          </Link>
        </div>
      </section>
   
      <StaticImage
        src="../../images/bonding.jpg"
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

export const Head = () => <Seo title="Bonding & flow injection" />

export default Bonding
