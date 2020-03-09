import React from "react"

// importing components
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = props => {
  return (
    <div>
      <Navbar />
      {/* Rest of content */}
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
