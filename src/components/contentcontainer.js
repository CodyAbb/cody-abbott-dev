import React from "react"
import style from "./contentcontainer.module.css"

export default function ContentContainer({ children }) {
  return <div className={style.contentcontainer}>{children}</div>
}
