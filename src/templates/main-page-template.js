import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { extractHeadingFromContent } from '../utils/expractHeadingFromContent'
import Jumbotron from "../components/components/Jumbotron"
import Menu from "../components/components/Menu"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes
  const mainPage = posts[posts.length - 1];


  const featuredImage = mainPage && {
    data: mainPage.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: mainPage.featuredImage?.node?.alt || ``,
  }

  if (!posts.length) {
    return (
      <Layout pageTitle={"Ups"}>
        <Seo title="Main page" />
        <p>
          No articles found. Try again later!
        </p>
      </Layout>
    )
  }

  posts.pop();

  return (
    <div data-is-root-path={true}>
      <Menu />

        <div>
         <Seo title="Main page" />
         <Jumbotron
           title={mainPage.title}
           heading={!!mainPage.content &&
           extractHeadingFromContent(parse(mainPage.content)).heading}
           image={featuredImage?.data && (
             <GatsbyImage
               image={featuredImage.data}
               alt={featuredImage.alt}
             />
           )}
         />
      <div className="global-wrapper">
        <main>
          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.title

              return (
                <li key={post.uri}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={post.uri} itemProp="url">
                          <span itemProp="headline">{parse(title)}</span>
                        </Link>
                      </h2>
                      <small>{post.date}</small>
                    </header>
                    <section itemProp="description">{parse(post.excerpt)}</section>
                  </article>
                </li>
              )
            })}
          </ol>

          {previousPagePath && (
            <>
              <Link to={previousPagePath}>Previous page</Link>
              <br />
            </>
          )}
          {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
        </main>
      </div>

      <footer>
        <div className="global-wrapper">
          © {new Date().getFullYear()}  Upper Silesia Tourismus
        </div>
      </footer>
      </div>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressAllArticles($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
              }
            }
          }
        }
      }
    }
  }
`
