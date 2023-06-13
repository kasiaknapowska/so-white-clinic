import React from "react"
import {footer} from "./footer.module.scss"
import Contact from "../blocks/contact/contact"

const Footer = () => {
  return (
    <footer className={footer}>
      <div className="container">
        <h4>So white Clinic</h4>
        <Contact/>
        <small>
        © {new Date().getFullYear()} &middot; Built by KKnapowska with
        {` `}
        <a
          href="https://www.gatsbyjs.com"
          target="blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        </small>
      </div>
    </footer>
  )
}

export default Footer