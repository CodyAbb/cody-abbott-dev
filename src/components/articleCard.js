import React from "react"
import { Link } from "gatsby"

export default function ArticleCard({ node }) {
  return (
    <Link to={node.fields.slug}>
      <h3>
        {node.frontmatter.title} - {node.frontmatter.date}
      </h3>
      <p>{node.excerpt}</p>
    </Link>
  )
}
