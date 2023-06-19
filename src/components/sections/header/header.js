import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import logo from "../../images/logo/swc-logo.png"

import {header, logo} from "./header.module.scss"
import Navigation from "../../blocks/navigation/navigation";
import { navLinks } from "../../../data/links";
import { contact } from "../../../data/contact";
import Button from "../../elements/button/button";
import Logo from "../../../images/logo/swc-logo.svg"

const Header = () => (
  <header className={header}>
    <div className="container">
    <Link to="/">
      {" "}
      {/* <StaticImage
        src="../../../images/logo/swc-logo.png"
        loading="eager"
        width={160}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
      /> */}
      <img src={Logo} alt="logo" className={logo}/>
    </Link>
    <Navigation links={navLinks}/>
    <Button label="Zadzwoń teraz" link={`tel:${contact.phone}`} type="callUsBtn" withIcon/>
    {/* <img alt="so white clinic logo" width={200} src={logo} /> */}
    </div>
  </header>
)

export default Header
