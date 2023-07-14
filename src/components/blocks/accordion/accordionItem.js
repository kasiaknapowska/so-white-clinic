import React from "react"
import { Link } from "gatsby"
import Reveal from "../../effects/reveal/reveal"
import AccordionButton from "../../elements/buttons/accordionButton"
import { accordionItem, intro, open, link } from "./accordion.module.scss"
import { motion } from "framer-motion"

const AccordionItem = ({ item, i, onToggle, isActive }) => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-20%" },
  }
  return (
    <li className={accordionItem}>
      {" "}
      <Reveal>
        <AccordionButton
          label={item.label}
          i={i}
          onToggle={onToggle}
          isActive={isActive}
        />
        <motion.div
          animate={isActive ? "visible" : "hidden"}
          variants={variants}
          transition={{ delay: 0.1 }}
          className={`${intro} ${isActive ? open : ""}`}
        >
          {item.intro}..{" "}
          <Link className={link} to={`/leczenie/${item.url}`}>
            Czytaj więcej
          </Link>
        </motion.div>
      </Reveal>
    </li>
  )
}

export default AccordionItem
