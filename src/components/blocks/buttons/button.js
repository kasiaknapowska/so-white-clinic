import React from "react"
import { btnPrimary, icon } from "./button.module.scss"
import PhoneIcon from "../../../images/icons/icon-phone-white.svg"

const Button = ({ label, link, withIcon }) => {
  return (
    <a href={link} className={btnPrimary} data-text="Zadzwoń teraz">
      {withIcon && <img src={PhoneIcon} className={icon} alt="phone" />}
      {label}
    </a>
  )
}

export default Button
