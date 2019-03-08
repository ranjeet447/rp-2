import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"
import Navbar from "../../components/navbar_light"
import {graphql} from  'gatsby'


export default function RequestsPage({data}) {
  const header = data.allRequestYaml.edges[0].node.header[0]
  const requests = data.gcmsdata.demoes
  
  return(
    <Layout>
      <SEO title="Requests" keywords={[`gatsby`, `application`, `react`]} />
      <Navbar/>

      <header className="header text-white" style={{backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container">
          <header className="section-header">
            <h2 className="display-3">{header.title}</h2>
            <p className="lead">{header.description}</p>
          </header>
        </div>
      </header>
      
      <main className="main-content">
        <section className="section bg-gray">
          <div className="container">
            <div className="row">
              {requests.map((request,key)=>(
                <div className="col-md-6 col-lg-4" key={key}>
                  <div className="card d-block border hover-shadow-6 mb-6">
                    <a href={`${request.meta.path}`}>
                    {/* <img className="card-img-top" src={`/blogs/images/${node.frontmatter.image}`} alt="Card image cap"/> */}
                    <div className="p-6 text-center">
                      <h5 className="ls-2 fw-400 mb-0">{request.header.title}</h5>
                      <p className="text-lighter">{request.header.description}</p>
                      
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


export const query = graphql`
query{
  allRequestYaml{
    edges{
      node{
        header{
          title
          description
        }
      }
    }
  }
	gcmsdata{
    demoes{
      meta
      header
      request
      requestImage{
          url
      }
    }
  }
}
`
