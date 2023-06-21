import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const PricePageTemplate = ({ 
  title, 
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
              <PageContent className="content" content={content} />
              {intro.images? intro.images.map((image) => (
                <div>
                { console.log(content) }
                  <GatsbyImage img={image} />
                </div>
              )) : <div className="border">BORDER</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PricePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    images: PropTypes.array,
  }),
};

const PricePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PricePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        intro={post.intro}
      />
    </Layout>
  );
};

PricePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PricePage;

export const pricePageQuery = graphql`
  query PricePage($id: String!) {
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
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            alttext
          }
        }
      }
    }
  }
`;
