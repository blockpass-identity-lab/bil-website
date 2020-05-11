import React from "react"
import { graphql, useStaticQuery, Link, navigate } from "gatsby"

import eventsStyles from "./events.module.scss"
import { Card, Row } from "react-bootstrap"

const Events = () => {
  // Query to contentful to get events
  const data = useStaticQuery(graphql`
    query {
      one: allContentfulEvent(sort: { fields: eventDate, order: ASC }) {
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
    <div className="events">
      {/* Grabbing data from the query and iterating through it to display each event */}
      <Row>
      {data.one.edges.slice(0, 3).map(edge => {
        // the difference value in date query returns the difference between today and chosen date
        // returned values which are less than 0 signify a future date and above 0 past date
        // If the difference between the event's end date and current date is less than 1
        // then return it from the query and display on website


        if (edge.node.endDateDifference < 0) {
          return (
            <div className={eventsStyles.event}>


              <Link to={`/event/${edge.node.slug}`}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80/100px180"
                  />
                  <Card.Body>
                    <Card.Title>{edge.node.eventTitle}</Card.Title>
                    <Card.Text>
                      {edge.node.eventDate} - {edge.node.endDate}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>

          )
        } else {
          return null
        }
      })}
      </Row>
      <button
        type="button"
        id="anchor_events"
        className="btn btn-lg btn-outline-primary cta_btn "
        onClick={() => {
          navigate("/events")
        }}
      >View Events
      </button>
    </div>
  )
}

export default Events
