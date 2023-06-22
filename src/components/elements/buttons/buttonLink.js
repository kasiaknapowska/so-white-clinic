import React from "react"
import { Link } from "gatsby"
import { btnPrimary} from "./button.module.scss"


const ButtonLink = ({ label, url }) => {
  return (
   <Link to={url} className={btnPrimary}>{label}</Link>
  )
}

export default ButtonLink
