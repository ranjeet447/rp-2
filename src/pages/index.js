import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from '../components/navbar'
import {graphql } from "gatsby";
// import MyImg from '../components/image';
// import Img from 'gatsby-image'

import EmiCalculator from '../components/emiCalculator'


export default function IndexPage({data}){
    data = data.allIndexYaml.edges[0].node
    const header=data.header
    const features =  data.features
    const section3 = data.section3
    const timeline = data.timeline[0]
    const timeline_steps = data.timeline_steps
    const video = data.video[0]
    const download = data.download[0]
    const faq = data.faq[0]
    const questions = data.questions
    const comm = data.team_communication
    const emi = data.emi

  return(
  <Layout>
    <SEO title="Home" description="Awsome website" keywords={[]} />
    <Navbar/>

      <header className="header h-fullscreen" style={{backgroundImage: 'linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%)'}}>
        <div className="container">
          <div className="row align-items-center h-100">
            <div className="col-lg-6">
              <h1 className="fw-600">{header[0].title}</h1>
              <p className="mt-5 mb-8">{header[0].description}</p>                
              <p className="gap-xy">
                <a className="btn btn-round btn-primary mw-200" href={header[1].link}>{header[1].link_text}</a>
                <a className="btn btn-round btn-outline-secondary mw-200" href={header[2].link}>{header[2].link_text}</a>
              </p>
            </div>

            <div className="col-lg-5 ml-auto d-none d-lg-block">
              <img src={header[0].image.childImageSharp.fluid.src} alt=""/>
            </div>

          </div>
        </div>
      </header>

      


      {/* <!-- Main Content --> */}
      <main className="main-content">

      <section className="section" id="emi_calculator">
        <div>
          <header className="section-header p-0 mt-0 mb-0">
            <h2>Calculate your EMI</h2>
            <hr/>
          </header>
          <EmiCalculator minAmount={emi.minAmount} maxAmount={emi.maxAmount} rateOfInterest={emi.rateOfInterest}/>    
        </div>
      </section>

      
      <section className="section">
        <div className="container">
          <header className="section-header">
            <small>Feature</small>
            <h2>{features[0].header}</h2>
            <hr/>
            <p className="">{features[0].description}</p>
          </header>

          <div className="row gap-y">
            <div className="col-md-8 mx-auto mb-7">
              <img src={features[0].image.childImageSharp.fluid.src} alt="..." data-aos="fade-up" data-aos-duration="2000"/>
            </div>
            <div className="w-100"></div>
            {features.slice(1).map((feature,key)=>(
              <div className="col-md-6 col-xl-4" key={key}>
                <div className="media">
                  <div className="lead-6 line-height-1 text-lighter w-70px"><i className={feature.icon}></i></div>
                  <div className="media-body">
                    <h5>{feature.header}</h5>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section> 


      {/* | Automate your marketing */}
      <section className="section bg-gray overflow-hidden">
        <div className="container">
          <div className="row">

            <div className="col-md-6 align-self-center text-center text-md-left">
              <h2>{section3[0].header}</h2><br/>
              <p>{section3[0].description}</p>
              <br/>
              <a className="btn btn-lg btn-round btn-primary shadow-3" href={section3[0].link}>{section3[0].link_text}</a>
            </div>

            <div className="col-md-5 mx-auto text-center mt-8 mt-md-0">
              <img src={section3[0].image.childImageSharp.fluid.src} alt="..." data-aos="fade-up"/>
            </div>

          </div>
        </div>
      </section>


      {/* | Test drive */}
      <section className="section py-7" style={{backgroundColor: '#8ea6e6'}}>
        <div className="container">
          <div className="row gap-y align-items-center">
            <div className="col-md-9">
              <h4 className="mb-0 text-white text-center text-md-left">Want a bite? You're in the right place!</h4>
            </div>

            <div className="col-md-3 text-center text-md-right">
              <a className="btn btn-lg btn-round btn-light" href="/about">Take a test drive</a>
            </div>
          </div>
        </div>
      </section>

      {/* timeline */}
      <section id="timeline" className="section">
        <div className="container"> 
        <div className="divider mb-7">{timeline.title}</div>
          <ol className="timeline timeline-horizontal">
            {timeline_steps.map((step,key)=>(
              <li className="timeline-item" key={key}>
                <h6><strong>{step.title}</strong></h6>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>


      {/* video */}
        <section className="section p-0" style={{backgroundColor: '#4f8cf2'}}>
        <div className="container-wide">
          <div className="row no-gutters">

            <div className="col-md-6 bg-img video-btn-wrapper order-md-2" style={{backgroundImage: `url(${video.image.childImageSharp.fluid.src})`, minHeight: '300px'}} data-overlay="4">
              <a className="btn btn-lg btn-circle btn-danger" href={video.video_url} data-provide="lightbox"><i className="fa fa-play"></i></a>
            </div>
            <div className="col-10 col-md-4 mx-auto py-7 py-md-9 text-white">
              <h5>{video.title}</h5>
              <p className="mb-0">{video.description}</p>
            </div>
          </div>
        </div>
      </section>


      {/* team communication */}

      <section id="section-features" className="section">
        <div className="container">
          <header className="section-header">
            <small>Feature</small>
            <h2>{comm.header[0].title}</h2>
            <hr/>
          </header>

          {comm.body.map((section,key)=>{
            if(key%2===0){
              return(
                <div key={key}>
                  <div className="row align-items-center">
                    <div className="col-md-6 ml-auto">
                      <h4>{section.title}</h4>
                      <p>{section.description}</p>
                    </div>
                    <div className="col-md-5 order-md-first">
                      <img src={section.image.childImageSharp.fluid.src} alt="..."/>
                    </div>
                  </div>
                  <hr/>
                </div>
              )
            }else{
              return(
                <div key={key}>
                  <div className="row gap-y align-items-center">
                    <div className="col-md-6 mr-auto">
                      <h4>{section.title}</h4>
                      <p>{section.description}</p>
                    </div>

                    <div className="col-md-5">
                      <img src={section.image.childImageSharp.fluid.src} alt="..."/>
                    </div>
                  </div>
                  <hr/> 
                </div>
              )
            }
          })}
        </div>
      </section>

      {/* features */}
      <section className="section bg-gray">
        <div className="container">
          <div className="row gap-y">

            {comm.methods.map((method,key)=>(
              <div className="col-lg-4" key={key}>
                <div className="card card-body border text-center">
                  <p className="my-5"><i className={`${method.icon} lead-8 text-lighter`} ></i></p>
                  <h5>{method.title}</h5>
                  <p>{method.description}</p>
                  <p><a className="small-3 fw-600" href={method.link}>Read more <i className="fa fa-angle-right small-5 pl-1"></i></a></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
          

      <section className="section overflow-hidden">
        <div className="container">
          <div className="row">

            <div className="col-md-6 text-center">
              <img src={download.image.childImageSharp.fluid.src} alt="..." data-aos="slide-up"/>
            </div>
            <div className="col-md-6 align-self-center">
              <h2>{download.title}</h2>
              <p>{download.description}</p>

              <div className="gap-xy-2 my-6">
                <a href={download.link_appstore}><img src={download.image_appstore.childImageSharp.fluid.src} alt="download on app store"/></a>
                <a href={download.link_playstore}><img src={download.image_playstore.childImageSharp.fluid.src} alt="download on google play"/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-header">
            <small>FAQ</small>
            <h2>{faq.title}</h2>
            <hr/>
            <p>{faq.description}</p>
          </header>

          <div className="row gap-y">
            {questions.map((ques,key)=>(
                <div className="col-md-6 col-xl-4" key={key}>
                  <h5>{ques.question}</h5>
                  <p>{ques.answer}</p>
                </div>
            ))}
          </div>

        </div>
      </section>


      {/* | CTA */}
      <section className="section py-7">
        <div className="container">
          <div className="row gap-y align-items-center">
            <div className="col-md-6 text-center text-md-left">
              <h3>Try it for free</h3>
              <p>Already using TheSaaS? <a href="/">Sign in</a></p>
            </div>

            <div className="col-md-auto ml-auto text-center text-md-right">
              <form className="form-inline justify-content-center">
                <div className="form-group">
                  <input type="text" className="form-control w-250 mb-2 mr-sm-2" placeholder="Email address"/>
                </div>
                <button type="submit" className="btn btn-lg btn-primary mb-2">Get Started</button>
              </form>
            </div>
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

    {/* Cookie notification */}
    <div id="popup-cookie-3" className="popup text-white bg-dark col-10 py-4 border-0" data-position="bottom-center" data-animation="slide-up" data-autoshow="2000">
      <div className="row gap-y align-items-center">
        <div className="col-md">
          This website uses cookies to ensure you get the best experience on our website. <a href="/">Lean more</a>
        </div>

        <div className="col-md-auto">
          <button className="btn btn-sm btn-outline-light" data-dismiss="popup">Got it</button>
        </div>
      </div>
    </div>
  
  </Layout>
  )
}



export const query = graphql`
{
  allIndexYaml{
    edges{
      node{
        header {
          title
          description
          image{
            childImageSharp{
              fluid{
                src
              }
            }
          }
          link
          link_text
        }
        features {
          header
          description
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          icon
        }
        section3 {
          header
          description
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
          link_text
        }
        timeline {
          title
        }
        timeline_steps {
          title
          description
        }
        video {
          title
          description
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          video_url
        }
        team_communication{
          header{
            title
          }
          body{
            title
            description
            image{
              childImageSharp{
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          methods{
            title
            icon
            description
            link
          }
        }
        download {
          title
          description
          image {
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          link_playstore
          image_playstore{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          link_appstore
          image_appstore{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        faq {
          title
          description
        }
        questions {
          question
          answer
        }
        emi{
          minAmount
          maxAmount
          rateOfInterest
        }
      }
    }
  }
}
`