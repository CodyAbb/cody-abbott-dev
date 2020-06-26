---
title: "Generating Multiple Content Types for Gatsby"
date: "2020-06-22"
posttype: "blog"
tagline: "Running two types of markdown genre on gatsby is a little complicated..."
---

So you've created a site on gatbsy with a blog format that draws from markdown files.
Great, its looking good and life is now a lot easier when you want to add new content. Just
open up a new markdown file, add, save, boosh; its there automatically. However, what if you want to add a different content type for your site? Have blog posts and projects for instance (hint hint, look to the bar on the left) well it turns out that's a bit more complicated.

After scanning the gatsby docs, which are actually pretty damn good, I had no luck. So cut to Google and this [article](https://desktopofsamuel.com/gatsby-website-with-multiple-post-types) by Samuel W. which is excellent. I followed along for the majority of it however, the site its adding to has a few more bells and whistles than mine. So here is a bit of a bare bones example of how you would get this working.

As Samuel suggests, point you gastby config to the folders were you want to store your two forms of markdown file.

```js

{
    resolve: `gatsby-source-filesystem`,
    options: { path: `${__dirname}/src/project_posts`, name: "projects" },
},
{
    resolve: `gatsby-source-filesystem`,
    options: { path: `${__dirname}/src/blog_posts`, name: "posts" },
},
```

Here I have pointed mine to folders were I want to store blog posts and posts about the projects I have been working on. Make sure that in the markdown files in your folders you create some metadata and specifically include a category for differentiating your content type. For instance in this very blog post the metadata looks like:

```

title: "Generating Multiple Content Types for Gatsby"
date: "2020-06-22"
posttype: "blog"
tagline: "Running two types of markdown genre on gatsby is a little complicated..."
```

Notice the posttype, while in my project section this would be set to project. This is important for generating the correct nodes for the GraphQl queries in a sec.

The steps for creating the slugs for your markdown are the same as the ones found in Gatsby basic tutorial but the section you do change is the create page function. Samuel's adapted fuction is an if statement that creates the page based on the posttype defined in the markdown.

```

result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.posttype === "project") {
    createPage({
        path: `/projects${node.fields.slug}`,
        component: path.resolve(`./src/templates/projectPost.js`),
        context: {
        slug: node.fields.slug,
        },
    })
    } else {
    // blog post
    createPage({
        path: `/posts${node.fields.slug}`,
        component: path.resolve(`./src/templates/blogPost.js`),
        context: {
        slug: node.fields.slug,
        },
    })
    }
})
```

To get the posttype available for this function make sure you include it in your GraphQl query in the gatsby node file:

```

query {
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    posttype
                }
            fields {
                slug
            }
        }
        }
    }
}
```

Now, next Samuel suggests you should create your queries in the same section and filter them using regex, to search for posts under blog and project. If you fire up `gatsby develop` you can navigate to _localhost:8000/\_\_\_graphql_ and try the query out yourself. For instance if you want to find just your projects (remember to change project_posts to whatever folder name you store the markdown files in) you can put in:

```

{
    allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/project_posts/.*\\.md$/" } }
    ) {
    edges {
        node {
        fields {
            slug
        }
        frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
        }
        }
    }
    }
}
```

And so appears the projects. Now if you were to copy this query over to your project index page and give it a go. Oh no! That regex is now throwing a weird error. Seems you can't escape characters in regex queries which is what we need for finding all the files in our folder. According to stack overflow you would need to create a big query in your gatsyb-node file (minging). Luckily, if you traipse through the gatsby docs you come across a small line about escaping characters and if you add two extra back slashes (I know, weird) you can keep your query were you had it:

```

export const query = graphql`
{
    allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/project_posts/.*\\\\.md$/" } }
    ) {
    edges {
        node {
        fields {
            slug
        }
        frontmatter {
            date(formatString: "DD MMMM, YYYY")
            lang
            title
            featuredImage {
            childImageSharp {
                fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
        }
    }
    }
}
`
```

So you can now grab the data as needed for building out seperate index pages and creating template pages for both content types. This the one I use for the blog style page that you are reading (very meta):

```

import React from "react"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentcontainer"
import { graphql, Link } from "gatsby"
import style from "./blog_post.module.css"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
const post = data.markdownRemark
return (
    <Navbar>
    <ContentContainer>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <article>
        <h1 className={style.title}>{post.frontmatter.title}</h1>
        <div
            className={style.blogtext}
            dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <br />
        <p>Posted {post.frontmatter.date}</p>
        <div>
            <Link to="/posts/" className={style.backlink}>
            &#8592; Back
            </Link>
        </div>
        </article>
    </ContentContainer>
    </Navbar>
)
}
export const blogQuery = graphql`
query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
        title
        date(fromNow: true)
    }
    }
}
`
```

The last thing you need to get this fully working if you have included an index page for your two types of content, is linking to them correctly. Now you have different content types you need to account for which one you are looking for. So now this file is called _multiple-gatsby-content-types_ and this slug is found at _/posts/multiple-gatsby-content-types_. Our link to this has to be:

```

<Link to={`/posts${node.fields.slug}`} />
```

That should be it all working, but if you want the full example, just head to the [repository](https://github.com/CodyAbb/cody-abbott-dev) for this site. Yet again, the article by Samuel W. has done all the heavy lifting and I just modified a few queries at the end but hopefully this is helpful.
