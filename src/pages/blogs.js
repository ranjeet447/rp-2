import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

const BlogsPage = () => (
  <Layout>
    <SEO title="Blogs" keywords={[]} />
    <Header header="Blogs"/>
    <div className="container">
      <div className="row">
        <h1>Blogs</h1>
      </div>
    </div>

  </Layout>
)

export default BlogsPage
