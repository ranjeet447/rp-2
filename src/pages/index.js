import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/header'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header header="Home"/>
    <div className="container">
      <div className="row">
        <h1>HomePage</h1>
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
    {/* <Link to="/about/">About</Link> */}
  </Layout>
)

export default IndexPage
