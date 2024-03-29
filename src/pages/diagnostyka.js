import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Space from "../components/elements/space/space"
import ButtonLink from "../components/elements/buttons/buttonLink"
import RevealOnScroll from "../components/effects/reveal/revealOnScroll"

const Diagnostyka = () => (
  <Layout>
    <section className="paddingSection topSection">
      <div className="container">
        <h1>Diagnostyka w So White Clinic</h1>
        <h2>Jak dbamy o bezpieczeństwo i komfort Pacjentów?</h2>
        <p>
          Jeśli chodzi o diagnostykę stanu zdrowia jamy ustnej naszych Pacjentów
          - w So White Clinic stawiamy na rozwiązania cyfrowe. Daje to ogrom
          korzyści naszym Pacjentom. Cyfrowa diagnostyka stomatologiczna
          wykorzystuje zaawansowane technologie, m.in. skaner 3D, cyfrowe
          zdjęcia RTG, tomografia komputerowa, które pozwalają nam uzyskać
          dokładne obrazy struktur jamy ustnej. To oznacza, że możemy
          precyzyjnie diagnozować problemy stomatologiczne, takie jak próchnica,
          kamień nazębny, ubytki, infekcje, czy wady zgryzu już na bardzo
          wczesnym etapie.
        </p>
        <h2>Precyzyjne planowanie</h2>
        <p>
          Dzięki diagnostyce cyfrowej, stomatolog ma możliwość dokładnego
          planowania leczenia. Możemy precyzyjnie zobaczyć, jakie kroki będą
          konieczne do przywrócenia pięknego i zdrowego uśmiechu naszych
          Pacjentów. Za pomocą skanera 3D przeprowadzamy symulację
          trójwymiarową, co pozwala na wizualizację efektów leczenia już na
          etapie planowania, co znacząco ułatwia komunikację z pacjentem.
          Wygenerowany model zębów może być natychmiast przesłany do
          laboratorium w celu realizacji prac protetycznych. To oznacza, że
          terapia jest bardziej spersonalizowana, skuteczniejsza i skraca się
          czas trwania leczenia.
        </p>
      </div>
    </section>
   <RevealOnScroll>
   <StaticImage
      src="../images/diagnostyka.jpg"
      loading="eager"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="cyfrowa diagnostyka stomatologiczna"
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "600px",
        
      }}
    />
   </RevealOnScroll>
 
    <section className="paddingSection">
      <div className="container">
        <h3>
          Chcesz mieć pewność, że Twój uśmiech jest w dobrych rękach? Zapraszamy
          do So White Clinic!
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

export const Head = () => <Seo title="Cyfrowa diagnostyka stomatologiczna Katowice" description="Precyzyjna diagnostyka stomatologiczna. Zaawansowane technologie. Skanowanie 3D. Tomografia komputerowa. Zadzwoń i umów wizytę 32 60 60 400."/>

export default Diagnostyka
