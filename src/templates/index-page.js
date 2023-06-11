import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { useState } from 'react';

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

import $ from "jquery";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  // $("html").addClass("has-navbar-fixed-top");
  // console.log($("html"));

  const [srcPath1, setSrcPath1] = useState("../img/Marie_vanGogh_9.png");
  const [srcPath2, setSrcPath2] = useState("../img/Marie_vanGogh_4.png");
  const [srcPath3, setSrcPath3] = useState("../img/Marie_vanGogh_6.png");
  const [srcPath4, setSrcPath4] = useState("../img/Marie_vanGogh_7.png");
  const [srcPath5, setSrcPath5] = useState("../img/Marie_vanGogh_1.png");
  const [srcPath8, setSrcPath8] = useState("../img/Marie_vanGogh_8.png");

  return (
    <div 
      className=""
      style={{
        position: "relative",
        top: "-" + $("nav").css("height"),
        margin: "0",
        padding: "0",
      }}
    >
      <FullWidthImage 
        img={ heroImage } 
        // title={ title } 
        // subheading={ subheading } 
        height={ typeof window === 'undefined' ? "100%" : window.innerHeight }
        imgPosition="center"
      />
      <div
        className="is-flex is-flex-direction-column is-justify-content-space-around"
        style={{
          height: "100vh",
          width: "33%",
          backgroundColor: "white",
          position: "absolute",
          top: "0",
        }}
      >
        {/* <figure className="image is-8x8">
          <img src="..\img\Marie_vanGogh_9.png" className="is-rounded"></img>
        </figure> */}
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <div className="content">
                    <div className="content">
                      <div className="columns">
                        <div className="column is-4">
                          <figure 
                            className="image"
                            onMouseOver={ () => setSrcPath1(srcPath1.replace(".png", "-hover.png")) }
                            onMouseOut={ () => setSrcPath1(srcPath1.replace("-hover", "")) }
                          >
                            <img 
                              src={ srcPath1 } 
                              className=""
                              alt=""
                            ></img>
                          </figure>
                          <figure 
                            className="image"
                            onMouseOver={ () => setSrcPath4(srcPath4.replace(".png", "-hover.png")) }
                            onMouseOut={ () => setSrcPath4(srcPath4.replace("-hover", "")) }
                          >
                            <img 
                              src={ srcPath4 } 
                              className=""
                            ></img>
                          </figure>
                        </div>
                        <div className="column is-4">
                          <figure 
                            className="image"
                            onMouseOver={ () => setSrcPath2(srcPath2.replace(".png", "-hover.png")) }
                            onMouseOut={ () => setSrcPath2(srcPath2.replace("-hover", "")) }
                          >
                            <img 
                              src={ srcPath2 } 
                              className=""
                            ></img>
                          </figure>
                          <figure 
                            className="image"
                            onMouseOver={ () => setSrcPath5(srcPath5.replace(".png", "-hover.png")) }
                            onMouseOut={ () => setSrcPath5(srcPath5.replace("-hover", "")) }
                          >
                            <img 
                              src={ srcPath5 } 
                              className=""
                            ></img>
                          </figure>
                        </div>
                        <div className="column is-4">
                          <figure 
                            className="image"
                            onMouseOver={ () => setSrcPath3(srcPath3.replace(".png", "-hover.png")) }
                            onMouseOut={ () => setSrcPath3(srcPath3.replace("-hover", "")) }
                          >
                            <img 
                              src={ srcPath3 } 
                              className=""
                            ></img>
                          </figure>
                          <figure 
                            className="image"
                            onMouseOver={ () => setSrcPath8(srcPath8.replace(".png", "-hover.png")) }
                            onMouseOut={ () => setSrcPath8(srcPath8.replace("-hover", "")) }
                          >
                            <img 
                              src={ srcPath8 } 
                              className=""
                            ></img>
                          </figure>
                        </div>
                      </div>
                    </div>
                    {/* <div className="tile">
                      <h1 className="title">{ mainpitch.title }</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div> */}
                  </div>
                  {/* <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
