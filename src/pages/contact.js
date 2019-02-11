import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <Header header="Contact"/>
    <div className="container">
      <div className="row">
        <h1>Contact</h1>
      </div>
    </div>
    
  </Layout>
)

export default ContactPage
