import React from "react"
import { Link } from "gatsby"
import style from "./postcard.module.css"

export default function PostCard({ node }) {
  return (
    <Link to={`/posts${node.fields.slug}`} className={style.card}>
      <div className={style.cardtextcontainer}>
        <h3>{node.frontmatter.title}</h3>
        <p>{node.frontmatter.date}</p>
        <p>{node.frontmatter.tagline}</p>
      </div>
    </Link>
  )
}
