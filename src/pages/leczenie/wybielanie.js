import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Space from "../../components/elements/space/space"
import ButtonLink from "../../components/elements/buttons/buttonLink"

const Wybielanie = () =>  {


  return (
  <Layout>
    <section className="topSection">
      <div className="container">
        <h1>Wybielanie zębów</h1>
        <h2>Śnieżnobiały uśmiech prosto z Hollywood</h2>
        <p>
          Wybielanie już od lat jest jednym z najpopularniejszych zabiegów
          stomatologii estetycznej. Jednak najbezpieczniej zrobić to w
          profesjonalnej klinice stomatologicznej So White Clinic, nie próbujcie
          „domowych sposobów”. Nic nie zapewni zdrowszego wybielania pod okiem
          eksperta niż wybór jednej z 3 metod jakimi dysponujemy w So White
          Clinic.
        </p>
        <p>
          W naszej klinice bardzo dobrze rozumiemy potrzebę posiadania
          olśniewającego, białego uśmiechu. Uśmiech to nasza wizytówka, a kiedy
          lubimy swój uśmiech to zdecydowanie częściej z niego korzystamy.
          Zabieg wybielanie jest całkowicie bezpieczny i bezbolesny. Lubimy
          patrzeć jak uśmiechy naszych pacjentów stają się czarujące i
          jaśniejsze średnio o kilka odcieni wg skali VITA. Utrzymanie efektu
          wybielania zależeć będzie od nawyków żywieniowych, higienicznych oraz
          aktualnej diety pacjenta, ale efekt może utrzymywać się nawet do 3
          lat.
        </p>
        <Space />
        <h3>Chcesz wybielić zęby? Umów wizytę!</h3>
        <ButtonLink label="Przejdź do kontaktu" url="/kontakt" />
        <Space />
        <Link to="/">Wróć do strony głównej</Link>
      </div>
    </section>
  </Layout>
  )
  }


export const Head = () => <Seo title="Wybielanie zębów" />

export default Wybielanie
