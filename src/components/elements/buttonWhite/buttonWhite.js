import { Link } from 'gatsby'
import React from 'react'

import {buttonWhite} from "./buttonWhite.module.scss"

const ButtonWhite = ({label, url}) => {
  return (
    <Link className={buttonWhite} to={url} key={url}>{label}</Link>
  )
}

export default ButtonWhite