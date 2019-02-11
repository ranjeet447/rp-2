import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

const JobsPage = () => (
  <Layout>
    <SEO title="Jobs" keywords={[`gatsby`, `application`, `react`]} />
    <Header header="Jobs"/>
    <div className="container">
      <div className="row">
        <h1>Jobs</h1>
      </div>
    </div>
    
  </Layout>
)

export default JobsPage
