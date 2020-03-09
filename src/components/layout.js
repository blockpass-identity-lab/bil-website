import React from "react"

// importing components
import Footer from "./footer"
<<<<<<< HEAD
import Navbar from "./navigationbar"
=======
import Navbar from "./navbar"
>>>>>>> a5d5213c3cc70132375ffe4ca74847fc6276a9d6

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
