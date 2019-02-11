import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Footer from "./footer"
import Navbar from "./navbar"
import "./layout.css"

// import "../assets/css/page.css"
import '../assets/scss/page.scss'
// require('../assets/js/src/page')

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar/>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div 
          // style={{
          //   margin: `50px auto`,
          //   maxWidth: 960,
          //   padding: `0px 1.0875rem 1.45rem`,
          //   paddingTop: 0,
          // }}
        >
        <main>{children}</main>
          
        </div>
        <Footer/>
        <br/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
