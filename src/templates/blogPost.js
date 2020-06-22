import React from "react"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"
import { graphql, Link } from "gatsby"
import style from "./blog_post.module.css"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
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
          <p>Posted {post.frontmatter.date}</p>
          <div>
            <Link to="/posts/">&#8592; Back</Link>
          </div>
        </article>
      </ContentContainer>
    </Navbar>
  )
}
export const bloguery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(fromNow: true)
      }
    }
  }
`
