import React from 'react'
import { Link } from 'gatsby'
import {squareArrowLink, arrow, arrowRight} from "./button.module.scss"

const SquareArrowLink = ({url, ariaLabel}) => {
  return (
    <Link to={url} aria-label={ariaLabel} className={squareArrowLink}><span className={`${arrow} ${arrowRight}`} ></span></Link>
  )
}

export default SquareArrowLink