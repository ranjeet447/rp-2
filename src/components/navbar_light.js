
import React from "react"

import logo_dark from '../images/logo-dark.png'
import logo_light from '../images/logo-light.png'

const NavbarLight = () => (
    <nav className="navbar navbar-expand-lg navbar-light navbar-stick-dark" data-navbar="sticky">
      <div className="container">

        <div className="navbar-left">
          <button className="navbar-toggler" type="button">&#9776;</button>
          <a className="navbar-brand" href="/">
          <img className="logo-dark" src={logo_dark} alt="logo"/>
            <img className="logo-light" src={logo_light} alt="logo"/>
          </a>
        </div>

        <section className="navbar-mobile">
        <span className="navbar-divider d-mobile-none"></span>
          <nav className="nav nav-navbar nav-text-normal mr-auto">
          <a className="nav-link" href="/jobs">Jobs</a>
            <a className="nav-link" href="/blog">Blog</a>
            <a className="nav-link" href="/campus">campus</a>
            <a className="nav-link" href="/terms">Terms</a>
            <a className="nav-link" href="/faq">Faq</a>
            <a className="nav-link" href="/about">About</a>
          </nav>

          <div className="d-flex align-items-center">
            <a className="btn btn-sm btn-success" href="/">Sign up</a>
            <a className="btn btn-sm btn-link ml-lg-5 mr-2" href="/">Login</a>

            <a className="text-lighter" href="#" data-toggle="offcanvas" data-target="#offcanvas-search"><i className="ti-search"></i></a>
          </div>
        </section>


      </div>
    </nav>
)

export default NavbarLight
