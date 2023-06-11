import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import $ from "jquery";

const WorkRollTemplate = (props) => {
  
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="columns is-multiline is-1">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="column is-4">
            <figure 
              className="image"
              onMouseOver={ () => $("#" + post.id).attr("src", post.frontmatter.hoveredimage.childImageSharp.gatsbyImageData.images.fallback.src) }
              onMouseOut={ () => $("#" + post.id).attr("src", post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images.fallback.src) }
            >
              <img
                id={ post.id }
                src={ post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images.fallback.src }
                alt={ post.frontmatter.featuredimage.alt }
              ></img>
            </figure>
          </div>
          // <div className="is-parent column is-6" key={post.id}>
          //   <article
          //     className={`blog-list-item tile is-child box notification ${
          //       post.frontmatter.featuredpost ? 'is-featured' : ''
          //     }`}
          //   >
          //     <header>
          //       {post?.frontmatter?.featuredimage && (
          //         <div className="featured-thumbnail">
          //           <PreviewCompatibleImage
          //             imageInfo={{
          //               image: post.frontmatter.featuredimage,
          //               alt: `featured image thumbnail for post ${post.frontmatter.title}`,
          //               width:
          //                 post.frontmatter.featuredimage.childImageSharp
          //                   .gatsbyImageData.width,
          //               height:
          //                 post.frontmatter.featuredimage.childImageSharp
          //                   .gatsbyImageData.height,
          //             }}
          //           />
          //         </div>
          //       ) }
          //       <p className="post-meta">
          //         <Link
          //           className="title has-text-primary is-size-4"
          //           to={post.fields.slug}
          //         >
          //           {post.frontmatter.title}
          //         </Link>
          //         <span> &bull; </span>
          //         <span className="subtitle is-size-5 is-block">
          //           {post.frontmatter.date}
          //         </span>
          //       </p>
          //     </header>
          //     <p>
          //       {post.excerpt}
          //       <br />
          //       <br />
          //       <Link className="button" to={post.fields.slug}>
          //         Keep Reading →
          //       </Link>
          //     </p>
          //   </article>
          // </div>
        ))}
    </div>
  )
}

WorkRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function WorkRoll() {
  return (
    <StaticQuery
      query={graphql`
        query WorkRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "work-page" } } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 1200
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                  hoveredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 1200
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                  alt
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <WorkRollTemplate data={data} count={count} />}
    />
  );
}
