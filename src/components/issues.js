import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Card from "react-bootstrap/Card"
import issuesStyles from "./issues.module.scss"

const Issues = () => {

    // Querying for issues from github
    const data = useStaticQuery(graphql`
        query {
            allGithubIssues {
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
        <div className={issuesStyles.container}>
                {data.allGithubIssues.edges.map(edge => {
                    return (
                        <a href={edge.node.url} target="_blank" rel="noopener noreferrer">
                            <Card border="dark" className={issuesStyles.issue}>
                                <Card.Header>{edge.node.title}</Card.Header>
                                <Card.Body>
                                    <Card.Text><em>Author: {edge.node.author.login}</em></Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    )
                })}
        </div>
    )
}

export default Issues