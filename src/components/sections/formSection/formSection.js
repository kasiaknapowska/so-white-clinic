import React from "react"
import Form from "../../blocks/form/form"
import {formSection} from "./formSection.module.scss"
const FormSection = () => {
  return (
    <section className={formSection}>
      <div className="container">
      <h2>Skontaktuj się z nami!</h2>
      <p>
        Zadaj nam pytanie lub zostaw numer telefonu - nasze recepcjonistki
        skontaktują się z Tobą by omówić Twoją drogę do pięknego uśmiechu!
      </p>
      <Form/>
      </div>
    </section>
  )
}

export default FormSection
