import React from "react"
import { btnPrimary} from "./button.module.scss"


const LinkButton = ({ label, url }) => {
  return (
   <Link to={url} className={btnPrimary}>{label}</Link>
  )
}

export default LinkButton
