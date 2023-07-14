import React, {useState} from 'react'
import {offerTextLinks} from "../../../data/links"
import AccordionItem from './accordionItem'
import {accordion} from "./accordion.module.scss"

const Accordion = () => {
    const [clicked, setClicked] = useState("0");
   
    const handleToggle = (i) => {
        if (clicked === i) {
         return setClicked("0");
        }
        setClicked(i);
       };
  return (
    <ul className={accordion}>
{offerTextLinks.map((item, i) => (
   <AccordionItem item={item} key={i} i={i} onToggle={() => handleToggle(i)} isActive={clicked === i}/>
))}
    </ul>
  )
}

export default Accordion