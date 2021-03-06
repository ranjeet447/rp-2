// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import logo_dark from '../images/logo-dark.png'


const Footer = () => (
  <footer className="footer bg-gray py-7">
    <div className="container">
      <div className="row gap-y">

        <div className="col-md-6 col-xl-4">
          <p><a href="/"><img src={logo_dark} alt="logo"/></a></p>
          <p>We can combine beautiful, modern designs with clean, functional and high-performance code to produce stunning websites.</p>
        </div>

        <div className="col-6 col-md-3 col-xl-2">
          <h6 className="mb-4 mt-1"><strong>Company</strong></h6>
          <div className="nav flex-column">
            <a className="nav-link" href="/about">About</a>
            <a className="nav-link" href="/jobs">Careers</a>
            <a className="nav-link" href="/connect">Connect</a>
          </div>
        </div>

        <div className="col-6 col-md-3 col-xl-2">
          <h6 className="mb-4 mt-1"><strong>Product</strong></h6>
          <div className="nav flex-column">
            <a className="nav-link" href="/blog">Blog</a>
            <a className="nav-link" href="/campus">campus</a>
            <a className="nav-link" href="/request">Request</a>
          </div>
        </div>

        <div className="col-6 col-md-6 col-xl-2">
          <h6 className="mb-4 mt-1"><strong>Support</strong></h6>
          <div className="nav flex-column">
            <a className="nav-link" href="/contact">Contact</a>
            <a className="nav-link" href="/terms">Terms &amp; coditions</a>
            <a className="nav-link" href="/faq">FAQ</a>
          </div>
        </div>

        <div className="col-6 col-md-6 col-xl-2 text-center">
          <p><a className="btn btn-block btn-round btn-secondary" href="#">Try it free</a></p>
          <br/>
          <div className="social social-bordered">
            <a className="social-facebook" href="#"><i className="fa fa-facebook"></i></a>
            <a className="social-twitter" href="#"><i className="fa fa-twitter"></i></a>
            <a className="social-youtube" href="#"><i className="fa fa-youtube"></i></a>
            <a className="social-instagram" href="#"><i className="fa fa-instagram"></i></a>
          </div>
        </div>

      </div>
    </div>
  </footer>
)

export default Footer
