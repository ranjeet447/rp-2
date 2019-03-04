import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"
import Navbar from '../../components/navbar'
import { graphql } from "gatsby";


export default function DownloadPage({data}) {
  
  const header = data.allDownloadYaml.edges[0].node.header[0]
  const process = data.allDownloadYaml.edges[0].node.process[0]
  const process_steps = data.allDownloadYaml.edges[0].node.process_steps
  const download = data.allDownloadYaml.edges[0].node.download[0]
  const downloads = data.allDownloadYaml.edges[0].node.downloads
  console.log(downloads)

  return(
    <Layout>
      <SEO title="Downloads" keywords={[`gatsby`, `application`, `react`]} />
      <Navbar/>

      {/* <!-- Header --> */}
      <header className="header pb-9 pt-10 mb-0" style={{backgroundImage: `url(${header.image.childImageSharp.fluid.src})`}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="fw-200 mb-6">{header.title}</h1>
              <p className="lead-2">{header.description}</p>

              <hr className="w-50px ml-0"/>

              {/* <a className="text-muted" href="index.html">Explore all the available blocks</a> */}
            </div>
          </div>
        </div>
      </header>


      <main className="main-content pt-0">

        
        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2>{process.title}</h2>
              <hr/>
              <p className="lead">{process.description}</p>
            </header>


            <div className="row align-items-center">

              <div className="col-lg-6">
                <div className="video-btn-wrapper">
                  <img className="shadow-4 rounded-lg" src="../assets/img/thumb/6.jpg" alt="watch a video"/>
                  <a className="btn btn-circle btn-xl btn-info" href={process.video} data-provide="lightbox"><i className="fa fa-play"></i></a>
                </div>
              </div>

              <div className="col-lg-6">
                <ol className="step">

                  {process_steps.map((step,key)=>(
                    <li className="step-item" key={key}>
                      <div className="step-icon">
                        <span className="iconbox">{step.number}</span>
                      </div>

                      <div className="step-content">
                        <h6><strong>{step.title}</strong></h6>
                        <p>{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

            </div>
          </div>
        </section>

        <section className="section text-white" style={{backgroundColor: '#7a54d8'}}>
          <div className="container">
            <h2 className="text-center">{download.title}</h2>
            <br/><br/><br/>

            <div className="row gap-y">

              {downloads.map((d,key)=>(
                <div className="col-lg-4" key={key}>
                  <div className="pricing-2">
                    <h2 className="price"><span className="price-unit">{d.currency}</span> {d.price}</h2>
                    <h6 className="plan-name">{d.title}</h6>
                    <p className="plan-description">{d.description}</p>
                    <br/>
                    <a className="btn btn-round btn-outline-light w-200" href={d.link.publicURL} download>{d.link_text}</a>
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
{
  allDownloadYaml{
    edges{
      node{
        header {
          title
          description
          image {
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        process {
          title
          description
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          video
        }
        process_steps {
          number
          title
          description
        }
        download {
          title
        }
        downloads {
          title
          description
          link {
            publicURL
          } 
          link_text
          currency
          price
        }
      }
    }
  }
}
`