import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Navbar from '../../components/navbar_light'
import {graphql } from "gatsby"
import Header from '../../templates/city-header'

export default function City({data}){
  const cities = data.gcmsdata.cities
  // console.log(cities)
  return(
    <Layout>
      <SEO title="City" />
      <Navbar/>

    <Header/>
    <main className="main-content">
      <section className="section bg-gray">
        <div className="container">
          <div className="row">
              {cities.map((city,key)=>(
                  <div className="col-md-6 col-lg-4" key={key}>
                    <div className="card d-block border hover-shadow-6 mb-6">
                      <a href={`${city.meta.path}`}>
                      {/* <img className="card-img-top" src={`/blogs/images/${node.frontmatter.image}`} alt="Card image cap"/> */}
                      <div className="p-6 text-center">
                        <h5 className="ls-2 fw-400 mb-0">{city.header.title}</h5>
                        <p className="text-lighter">{city.header.description}</p>
                        
                      </div>
                      </a>
                    </div>
                  </div>
              ))}
          </div>
        </div>
      </section>
    </main>

    </Layout>
  )
}

export const query=graphql`
query{
	gcmsdata{
    cities{
      meta
      header
    }
  },
}`



