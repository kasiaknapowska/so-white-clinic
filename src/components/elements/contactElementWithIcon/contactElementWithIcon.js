import React from "react"
import PhoneIcon from "../../../images/icons/icon-phone-white.svg"
import MailIcon from "../../../images/icons/icon-mail-white.svg"
import HomeIcon from "../../../images/icons/icon-home-white.svg"

const ContactElementWithIcon = ({ link, label, type }) => {
  return (
    <a href={link}>
      <img
        src={`${
          type === "mail" ? MailIcon : type === "address" ? HomeIcon : PhoneIcon
        }`}
        className="icon"
        alt={type}
      />
      {label}
    </a>
  )
}

export default ContactElementWithIcon
