import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { GatsbyImage, getImage, getImageData } from "gatsby-plugin-image"
import FullWidthImage from "../components/FullWidthImage";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const WorkPageTemplate = ({ 
  title,
  featuredimage,
  content, 
  contentComponent, 
  intro,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <FullWidthImage img={ getImage(featuredimage) } height={ "75vh" } imgPosition="center"/>
              {/* <GatsbyImage image={ getImage(featuredimage) } /> */}
              <PageContent className="content" content={content} />
              <div className="columns is-multiline" >
                {intro != null && intro.images?  intro.images.map((object) => (
                  <div className="column is-4">
                    {/* <FullWidthImage img={ getImage(object.image) }  /> */}
                    <GatsbyImage image={ getImage(object.image) } alt={ object.alttext }/>
                  {/*  <PreviewCompatibleImage imageInfo={ object.image } className="column is-4"/> */}
                    {/* <figure>
                      { console.log(object.image.childImageSharp.gatsbyImageData) }
                      <img
                        src={ object.image.childImageSharp.gatsbyImageData.images.fallback.src }
                        alt={ object.image.alttext }
                        style={{
                          width: object.image.childImageSharp.gatsbyImageData.images.fallback.srcSet
                        }}
                      ></img>
                    </figure> */}
                  </div>
                )): ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WorkPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  featuredimage: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    images: PropTypes.array,
  }),
};

const WorkPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <WorkPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        content={post.html}
        intro={post.frontmatter.intro}
      />
    </Layout>
  );
};

WorkPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorkPage;

export const workPageQuery = graphql`
  query WorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
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
                gatsbyImageData(
                  width: 1200
                  quality: 100
                  layout: CONSTRAINED
                )
              }
            }
            alttext
          }
        }
      }
    }
  }
`;
