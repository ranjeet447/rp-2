// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Navbar = () => (
    
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">

        <div className="navbar-left mr-4">
          <button className="navbar-toggler" type="button">&#9776;</button>
          <a className="navbar-brand" href="/">
            <img className="logo-dark" src="/assets/img/logo-dark.png" alt="logo"/>
            <img className="logo-light" src="/assets/img/logo-light.png" alt="logo"/>
          </a>
        </div>

        <section className="navbar-mobile">
          <nav className="nav nav-navbar nav-text-normal mr-auto">
            <a className="nav-link" href="/jobs">Jobs</a>
            <a className="nav-link" href="/">Features</a>
            <a className="nav-link" href="/">Pricing</a>
            <a className="nav-link" href="/">Support</a>
            <a className="nav-link" href="/">Learning</a>
            <a className="nav-link" href="/blog">Blog</a>
          </nav>

          <div className="d-flex align-items-center">
            <a className="btn btn-sm btn-success" href="/">Sign up</a>
            <a className="btn btn-sm btn-link text-dark ml-lg-5 mr-2" href="/">Login</a>

            <a className="text-lighter" href="#" data-toggle="offcanvas" data-target="#offcanvas-search"><i className="ti-search"></i></a>
          </div>
        </section>

      </div>
    </nav>
)

export default Navbar
