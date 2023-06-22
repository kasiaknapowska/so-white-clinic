import { Link } from 'gatsby'
import React from 'react'
import {arrow, textArrowLink} from "./button.module.scss"
import OlBullet from '../bullets/olBullet'

const TextArrowLink = ({url, label, i}) => {
  return (  
   <Link to={url} className={textArrowLink}>{i >= 0 ? <OlBullet i={i + 1}/> : null}{label}<span className={arrow}></span></Link>
  )
}

export default TextArrowLink