import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from '../components/navbar'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[]} />
    {/* <Header header="Home"/> */}
    <Navbar/>
    <header className="header h-fullscreen" style={{backgroundImage: 'linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%)'}}>
      <div className="container">
        <div className="row align-items-center h-100">

          <div className="col-lg-6">
            <h1 className="fw-600">Build your <span className="text-warning">Brand.</span><br/><span className="text-info">Sell</span> more stuff.</h1>
            <p className="lead mt-5 mb-8">TheSaaS is the world’s largest marketing automation platform. It’s like a second brain that helps millions of customers find their audience, engage their customers, and build their brand.</p>
            <p className="gap-xy">
              <a className="btn btn-round btn-primary mw-200" href="#">Sign up — Free</a>
              <a className="btn btn-round btn-outline-secondary mw-200" href="#">Learn more</a>
            </p>
          </div>

          <div className="col-lg-5 ml-auto d-none d-lg-block">
            <img src="assets/img/vector/18.png" alt="img"/>
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
            <h2>Send better email</h2>
            <hr/>
            <p className="lead">Whether you need to sell your products, share some big news, or tell a story, our campaign builder makes it easy to create email campaigns that best suit your message.</p>
          </header>

          <div className="row gap-y">

            <div className="col-md-8 mx-auto mb-7">
              <img src="../assets/img/preview/feature-tablet.png" alt="..." data-aos="fade-up" data-aos-duration="2000"/>
            </div>
            <div className="w-100"></div>
            <div className="col-md-6 col-xl-4">
              <div className="media">
                <div className="lead-6 line-height-1 text-lighter w-70px"><i className="icon-mobile"></i></div>
                <div className="media-body">
                  <h5>Responsive</h5>
                  <p>Your website works on any device: desktop, tablet or mobile.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="media">
                <div className="lead-6 line-height-1 text-lighter w-70px"><i className="icon-gears"></i></div>
                <div className="media-body">
                  <h5>Customizable</h5>
                  <p>You can easily read, edit, and write your own code, or change everything.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="media">
                <div className="lead-6 line-height-1 text-lighter w-70px"><i className="icon-tools"></i></div>
                <div className="media-body">
                  <h5>UI Kit</h5>
                  <p>There is a bunch of useful and necessary elements for developing your website.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="media">
                <div className="lead-6 line-height-1 text-lighter w-70px"><i className="icon-layers"></i></div>
                <div className="media-body">
                  <h5>Lego Base</h5>
                  <p>You can find our code well organized, commented and readable.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="media">
                <div className="lead-6 line-height-1 text-lighter w-70px"><i className="icon-recycle"></i></div>
                <div className="media-body">
                  <h5>Clean Code</h5>
                  <p>As you can see in the source code, we provided a clean code.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="media">
                <div className="lead-6 line-height-1 text-lighter w-70px"><i className="icon-chat"></i></div>
                <div className="media-body">
                  <h5>Support</h5>
                  <p>When you purchase this template, you'll freely receive future updates.</p>
                </div>
              </div>
            </div>

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
              <h2>Automate your marketing</h2><br/>
              <p>Keep a personal touch while removing manual tasks from your to-do list. Pre-built marketing automation creates room to focus on strategy. Welcome, re-engage, and follow up with the people who matter to you. If you're new to marketing automation, get up to speed with one of our nifty guides: What is Marketing Automation?</p>
              <br/>
              <a className="btn btn-lg btn-round btn-primary shadow-3" href="#">Get Start Now</a>
            </div>

            <div className="col-md-5 mx-auto text-center mt-8 mt-md-0">
              <img src="../assets/img/preview/phone-2.png" alt="..." data-aos="fade-up"/>
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

            <div className="col-md-6">
              <blockquote className="blockquote">
                <div><img className="avatar avatar-xl" src="../assets/img/avatar/1.jpg" alt="..."/></div>
                <br/>
                <p>When you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.</p>
                <footer>Steve Jobs</footer>
              </blockquote>
            </div>

            <div className="col-md-6">
              <blockquote className="blockquote">
                <div><img className="avatar avatar-xl" src="../assets/img/avatar/2.jpg" alt="..."/></div>
                <br/>
                <p>Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is important.</p>
                <footer>Bill Gates</footer>
              </blockquote>
            </div>

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

            <div className="col-lg-4">
              <div className="video-btn-wrapper">
                <img className="shadow-2 rounded" src="../assets/img/thumb/1.jpg" alt="..."/>
                <a className="btn btn-glass btn-circle btn-light" href="https://www.youtube.com/watch?v=ah4pcPbRi2M" data-provide="lightbox"><i className="fa fa-play"></i></a>
              </div>
              <br/>
              <h6><a href="#">We relocated our office to a new designed garage</a></h6>
              <p className="small text-lighter">News</p>
            </div>


            <div className="col-lg-4">
              <div className="video-btn-wrapper">
                <img className="shadow-2 rounded" src="../assets/img/thumb/2.jpg" alt="..."/>
                <a className="btn btn-glass btn-circle btn-light" href="https://www.youtube.com/watch?v=ah4pcPbRi2M" data-provide="lightbox"><i className="fa fa-play"></i></a>
              </div>
              <br/>
              <h6><a href="#">Top 5 brilliant content marketing strategies</a></h6>
              <p className="small text-lighter">Marketing</p>
            </div>


            <div className="col-lg-4">
              <div className="video-btn-wrapper">
                <img className="shadow-2 rounded" src="../assets/img/thumb/3.jpg" alt="..."/>
                <a className="btn btn-glass btn-circle btn-light" href="https://www.youtube.com/watch?v=ah4pcPbRi2M" data-provide="lightbox"><i className="fa fa-play"></i></a>
              </div>
              <br/>
              <h6><a href="#">Best practices for minimalist design</a></h6>
              <p className="small text-lighter">Design</p>
            </div>

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


      {/* <!--
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Partners
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !--> */}
      <section className="section py-6 d-none">
        <div className="container">

          <div className="partner partner-sm">
            <img src="../assets/img/partner/1.png" alt="partner 1"/>
            <img src="../assets/img/partner/2.png" alt="partner 2"/>
            <img src="../assets/img/partner/3.png" alt="partner 3"/>
            <img src="../assets/img/partner/4.png" alt="partner 4"/>
            <img src="../assets/img/partner/5.png" alt="partner 5"/>
            <img src="../assets/img/partner/6.png" alt="partner 6"/>
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
          This website uses cookies to ensure you get the best experience on our website. <a href="#">Lean more</a>
        </div>

        <div className="col-md-auto">
          <button className="btn btn-sm btn-outline-light" data-dismiss="popup">Got it</button>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
