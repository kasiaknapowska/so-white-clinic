import React from 'react'
import {contact} from "../../../data/contact"
import ContactElementWithIcon from '../../elements/contactElementWithIcon/contactElementWithIcon'
import {contactContainer} from "./contact.module.scss"

const Contact = () => {
    const {phone, email, address, phoneLabel} = contact;
  return (
    <div className={contactContainer}>
    <ContactElementWithIcon link="/jak-dojechac" label={address} type="address"/>
    <ContactElementWithIcon link={`tel:${phone}`} label={phoneLabel} type="phone"/>
    <ContactElementWithIcon link={`mailto:${email}`} label={email} type="mail"/>
    </div>
  )
}

export default Contact