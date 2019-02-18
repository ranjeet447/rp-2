import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import NavbarLight from "../components/navbar_light"
// import Navbar from '../components/navbar'

import '../assets/scss/page.scss'

const JobsPage = () => (
  <Layout>
    <SEO title="Jobs" keywords={[]} />
    {/* <Header header="Jobs"/> */}
    <NavbarLight/>
    <header className="header text-white" style={{backgroundImage: 'url(/assets/img/bg/1.jpg)'}} data-overlay="7">
      <div className="container text-center">

        <div className="row">
          <div className="col-lg-8 mx-auto">

            <h1>Get A Job <span className="text-primary" data-typing="At TheThemeio, Remotely, As Developer , As Designer"></span></h1>
            <p className="lead-2">You have got the change to work and thrive with us. We are a small group of developers who wants to make a family!</p>
            <br/>
            <hr className="w-60px"/>
            <br/>

            <a className="btn btn-lg btn-round btn-light" href="#section-open-positions">Open Positions</a>

          </div>
        </div>

      </div>
    </header>
    {/* <!-- Main Content --> */}
    <main className="main-content">


      {/* <!--
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Working at TheThemeio
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !--> */}
      <section className="section">
        <div className="container">
          <header className="section-header">
            <small>Benefits</small>
            <h2>About Working Here</h2>
            <hr/>
            <p className="lead">We are so excited and proud of our product. It's really easy to create a landing page.</p>
          </header>


          <div className="row text-center">
            <div className="col-md-10 mx-auto">
              <div className="row gap-y">


                <div className="col-md-6">
                  <p><i className="icon-happy text-lighter lead-6 mb-5"></i></p>
                  <h5>Health & Wellness</h5>
                  <p>Full health coverage for you and your family, and a $150 monthly fitness reimbursement.</p>
                </div>


                <div className="col-md-6">
                  <p><i className="icon-newspaper text-lighter lead-6 mb-5"></i></p>
                  <h5>Learning & Development</h5>
                  <p>Receive $500 annually towards a personal development opportunity of your choice.</p>
                </div>


                <div className="col-md-6">
                  <p><i className="icon-profile-female text-lighter lead-6 mb-5"></i></p>
                  <h5>Parental Leave</h5>
                  <p>Full health coverage for you and your family, and a $150 monthly fitness reimbursement.</p>
                </div>


                <div className="col-md-6">
                  <p><i className="icon-globe text-lighter lead-6 mb-5"></i></p>
                  <h5>Work Remotely</h5>
                  <p>A remote job is one that is done away from the office in a remote location, at any time of day.</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>



      {/* <!--
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Slider
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !--> */}
      <section className="section p-0">
        <div className="slider-arrows-flash-light slider-dots-inside slider-dots-fill-primary" data-provide="slider" data-autoplay={true} data-arrows={true} data-dots={true}>
          <div className="bg-img h-600" style={{backgroundImage: 'url(../assets/img/thumb/14.jpg)'}}></div>
          <div className="bg-img h-600" style={{backgroundImage: 'url(../assets/img/thumb/15.jpg)'}}></div>
          <div className="bg-img h-600" style={{backgroundImage: 'url(../assets/img/thumb/12.jpg)'}}></div>
          <div className="bg-img h-600" style={{backgroundImage: 'url(../assets/img/thumb/13.jpg)'}}></div>
        </div>
      </section>




      {/* <!--
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Open positions
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !--> */}
      <section className="section" id="section-open-positions">
        <div className="container">
          <header className="section-header">
            <small>Jobs</small>
            <h2>Open Positions</h2>
            <hr/>
            <p className="lead">Following list displays our current required positions. This list will update regularly.</p>
          </header>


          <div className="accordion accordion-connected shadow-5" id="accordion-job">

            <div className="card">
              <h6 className="card-title">
                <a className="d-flex align-items-center collapsed" data-toggle="collapse" href="#collapse-job-1">
                  <strong className="mr-auto">Senior Analyst, Data Analytics</strong>
                  <span className="small text-lighter">San Francisco <i className="fa fa-map-marker ml-2"></i></span>
                </a>
              </h6>

              <div id="collapse-job-1" className="collapse" data-parent="#accordion-job">
                <div className="card-body">
                  <p>Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.</p>

                  <hr className="w-100px"/>

                  <p className="text-center"><a className="btn btn-lg btn-primary" href="career-single.html">Apply Now</a></p>
                </div>
              </div>
            </div>


            <div className="card">
              <h6 className="card-title">
                <a className="d-flex align-items-center collapsed" data-toggle="collapse" href="#collapse-job-2">
                  <strong className="mr-auto">Senior Front-end Engineer</strong>
                  <span className="small text-lighter">Remotely <i className="fa fa-map-marker ml-2"></i></span>
                </a>
              </h6>

              <div id="collapse-job-2" className="collapse" data-parent="#accordion-job">
                <div className="card-body">
                  <p>Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.</p>

                  <hr className="w-100px"/>

                  <p className="text-center"><a className="btn btn-lg btn-primary" href="career-single.html">Apply Now</a></p>
                </div>
              </div>
            </div>


            <div className="card">
              <h6 className="card-title">
                <a className="d-flex align-items-center collapsed" data-toggle="collapse" href="#collapse-job-3">
                  <strong className="mr-auto">Lead Product Designer</strong>
                  <span className="small text-lighter">New York City <i className="fa fa-map-marker ml-2"></i></span>
                </a>
              </h6>

              <div id="collapse-job-3" className="collapse" data-parent="#accordion-job">
                <div className="card-body">
                  <p>Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.</p>

                  <hr className="w-100px"/>

                  <p className="text-center"><a className="btn btn-lg btn-primary" href="career-single.html">Apply Now</a></p>
                </div>
              </div>
            </div>


            <div className="card">
              <h6 className="card-title">
                <a className="d-flex align-items-center collapsed" data-toggle="collapse" href="#collapse-job-4">
                  <strong className="mr-auto">Online Advertising Manager</strong>
                  <span className="small text-lighter">Toronto, Canada <i className="fa fa-map-marker ml-2"></i></span>
                </a>
              </h6>

              <div id="collapse-job-4" className="collapse" data-parent="#accordion-job">
                <div className="card-body">
                  <p>Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.</p>

                  <hr className="w-100px"/>

                  <p className="text-center"><a className="btn btn-lg btn-primary" href="career-single.html">Apply Now</a></p>
                </div>
              </div>
            </div>


            <div className="card">
              <h6 className="card-title">
                <a className="d-flex align-items-center collapsed" data-toggle="collapse" href="#collapse-job-5">
                  <strong className="mr-auto">Customer Support Manager</strong>
                  <span className="small text-lighter">San Francisco <i className="fa fa-map-marker ml-2"></i></span>
                </a>
              </h6>

              <div id="collapse-job-5" className="collapse" data-parent="#accordion-job">
                <div className="card-body">
                  <p>Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.</p>

                  <hr className="w-100px"/>

                  <p className="text-center"><a className="btn btn-lg btn-primary" href="career-single.html">Apply Now</a></p>
                </div>
              </div>
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
    
  </Layout>
)

export default JobsPage
