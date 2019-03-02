import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import NavbarLight from "../../components/navbar_light"
import {StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

const JobsPage = () => (
  <Layout>
    <SEO title="Jobs" description="open job positions" keywords={[]} />
    <NavbarLight/>
    <StaticQuery
      query={Query}
      render={data => (
        <>
          <BackgroundImage fluid={data.allJobsHeaderYaml.edges[0].node.image.childImageSharp.fluid}>
            <header className="header text-white" style={{backgroundImage: `url(${data.allJobsHeaderYaml.edges[0].node.image.childImageSharp.fluid.src})`}} data-overlay="7">

              <div className="container text-center">

                <div className="row">
                  <div className="col-lg-8 mx-auto">

                    <h1>{data.allJobsHeaderYaml.edges[0].node.title_static} <span className="text-primary" data-typing={`${data.allJobsHeaderYaml.edges[0].node.title_typing}`}></span></h1>
                    <p className="lead-2">{data.allJobsHeaderYaml.edges[0].node.description}</p>
                    <br/>
                    <hr className="w-60px"/>
                    <br/>

                    <a className="btn btn-lg btn-round btn-light" href={data.allJobsHeaderYaml.edges[0].node.link}>{data.allJobsHeaderYaml.edges[0].node.link_text}</a>

                  </div>
                </div>

              </div>
            </header>
          </BackgroundImage>
          {/* <!-- Main Content --> */}
          <main className="main-content">

            {/* Benefits */}
            <section className="section">
              <div className="container">
                <header className="section-header">
                  <small>Benefits</small>
                  <h2>{data.allBenefitsYaml.edges[0].node.title}</h2>
                  <hr/>
                  <p className="lead">{data.allBenefitsYaml.edges[0].node.description}</p>
                </header>
                <div className="row text-center">
                  <div className="col-md-10 mx-auto">
                    <div className="row gap-y">
                      {data.allBenefitsYaml.edges.slice(1).map((b,key)=>(
                        <div className="col-md-6" key={key}>
                        <p><i className={`${b.node.icon} text-lighter lead-6 mb-5`}></i></p>
                        <h5>{b.node.title}</h5>
                        <p>{b.node.description}</p>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>



            {/*slider */}
            <section className="section p-0">
              <div className="slider-arrows-flash-light slider-dots-inside slider-dots-fill-primary" data-provide="slider" data-autoplay={true} data-arrows={true} data-dots={true}>
                {data.allSliderImagesYaml.edges.map((img,key)=>(
                  // <div key={key} className="bg-img h-600" style={{backgroundImage: `url(jobs/images/${img.node.image})`}}></div>
                  <Img key={key} fluid={img.node.image.childImageSharp.fluid} className="bg-img h-600" />
                ))}
              </div>
            </section>




            {/* Open positions */}
            <section className="section" id="section-open-positions">
              <div className="container">
                <header className="section-header">
                  <small>Jobs</small>
                  <h2>{data.allJoblistYaml.edges[0].node.title}</h2>
                  <hr/>
                  <p className="lead">{data.allJoblistYaml.edges[0].node.description}</p>
                </header>

                <div className="accordion accordion-connected shadow-5" id="accordion-job">
                  {data.allJoblistYaml.edges.slice(1).map((job,key)=>(
                    <div className="card" key={key}>
                      <h6 className="card-title">
                        <a className="d-flex align-items-center collapsed" data-toggle="collapse" href={`#collapse-job-${key}`}>
                          <strong className="mr-auto">{job.node.position}</strong>
                          <span className="small text-lighter">{job.node.location}<i className="fa fa-map-marker ml-2"></i></span>
                        </a>
                      </h6>

                      <div id={`collapse-job-${key}`} className="collapse" data-parent="#accordion-job">
                        <div className="card-body">
                          <p>{job.node.description}</p>

                          <hr className="w-100px"/>

                          <p className="text-center"><a className="btn btn-lg btn-primary" href="/jobs">Apply Now</a></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>


          </main>
          {/* <!-- Offcanvas - Search --> */}
          <div id="offcanvas-search" className="offcanvas text-white" data-animation="fade" style={{backgroundColor: 'rgba(255,73,84,0.9)'}}>
            <button type="button" className="close" data-dismiss="offcanvas" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="row align-items-center text-center h-90">
              <div className="col-10 col-md-6 mx-auto">
                <form className="input-transparent">
                  <input className="form-control form-control-lg border-0 lead-5" type="text" name="search" placeholder="Enter your keywords here"/>
                </form>
              </div>
            </div>
          </div>
      
        </>    
      )}
    />
    
  </Layout>
)

export default JobsPage

const Query = graphql`
query {
  allJobsHeaderYaml {
    edges {
      node {
        title_static,
        title_typing
        description,
        link,
        link_text,
        image{
          childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
          }
      }
      }
    }
  },
  allBenefitsYaml {
    edges {
      node {
        title,
        description,
        icon
      }
    }
  },
  allSliderImagesYaml {
    edges {
      node {
        image{
          childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
          }
        }
      }
    }
  },
  allJoblistYaml {
    edges {
      node {
        position,
        description,
        location
      }
    }
  },
}`