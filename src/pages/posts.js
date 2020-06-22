import React from "react"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"
import style from "./posts.module.css"

export default function Posts({ data }) {
  return (
    <Navbar>
      <ContentContainer>
        <div className={style.container}>
          <heading>
            <h2 className={style.title}>Content Incoming...</h2>
          </heading>
        </div>
      </ContentContainer>
    </Navbar>
  )
}

// export const query = graphql`
//   {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/blog_posts/.*\\\\.md$/" } }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD MMMM, YYYY")
//             title
//             featuredImage {
//               childImageSharp {
//                 fluid(maxWidth: 600) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
