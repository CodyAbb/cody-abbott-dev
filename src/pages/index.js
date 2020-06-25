import React from "react"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"
import styles from "./index.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <>
      <Navbar>
        <ContentContainer>
          <SEO title="CodyAbbottDev" description="Home page" />
          <header className={styles.banner}>
            <h1 className={styles.herotext}>Hello World!</h1>
            <Img
              className={styles.heroimage}
              fixed={data.file.childImageSharp.fixed}
              alt="Code placeholder"
            />
          </header>
          <article>
            <p>
              I am recent career changer who has moved into software
              development. I completed CodeClan's professional software
              development course and graduated just as lockdown began (great
              timing I know!). But you have to try and look at the positives and
              I've been able to use the time to enhance my knowledge and get
              some practise.
            </p>
            <p>
              I've got a few ideas for this site. I'll use it is as a showcase
              for projects I finished at CodeClan and others I am working on.
              It's also been some great practise with new technologies that I
              haven't had the chance to use. I've worked with React a few times
              however I have never used Gatsby before and so far I am really
              enjoying it. I have began implementing some testing with Jest and
              am looking to CircleCi to integrate this before pushing to
              Netlify.
            </p>
            <p>
              Mainly I want to work on adding some tutorials for concepts and
              technologies I struggled grasping at first. I will try and convey
              them from my junior point of view, hoping this will help others
              just starting out. I've watched my fair share of tutorials and
              sighed "thank christ" when I've googled something and seen a
              Medium article at the top. So in my eyes it is always good to pass
              knowledge on. In fact I've made the{" "}
              <a
                href="https://github.com/CodyAbb/cody-abbott-dev"
                className={styles.highlightlink}
              >
                repo
              </a>{" "}
              I created this site with public so you can explore my thought
              process.
            </p>
            <p>
              Anyway, thanks for visiting and check back to see how I change and
              add to it as I learn myself.
            </p>
          </article>
        </ContentContainer>
      </Navbar>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "facebook_profile_pic.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
