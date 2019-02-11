import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"


const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <Header header="About"/>
    <div className="container">
      <div className="row">
        <h1>About</h1>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
    
  </Layout>
)

export default SecondPage
