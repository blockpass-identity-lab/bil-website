import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Header from "../components/header"
import Events from "../components/events"
import Twitter from "../components/twitterFeed"
import Team from "../components/team"
import Issues from "../components/issues"

// export default () => <div>Bil-Website First Commit (Leonidas Zoidis)</div>

export default () => (
  <div class="bg-dark">
    <Layout>
      <Header />
      <div class="container-fluid mt-0 bg-dark text-light p-5 content mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-12 mx-auto">
            <h2 id="about">Blockpass Identity Lab</h2>
            <p class="font-weight-normal desc">
              <span class="font-weight-bold">Blockpass Identity Lab </span> is a
              collaboration between Blockpass IDN and Edinburgh Napier
              University which was announced in April 2018. The initial scope of
              the partnership is the creation of a pioneering new research lab,
              while further developing methods to protect consumer identity and
              the right of citizens to data privacy.
            </p>
            <a href="/events">
            <button
              type="button"
              id="anchor_events"
              class="btn btn-lg btn-outline-primary cta_btn "
            >View Events
            </button>
            </a>
            {/* <button type="button " class="btn btn-outline-dark cta_btn">
              Learn more
            </button> */}
          </div>
        </div>
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
      <div className="content bg-dark">
        <h2 id="team" className="headings text-light pt-5">Our Team</h2>
        <Team />
      </div>
      <div className="content">
        <h2 id="projects" className="headings">Projects</h2>
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
  </div>
)
