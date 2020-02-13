import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/Navbar"
import Worktribe_container from "../components/Worktribe_container"
import Events_section from "../components/Events_section"
import Footer from "../components/Footer"

// export default () => <div>Bil-Website First Commit (Leonidas Zoidis)</div>

export default () => (
  <div>
    <Navbar></Navbar>
    <div class="container-fluid mt-0 bg-light p-5">
      <div class="row">
        <div class="col-md-11 offset-1 ">
          <h1>Gatsby Project</h1>
          <p class="font-weight-light">
            A pioneering new research lab the{" "}
            <span class="font-weight-bold">Blockpass Identity Lab</span>
          </p>
          <button type="button" class="btn btn-primary mr-4">
            View events
          </button>
          <button type="button" class="btn btn-outline-primary mr-4 myButton">
            Learn more
          </button>
        </div>
      </div>
    </div>
    <Worktribe_container></Worktribe_container>
    <Events_section></Events_section>
    <Footer></Footer>
  </div>
)
