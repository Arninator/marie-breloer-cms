import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { useState, useEffect } from "react";


import $ from "jquery";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  document.onscroll = () => {
    // console.log(window.scrollY)
    if (typeof window !== undefined) {
      if(window.scrollY > (window.outerHeight / 2.)) {
        // $(".menu-list-item").css("margin-top", -1 * ($(".menu-list-item").height + $(".menu-list-item").css("margin-top")))
        $(".menu-list-item").addClass("move-icon")
        // $(".menu-list-item").css("transition", "none")
        $(".menu-list-item").hide().removeClass("is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center move-icon")
        $("#burger-button").show().addClass("is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center")
        $("#brand-div").css("font-size", "3rem").css("border", "1px solid black")
      } else {
        $(".navbar-object").css("margin-top", window.scrollY > 100  ? (8 / ( window.scrollY / window.outerHeight )) : "8rem")
        console.log("marginTop: " + window.scrollY + " / " + window.outerHeight + " = " + ( window.scrollY / window.outerHeight ))
        $(".menu-list-item").show().addClass("is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center")
        $("#burger-button").hide().removeClass("is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center")
        $("#brand-div").css("font-size", "5rem").css("border", "none")
      }
    }
  }

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
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
