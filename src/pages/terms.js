import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
const TermsPage = () => (
  <Layout>
    <SEO title="T&amp;C" keywords={[`gatsby`, `application`, `react`]} />
    <Header header="Terms &amp; Conditions"/>
    <div className="container">
      <div className="row">
        <h1>Terms &amp; conditions</h1>
      </div>
    </div>
    
  </Layout>
)

export default TermsPage
