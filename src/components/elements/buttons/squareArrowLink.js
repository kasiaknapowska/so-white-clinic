import React from 'react'
import { Link } from 'gatsby'
import {squareArrowLink, arrow, arrowRight} from "./button.module.scss"

const SquareArrowLink = ({url}) => {
  return (
    <Link to={url} className={squareArrowLink}><span className={`${arrow} ${arrowRight}`} ></span></Link>
  )
}

export default SquareArrowLink