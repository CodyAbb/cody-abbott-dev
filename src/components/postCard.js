import React from "react"
import { Link } from "gatsby"
import style from "../pages/posts.module.css"

export default function PostCard({ node }) {
  return (
    <Link to={`/posts${node.fields.slug}`} className={style.card}>
      <div className={style.card}>
        <h3>{node.frontmatter.title}</h3>
        <p>{node.frontmatter.tagline}</p>
        <p>{node.frontmatter.date}</p>
      </div>
    </Link>
  )
}
