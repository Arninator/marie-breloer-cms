import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import $ from "jquery";

const WorkRollTemplate = (props) => {
  
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="columns is-multiline is-0">
      <div id="column-1" className="column">
        {posts &&
          posts.map(({ node: post }, index) => {
            return ( index % 3 == 0 ?
              <Link
                className=""
                to={post.fields.slug}
              >
                { console.log(post.frontmatter)}
                <figure 
                  className="image"
                  onMouseOver={ () => $("#" + post.id).attr("src", post.frontmatter.hoveredimage.childImageSharp.gatsbyImageData.images.fallback.src) }
                  onMouseOut={ () => $("#" + post.id).attr("src", post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images.fallback.src) }
                >
                  <img
                    id={ post.id }
                    src={ post.frontmatter? post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images.fallback.src : "" }
                    alt={ post.frontmatter.featuredimage.alt }
                  ></img>
                </figure>
              </Link>
            : ""
            )
          })
        }
      </div>
      <div id="column-2" className="column">
        {posts &&
          posts.map(({ node: post }, index) => {
            return ( index % 3 == 1 ?
              <Link
                className=""
                to={post.fields.slug}
                // style={{
                //   height: "100vh !important"
                // }}
              >
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
              </Link>
            : ""
            )
          })
        }
      </div>
      <div id="column-3" className="column">
        {posts &&
          posts.map(({ node: post }, index) => {
            return ( index % 3 == 2 ?
              <Link
                className=""
                to={post.fields.slug}
                // style={{
                //   height: "30vh !important"
                // }}
              >
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
              </Link>
            : ""
            )
          })
        }
      </div>
        {/* {posts &&
        posts.map(({ node: post }, index) => {
          return ( (index + 1) % 3 == 0 ?
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
        : (index + 1) % 3 == 0 ?
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
        : <figure 
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
        )})} */}
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
                fields {
                  slug
                }
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
                  intro {
                    images {
                      image {
                        childImageSharp {
                          gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
                        }
                      }
                      alttext
                    }
                  }
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
