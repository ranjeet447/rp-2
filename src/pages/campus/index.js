import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Navbar from '../../components/navbar_light'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby";
import Img from 'gatsby-image'


export default function CampusPage({data}){

  const header = data.allCampusYaml.edges[0].node.header[0]
  const campus = data.allCampusYaml.edges[0].node.campus
  const signUpForm = data.allCampusYaml.edges[0].node.signUpForm[0]

  return(
    <Layout>
      <SEO title="Campus" keywords={[]} />
      <Navbar/>

      {/* <!-- Header --> */}
      <BackgroundImage fluid={header.image.childImageSharp.fluid} >
        <header className="header text-white" style={{backgroundImage:`url(${header.image.childImageSharp.fluid.src})`}} data-overlay="7">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <h1>{header.title}</h1>
                <p className="lead-2 opacity-90 mt-6">{header.description}</p>
              </div>
            </div>
          </div>
        </header>
      </BackgroundImage>

      {/* <!-- Main Content --> */}
      <main className="main-content">




        {/* | How it work steps */}
        <section className="section">
          <div className="container">


            {campus.map((c,key)=>{
              if(c.number%2!==0){
                return(
                  <div className="row gap-y align-items-center py-7" key={key}>
                    <div className="col-md-6 text-center">
                      <Img fluid={c.image.childImageSharp.fluid} alt="..."/>
                    </div>

                    <div className="col-md-5 ml-auto text-center text-md-left">
                      <p className="lead-9 fw-900 lh-1 opacity-10">{c.number>9?c.number:'0'+c.number}</p>
                      <h3>{c.title}</h3>
                      <p>{c.description}</p>
                    </div>
                  </div>
                )
              }else{
                return(
                  <div className="row gap-y align-items-center py-7" key={key}>
                    <div className="col-md-5 mr-auto text-center text-md-left">
                      <p className="lead-9 fw-900 lh-1 opacity-10">{c.number>9?c.number:'0'+c.number}</p>
                      <h3>{c.title}</h3>
                      <p>{c.description}</p>
                    </div>

                    <div className="col-md-6 text-center order-first order-md-last">
                      <Img fluid={c.image.childImageSharp.fluid} alt="..."/>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </section>


        {/* | Signup */}
        <section className="section py-10 bg-img-bottom" style={{backgroundImage: `url(${signUpForm.image.childImageSharp.fluid.src})`}} data-overlay="5">
          <div className="container">

            <h3 className="text-center text-white">{signUpForm.title}</h3>
            <br/><br/>

            <form className="row gap-y input-glass" action={signUpForm.action} method="POST">
              <div className="col-md-6 col-lg-3">
                <input type="text" className="form-control form-control-lg" placeholder="Name"/>
              </div>

              <div className="col-md-6 col-lg-3">
                <input type="text" className="form-control form-control-lg" placeholder="Email"/>
              </div>

              <div className="col-md-6 col-lg-3">
                <input type="password" className="form-control form-control-lg" placeholder="Password"/>
              </div>

              <div className="col-md-6 col-lg-3">
                <button className="btn btn-lg btn-block btn-success h-100">{signUpForm.button}</button>
              </div>
            </form>

          </div>

        </section>


      </main>
      
    </Layout>
  )
}

export const query = graphql`
{
  allCampusYaml{
    edges{
      node{
        header {
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
        campus{
          number
          title
          description
          image{
            childImageSharp{
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        signUpForm{
          title
          action
          button
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
`