import React from "react"
import PhoneIcon from "../../../images/icons/icon-phone.svg"
import MailIcon from "../../../images/icons/icon-mail.svg"
import HomeIcon from "../../../images/icons/icon-home.svg"
import PhoneIconWhite from "../../../images/icons/icon-phone-white.svg"
import MailIconWhite from "../../../images/icons/icon-mail-white.svg"
import HomeIconWhite from "../../../images/icons/icon-home-white.svg"

const ElementWithIcon = ({ link, label, type, color }) => {
  return (
    <a href={link}>
      <img
        src={
          color === "white"
            ? type === "mail"
              ? MailIconWhite
              : type === "address"
              ? HomeIconWhite
              : PhoneIconWhite
            : type === "mail"
            ? MailIcon
            : type === "address"
            ? HomeIcon
            : PhoneIcon
        }
        className="icon"
        alt={type}
      />
      {label}
    </a>
  )
}

export default ElementWithIcon
