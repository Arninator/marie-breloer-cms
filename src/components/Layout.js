import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

// import $ from "jquery";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  // $("html").addClass("has-navbar-fixed-bottom");

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />

        <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>

        <script src="https://kit.fontawesome.com/863dd0d27a.js" crossorigin="anonymous"></script>

      </Helmet>
      <div className="placeholder"></div>
      <Logo />      
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
