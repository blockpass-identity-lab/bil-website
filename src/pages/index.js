import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
<<<<<<< HEAD
<<<<<<< Updated upstream
import Navbar from "../components/Navbar"
import Worktribe_container from "../components/Worktribe_container"
import Events_section from "../components/Events_section"
import Footer from "../components/Footer"
import Jumbotron from '../components/jumbotron'
=======
=======
>>>>>>> a5d5213c3cc70132375ffe4ca74847fc6276a9d6
import Events from "../components/events"
import Header from "../components/header"
import Jumbo from "../components/jumbo"
import Worktribe from "../components/worktribe"
<<<<<<< HEAD
import TwitterFeed from "../components/twitterFeed"
import Layout from "../components/layout"
>>>>>>> Stashed changes
=======
import Layout from "../components/layout"
>>>>>>> a5d5213c3cc70132375ffe4ca74847fc6276a9d6

// export default () => <div>Bil-Website First Commit (Leonidas Zoidis)</div>

export default () => (
  <div>
    <Layout>
      <Header />
      <Jumbo />
      <div class="container-fluid mt-0 bg-light p-5 index">
        <div class="row">
          <div class="col-md-11 offset-1 ">
            <h1>Background Information</h1>
            <p class="font-weight-light">
              A pioneering new research lab the{" "}
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
<<<<<<< HEAD
<<<<<<< Updated upstream
    </div>
    <Worktribe_container></Worktribe_container>
    <Events_section></Events_section>
    <Footer></Footer>
=======
      <TwitterFeed />
      <Worktribe />
      <Events />
    </Layout>
>>>>>>> Stashed changes
=======
      <Worktribe />
      <Events />
    </Layout>
>>>>>>> a5d5213c3cc70132375ffe4ca74847fc6276a9d6
  </div>
)
