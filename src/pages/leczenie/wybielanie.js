import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Space from "../../components/elements/space/space"
import ButtonLink from "../../components/elements/buttons/buttonLink"
import Video from "../../components/blocks/video/video"

const Wybielanie = () => {
  return (
    <Layout>
      <section className="topSection">
        <div className="container dflexLayout">
          <article>
            <h1>Wybielanie zębów</h1>
            <h2>Śnieżnobiały uśmiech prosto z Hollywood</h2>
            <p>
              Wybielanie już od lat jest jednym z najpopularniejszych zabiegów
              stomatologii estetycznej. Jednak najbezpieczniej zrobić to w
              profesjonalnej klinice stomatologicznej So White Clinic, nie
              próbujcie „domowych sposobów”. Nic nie zapewni zdrowszego
              wybielania pod okiem eksperta niż wybór jednej z 3 metod jakimi
              dysponujemy w So White Clinic.
            </p>
            <p>
              W naszej klinice bardzo dobrze rozumiemy potrzebę posiadania
              olśniewającego, białego uśmiechu. Uśmiech to nasza wizytówka, a
              kiedy lubimy swój uśmiech to zdecydowanie częściej z niego
              korzystamy. Zabieg wybielanie jest całkowicie bezpieczny i
              bezbolesny. Lubimy patrzeć jak uśmiechy naszych pacjentów stają
              się czarujące i jaśniejsze średnio o kilka odcieni wg skali VITA.
              Utrzymanie efektu wybielania zależeć będzie od nawyków
              żywieniowych, higienicznych oraz aktualnej diety pacjenta, ale
              efekt może utrzymywać się nawet do 3 lat.
            </p>
            <Space />
          </article>
          <aside>
            <Video
              videoSrcURL="https://youtube.com/embed/2irieDI4GB8"
              videoTitle="Wybielanie zębów w So White Clinic"
              aside
            />
          </aside>
        </div>
      </section>
      <section className="bottomSection">
        <div className="container">
          <h3>Chcesz wybielić zęby? Umów wizytę!</h3>
          <ButtonLink label="Przejdź do kontaktu" url="/kontakt" />
          <Space />
          <Link className="backBtn" to="/">
            Wróć do strony głównej
          </Link>
        </div>
      </section>
  
      <StaticImage
        src="../../images/wybielanie.jpg"
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

export const Head = () => <Seo title="Wybielanie zębów" />

export default Wybielanie
