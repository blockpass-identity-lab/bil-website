import React from 'react'
import { graphql } from 'gatsby'

// this module renders rich text from contentful to react components
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import eventStyles from './event.module.scss'

// query to get specific event
export const query = graphql`
    query($slug: String!) {
        contentfulEvent(slug: {eq: $slug}) {
            eventTitle
            eventDate(formatString: "MMMM Do, YYYY")
            eventDescription{
                json
            }
        }
    }
`

// Component

const Event = (props) => {
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
            <div className={ eventStyles.container }>
                <div className={ eventStyles.content }>
                    {/* grab and display contentful data here */}
                    <h1>{props.data.contentfulEvent.eventTitle}</h1>
                    <p>{props.data.contentfulEvent.eventDate}</p>
                    {/* render rich text */}
                    {documentToReactComponents(props.data.contentfulEvent.eventDescription.json,options)}
                </div>
            </div>

        </Layout>

    )
}

export default Event
