import React from "react"
import Form from "../../blocks/form/form"
import { formSection } from "./formSection.module.scss"
import Space from "../../elements/space/space"
const FormSection = () => {
  return (
    <section className={`paddingSection ${formSection}`}>
      <Space />
      <div className="container dflexLayout" style={{ gap: "2rem" }}>
        <div>
          <h3>Skontaktuj się z nami!</h3>
          <p>Zadaj nam pytanie lub zostaw numer telefonu.</p>
          <p>
            Nasze recepcjonistki skontaktują się z Tobą, by omówić Twoją drogę
            do pięknego uśmiechu!
          </p>
          <Space />
        </div>
        <Form />
      </div>
      <Space />
    </section>
  )
}

export default FormSection
