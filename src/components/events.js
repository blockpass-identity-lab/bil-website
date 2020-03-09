import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import eventsStyles from "./events.module.scss"
import Card from "react-bootstrap/Card"

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

  return (
    <div className="events">
      <ol className={eventsStyles.events}>
        {/* Grabbing data from the query and iterating through it to display each event as a list item */}
        {data.allContentfulEvent.edges.map(edge => {
          return (
            <Link to={`/event/${edge.node.slug}`}>
              <Card style={{ width: "28rem" }} className={eventsStyles.event}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80/100px180"
                />
                <Card.Body>
                  <Card.Title>{edge.node.eventTitle}</Card.Title>
                  <Card.Text>{edge.node.eventDate}</Card.Text>
                </Card.Body>
              </Card>
            </Link>

            // // List item with event
            // <li className={eventsStyles.event}>
            //   {/* link to the event's own page */}
            //   <Link to={`/event/${edge.node.slug}`}>
            //     <h2>{edge.node.eventTitle}</h2>
            //     <p>{edge.node.eventDate}</p>
            //   </Link>
            // </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Events
