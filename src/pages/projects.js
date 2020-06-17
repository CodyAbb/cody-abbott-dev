import React from "react"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"
import { graphql } from "gatsby"
import ArticleCard from "../components/articleCard"

export default function Projects({ data }) {
  return (
    <Navbar>
      <ContentContainer>
        <main>
          <h2>Here are the projects I completed at CodeClan</h2>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <ArticleCard key={node.id} node={node} />
          ))}
        </main>
      </ContentContainer>
    </Navbar>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            lang
            title
            featuredImage
          }
        }
      }
    }
  }
`
