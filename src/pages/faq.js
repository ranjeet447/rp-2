import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

const FaqPage = () => (
  <Layout>
    <SEO title="Faq" keywords={[`gatsby`, `application`, `react`]} />
    <Header header="Faq"/>
    <div className="container">
      <div className="row">
        <h1>FAQ</h1>
      </div>
    </div>
    
  </Layout>
)

export default FaqPage
