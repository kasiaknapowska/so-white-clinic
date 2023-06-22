import { Link } from 'gatsby'
import React from 'react'

import {buttonWhite, arrow, link} from "./buttonWhite.module.scss"

const ButtonWhite = ({label, url}) => {
  return (
    // <Link className={buttonWhite} to={url}>{label}<span className={arrow}></span></Link>
    <div className={buttonWhite}>{label} <Link to={url} className={link}><span className={arrow}></span></Link></div>
  )
}

export default ButtonWhite