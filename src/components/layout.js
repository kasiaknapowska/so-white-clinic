/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./sections/header/header"
import Footer from "./sections/footer/footer"
import ScrollToTop from "./elements/scrollToTop/scrollToTop"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ScrollToTop/>
      <Header siteTitle={data.site.siteMetadata?.title || `So white clinic`} />
      <main>{children}</main>
      <Footer />
      
    </>
  )
}

export default Layout
