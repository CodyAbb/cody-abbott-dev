import React from "react"
import { Link } from "gatsby"
import style from "./navbar.module.css"

export default function Navbar({ children }) {
  return (
    <>
      <nav className={style.verticalnav}>
        <Link to="/" className={style.navlink}>
          <h2>Cody Abbott</h2>
        </Link>
        <Link to="/posts/" className={style.navlink}>
          <h2>Posts/Tutorials</h2>
        </Link>
        <Link to="/projects/" className={style.navlink}>
          <h2>Projects</h2>
        </Link>
      </nav>
      {children}
    </>
  )
}
