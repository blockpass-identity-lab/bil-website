import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Header from "../components/header"
import Events from "../components/events"
import Twitter from "../components/twitterFeed"

// export default () => <div>Bil-Website First Commit (Leonidas Zoidis)</div>

export default () => (
  <div class="bg-dark">
    <Layout>
      <Header />
      <div class="container-fluid mt-0 bg-dark p-5 index">
        <div class="row">
          <div class="col-md-11 offset-1 content">
            <h1>Background Information</h1>
            <p class="font-weight-light">
              A pioneering new research team the{" "}
              <span class="font-weight-bold">Blockpass Identity Lab</span>
            </p>
            <button type="button" class="btn btn-outline-light">
              View events
            </button>
            <button type="button" class="btn btn-outline-light">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <Events />
        <Twitter />
      </div>
    </Layout>
  </div>
)
