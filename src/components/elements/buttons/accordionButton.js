import React from 'react'
import {arrow, arrowDown, arrowUp, accordionBtn, accordionBtnActive} from "./button.module.scss"
import CustomOL from '../bullets/customOL'

const AccordionButton = ({label, i, active, onToggle}) => {
  return (  
   <button className={`${accordionBtn} ${active ? accordionBtnActive : ""}`} onClick={onToggle}>{i >= 0 ? <CustomOL i={i + 1}/> : null}{label}<span className={`${arrow} ${active ? arrowUp : arrowDown}`}></span></button>
  )
}

export default AccordionButton