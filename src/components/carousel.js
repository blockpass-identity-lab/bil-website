import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { graphql, useStaticQuery, Link } from "gatsby"

const Carousel = () => {

    // Query to contentful to get events
    const data = useStaticQuery(graphql`
    query {
      one: allContentfulEvent(sort: {fields: eventDate, order: ASC,}) {
        edges {
          node {
            eventTitle
            eventDate(formatString: "MMMM Do. YYYY")
            slug
            endDateDifference: eventEndDate(difference: "days")
            endDate: eventEndDate(formatString: "MMMM Do. YYYY")
          }
        }
      }
    }
  `)

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
          {data.one.edges.map(edge => {
            if(edge.node.endDateDifference < 0){
              return(
                <div class="carousel-item active">
                  <div class="row justify-content-md-center">
                    <div class="col-12 col-sm-3 justify-content-md-center ">
                      <div class="card border-0">
                        <img
                          class="card-img-top"
                          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80/100px180"
                          alt="Card image cap"
                        ></img>
                        <div class="card-body">
                          <h5 class="card-title">{edge.node.eventTitle}</h5>
                          <p class="card-text">{edge.node.eventDate} - {edge.node.endDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
              
            }
            
          })}



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
