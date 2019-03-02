import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"
import Navbar from '../../components/navbar'
import { graphql } from "gatsby";

export default function ConnectPage({data}) {

  data= data.allConnectYaml.edges[0].node
  const header= data.header
  const blogs = data.blogs
  const cta = data.cta[0]

  return(
    <Layout>
      <SEO title="Connect" keywords={[]} />
      <Navbar/>

      {/* Header */}
      <header className="header overflow-hidden pb-0 pt-11" style={{backgroundImage: 'linear-gradient(85deg, #e6e9f0 0%, #eef1f5 100%)'}}>
      <div className="container">
        <div className="row h-100">

          <div className="col-lg-5 align-self-center pb-8 pb-lg-10">
            <h1>{header[0].title}</h1>
            <p className="lead mt-5 mb-8">{header[0].description}</p>
            <p className="gap-xy">
              <a className="btn btn-round btn-primary mw-150" href={`#${header[1].link}`}>{header[1].link_text}</a>
              <a className="btn btn-round btn-outline-primary mw-150" href={`#${header[2].link}`}>{header[2].link_text}</a>
            </p>
          </div>

          <div className="col-lg-6 ml-auto align-self-end">
            <img className="shadow-7" src={header[0].image.childImageSharp.fluid.src} alt="img"/>
          </div>

        </div>
      </div>
    </header>

    {/* <!-- Main Content --> */}
    <main className="main-content">

      {/* | Features */}
      {/* <section id="section-features" className="section">
        <div className="container">
          <header className="section-header">
            <small>Feature</small>
            <h2>All In One</h2>
            <hr/>
            <p className="lead">New customizable tabs put you back in control so that you can see what’s new at a glance and decide which emails you want to read and when.</p>
          </header>
          <div className="row gap-y">
            <div className="col-md-8 mx-auto mb-7">
              <img className="shadow-5" src="../assets/img/preview/dribbble-10.jpg" alt="..." data-aos="fade-up" data-aos-duration="2000"/>
            </div>
            <div className="w-100"></div>
            <div className="col-md-6 col-xl-4">
              <div className="media">
                <div className="lead-6 line-height-1 text-dark mr-5"><i className="icon-mobile"></i></div>
                <div className="media-body">
                  <h5>Responsive</h5>
                  <p>Your website works on any device: desktop, tablet or mobile.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="media">
                <div className="lead-6 line-height-1 text-primary mr-5"><i className="icon-gears"></i></div>
                <div className="media-body">
                  <h5>Customizable</h5>
                  <p>You can easily read, edit, and write your own code, or change everything.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="media">
                <div className="lead-6 line-height-1 text-info mr-5"><i className="icon-tools"></i></div>
                <div className="media-body">
                  <h5>UI Kit</h5>
                  <p>There is a bunch of useful and necessary elements for developing your website.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="media">
                <div className="lead-6 line-height-1 text-warning mr-5"><i className="icon-layers"></i></div>
                <div className="media-body">
                  <h5>Lego Base</h5>
                  <p>You can find our code well organized, commented and readable.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="media">
                <div className="lead-6 line-height-1 text-danger mr-5"><i className="icon-recycle"></i></div>
                <div className="media-body">
                  <h5>Clean Code</h5>
                  <p>As you can see in the source code, we provided a clean code.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="media">
                <div className="lead-6 line-height-1 text-success mr-5"><i className="icon-chat"></i></div>
                <div className="media-body">
                  <h5>Support</h5>
                  <p>When you purchase this template, you'll freely receive future updates.</p>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <br/><br/>
              <a className="btn btn-lg btn-primary" href="#">See more Features</a>
            </div>
          </div>
        </div>
      </section> */}

      {/* | Blog */}
      <section className="section bt-1 bb-1 p-0" id="learn-more">
        <div className="container-fluid px-0">

          {blogs.map((blog,key)=>{
            if(key%2===0){
              return(
                <div className="row no-gutters" key={key}>
                  <div className="col-md-6 bg-img mh-300" style={{backgroundImage: `url(${blog.image.childImageSharp.fluid.src})`}}></div>
                  <div className="col-10 col-md-4 mx-auto py-8 text-center text-md-left">
                    <p className="small-2 text-light">{blog.type}</p>
                    <h4>{blog.title}</h4>
                    <p>{blog.description}</p>
                    <br/>
                    <a className="btn btn-round btn-primary" href={blog.link}>Read More</a>
                  </div>
                </div>
              )
            }else{
              return(
                <div className="row no-gutters" key={key}>
                  <div className="col-md-6 bg-img mh-300 order-md-2" style={{backgroundImage: `url(${blog.image.childImageSharp.fluid.src})`}}></div>
                  <div className="col-10 col-md-4 mx-auto py-8 text-center text-md-left">
                    <p className="small-2 text-light">{blog.type}</p>
                    <h4>{blog.title}</h4>
                    <p>{blog.description}</p>
                    <br/>
                    <a className="btn btn-round btn-primary" href={blog.link}>Read More</a>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </section>


      {/* | CTA */}
      <section className="section bg-gray" id="get-started">
        <div className="container">
          <header className="section-header">
            <h2 className="lead-7"><strong>{cta.title}</strong></h2>
            <hr/>
            <p className="lead-2">{cta.description}</p>
          </header>

          <p className="text-center">
            <a className="btn btn-lg btn-danger w-250" href={cta.link}>Get started</a>
          </p>
        </div>
      </section>

    </main>
      
      
    </Layout>
  )
}

export const query = graphql`
{
  allConnectYaml{
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
        blogs {
          type
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
        }
        cta {
          title
          description
          link
          link_text
        }
      }
    }
  }
}
`