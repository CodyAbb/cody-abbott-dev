import React from "react"

export default function ArticleCard({ node }) {
  return (
    <div key={node.id}>
      <h3>
        {node.frontmatter.title} - {node.frontmatter.date}
      </h3>
      <p>{node.excerpt}</p>
    </div>
  )
}
