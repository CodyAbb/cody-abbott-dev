import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaLinkedin, FaGithub, FaBars } from "react-icons/fa"
import useMedia from "use-media"
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
          fixed={data.image1.childImageSharp.fixed}
          alt="A picture of my mug on holiday"
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

export const MobileNavBar = ({
  data,
  children,
  handleMenuClick,
  hiddenLinks,
}) => (
  <>
    <nav className={style.mobilenav}>
      <button onClick={() => handleMenuClick()}>
        <FaBars />
      </button>

      <Link to="/">
        <p className={style.avatartext}>Cody Abbott - Software Developer</p>
      </Link>
      <div style={{ display: hiddenLinks }}>
        <Link to="/" className={style.mobilenavlink}>
          <p>Home</p>
        </Link>
        <Link to="/posts/" className={style.mobilenavlink}>
          <p>Posts/Tutorials</p>
        </Link>
        <Link to="/projects/" className={style.mobilenavlink}>
          <p>Projects</p>
        </Link>
      </div>
    </nav>
    {children}
  </>
)

const Navbar = ({ props, children }) => {
  const isWide = useMedia({ minWidth: 900 })
  const [hiddenLinks, setHiddenLinks] = useState("none")
  const data = useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "facebook_profile_pic.jpg" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        image2: file(relativePath: { eq: "icons8-menu-24.png" }) {
          childImageSharp {
            fixed(width: 24, height: 24) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const handleMenuClick = () => {
    if (hiddenLinks === "block") {
      setHiddenLinks("none")
    } else {
      setHiddenLinks("block")
    }
  }

  return isWide ? (
    <PureNavbar {...props} children={children} data={data}></PureNavbar>
  ) : (
    <MobileNavBar
      {...props}
      children={children}
      data={data}
      handleMenuClick={handleMenuClick}
      hiddenLinks={hiddenLinks}
      setHiddenLinks={setHiddenLinks}
    ></MobileNavBar>
  )
}

export default Navbar
