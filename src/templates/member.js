import React from 'react'
import { graphql } from 'gatsby'


// this module renders rich text from contentful to react components
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import memberStyles from './member.module.scss'
import { Image, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// query to get specific event
export const query = graphql`
    query($slug: String!) {
        contentfulTeamMember(slug: {eq: $slug}) {
            memberName
            bio{
                json
            }
            memberProfile {
                file {
                  url
                }
              }
            email
            memberTitle
            twitter
            worktribe
            githubProfile
            linkedin
        }
    }
`

// Component

const Member = (props) => {
    const options = {
        // override how nodes are rendered
        renderNode: {
            // Image rendering
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }

    return(
        <Layout>
            <div className={ memberStyles.container }>
                <div className={ memberStyles.content }>
                    {/*Image */}
                    <Image 
                    className={ memberStyles.image }
                    src={props.data.contentfulTeamMember.memberProfile.file.url} 
                    />
                    {/* grab and display contentful data here */}
                    <h1>{props.data.contentfulTeamMember.memberName}</h1>
                    {/* render rich text */}
                    <em>Bio: </em>
                    {documentToReactComponents(props.data.contentfulTeamMember.bio.json,options)}

                    <Container fluid>
                        <Row className={ memberStyles.firstRow }>
                            <Col>
                                <em>Email</em> <br />
                                {props.data.contentfulTeamMember.email}
                            </Col>
                            <Col>
                                <em>Worktribe</em> <br />
                                {props.data.contentfulTeamMember.worktribe}
                            </Col>
                        </Row> <br />
                        <Row>
                            <Col>
                                <em>Github</em> <br />
                                {props.data.contentfulTeamMember.githubProfile}
                            </Col>
                            <Col>
                                <em>Twitter</em> <br />
                                {props.data.contentfulTeamMember.twitter}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Layout>

    )
}

export default Member