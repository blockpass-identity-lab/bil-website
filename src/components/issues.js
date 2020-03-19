import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Card from "react-bootstrap/Card"

const Issues = () => {

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
        <div>
            <ol>
                {data.allGithubIssues.edges.map(edge => {
                    return (
                        <a href={edge.node.url} target="_blank" rel="noopener noreferrer">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{edge.node.title}</Card.Title>
                                    <Card.Text><em>Author: {edge.node.author.login}</em></Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    )
                })}
            </ol>
        </div>
    )
}

export default Issues