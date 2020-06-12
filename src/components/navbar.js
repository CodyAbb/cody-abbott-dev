import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import style from "./navbar.module.css"

const Navbar = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "img/facebook_profile_pic.jpg" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <>
      <nav className={style.verticalnav}>
        <Link to="/" className={style.avatarcard}>
          <Img
            className={style.avatar}
            fixed={data.file.childImageSharp.fixed}
            alt=""
          />
          <p className={style.avatartext}>
            Cody Abbott
            <br />
            Software Developer
          </p>
        </Link>
        <Link to="/posts/" className={style.navlink}>
          <p>Posts/Tutorials</p>
        </Link>
        <Link to="/projects/" className={style.navlink}>
          <p>Projects</p>
        </Link>
      </nav>
      {children}
    </>
  )
}

export default Navbar
