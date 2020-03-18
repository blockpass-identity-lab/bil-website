import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Issues = () => {

    // Querying for issues from github
    const data = useStaticQuery(graphql`
        query{
            allGithubIssues {
                edges {
                 node {
                    title
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
                        <li>{edge.node.title}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Issues