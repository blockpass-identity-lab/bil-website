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
