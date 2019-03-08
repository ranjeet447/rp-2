import React from "react"
// import { Link } from "gatsby"
import {graphql } from "gatsby";
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Navbar from '../../components/navbar'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'


export const query = graphql`
  query {
    allAboutYaml{
      edges{
        node{
          Header{
            title
            description
          }
          ScrollImages{
            image{
              childImageSharp{
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          Mission{
            title
            description
          }
          MissionPoints{
            p
          }
          Numbers{
            head
            number
          }
          Testimonials{
            title
            description
            name
            quote
            image{
              childImageSharp{
                fluid{
                  src
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          Partners{
            image{
              childImageSharp{
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          Team{
            title
            description
          }
          TeamMembers{
            name
            image{
              childImageSharp{
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
            position
            facebook
            twitter
            instagram
          }
          Join{
            image{
              childImageSharp{
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            link
            link_text
          }
          alterImges {
            type
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
          founder {
            title
            image{
              childImageSharp{
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quote
          }
          vision {
            title
            description
          }
        }
      }
    }
    #allTeamYaml{
    #  edges{
    #    node {
    #      name
    #      image {
    #       childImageSharp{
    #          fluid{
    #            ...GatsbyImageSharpFluid
    #          }
    #        }
    #      }
    #      position
    #      facebook
    #      twitter
    #      instagram
    #    }
    #  }
    #}
    gcmsdata{
      teamMembers{
        image{
          url
        }
        name
        facebook
        twitter
        instagram
      }
    }
  }  
`
export default function AboutPage({data}){
  const Header = data.allAboutYaml.edges[0].node.Header
  const ScrollImages = data.allAboutYaml.edges[0].node.ScrollImages
  const Mission =data.allAboutYaml.edges[0].node.Mission
  const MissionPoints = data.allAboutYaml.edges[0].node.MissionPoints
  const Numbers = data.allAboutYaml.edges[0].node.Numbers
  const Testimonials = data.allAboutYaml.edges[0].node.Testimonials
  const Partners = data.allAboutYaml.edges[0].node.Partners
  const Team = data.allAboutYaml.edges[0].node.Team
  // const TeamMembers = data.allAboutYaml.edges[0].node.TeamMembers
  const Join = data.allAboutYaml.edges[0].node.Join
  const altImg = data.allAboutYaml.edges[0].node.alterImges
  const founder = data.allAboutYaml.edges[0].node.founder
  const vision = data.allAboutYaml.edges[0].node.vision

  // const TeamMembers = data.allTeamYaml.edges
  const teamMembers = data.gcmsdata.teamMembers

  return(
    <Layout>
      <SEO title="About" />
      <Navbar/>

      {/* header */}
      <header className="header">
        <div className="container">
          <div className="row align-items-center h-100">

            <div className="col-md-7 mx-auto">
              <h1>{Header[0].title}</h1>
              <p className="lead-3">{Header[0].description}</p>
            </div>

          </div>
        </div>
      </header>

      {/* <!-- Main Content --> */}
      <main className="main-content">

        {/* | Slider */}
        <section className="section p-0">
          <div data-provide="slider" data-autoplay="true" data-slides-to-show="2" data-css-ease="linear" data-speed="12000" data-autoplay-speed="0" data-pause-on-hover="false">
            {ScrollImages.map((img,key)=>(
              <div className="p-2" key={key}>
                <Img className="rounded bg-img h-400" fluid={img.image.childImageSharp.fluid}/>
              </div>
            ))}
            
          </div>
        </section>

        {/* | Our Mission */}
        <section id="section-mission" className="section">
          <div className="container">
            <div className="row gap-y align-items-center">

              <div className="col-md-7 mx-auto">
                <h2>{Mission[0].title}</h2>
                <p className="lead">{Mission[0].description}</p>

                <br/>

                {MissionPoints.map((point,key)=>(
                  <p  key={key}>
                    <i className="ti-check text-success mr-2"></i>
                    <span> {point.p}</span>
                  </p>
                ))}
              </div>

            </div>
          </div>
        </section>


        {/* | Numbers */}
        <section className="section text-white" style={{backgroundColor: '#93a5cf'}}>
          <div className="container">
            <div className="row gap-y text-center">

              {Numbers.map((n,key)=>(
                <div className="col-md-4" key={key}>
                  <p className="small text-uppercase ls-2">{n.head}</p>
                  <p className="lead-8 lh-1 fw-700" data-provide="countup" data-from="0" data-to={n.number}></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* | Testimonials */}
        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2>{Testimonials[0].title}</h2>
              <br/>
              <p className="lead">{Testimonials[0].description}</p>
            </header>

            <div className="row gap-y text-center">

              {Testimonials.slice(1).map((testimonial,key)=>(
                <div className="col-lg-4" key={key}>
                  <blockquote className="blockquote">
                    {/* <div><img className="avatar avatar-xl" src="/assets/img/avatar/1.jpg" alt="..."/></div> */}
                    <div><img className="avatar avatar-xl m-auto" src={testimonial.image.childImageSharp.fluid.src} alt=""/></div>
                    <div className="fs-15 mt-6">{testimonial.quote}</div>
                    <footer><em>{testimonial.name}</em></footer>
                  </blockquote>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* | Partnerss */}
        <section className="section bg-gray py-6">
          <div className="container">

            <div className="partner partner-sm">
              {Partners.map((partner,key)=>(
                <img src={partner.image.childImageSharp.fluid.src} key={key} alt=""/>
              ))}
            </div>

          </div>
        </section>

        {/* | Team */}
        <section className="section">
          <div className="container-wide">
            <header className="section-header">
              <small>People</small>
              <h2>{Team[0].title}</h2>
              <hr/>
              <p className="lead">{Team[0].description}</p>
            </header>

            <div className="gap-y m-0 p-0" style={{display:'flex',flexWrap:'wrap'}}>
              {teamMembers.map((member,key)=>(
                // <div className="col-md-6 col-lg-3 team-1" key={key}>
                //   <a href="#">
                //     <img src={member.image.childImageSharp.fluid.src}/>
                //   </a>
                //   <h6>{member.name}</h6>
                //   <small>{member.position}</small>
                  // <div className="social social-gray">
                  //   <a className="social-twitter" href={member.twitter}><i className="fa fa-twitter"></i></a>
                  //   <a className="social-facebook" href={member.facebook}><i className="fa fa-facebook"></i></a>
                  //   <a className="social-instagram" href={member.instagram}><i className="fa fa-instagram"></i></a>
                  // </div>
                // </div>
                <div className="" key={key}>
                  <div className="card text-white bg-img justify-content-end h-150 w-150" style={{backgroundImage: `url(${member.image.url})`}} data-scrim-bottom="9">
                  <div className="card-body flex-grow-0 pb-0">
                    <h6 className="card-title text-center mb-0">{member.name}</h6>
                        <div className="social social-gray">
                          <a className="social-twitter" href={member.twitter}><i className="fa fa-twitter"></i></a>
                          <a className="social-facebook" href={member.facebook}><i className="fa fa-facebook"></i></a>
                          <a className="social-instagram" href={member.instagram}><i className="fa fa-instagram"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      <section className="section">
        <div className="container">

          {altImg.map((m,key)=>{
            if(key%2===0){
              return(
                <div className="row gap-y align-items-center" key={key}>
                  <div className="col-md-6 order-md-2">
                    <img className="rounded-md ml-md-4"  src={m.image.childImageSharp.fluid.src} alt="..."/>
                  </div>
                  <div className="col-md-6 text-center text-md-right">
                    <p className="small-2 text-uppercase text-lightest fw-500 ls-1">{m.type}</p>
                    <h3 className="fw-500">{m.title}</h3>
                    <br/>
                    <p>{m.description}</p>
                  </div>
                  
                </div>
              )
            }else{
              return(
                <div className="row gap-y align-items-center" key={key}>
                  <div className="col-md-6">
                  <img className="rounded-md ml-md-4"  src={m.image.childImageSharp.fluid.src} alt="..."/>
                  </div>
                  <div className="col-md-6 text-center text-md-left">
                    <p className="small-2 text-uppercase text-lightest fw-500 ls-1">{m.type}</p>
                    <h3 className="fw-500">{m.title}</h3>
                    <br/>
                    <p>{m.description}</p>
                  </div>
                  
                </div>
              )
            }
          })}
        </div>
      </section>

      <section className="section text-white p-0" style={{backgroundColor: '#33323a'}}>
        <div className="container-wide">
          <div className="row no-gutters">

            <div className="col-md-4 bg-img" style={{backgroundImage: `url(${founder[0].image.childImageSharp.fluid.src})`, minHeight: '300px'}}></div>

            <div className="col-md-8 p-6 p-md-8">
              <h4>{founder[0].title}</h4>
              <p className="lead">{founder[1].quote}</p>
              {founder.slice(2).map((f,key)=>(
                <p key={key}>{f.quote}</p>
              ))}
              </div>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row gap-y">

            <div className="col-md-3 mr-md-auto">
              <p className="lead-4 text-right">{vision[0].title}</p>
            </div>

            {vision.slice(1).map((v,key)=>(
              <div className="col-md-4" key={key}>
                <h6>{v.title}</h6>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* | CTA */}
        <BackgroundImage fluid={Join[0].image.childImageSharp.fluid}>
        <section className="section text-center py-12" style={{backgroundImage: `url(${Join[0].image.childImageSharp.fluid.src})`}} data-overlay="7">
          <div className="container">
            <h2 className="display-4 text-white mb-7"><strong>{Join[0].title}</strong></h2>
            <a className="btn btn-lg btn-round btn-info" href={Join[0].link}>{Join[0].link_text}</a>
          </div>
        </section>
        </BackgroundImage>

      </main>
      
    </Layout>
  )
}


