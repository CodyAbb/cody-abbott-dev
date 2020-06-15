import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import Img from "gatsby-image"
import style from "./navbar.module.css"

// This purenavbar is a wraper that does not contain the graphql query
// this is included so that Jest can be given dummy graphql query response
// and continue with the other tests
export const PureNavbar = ({ data, children }) => (
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
      <div className={style.socialicons}>
        <IconContext.Provider value={{ color: "black", size: "3em" }}>
          <a
            className={style.linkedin}
            href="https://www.linkedin.com/in/cody-abbott/"
          >
            <FaLinkedin />
          </a>

          <a classname={style.github} href="https://github.com/CodyAbb">
            <FaGithub />
          </a>
        </IconContext.Provider>
      </div>
    </nav>
    {children}
  </>
)

const Navbar = ({ props, children }) => {
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

  return <PureNavbar {...props} children={children} data={data}></PureNavbar>
}

export default Navbar
