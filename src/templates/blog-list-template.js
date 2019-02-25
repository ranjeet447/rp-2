import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NavbarLight from "../components/navbar_light"
// import Image from '../components'
import MyImg from '../components/image';

export default class BlogList extends React.Component {
  render() {
    const blogList = this.props.data.allMarkdownRemark
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
    const nextPage =(currentPage + 1).toString()
    return (
        <Layout>
            <SEO title="Blogs" keywords={[]} />
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
                            <MyImg className="card-img-top" src={`${node.fields.slug.substr(1)}images/${node.frontmatter.image}`} alt="Card image cap"/>
                            <div className="p-6 text-center">
                            <p className="small-5 text-lighter text-uppercase ls-2 fw-400" href="#">{node.frontmatter.date}</p>
                            <h5 className="mb-0">{node.frontmatter.title}</h5>
                            </div>
                            </a>
                        </div>
                        </div>
                    ))}
        
                    
                    </div>
        
                    <nav className="flexbox mt-6">
                        <a className={`btn btn-white ${isFirst?'disabled':''}`} href={`/blog/${prevPage}`}><i className="ti-arrow-left fs-9 mr-2"></i> Newer</a>
                        <a className={`btn btn-white ${isLast?'disabled':''}`} href={`/blog/${nextPage}`}>Older <i className="ti-arrow-right fs-9 ml-2"></i></a>
                    </nav>
        
                </div>
                </section>
                </main>
        
        </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM Do'YY")
            title
            path
            image
          }
        }
      }
    }
  }
`