import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Events from "../components/events"
import Header from "../components/header"
import Footer from "../components/footer"
import Jumbo from "../components/jumbo"
import Navigationbar from "../components/navigationbar"
import Worktribe from "../components/worktribe"

// export default () => <div>Bil-Website First Commit (Leonidas Zoidis)</div>

export default () => (
  <div>
    {/* Navbar */}
    <Header />
    <Navigationbar />
    <Jumbo />
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
    <Worktribe />
    <Events />
    <Footer></Footer>
  </div>
)
