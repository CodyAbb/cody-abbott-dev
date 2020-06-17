import React from "react"
import { Link } from "gatsby"

export default function ArticleCard({ node }) {
  return (
    <Link to={node.fields.slug}>
      {/* <img
        src={node.frontmatter.featuredImage}
        alt="screnshot for spending tracker app"
      /> */}
      <h3>
        {node.frontmatter.title} - {node.frontmatter.date}
      </h3>
      <p>{node.frontmatter.lang}</p>
    </Link>
  )
}
