import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"
import style from "./posts.module.css"
import PostCard from "../components/postCard"

export default function Posts({ data }) {
  return (
    <Navbar>
      <ContentContainer>
        <div className={style.container}>
          <heading>
            <h2 className={style.title}>Content Incoming...</h2>
          </heading>
          <main>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <PostCard node={node} key={node.id} />
            ))}
          </main>
        </div>
      </ContentContainer>
    </Navbar>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog_posts/.*\\\\.md$/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tagline
          }
        }
      }
    }
  }
`
