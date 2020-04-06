import React from "react"

import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { Card,Row,Col,Container } from "react-bootstrap"

export default () => {

      // Querying for issues from github
    const data = useStaticQuery(graphql`
        query {
            allGithubIssues {
            edges {
                node {
                title
                url
                author {
                    login
                }
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
                    {data.allGithubIssues.edges.map(edge => {
                        return (
                            <Col>
                                <a href={edge.node.url} target="_blank" rel="noopener noreferrer">
                                <Card 
                                border="dark"
                                style={{
                                    width: "22rem",
                                    marginBottom: "6rem",
                                    marginTop: "4rem",
                                    marginLeft: "1.25rem",
                                    backgroundColor: "#292f33",
                                  }}
                                >
                                    <Card.Header>{edge.node.title}</Card.Header>
                                    <Card.Body>
                                    <Card.Text>
                                        <em>Author: {edge.node.author.login}</em>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                </a>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
               
            </Layout>
        </div>
        
    )
}

