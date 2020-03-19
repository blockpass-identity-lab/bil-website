import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"
import Card from "react-bootstrap/Card"
import teamStyles from "./team.module.scss"

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeamMember {
        edges {
          node {
            memberName
            slug
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
    <div className={teamStyles.team}>
      {data.allContentfulTeamMember.edges.map(edge => {
        return (
          <Link to={`/team/${edge.node.slug}`}>
          <Card className={teamStyles.teamMember}>
            <Card.Img
              className={teamStyles.teamMemberPic}
              variant="top"
              src={edge.node.memberProfile.file.url}
            />
            <Card.Body>
              <Card.Title>{edge.node.memberName}</Card.Title>
              <Card.Text>{edge.node.memberTitle}</Card.Text>
            </Card.Body>
          </Card>
          </Link>
          
        )
      })}
    </div>
  )
}

export default Team
