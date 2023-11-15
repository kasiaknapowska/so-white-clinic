import * as React from "react"
import { Link } from "gatsby"
// import logo from "../../images/logo/swc-logo.png"

import {header, logo} from "./header.module.scss"
import Navigation from "../../blocks/navigation/navigation";
import { navLinks } from "../../../data/links";
import { contact } from "../../../data/contact";
import Button from "../../elements/buttons/button";
import Logo from "../../../images/logo/swc-logo.svg"

const Header = () => (
  <header className={header}>
    <div className="container">
    <Link to="/">
      <img src={Logo} alt="logo kliniki stomatologicznej So White Clinic" title="So White Clinic stomatologia Katowice" className={logo} width="200" height="80"/>
    </Link>
    <Navigation links={navLinks}/>
    <Button label="Zadzwoń teraz" link={`tel:${contact.phone}`} type="callUsBtn" withIcon/>
    </div>
  </header>
)

export default Header
