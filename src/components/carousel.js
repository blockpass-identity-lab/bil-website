import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Carousel = () => {
  return (
    <div class="carousel_container mx-auto">
      <div
        id="carouselExampleIndicators"
        class="carousel slide data-interval='false'"
        // data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <div class="row justify-content-md-center">
              <div class="col-3 col-sm-3 justify-content-md-center ">
                <div class="card border-0">
                  <img
                    class="card-img-top"
                    src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <p class="card-text">Some important project</p>
                    <button type="button" class="btn btn-primary">
                      Primary
                    </button>
                  </div>
                </div>
                {/* <img
                  class="d-block mx-auto img-fluid"
                  src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                  alt="First slide"
                ></img> */}
              </div>
              <div class="col-3 col-sm-3">
                <img
                  class="d-block mx-auto img-fluid"
                  src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                  alt="First slide"
                ></img>
              </div>
              <div class="col-3 col-sm-3">
                <img
                  class="d-block mx-auto img-fluid"
                  src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                  alt="First slide"
                ></img>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row justify-content-md-center">
              <div class="col-3">
                <img
                  class="d-block mx-auto img-fluid"
                  src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                  alt="First slide"
                ></img>
              </div>
              <div class="col-3">
                <img
                  class="d-block mx-auto img-fluid"
                  src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                  alt="First slide"
                ></img>
              </div>
              <div class="col-3">
                <img
                  class="d-block mx-auto img-fluid"
                  src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                  alt="First slide"
                ></img>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row justify-content-md-center">
              <div class="col-3">
                <img
                  class="d-block mx-auto img-fluid"
                  src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                  alt="First slide"
                ></img>
              </div>
              <div class="col-3">
                <img
                  class="d-block mx-auto img-fluid"
                  src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                  alt="First slide"
                ></img>
              </div>
              <div class="col-3">
                <img
                  class="d-block mx-auto img-fluid"
                  src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                  alt="First slide"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Carousel
