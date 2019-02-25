import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from '../components/navbar'
import {StaticQuery, graphql } from "gatsby";
import MyImg from '../components/image';


export default function IndexPage(){
  return(
  <Layout>
    <SEO title="Home" description="Awsome website" keywords={[]} />
    <Navbar/>
    <StaticQuery
      query={Query}
      render={data =>(
        <>
          <header className="header h-fullscreen" style={{backgroundImage: 'linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%)'}}>
            <div className="container">
              <div className="row align-items-center h-100">
                <div className="col-lg-6">
                  {/* <h1 className="fw-600">Build your <span className="text-warning">Brand.</span><br/><span className="text-info">Sell</span> more stuff.</h1> */}
                  <h1 className="fw-600">{data.allHeaderYaml.edges[0].node.title}</h1>
                  {/* <p className="lead mt-5 mb-8">TheSaaS is the world’s largest marketing automation platform. It’s like a second brain that helps millions of customers find their audience, engage their customers, and build their brand.</p> */}
                  <p className="lead mt-5 mb-8">{data.allHeaderYaml.edges[0].node.description}</p>                
                  <p className="gap-xy">
                    <a className="btn btn-round btn-primary mw-200" href={data.allHeaderYaml.edges[1].node.link}>{data.allHeaderYaml.edges[1].node.link_text}</a>
                    <a className="btn btn-round btn-outline-secondary mw-200" href={data.allHeaderYaml.edges[2].node.link}>{data.allHeaderYaml.edges[2].node.link_text}</a>
                  </p>
                </div>

                <div className="col-lg-5 ml-auto d-none d-lg-block">
                  <MyImg src={`index/images/${data.allHeaderYaml.edges[0].node.image}`} alt="img"/>
                </div>

              </div>
            </div>
          </header>


          {/* <!-- Main Content --> */}
          <main className="main-content">

          
          <section className="section">
            <div className="container">
              <header className="section-header">
                <small>Feature</small>
                <h2>{data.allFeaturesYaml.edges[0].node.header}</h2>
                <hr/>
                <p className="lead">{data.allFeaturesYaml.edges[0].node.description}</p>
              </header>

              <div className="row gap-y">
                <div className="col-md-8 mx-auto mb-7">
                  <img src={`index/images/${data.allFeaturesYaml.edges[0].node.image}`} alt="..." data-aos="fade-up" data-aos-duration="2000"/>
                </div>
                <div className="w-100"></div>
                {data.allFeaturesYaml.edges.slice(1).map((feature,key)=>(
                  <div className="col-md-6 col-xl-4" key={key}>
                    <div className="media">
                      <div className="lead-6 line-height-1 text-lighter w-70px"><i className={feature.node.icon}></i></div>
                      <div className="media-body">
                        <h5>{feature.node.header}</h5>
                        <p>{feature.node.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                

              </div>

            </div>
          </section>


          {/* <!--
          |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
          | Automate your marketing
          |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
          !--> */}
          <section className="section bg-gray overflow-hidden">
            <div className="container">
              <div className="row">

                <div className="col-md-6 align-self-center text-center text-md-left">
                  <h2>{data.allSection3Yaml.edges[0].node.header}</h2><br/>
                  <p>{data.allSection3Yaml.edges[0].node.description}</p>
                  <br/>
                  <a className="btn btn-lg btn-round btn-primary shadow-3" href={data.allSection3Yaml.edges[0].node.link}>{data.allSection3Yaml.edges[0].node.link_text}</a>
                </div>

                <div className="col-md-5 mx-auto text-center mt-8 mt-md-0">
                  <img src={`index/images/${data.allSection3Yaml.edges[0].node.image}`} alt="..." data-aos="fade-up"/>
                </div>

              </div>
            </div>
          </section>


          {/* <!--
          |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
          | Test drive
          |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
          !--> */}
          <section className="section py-7" style={{backgroundColor: '#8ea6e6'}}>
            <div className="container">
              <div className="row gap-y align-items-center">
                <div className="col-md-9">
                  <h4 className="mb-0 text-white text-center text-md-left">Want a bite? You're in the right place!</h4>
                </div>

                <div className="col-md-3 text-center text-md-right">
                  <a className="btn btn-lg btn-round btn-light" href="#">Take a test drive</a>
                </div>
              </div>
            </div>
          </section>


          {/* <!--
          |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
          | Testimonials
          |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
          !--> */}

          <section className="section">
            <div className="container">
              <header className="section-header">
                <small>Testimonials</small>
                <h2>What customers say about us</h2>
                <hr/>
                <p className="lead">We waited until we could do it right. Then we did! Instead of creating a carbon copy.</p>
              </header>

              <div className="row gap-y text-center">

                {data.allTestimonialsYaml.edges.map((testimonial,key)=>(
                  <div className="col-md-6" key={key}>
                    <blockquote className="blockquote">
                      <div><MyImg className="avatar avatar-xl" src={`index/images/${testimonial.node.image}`} alt="..."/></div>
                      <br/>
                      <p>{testimonial.node.text}</p>
                      <footer>{testimonial.node.name}</footer>
                    </blockquote>
                  </div>
                ))}

              </div>

            </div>
          </section>
       
          {/* <!--
          |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
          | Recent Video Tutorials
          |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
          !--> */}
          <section className="section bg-gray">
            <div className="container text-center">
              <header className="section-header">
                <h2>Recent Video Tutorials</h2>
                <hr/>
                <p className="lead">We are so excited and proud of our product. It's really easy to create a landing page for your awesome product.</p>
              </header>


              <div className="row gap-y">

                {data.allVideosYaml.edges.map((video,key)=>(
                  <div className="col-lg-4" key={key}>
                    <div className="video-btn-wrapper">
                      <MyImg className="shadow-2 rounded" src={`index/images/${video.node.thumb}`} alt="..."/>
                      <a className="btn btn-glass btn-circle btn-light" href={video.node.url} data-provide="lightbox"><i className="fa fa-play"></i></a>
                    </div>
                    <br/>
                    <h6><a href="#">{video.node.text}</a></h6>
                    <p className="small text-lighter">{video.node.type}</p>
                  </div>
                ))}
                
              </div>


              <div className="text-center mt-7">
                <a className="btn btn-outline-primary px-7" href="#">View all</a>
              </div>

            </div>
          </section>



          {/* <!--
          |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
          | CTA
          |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
          !--> */}
          <section className="section py-7">
            <div className="container">
              <div className="row gap-y align-items-center">
                <div className="col-md-6 text-center text-md-left">
                  <h3>Try it for free</h3>
                  <p>Already using TheSaaS? <a href="#">Sign in</a></p>
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
      </>
      )}
    />


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
          This website uses cookies to ensure you get the best experience on our website. <a href="#">Lean more</a>
        </div>

        <div className="col-md-auto">
          <button className="btn btn-sm btn-outline-light" data-dismiss="popup">Got it</button>
        </div>
      </div>
    </div>
  </Layout>
  )
}

const Query = graphql`
query {
  allHeaderYaml {
    edges {
      node {
        title,
        description,
        image,
        link,
        link_text
      }
    }
  },
  allTestimonialsYaml {
    edges {
      node{
        name,
        text,
        image
      }
    }
  },
  allVideosYaml {
    edges {
      node{
        url,
        thumb,
        type,
        text
      }
    }
  },
  allFeaturesYaml{
    edges{
      node{
        header,
        description,
        image,
        icon
      }
    }
  },
  allSection3Yaml{
    edges{
      node{
        header,
        description,
        image,
        link,
        link_text
      }
    }
  }
}`

