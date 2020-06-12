import React from "react"
import renderer from "react-test-renderer"
import { PureNavbar as Navbar } from "../navbar"
describe("Navbar", () => {
  it("renders correctly", () => {
    //Created using the query from Header.js
    const data = {
      file: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/aAAwDAQACEAMQAAABzavPhX2KsJ7gewnP/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAAxEhM//aAAgBAQABBQKz04ENxSOZpjYxo7K9LhjP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/Aciv/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAER/9oACAECAQE/AcKf/8QAHBABAAICAwEAAAAAAAAAAAAAAQARAiEQMUFR/9oACAEBAAY/ApkYen2UVwVctNxIiup3P//EAB4QAAMAAgEFAAAAAAAAAAAAAAABESExQVFhcYHh/9oACAEBAAE/IX9IidKrkN7R3o12aKc5EppRnAmVr4NHLRUl8nwf/9oADAMBAAIAAwAAABBL+D7/xAAYEQACAwAAAAAAAAAAAAAAAAAAMQEQEf/aAAgBAwEBPxDXSjSf/8QAFxEBAQEBAAAAAAAAAAAAAAAAABFBAf/aAAgBAgEBPxDC8bV//8QAHhABAAICAwADAAAAAAAAAAAAARExACFBUXFhgcH/2gAIAQEAAT8Q1JCQSVp3vGYgkR0M7w2mAi4448xNmHcV3f3kpCJq76MipBBwb/c3JIViD5Y+kXQKxj2ICnfmf//Z",
            width: 125,
            height: 125,
            src:
              "/static/3ede9b91227891490f9ae0fdf9ba25db/bac10/facebook_profile_pic.jpg",
            srcSet:
              "/static/3ede9b91227891490f9ae0fdf9ba25db/bac10/facebook_profile_pic.jpg 1x,\n/static/3ede9b91227891490f9ae0fdf9ba25db/1b59b/facebook_profile_pic.jpg 1.5x,\n/static/3ede9b91227891490f9ae0fdf9ba25db/034c8/facebook_profile_pic.jpg 2x",
          },
        },
      },
    }
    const tree = renderer.create(<Navbar data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
