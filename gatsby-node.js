// This file is a node config file which allows to tap into node api which gatsby exposes

const path = require('path')

// Dynamic generation of pages
module.exports.createPages = async ({ graphql,actions }) =>{
    const { createPage } = actions

    // 1. get path to template
    const eventTemplate = path.resolve('./src/templates/event.js')
    const memberTemplate = path.resolve('./src/templates/member.js')

    // 2. get contentful event slug 
    const res = await graphql(`
        query {
            allContentfulEvent {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    const res2 = await graphql(`
    query{
    allContentfulTeamMember {
        edges {
          node {
            slug
          }
        }
      }
    }
`)

    // 3. create new page for event
    res.data.allContentfulEvent.edges.forEach((edge) =>{
        createPage({
            // template path
            component: eventTemplate,
            // path of created page (/event/slug)
            path: `/event/${edge.node.slug}`,
            // Things to pass down to the template
            context: {
                slug: edge.node.slug
            }
        })
    })

    // create new page for each member
    res2.data.allContentfulTeamMember.edges.forEach((edge) =>{
        createPage({
            // template path
            component: memberTemplate,
            // path of created page (/event/slug)
            path: `/team/${edge.node.slug}`,
            // Things to pass down to the template
            context: {
                slug: edge.node.slug
            }
        })
    })
}  
    

