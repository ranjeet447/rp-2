import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
const RequestsPage = () => (
  <Layout>
    <SEO title="Requests" keywords={[`gatsby`, `application`, `react`]} />
    <Header header="Requests"/>
    <div className="container">
      <div className="row">
        <h1>Requests</h1>
      </div>
    </div>
    
  </Layout>
)

export default RequestsPage
