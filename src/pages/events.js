import React from "react"

import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Card, Row, Col, Container } from "react-bootstrap"

const EventsPage = () => {
  // Query to contentful to get events
  const data = useStaticQuery(graphql`
    query {
      allContentfulEvent(sort: { fields: eventDate, order: ASC }) {
        edges {
          node {
            eventTitle
            eventDate(formatString: "MMMM Do. YYYY")
            slug
            eventEndDate(formatString: "MMMM Do. YYYY")
          }
        }
      }
    }
  `)

  return (
    <div className="bg">
      <Layout>
        <Container fluid>
          <Row>
            {data.allContentfulEvent.edges.map(edge => {
              return (
                <Col>
                  <Link to={`event/${edge.node.slug}`}>
                    <Card
                      style={{
                        width: "22rem",
                        marginBottom: "6rem",
                        marginTop: "4rem",
                        marginLeft: "1.25rem",
                        backgroundColor: "#292f33",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80/100px180"
                      />
                      <Card.Body>
                        <Card.Title>{edge.node.eventTitle}</Card.Title>
                        <Card.Text>
                          {edge.node.eventDate} - {edge.node.eventEndDate}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </Container>
      </Layout>
    </div>
  )
}

export default EventsPage
