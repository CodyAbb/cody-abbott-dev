import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"
import style from "./posts.module.css"
import PostCard from "../components/postCard"
import SEO from "../components/seo"

export default function Posts({ data }) {
  return (
    <Navbar>
      <ContentContainer>
        <SEO
          title="Posts-CodyAbbottDev"
          description="List of Posts and Tutorials"
        />
        <div className={style.container}>
          <heading>
            <h2 className={style.title}>Blog Posts/Tutorials</h2>
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
