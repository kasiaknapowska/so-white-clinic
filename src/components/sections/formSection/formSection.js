import React from "react"
import Form from "../../blocks/form/form"
import { formSection } from "./formSection.module.scss"
import Space from "../../elements/space/space"
const FormSection = () => {
  return (
    <section className={formSection}>
      <div className="container dflexLayout">
        <div>
          <h3>Skontaktuj się z nami!</h3>
          <p>Zadaj nam pytanie lub zostaw numer telefonu.</p>
          <p>
            Nasze recepcjonistki skontaktują się z Tobą, by omówić Twoją drogę do
            pięknego uśmiechu!
          </p>
          <Space/>
        </div>
        <Form />
      </div>
    </section>
  )
}

export default FormSection
