import React from "react"

// importing components
import Footer from "./footer"
import Navbar from "./navbar"
import {Helmet} from "react-helmet";

const Layout = props => {
  const siteTitle = 'Blockpass Identity Lab'
  const siteDescription = 'A research lab focused on identity and privacy-preserving technologies based at Edinburgh Napier University'
  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription}/>
      </Helmet>
      <Navbar />
      {/* Rest of content */}
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
