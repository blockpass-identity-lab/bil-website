import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
  return (
    <div className="container-fluid header_container d-flex">
      <div className="row justify-content-center align-self-center text-center">
        <div className="col-12 mx-auto">
          <h1 className="header_title text-center align-middle center">
            Building privacy-preserving tools using next-generation cryptography and machine learning for a trusted human-centric future
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header
