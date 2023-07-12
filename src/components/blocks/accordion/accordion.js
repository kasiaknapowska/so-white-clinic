import React, {useState} from 'react'
import {offerTextLinks} from "../../../data/links"
import AccordionItem from './accordionItem'

const Accordion = () => {
    const [clicked, setClicked] = useState("0");
   
    const handleToggle = (i) => {
        if (clicked === i) {
         return setClicked("0");
        }
        setClicked(i);
       };
  return (
    <ul>
{offerTextLinks.map((item, i) => (
    <AccordionItem item={item} key={i} i={i} onToggle={() => handleToggle(i)} active={clicked === i}/>
))}
    </ul>
  )
}

export default Accordion