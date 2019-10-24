import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import HacktoberLogo from "../components/hacktoberLogo"

import User from "../components/User"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <div
      style={{
        maxWidth: `450px`,
        margin: "auto",
        marginBottom: `1.45rem`,
        paddingTop: 40,
      }}
    >
      <HacktoberLogo />
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1
        style={{
          display: "inline",
          fontSize: 30,
          fontWeight: "bold",
          padding: "5px  10px",
          background: `linear-gradient(123.32deg, #A31EC8 2.81%, #FF00AA 96.06%)`,
          border: `2.63922px solid #FF04A8`,
          boxShadow: `0px 131.961px 263.922px rgba(0, 0, 0, 0.2)`,
          borderRadius: `7.18104px`,
          transform: `rotate(-4deg)`,
          color: "#FFF",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        🌟Contributors🌟
      </h1>
    </div>

    <Contributors />
  </Layout>
)

const Contributors = () => (
  <StaticQuery
    query={graphql`
      {
        allContributorsYaml {
          edges {
            node {
              bio
              github
              firstName
              lastName
            }
          }
        }
      }
    `}
    render={data => (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.allContributorsYaml.edges.map(({ node }, i) => (
          <User {...node} key={i} index={i} />
        ))}
      </div>
    )}
  ></StaticQuery>
)

export default IndexPage
