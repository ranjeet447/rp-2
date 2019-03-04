import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"
import NavbarLight from "../../components/navbar_light"
import {graphql } from "gatsby";

const BlogsPage = (props) => {
  const blogList = props.data.allMarkdownRemark;
  return(
    <Layout>
    <SEO title="Blogs" description="BlogList" keywords={[]} />
    <NavbarLight/>
        <header className="header text-center text-white" style={{backgroundImage: 'linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <h1>Blog Posts</h1>
                <p className="lead-2 opacity-90 mt-6">Read and get updated on how we progress</p>

              </div>
            </div>
          </div>
        </header>
        

        <main className="main-content">
          <section className="section bg-gray">
          <div className="container">
            <div className="row gap-y">
              {blogList.edges.map(({node},key)=>(
                  <div className="col-md-6 col-lg-4" key={key}>
                    
                    <div className="card d-block border hover-shadow-6 mb-6">
                      <a href={`${node.frontmatter.path}`}>
                      <img className="card-img-top" src={`/blogs/images/${node.frontmatter.image}`} alt="Card image cap"/>
                      <div className="p-6 text-center">
                        <p className="small-5 text-lighter text-uppercase ls-2 fw-400">{node.frontmatter.date}</p>
                        <h5 className="mb-0">{node.frontmatter.title}</h5>
                      </div>
                      </a>
                    </div>
                  </div>
              ))}
            </div>
            <nav className="flexbox mt-6">
              <a className="btn btn-white disabled"><i className="ti-arrow-left fs-9 mr-2"></i> Newer</a>
              <a className="btn btn-white disabled">Older <i className="ti-arrow-right fs-9 ml-2"></i></a>
            </nav>

          </div>
        </section>
        </main>
  
  </Layout>
  )
}
export default BlogsPage


export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMM Do'YY")
            title
            path
            image{
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }
  }
`