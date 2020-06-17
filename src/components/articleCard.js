import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import style from "../pages/projects.module.css"

export default function ArticleCard({ node }) {
  let featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Link to={node.fields.slug} className={style.card}>
      <Img
        fluid={featuredImgFluid}
        alt="screnshot for spending tracker app"
        className={style.thumbnail}
      />
      <div className={style.cardtextcontainer}>
        <h3>{node.frontmatter.title}</h3>
        <p>{node.frontmatter.lang}</p>
      </div>
    </Link>
  )
}
