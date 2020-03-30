import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"
// import Card from "react-bootstrap/Card"
import { Container, Row } from "react-bootstrap"
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
    <Container>
      <Row>
        {data.allContentfulTeamMember.edges.map(edge => {
          return (
            <div class="col-md-3">
              <Link className={teamStyles.link} to={`/team/${edge.node.slug}`}>
                <div class="card card_style">
                  <img
                    src={edge.node.memberProfile.file.url}
                    class="card-img-top"
                    alt="member"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-dark">{edge.node.memberName}</h5>
                    <p class="card-text text-dark">{edge.node.memberTitle}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </Row>
    </Container>
  )
}

export default Team
