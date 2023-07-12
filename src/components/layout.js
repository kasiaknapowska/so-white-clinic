import * as React from "react"
import Header from "./sections/header/header"
import Footer from "./sections/footer/footer"
import ScrollToTop from "./elements/scrollToTop/scrollToTop"

const Layout = ({ children }) => {

  return (
    <>
      <ScrollToTop/>
      <Header />
      <main>{children}</main>
      <Footer />
      
    </>
  )
}

export default Layout
