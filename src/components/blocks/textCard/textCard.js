import React from 'react'

import {textCard} from "./textCard.module.scss"
import SquareArrowLink from '../../elements/buttons/squareArrowLink'

const TextCard = ({label, url, ariaLabel}) => {
  return (
    <div className={textCard}>{label} <SquareArrowLink url={url} ariaLabel={ariaLabel}/></div>
  )
}

export default TextCard