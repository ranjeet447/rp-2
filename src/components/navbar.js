// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import logo from '../assets/img/logo-dark.png'
const Navbar = ({ siteTitle }) => (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-stick-dark" data-navbar="sticky">
      <div className="container">

        <div className="navbar-left">
          <button className="navbar-toggler" type="button">&#9776;</button>
          <a className="navbar-brand" href="/">
            <img className="logo-dark" src={logo} alt="logo"/>
            <img className="logo-light" src={logo} alt="logo"/>
          </a>
        </div>

        <section className="navbar-mobile">
          <span className="navbar-divider d-mobile-none"></span>

          <ul className="nav nav-navbar">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/jobs">Jobs</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li> */}

            <li className="nav-item">
              <a className="nav-link" href="/blogs">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/campus">Campus</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            
          </ul>
        </section>

        {/* <a className="btn btn-xs btn-round btn-success" href="https://themeforest.net/item/thesaas-responsive-bootstrap-saas-software-webapp-template/19778599?license=regular&open_purchase_for_item_id=19778599&purchasable=source&ref=thethemeio">Buy Now</a> */}

      </div>
    </nav>
)

export default Navbar
