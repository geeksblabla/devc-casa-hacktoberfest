/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import DevCLogo from "./devcLogo"

import "./layout.css"

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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            margin: "auto",
            color: "#FFF",
            fontSize: 12,
          }}
        >
          © {new Date().getFullYear()}, Built with 💚 by
          <a
            target="_blank"
            href="https://www.facebook.com/groups/DevC.Casablanca/879221572479821/"
          >
            <div
              style={{
                width: "50vw",
                maxWidth: "200px",
                margin: "auto",
                //marginBottom: `1.65rem`,
                paddingTop: 5,
                marginLeft: 5,
              }}
            >
              <DevCLogo />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
