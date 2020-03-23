import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Header from "../components/header"
import Events from "../components/events"
import Twitter from "../components/twitterFeed"
import Team from "../components/team"
import Issues from "../components/issues"
import Carousel from "../components/caoursel"

// export default () => <div>Bil-Website First Commit (Leonidas Zoidis)</div>

export default () => (
  <div class="bg-dark">
    <Layout>
      <Header />
      <div class="container-fluid mt-0 bg-light text-dark p-5 content">
        <h2>Blockpass Identity Lab</h2>
        <p class="font-weight-normal desc">
          <span class="font-weight-bold">Blockpass Identity Lab </span> is a
          collaboration between Blockpass IDN and Edinburgh Napier University
          which was announced in April 2018. The initial scope of the
          partnership is the creation of a pioneering new research lab, while
          further developing methods to protect consumer identity and the right
          of citizens to data privacy.
        </p>
        <button type="button" class="btn btn-outline-light">
          View events
        </button>
        <button type="button" class="btn btn-outline-light">
          Learn more
        </button>
      </div>
      <div className="container content">
        <Events />
        <Twitter />
      </div>
      <div className="content">
        <h2 className="headings">Our Team</h2>
        <Carousel />

        <Team />
      </div>
      <div className="content">
        <h2 className="headings">Projects/Issues</h2>
        <Issues />
      </div>
    </Layout>
  </div>
)
