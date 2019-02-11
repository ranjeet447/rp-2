// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../assets/img/logo-light.png'

const Footer = () => (
      <footer className="footer bg-dark text-white py-7">
        <div className="container">
          <div className="row">

            <div className="col-12">
              <p><a href="/"><img src={logo} alt="logo"/></a></p>
            </div>

            <div className="col-xl-5">
              <p>We’re a team of experienced designers and developers. We can combine beautiful, modern designs with clean, functional and high-performance code to produce stunning websites.</p>
              <div className="social social-sm social-bg-brand social-cycling mt-6">
                <a className="social-facebook" href="/"><i className="fa fa-facebook"></i></a>
                <a className="social-twitter" href="/"><i className="fa fa-twitter"></i></a>
                <a className="social-youtube" href="/"><i className="fa fa-youtube"></i></a>
                <a className="social-instagram" href="/"><i className="fa fa-instagram"></i></a>
              </div>
              <hr className="d-xl-none"/>
            </div>

            <div className="col-4 col-xl-2 offset-xl-1">
              <div className="nav flex-column">
                <a className="nav-link" href="/about">About</a>
                <a className="nav-link" href="/jobs">Jobs</a>
                <a className="nav-link" href="/blogs">Blogs</a>
              </div>
            </div>

            <div className="col-4 col-xl-2">
              <div className="nav flex-column">
                <a className="nav-link" href="/campus">Campus</a>
                <a className="nav-link" href="/connect">Connect</a>
                <a className="nav-link" href="/faq">FAQ</a>
              </div>
            </div>

            <div className="col-4 col-xl-2">
              <div className="nav flex-column">
                <a className="nav-link" href="/request">Requests</a>
                <a className="nav-link" href="/terms">T&amp;C</a>
                <a className="nav-link" href="/video">Video</a>
              </div>
            </div>

          </div>
        </div>
      </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
