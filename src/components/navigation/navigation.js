import React, {useState} from "react"
import { Link } from "gatsby"

import "./navigation.module.scss"
import { nav } from "./navigation.module.scss"
import Hamburger from "../blocks/hamburger/hamburger"


const Navigation = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  function onHamburgerClick() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Hamburger onHamburgerClick={onHamburgerClick} isMenuOpen={isMenuOpen}/>
      <nav className={nav}>
        {links.map(link => (
          <Link to={link.url} key={link.url}>{link.label}</Link>
        ))}
      </nav>
    </>
  )
}

export default Navigation
