import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
const VideoPage = () => (
  <Layout>
    <SEO title="Video" keywords={[`gatsby`, `application`, `react`]} />
    <Header header="Videos"/>
    <div className="container">
      <div className="row">
        <h1>Videos</h1>
      </div>
    </div>
    
  </Layout>
)

export default VideoPage
