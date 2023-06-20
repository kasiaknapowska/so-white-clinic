import { Link } from 'gatsby'
import React from 'react'

import {buttonWhite, arrow} from "./buttonWhite.module.scss"

const ButtonWhite = ({label, url}) => {
  return (
    <Link className={buttonWhite} to={url} key={url}>{label}<span className={arrow}></span></Link>
  )
}

export default ButtonWhite