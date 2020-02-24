import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

const Events = () => {

  // Query to contentful to get events
  const data = useStaticQuery(graphql`
  query {
    allContentfulEvent {
      edges {
        node {
          eventTitle
          eventDate(formatString: "MMMM Do. YYYY")
          slug
        }
      }
    }
  }
  `)

  
  //   <div class="container-fluid bg-light">
  //   <div class="row">
  //     <div class="col-md-11 offset-1 p-5">
  //       <h1>Our Latest Events</h1>
  //       <p class="font-weight-light">lorem ipsum dolor sit amet</p>
  //     </div>
  //   </div>
  //   <div class="container-fluid bg-light">
  //     <div class="row">
  //       <div class="col-md-6 col-sm-12">
  //         <h3 class="text-md-center">Latest Events</h3>
  //       </div>
  //       <div class="col-md-6 col-sm-12">
  //         <h3 class="text-md-center">Calendar Events</h3>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  return(
    <div>
      <h1>Events</h1>
      <ol>
        {/* Grabbing data from the query and iterating through it to display each event as a list item */}
        {data.allContentfulEvent.edges.map((edge) => {
          return (
            // List item with event
            <li>
              <h2>{edge.node.eventTitle}</h2>
              <p>{edge.node.eventDate}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Events
