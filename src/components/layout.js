/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header/header"

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
      <Header siteTitle={data.site.siteMetadata?.title || `So white clinic`} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} &middot; Built by KKnapowska with
          {` `}
          <a
            href="https://www.gatsbyjs.com"
            target="blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </footer>
      </div>
    </>
  )
}

export default Layout