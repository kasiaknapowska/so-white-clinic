import React from "react"
import { Link } from "gatsby"
import RevealOnScroll from "../../effects/reveal/revealOnScroll"
import Reveal from "../../effects/reveal/reveal"
import AccordionButton from "../../elements/buttons/accordionButton"
import { accordionItem, intro, open, link } from "./accordion.module.scss"
import { motion } from "framer-motion"

const AccordionItem = ({ item, i, onToggle, isActive }) => {

  return (
    <li className={accordionItem}>
      {" "}
      <RevealOnScroll>
        <AccordionButton
          label={item.label}
          i={i}
          onToggle={onToggle}
          isActive={isActive}
        />
       {/* {isActive &&   */}
       <Reveal isActive={isActive}>
          {/* <div className={`${intro} ${isActive ? open : ""}`}> */}
          <div className={`${intro}`}>
            {item.intro}..{" "}
            <Link className={link} to={`/leczenie/${item.url}`}>
              Czytaj więcej
            </Link>
          </div>
        </Reveal>
        {/* } */}
      </RevealOnScroll>
    </li>
  )
}

export default AccordionItem
