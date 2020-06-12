import React from "react"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"

export default function Home() {
  return (
    <div>
      <Navbar>
        <ContentContainer>
          <h1>Hello World</h1>
        </ContentContainer>
      </Navbar>
    </div>
  )
}
