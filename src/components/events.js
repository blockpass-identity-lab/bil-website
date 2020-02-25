import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'

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
              {/* link to the event's own page */}
              <Link to={`/event/${edge.node.slug}`}>
                <h2>{edge.node.eventTitle}</h2>
                <p>{edge.node.eventDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Events
