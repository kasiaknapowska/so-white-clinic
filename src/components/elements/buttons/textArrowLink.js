import { Link } from 'gatsby'
import React from 'react'
import {arrow, textArrowLink} from "./button.module.scss"

const textArrowLink = ({url, label}) => {
  return (
    <Link to={url} className={textArrowLink}>{label}<span className={arrow}></span></Link>
  )
}

export default textArrowLink