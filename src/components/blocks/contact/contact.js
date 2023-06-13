import React from 'react'
import {contact} from "../../../data/contact"
import ElementWithIcon from '../../elements/elementWithIcon/elementWithIcon'
import {contactContainer} from "./contact.module.scss"

const Contact = () => {
    const {phone, email, address, phoneLabel} = contact;
  return (
    <div className={contactContainer}>
    <ElementWithIcon link="/jak-dojechac" label={address} type="address"/>
    <ElementWithIcon link={`tel:${phone}`} label={phoneLabel} type="phone"/>
    <ElementWithIcon link={`mailto:${email}`} label={email} type="mail"/>
    </div>
  )
}

export default Contact