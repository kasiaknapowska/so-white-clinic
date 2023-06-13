import React from "react"
import { btnPrimary, callUsBtn } from "./button.module.scss"
import PhoneIcon from "../../../images/icons/icon-phone-white.svg"

const Button = ({ label, link, withIcon, type }) => {
  return (
    <a href={link} className={`${btnPrimary} ${type === "callUsBtn" && callUsBtn}`} data-text="Zadzwoń teraz">
      {withIcon && <img src={PhoneIcon} className="icon" alt="phone" />}
      {label}
    </a>
  )
}

export default Button
