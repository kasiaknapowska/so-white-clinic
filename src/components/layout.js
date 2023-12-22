import * as React from "react"
import Header from "./sections/header/header"
import Footer from "./sections/footer/footer"
import ScrollToTop from "./elements/scrollToTop/scrollToTop"
import CookieModal from "./blocks/cookieModal/cookieModal"

const Layout = ({ children }) => {

  return (
    <>
      <ScrollToTop/>
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieModal/>
    </>
  )
}

export default Layout
