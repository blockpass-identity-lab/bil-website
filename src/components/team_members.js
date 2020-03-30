import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"


const Team_members = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="card card_style">
            <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title text-dark">Card title</h5>
              <p class="card-text text-dark">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team_members
