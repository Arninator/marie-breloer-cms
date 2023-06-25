import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const PriceRollTemplate = (props) => {
  
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-8 is-offset-1" key={post.id}>
            <article
              className={` ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <header>
                {post?.frontmatter?.featuredimage && (
                  <GatsbyImage image={ getImage(post.frontmatter.featuredimage) } alt={""} />
                )}
                <h1>
                  {post.frontmatter.title}
                </h1>
              </header>
              <div dangerouslySetInnerHTML={{__html: post.html}}></div>
            </article>
          </div>
        ))}
    </div>
  )
}

PriceRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function PriceRoll() {
  return (
    <StaticQuery
      query={graphql`
        query PriceRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "price-page" } } }
          ) {
            edges {
              node {
                html
                excerpt(pruneLength: 4000)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <PriceRollTemplate data={data} count={count} />}
    />
  );
}
