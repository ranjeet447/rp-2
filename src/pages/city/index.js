import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Navbar from '../../components/navbar'
import { graphql } from "gatsby";

export default function City({data}){

  console.log(data.cities.edges)
  const cities = data.cities.edges
  
  return(
    <Layout>
      <SEO title="City" />
      <Navbar/>

      <header className="header bg-gray">
      <div className="container">
        <header className="section-header">
          <h2 className="display-3">Contact Us</h2>
          <hr/>
          <p className="lead">They original on mountains, drew the support time. The of to graduate into to is the to she.</p>
        </header>


        <div className="row gap-y text-center">

          {cities.map((city,key)=>(
            <div className="col-lg-4" key={key}>
              <a href={city.node.frontmatter.path}>
                <div className="card border p-5">
                  <h5 className="mb-4">{city.node.frontmatter.title}</h5>
                  <p className="small-1">{city.node.frontmatter.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>


      </div>
    </header>

      


    </Layout>
  )
}


export const query=graphql`
  {
    cities: allMarkdownRemark(
      filter : {frontmatter: {visibility:{eq:"show"},type:{eq:"city"}}},
    ) {
      edges {
        node {
          fields{
              slug
          }
          id
          html
          frontmatter {
              title
              path
              description
          }
        }
      }
    }
  }
`


