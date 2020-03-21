import React from "react"

const Footer = () => {
  return (
    <div class="container-fluid footer_container pt-4">
      <div class="row">
        <div class="col-md-4 offset-md-1 logo"></div>
        <div class="col-md-3"></div>
        <div class="col-md-3">
          <p>
            <i class="far fa-envelope"></i>
            identity-lab@napier.ac.uk
            <a
              href="mailto:identity-lab@napier.ac.uk?Subject=Contact%20Us"
              target="_top"
            >
              Send Mail
            </a>
            <br></br>
            <br></br>
            <span class="small_font">
              A world-leading collaboration with Blockpass IDN | © Edinburgh
              Napier University and Blockpass IDN Limited
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
