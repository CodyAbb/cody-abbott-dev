import React from "react"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"
import { graphql, Link } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Navbar>
      <ContentContainer>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div>
          <Link to="/projects/">&#8592; Back</Link>
        </div>
      </ContentContainer>
    </Navbar>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
