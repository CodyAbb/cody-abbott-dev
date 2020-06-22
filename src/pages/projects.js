import React from "react"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"
import { graphql } from "gatsby"
import ArticleCard from "../components/articleCard"
import style from "./projects.module.css"

export default function Projects({ data }) {
  return (
    <Navbar>
      <ContentContainer>
        <SEO title="Posts-CodyAbbottDev" description="List of Projects" />
        <main className={style.container}>
          <h2 className={style.title}>Projects: CodeClan and beyond...</h2>
          <div className={style.cardgrid}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <ArticleCard key={node.id} node={node} />
            ))}
          </div>
        </main>
      </ContentContainer>
    </Navbar>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/project_posts/.*\\\\.md$/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            lang
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

//Image search
// featuredImage {
//   childImageSharp {
//     fluid(maxWidth: 600) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
