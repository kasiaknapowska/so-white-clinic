import React from 'react'

import {textCard} from "./textCard.module.scss"
import SquareArrowLink from '../../elements/buttons/squareArrowLink'

const TextCard = ({label, url}) => {
  return (
    <div className={textCard}>{label} <SquareArrowLink url={url}/></div>
  )
}

export default TextCard