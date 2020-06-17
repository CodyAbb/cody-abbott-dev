import React from "react"
import { Link } from "gatsby"
import style from "../pages/projects.module.css"

export default function ArticleCard({ node }) {
  return (
    <div className={style.card}>
      <Link to={node.fields.slug}>
        {/* <img
        src={node.frontmatter.featuredImage}
        alt="screnshot for spending tracker app"
      /> */}
        <h3>Image Place Holder</h3>
        <div className={style.cardtextcontainer}>
          <h3>{node.frontmatter.title}</h3>
          <p>{node.frontmatter.lang}</p>
        </div>
      </Link>
    </div>
  )
}
