import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Events from "../components/events"
import Header from "../components/header"
import Jumbo from "../components/jumbo"
import Worktribe from "../components/worktribe"
import Layout from "../components/layout"
import Twitter from "../components/twitterFeed"

// export default () => <div>Bil-Website First Commit (Leonidas Zoidis)</div>

export default () => (
  <div>
    <Layout>
      <Header />
      <div class="container-fluid mt-0 bg-light p-5 index">
        <div class="row">
          <div class="col-md-11 offset-1 ">
            <h1>Background Information</h1>
            <p class="font-weight-light">
              A pioneering new research team the{" "}
              <span class="font-weight-bold">Blockpass Identity Lab</span>
            </p>
            <button type="button" class="btn btn-primary mr-4">
              View events
            </button>
            <button type="button" class="btn btn-outline-primary mr-4">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <Twitter />
        <Events />
      </div>
      <Jumbo />
      <Worktribe />
    </Layout>
  </div>
)
