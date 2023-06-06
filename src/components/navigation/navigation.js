import * as React from "react"
import { Link } from "gatsby"

import "./navigation.module.scss"
import {nav} from "./navigation.module.scss"

const Navigation = ({ links }) => (
  <nav className={nav}>
    {links.map(link => (
      <Link to={link.url}>{link.label}</Link>
    ))}
  </nav>
)

export default Navigation
