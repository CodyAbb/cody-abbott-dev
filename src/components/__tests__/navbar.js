import React from "react"
import renderer from "react-test-renderer"
import Navbar from "../navbar"
describe("Navbar", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Navbar siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
