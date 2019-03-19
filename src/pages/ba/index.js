import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Navbar from '../../components/navbar'
import {graphql } from "gatsby";
// import MyImg from '../components/image';
// import Img from 'gatsby-image'


export default function Ba({data}){

  data = data.allBaYaml.edges[0].node

  const header = data.Header
  const block1 = data.block1
  const block2 = data.block2
  const block3 = data.block3
  const block4 = data.block4

  console.log(data)
   

  return(
  <Layout>
    <SEO title="ba" description="Awsome website" keywords={[]} />
    <Navbar/>

    {/* <!-- Header --> */}
    <header className="header text-dark" style={{background:'#fff'}}>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-5 mx-auto">
            <h1>{header.title}</h1>
            <p className="lead-2">{header.description}</p>
          </div>

          <div className="col-md-5 mx-auto text-center">
            <a className="btn btn-xl btn-circle btn-danger p-7" href={header.video} data-provide="lightbox"><i className="fa fa-play"></i></a>
          </div>

        </div>
      </div>
    </header>

    {/* <!-- Main Content --> */}
    <main className="main-content">

      {/* block 1 */}
      <section className="section text-white pb-0 overflow-hidden" style={{backgroundColor: '#f64d62'}}>
          <div className="container">
            <small className="text-white">{block1.question}</small>
            <h2>{block1.title}</h2>
            <p className="lead-2">{block1.description}</p>

            <hr className="w-50px ml-0"/>
            <div className="row">
              <div className="col-md-6 pb-8">
                <div className="row">
                  {block1.features.map((feature,key)=>(
                    <div className="col-6" key={key}>
                      {/* <p className="lead-2 float-left pr-2"><i className="icon-genius"></i></p> */}
                      <p className="text-uppercase fw-600 m-0 ">{feature.title}</p>
                      <ul>
                      {feature.description.map((f,key)=>(
                          <li key={key}>{f}</li>
                      ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6 align-self-end text-center">
                <img src={block1.image.childImageSharp.fluid.src} alt="..." data-aos="fade-up"/>
              </div>
            </div>

          </div>
        </section>

        {/* block 2 */}
        <section className="section bg-gray pb-0">
        <div className="container">
          <div className="row">

            <div className="col-md-6 align-self-center pb-7">
              <small>{block2.question}</small>
              <h3>{block2.title}</h3>
              <p>{block2.description}</p>

              <div className="row mt-7">

                {block2.features.map((feature,key)=>(
                  <div className="col-6" key={key}>
                    <h5>{feature.title}</h5>
                    <ul>
                      {feature.description.map((f,key)=>(
                        <li key={key}>{f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 text-center order-md-first">
              <img src={block2.image.childImageSharp.fluid.src} alt="..."/>
            </div>


          </div>
        </div>
      </section>

      {/* block 3 */}
      <section className="section overflow-hidden py-lg-10">
        <div className="container-fluid pr-lg-0">
          <div className="row gap-y">
            <div className="col-10 col-lg-6 mx-auto text-center text-lg-left">
              <small>{block3.question}</small>
              <h2>{block3.title}</h2>
              <p className="lead">{block3.description}</p>
              <br/>

              <div className="row gap-y">
                {block3.features.map((feature,key)=>(
                  <div className="col-md-6" key={key}>
                    {/* <i className="fa fa-tv text-primary lead-4 mb-5"></i> */}
                    <h6 className="text-uppercase mb-3">{feature.title}</h6>
                    <ul>
                      {feature.description.map((d,key)=>(
                        <li className="fs-14" key={key}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <img className="shadow-3" src={block3.image.childImageSharp.fluid.src} alt="..." data-aos="slide-left" data-aos-duration="1500"/>
            </div>
          </div>
        </div>
      </section>

      {/* block 4 */}
      <section className="section overflow-hidden bg-gray">
        <div className="container-fluid pl-lg-0">
          <div className="row gap-y align-items-center">

            <div className="col-lg-6 mx-auto">
              <small>{block4.question}</small>
              <h2>{block4.title}</h2>
              <p className="lead mb-7">{block4.description}</p>

              {block4.features.map((feature,key)=>(
                <div key={key}>
                  <i className="ti-check text-success mr-2"></i>
                  <span className="fs-14">{feature.title}</span>
                  <ul>
                    {feature.description.map((d,key)=>(
                      <li className="fs-14" key={key}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
              

            </div>

            <div className="col-lg-5 align-self-center order-md-first">
              <img className="shadow-3" src={block4.image.childImageSharp.fluid.src} alt="..." data-aos="slide-right" data-aos-duration="1500"/>
            </div>

          </div>
        </div>
      </section>

    </main>

  </Layout>
  )
}



export const query = graphql`
{
  allBaYaml{
    edges{
      node{
        Header{
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
        block1{
          question
          title
          description
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          features{
            title
            description
          }
        }
        block2{
          question
          title
          description
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          features{
            title
            description
          }
        }
        block3{
          question
          title
          description
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          features{
            title
            description
          }
        }
        block4{
          question
          title
          description
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          features{
            title
            description
          }
        }
      }
    }
  }
}
`