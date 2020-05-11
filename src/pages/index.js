import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Header from "../components/header"
import Events from "../components/events"
import Twitter from "../components/twitterFeed"
import Team from "../components/team"
import Issues from "../components/issues"
import {navigate, Link} from "gatsby"
// export default () => <div>Bil-Website First Commit (Leonidas Zoidis)</div>

export default () => (
    <Layout>
      <Header />
      <div className="container-fluid mt-0 bg-dark text-light p-5 content mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-12 mx-auto">
            <h2 id="about">Blockpass Identity Lab</h2>
            <h5 class="main-blurb">
              A research lab based at Edinburgh Napier University led by <Link to="/team/bbuchanan">Professor Bill Buchanan</Link>. The lab was formed through a collaboration with Blockpass IDN and is focused on research areas of Cryptography, Identity, Privacy, Machine Learning and Distributed Ledger Technology.

            </h5>

            {/* <button type="button " class="btn btn-outline-dark cta_btn">
              Learn more
            </button> */}
          </div>
        </div>
      </div>
      <div className="content bg-dark">
        <h2 id="team" className="headings text-light pt-5">Our Team</h2>
        <Team />
      </div>
      <div className="container content">
        <div class="container container-content">
          <h2 class="mb-5 font-weight-normal" style={{color:"white"}}>
            Stay Updated
          </h2>
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <Events />

            </div>
            <div class="col-md-6 col-sm-12">
              <Twitter />
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <h2 id="projects" className="headings">Student Project Ideas</h2>
        <Issues />
        <br />
        <a href="/issues">
        <button
          type="button"
          id="anchor_events"
          class="btn btn-lg btn-outline-primary cta_btn seeMore"
        >
            See More
        </button>
        </a>
      </div>
    </Layout>
)
