import React from 'react'
import { graphql } from 'gatsby'

// query to get specific event

export const query = graphql`
    query($slug: String!) {
        contentfulEvent(slug: $slug}) {
            title
            eventDate(formatString: "MMMM Do, YYYY")
        }
    }
`

// Component

const Event = (props) => {
    return(
        <div>
            <h1>{props.data.contentfulEvent.title}</h1>
            <p>{props.data.contentfulEvent.eventDate}</p>
        </div>

    )
}

export default Event
