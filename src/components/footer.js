import React from "react"

const Footer = () => {
  return (
    <div class="container-fluid footer_container pt-3">
      <div class="row">
        <div class="col-md-3 offset-md-1">
          <h3>Footer</h3>
          <p>enter logo</p>
        </div>
        <div class="col-md-3">
          <p>enter logo 2</p>
        </div>
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
