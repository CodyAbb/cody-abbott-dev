import React from "react"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"
import { graphql } from "gatsby"
import ArticleCard from "../components/articleCard"
import style from "./projects.module.css"

export default function Projects({ data }) {
  return (
    <Navbar>
      <ContentContainer>
        <main className={style.container}>
          <h2 className={style.title}>Projects: CodeClan and beyond...</h2>
          <div className={style.cardgrid}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <ArticleCard key={node.id} node={node} />
            ))}
          </div>
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
