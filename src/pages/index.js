import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HacktoberLogo from "../components/hacktoberLogo"
import DevCLogo from "../components/devcLogo"

import User from "../components/User"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <div
      style={{
        maxWidth: `250px`,
        float: "left",
        marginBottom: `1.45rem`,
      }}
    >
      <DevCLogo />
    </div>
    <div style={{ maxWidth: `450px`, margin: "auto", marginBottom: `1.45rem` }}>
      <HacktoberLogo />
    </div>
    <h1>Hi people</h1>
    <User />
    <User />
    <User />
    <User />
    <User />
    <User />
    <User />
    <User />
  </Layout>
)

export default IndexPage
