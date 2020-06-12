import React from "react"
import { Link } from "gatsby"

export default function Navbar({ children }) {
  return (
    <>
      <nav>
        <Link to="/">Cody Abbott</Link>
        <Link to="/posts/">Posts/Tutorials</Link>
        <Link to="/projects/">Projects</Link>
      </nav>
      {children}
    </>
  )
}
