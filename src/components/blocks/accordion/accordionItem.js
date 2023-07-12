import React from "react"
import { Link } from "gatsby"
// import Reveal from "../../effects/reveal/reveal"
import AccordionButton from "../../elements/buttons/accordionButton"
import {intro, open, link} from "./accordion.module.scss"

const AccordionItem = ({ item, i, onToggle, active }) => {
  return (
    <li >
      {" "}
      {/* <Reveal> */}
        <AccordionButton label={item.label} i={i} onToggle={onToggle} active={active}/>
        <div className={`${intro} ${active ? open : ""}`}>{item.intro}<Link className={link} to={`/leczenie/${item.url}`}>Czytaj więcej ...</Link></div>
        
      {/* </Reveal> */}
    </li>
  )
}

export default AccordionItem
