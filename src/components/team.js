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
      <Row className={teamStyles.team}>
        {/*<div className={teamStyles.team}>*/}
          {data.allContentfulTeamMember.edges.map(edge => {
            return (
              <div class={teamStyles.teamMember}>
                <Link to={`/team/${edge.node.slug}`}>
                  <div class="card">
                    <img
                      src={edge.node.memberProfile.file.url}
                      class="card-img-top"
                      alt="member"
                    />
                    {/*<div class="card-body cardC">*/}
                    {/*<h5 class="card-title text-light">*/}
                    {/*{edge.node.memberName}*/}
                    {/*</h5>*/}
                    {/*<p class="card-text text-light">{edge.node.memberTitle}</p>*/}
                    {/*</div>*/}
                  </div>
                </Link>
              </div>
            )
          })}
        {/*</div>*/}

      </Row>
    </Container>
  )
}

export default Team
