import React from 'react'
import { graphql } from 'gatsby'
import { FaTwitter, FaEnvelope, FaLink, FaUniversity, FaGithub, FaLinkedin } from "react-icons/fa"


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
            personalSite
        }
    }
`

// Component

const Member = ({data}) => {
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

    let {personalSite, bio, email, worktribe, twitter, githubProfile, memberProfile, memberName, linkedin} = data.contentfulTeamMember

    return(
        <Layout>
            <div className={ memberStyles.container }>
                <div className={ memberStyles.content }>
                    {/*Image */}
                    <Image
                    className={ memberStyles.image }
                    src={memberProfile.file.url}
                    />
                    {/* grab and display contentful data here */}
                    <h1>{memberName}</h1>
                    {/* render rich text */}
                    {documentToReactComponents(bio.json,options)}

                    <Container fluid>
                        <Row className={ memberStyles.firstRow }>
                          {email && <a href={"mailto:" + email}>
                            <FaEnvelope size={32}/>
                          </a>}
                          {worktribe && <a target="_blank" href={worktribe}>
                            <FaUniversity size={32}/>
                          </a>}
                          {personalSite && <a target="_blank" href={personalSite}>
                            <FaLink size={32}/>
                          </a>}
                          {linkedin && <a target="_blank" href={linkedin}>
                            <FaLinkedin size={32}/>
                          </a>}
                          {githubProfile && <a target="_blank" href={githubProfile}>
                            <FaGithub size={32}/>
                          </a>}
                          {twitter && <a target="_blank" href={twitter}>
                            <FaTwitter size={32}/>
                          </a>}

                        </Row> <br />

                    </Container>
                </div>
            </div>
        </Layout>

    )
}

export default Member
