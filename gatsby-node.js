const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              posttype
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.posttype === "project") {
      createPage({
        path: `/projects${node.fields.slug}`,
        component: path.resolve(`./src/templates/projectPost.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    } else {
      // blog post
      createPage({
        path: `/posts${node.fields.slug}`,
        component: path.resolve(`./src/templates/blogPost.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    }
  })
}

// if (node.frontmatter.posttype === 'project') {
//   createPage({
//     path: `/project${node.fields.slug}`,
//     component: path.resolve(`./src/templates/projectPost.js`),
//     context: {
//       slug:  edge.node.fields.slug,
//     }
//   });
// } else { // blog post
//   createPage({
//     path: node.fields.slug,
//     component: path.resolve(`./src/templates/blogPost.js`),
//     context: {
//       slug: edge.node.fields.slug,
//     }
//   });
// }
