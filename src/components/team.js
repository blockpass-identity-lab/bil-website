import React from "react"

import { graphql, useStaticQuery } from "gatsby"



const Team = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulTeamMember {
            edges {
                node {
                memberName
                memberTitle
                memberProfile {
                    file {
                    url
                    }
                }
                }
            }
            }
        }
    `)

    return (
        <div>
        {data.allContentfulTeamMember.edges.map(edge => {
            return(
                <div>
                    <p>{edge.node.memberName}</p>
                    <p>{ edge.node.memberTitle }</p>
                </div>
            )
        })}
        </div>
    )
}

export default Team