import React from "react"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"
import { graphql, Link } from "gatsby"
import style from "./blog_post.module.css"

export default function ProjectPost({ data }) {
  const post = data.markdownRemark
  return (
    <Navbar>
      <ContentContainer>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <article>
          <h1 className={style.title}>{post.frontmatter.title}</h1>
          <div
            className={style.blogtext}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div>
            <Link to="/projects/">&#8592; Back</Link>
          </div>
        </article>
      </ContentContainer>
    </Navbar>
  )
}
export const projectQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
