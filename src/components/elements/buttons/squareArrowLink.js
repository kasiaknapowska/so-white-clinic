import React from 'react'
import { Link } from 'gatsby'
import {squareArrowLink, arrow} from "./button.module.scss"

const SquareArrowLink = ({url}) => {
  return (
    <Link to={url} className={squareArrowLink}><span className={arrow} ></span></Link>
  )
}

export default SquareArrowLink