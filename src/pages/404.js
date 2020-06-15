import React from "react"
import { Link } from "gatsby"

export default function Error() {
  return (
    <>
      <h1>Oops, looks like there isn't a page here!</h1>
      <h2>
        come on let's head back <Link to="/">home</Link>
      </h2>
    </>
  )
}
