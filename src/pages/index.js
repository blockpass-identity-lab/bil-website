import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Header from "../components/header"
import Events from "../components/events"
import Twitter from "../components/twitterFeed"
import Team from "../components/team"
import Issues from "../components/issues"
import Carousel from "../components/carousel"
import Team_members from "../components/team_members"

// export default () => <div>Bil-Website First Commit (Leonidas Zoidis)</div>

export default () => (
  <div class="bg-dark">
    <Layout>
      <Header />
      <div class="container-fluid mt-0 bg-light text-dark p-5 content mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-12 mx-auto">
            <h2>Blockpass Identity Lab</h2>
            <p class="font-weight-normal desc">
              <span class="font-weight-bold">Blockpass Identity Lab </span> is a
              collaboration between Blockpass IDN and Edinburgh Napier
              University which was announced in April 2018. The initial scope of
              the partnership is the creation of a pioneering new research lab,
              while further developing methods to protect consumer identity and
              the right of citizens to data privacy.
            </p>
            <button
              type="button "
              id="anchor_events"
              class="btn btn-lg btn-outline-primary cta_btn "
            >
              View events
            </button>
            {/* <button type="button " class="btn btn-outline-dark cta_btn">
              Learn more
            </button> */}
          </div>
        </div>
      </div>
      <Carousel />
      <div className="container content">
        <div class="container container-content">
          <h2 class="mb-5 font-weight-normal">
            <a href="#anchor_events">Stay Updated</a>
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
      <div className="content bg-light">
        <h2 className="headings text-dark pt-5">Our Team</h2>
        <Team_members />
        <Team />
      </div>
      <div className="content">
        <h2 className="headings">Projects/Issues</h2>
        <Issues />
      </div>
    </Layout>
  </div>
)
