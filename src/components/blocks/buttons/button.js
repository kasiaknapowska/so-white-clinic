import { Link } from 'gatsby'
import React from 'react'
import {btnPrimary, icon} from "./button.module.scss"
import PhoneIcon from "../../../images/icons/icon-phone-white.svg"

const Button = ({label, link, withIcon}) => {
  return (
    <Link className={btnPrimary} to={link}>{withIcon && <img src={PhoneIcon} className={icon} alt="phone"/>}{label}</Link>
  )
}

export default Button