import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/Navbar"
import Jumbotron from '../components/jumbotron'

// export default () => <div>Bil-Website First Commit (Leonidas Zoidis)</div>

export default () => (
  <div>
    <Navbar></Navbar>
    <Jumbotron />
    <div class="container-fluid mt-0 bg-light p-5">
      <h1>Gatsby Project</h1>
      <p>lorem lorem</p>
    </div>
  </div>
)
