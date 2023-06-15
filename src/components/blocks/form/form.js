import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./form.scss"
const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { privacy: false, personalData: false } })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = data => {
    console.log(data)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "SoWhiteClinicForm",
        ...data,
      }),
    })
      .then(() => {
        setIsFormSubmitted(true)
        reset()
      })
      .catch(error => alert(error))
  }

  return (
    <form
      method="post"
      //   netlify-honeypot="bot-field"
      //   data-netlify="true"
      name="SoWhiteClinicForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="SoWhiteClinicForm" />
      <label>
        Imię i nazwisko * &nbsp;&nbsp;
        {errors.name && (
          <span className="errorMessage">{errors.name?.message}</span>
        )}
        {errors.name && console.log(errors.name)}
        <input
          placeholder="Imię i nazwisko"
          {...register("name", {
            required: {
              value: true,
              message: "Uzupełnij pole",
            },
          })}
          aria-invalid={errors.name ? "true" : "false"}
        />
      </label>

      <label>
        Telefon * &nbsp;&nbsp;
        {errors.phone && (
          <span className="errorMessage">{errors.phone?.message}</span>
        )}
        <input
          placeholder="Telefon"
          {...register("phone", {
            required: {
              value: true,
              message: "Uzupełnij pole",
            },
            minLength: {
              value: 9,
              message: "Podaj prawidłowy numer telefonu",
            },
          })}
          aria-invalid={errors.phone ? "true" : "false"}
        />
      </label>
      <label>
        E-mail * &nbsp;&nbsp;
        {errors.email && (
          <span className="errorMessage">{errors.email?.message}</span>
        )}
        <input
          placeholder="E-mail"
          {...register("email", {
            required: {
              value: true,
              message: "Uzupełnij pole",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Podaj prawidłowy adres e-mail",
            },
          })}
          aria-invalid={errors.mail ? "true" : "false"}
        />
      </label>

      <label>
        Treść wiadomości (opcjonalnie)
        <textarea
          placeholder="Treść wiadomości"
          {...register("message")}
        ></textarea>
      </label>

      <label className="checkbox">
        <input
          type="checkbox"
          {...register("privacy", {
            required: {
              value: true,
              message: "Zaznacz zgodę",
            },
          })}
          aria-invalid={errors.privacy ? "true" : "false"}
        />
        <span></span>
        <div>
          Zapoznałem (-am) się z Polityką prywatności.{" "}
          <Link to="/polityka-prywatnosci">Treść polityki prywatności.</Link> *
          &nbsp;&nbsp;{" "}
          {errors.privacy && (
            <span className="errorMessage">{errors.privacy?.message}</span>
          )}
        </div>
      </label>
      <label className="checkbox">
        <input
          type="checkbox"
          {...register("personalData", {
            required: {
              value: true,
              message: "Zaznacz zgodę",
            },
          })}
          aria-invalid={errors.personalData ? "true" : "false"}
        />
        <span></span>
        <div>
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi
          kontaktu za pośrednictwem formularza.{" "}
          <AnchorLink
            to="/polityka-prywatnosci#zgoda"
            title="Zgoda na przetwarzanie danych"
          >
            Pełna treść zgody.
          </AnchorLink>{" "}
          * &nbsp;&nbsp;{" "}
          {errors.personalData && (
            <span className="errorMessage">{errors.personalData?.message}</span>
          )}
        </div>
      </label>

      <button type="submit" className="btnPrimary">
        Wyślij
      </button>
      <div>
        {isFormSubmitted && (
          <span className="successMessage">
            Dziękujemy za przesłanie formularza
          </span>
        )}
      </div>
    </form>
  )
}

export default Form
