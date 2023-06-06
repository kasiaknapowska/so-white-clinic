import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import logo from "../../images/logo/swc-logo.png"

import "./header.module.scss";
import Navigation from "../navigation/navigation";
import { navLinks } from "../../data/links";

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
    <Link to="/">
      {" "}
      <StaticImage
        src="../../images/logo/swc-logo.png"
        loading="eager"
        width={160}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
    </Link>
    <Navigation links={navLinks}/>
    {/* <p>{siteTitle}</p> */}
    {/* <img alt="so white clinic logo" width={200} src={logo} /> */}
    </div>
  </header>
)

export default Header
