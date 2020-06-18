import React from "react"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"
import style from "./posts.module.css"

export default function Posts() {
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
