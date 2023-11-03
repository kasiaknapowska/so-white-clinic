import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { offerTextLinks } from "../../data/links"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Space from "../../components/elements/space/space"
import MotionCarousel from "../../components/blocks/motionCarousel/motionCarousel"
import TextCard from "../../components/blocks/textCard/textCard"
import ButtonLink from "../../components/elements/buttons/buttonLink"

const Leczenie = () => (
  <Layout>
    {/* <section className="topSection">
      <div className="container dflexLayout">
        <article>
          {" "}
          <h1>Leczenie w So White Clinic</h1>
          <h2>Hollywood Smile, czyli uśmiech doskonały. Jak go uzyskać?</h2>
          <p>
            Hollywood Smile, znane również jako uśmiech à la Hollywood, to
            specjalność So White Clinic, a w stomatologii estetycznej jest
            synonimem pięknych, perfekcyjnie wyglądających zębów,
            przypominających uśmiechy znanych osobistości filmowych i
            telewizyjnych. Dla stomatologów So White Clinic oznacza kompleksowe
            podejście do poprawy estetyki zębów i uśmiechu pacjenta, mające na
            celu stworzenie idealnie harmonijnego i atrakcyjnego wyglądu.
          </p>
          <p>
            Jednak warto pamiętać, że Hollywood Smile to nie tylko kwestia
            wyglądu zewnętrznego. Poprawa estetyki zębów wg. metody So White
            Clinic wpływa również na funkcję gryzienia, wymowę i ogólną zdrowie
            jamy ustnej. Pacjenci, którzy zdecydują się na Hollywood Smile, mogą
            cieszyć się nie tylko pięknym uśmiechem, ale także lepszą jakością
            życia i większą pewnością siebie w codziennych sytuacjach
            społecznych i zawodowych.
          </p>
          <p>
            W So White Clinic oferujemy wiele zabiegów, które pozwolą naszym
            Pacjentom spełnić marzenie o Hollywood Smile. Niewątpliwe warto –
            wypracowany przez naszych stomatologów piękny uśmiech dodaje
            Pacjentom pewności siebie, sprawia, że częściej się uśmiechają,
            wzbudzają sympatię i zaufanie innych.
          </p>
        
        </article>
        <aside>
          <StaticImage
            src="../../images/leczenie.jpg"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "470px"
            }}
          />
        
        </aside>
      </div>
    </section> */}
    <section className="topSection">
      <div className="container">
        {" "}
        <h1>Leczenie w So White Clinic</h1>
        <h2>Hollywood Smile, czyli uśmiech doskonały. Jak go uzyskać?</h2>
        <p>
          Hollywood Smile, znane również jako uśmiech à la Hollywood, to
          specjalność So White Clinic, a w stomatologii estetycznej jest
          synonimem pięknych, perfekcyjnie wyglądających zębów, przypominających
          uśmiechy znanych osobistości filmowych i telewizyjnych. Dla
          stomatologów So White Clinic oznacza kompleksowe podejście do poprawy
          estetyki zębów i uśmiechu pacjenta, mające na celu stworzenie idealnie
          harmonijnego i atrakcyjnego wyglądu.
        </p>
        <p>
          Jednak warto pamiętać, że Hollywood Smile to nie tylko kwestia wyglądu
          zewnętrznego. Poprawa estetyki zębów wg. metody So White Clinic wpływa
          również na funkcję gryzienia, wymowę i ogólną zdrowie jamy ustnej.
          Pacjenci, którzy zdecydują się na Hollywood Smile, mogą cieszyć się
          nie tylko pięknym uśmiechem, ale także lepszą jakością życia i większą
          pewnością siebie w codziennych sytuacjach społecznych i zawodowych.
        </p>
        <p>
          W So White Clinic oferujemy wiele zabiegów, które pozwolą naszym
          Pacjentom spełnić marzenie o Hollywood Smile. Niewątpliwe warto –
          wypracowany przez naszych stomatologów piękny uśmiech dodaje Pacjentom
          pewności siebie, sprawia, że częściej się uśmiechają, wzbudzają
          sympatię i zaufanie innych.
        </p>
      </div>
    </section>
    <section className="paddingSection">
      <div className="container">
        <h2>Poznaj swoją drogę do Hollywood smile</h2>
        <p>Kliknij w strzałkę przy wybranym zabiegu i dowiedz się więcej</p>
        <Space />
        <MotionCarousel fullWidth>
          {offerTextLinks.map((el, i) => {
            return <TextCard key={el.label + i} label={el.label} url={el.url} />
          })}
        </MotionCarousel>
      </div>
    </section>

    <StaticImage
      src="../../images/leczenie.jpg"
      loading="eager"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="leczenie zębów w so white clinic"
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "600px",
      }}
    />
  
    <section className="paddingSection">
      <div className="container">
        <h3>Od pięknego uśmiechu dzieli Cię tylko jeden krok!</h3>
        <ButtonLink label="Chcę umówić konsultację" url="/kontakt" />
        <Space />
        <Link className="backBtn" to="/">
          Wróć do strony głównej
        </Link>
      </div>
    </section>

  </Layout>
)

export const Head = () => <Seo title="Leczenie w So White Clinic" />

export default Leczenie
