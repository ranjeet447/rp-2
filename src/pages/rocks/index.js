import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Navbar from '../../components/navbar_light'
import {graphql } from "gatsby";
// import MyImg from '../components/image';
// import Img from 'gatsby-image'


export default function Rocks({data}){

  data = data.allRocksYaml.edges[0].node

  const header = data.Header
  const missionVision = data.MissionVision
  const fromFounder = data.FromFounder
  const history = data.History

  console.log(data)
   

  return(
  <Layout>
    <SEO title="Home" description="Awsome website" keywords={[]} />
    <Navbar/>

    {/* <!-- Header --> */}
    <header className="header text-white" style={{backgroundImage: `url(${header.image.childImageSharp.fluid.src  })`}} data-overlay="1">
      <div className="container">
        <div className="row align-items-center h-100">

          <div className="col-md-5 mx-auto pb-7">
            <h1 className="display-3">{header.title}</h1>
            <p className="lead-4">{header.description[0]}</p>
            {header.description.slice(1).map((d,key)=>(
              <p className="lead-2 fw-400 mb-7" key={key}>{d}</p>              
            ))}
          </div>

          <div className="col-md-5 mx-auto text-center">
            <a className="btn btn-xl btn-circle btn-info p-7" href={header.video} data-provide="lightbox"><i className="fa fa-play"></i></a>
          </div>

        </div>
      </div>
    </header>

    {/* <!-- Main Content --> */}
    <main className="main-content">


      {/* | Our Mission */}
      <section className="section">
        <div className="container">
          <div className="row gap-y">

            <div className="col-md-3 mr-md-auto">
              <p className="lead-4 text-right">{missionVision.title}</p>
            </div>

            <div className="col-md-4">
              <h6>{missionVision.mission.title}</h6>
              <p>{missionVision.mission.description}</p>
            </div>

            <div className="col-md-4">
              <h6>{missionVision.vision.title}</h6>
              <p>{missionVision.vision.description}</p>
            </div>

          </div>
        </div>
      </section>


      {/* | From The Founder */}
      <section className="section text-white p-0" style={{backgroundColor: '#33323a'}}>
        <div className="container-wide">
          <div className="row no-gutters">

            <div className="col-md-4 bg-img" style={{backgroundImage: `url(${fromFounder.image.childImageSharp.fluid.src})`, minHeight: '300px'}}></div>

            <div className="col-md-8 p-6 p-md-8">
              <h4>{fromFounder.title}</h4>

              <p className="lead">{fromFounder.description[0]}</p>
              {fromFounder.description.slice(1).map((p,key)=>(
                <p key={key}>{p}</p>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* | History */}
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h2>{history.title}</h2>
            <hr/>
            <p className="lead">{history.description}</p>
          </header>


          <div className="row">
            <div className="col-lg-8 mx-auto">

              <ol className="timeline">
                {history.events.map((event,key)=>(
                   <li className="timeline-item">
                    <h4>{event.title}</h4>
                    <p className="small-2"><time dateTime={event.date}>{event.date}</time></p>
                    <p><img className="rounded shadow-3" src={event.image.childImageSharp.fluid.src} alt="..."/></p>
                    <p>{event.description}</p>
                  </li>
                ))}
              </ol>

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
    allRocksYaml{
      edges{
        node{
          Header{
            title
            description
            video
            image{
              childImageSharp{
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          MissionVision{
            title
               vision{
              title
              description
            }
            mission{
              title
              description
            }
          }
          FromFounder{
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
          History{
            title
            description
            events{
              title
              date(formatString: "DD MMM YYYY")
              description
              image{
                childImageSharp{
                  fluid{
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`