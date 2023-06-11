import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.png";

import $ from "jquery";
// import { transform } from "lodash";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isAboutActive, setAboutIsActive] = useState(false);
  const [isWorkActive, setWorkIsActive] = useState(false);
  const [isPriceActive, setPriceIsActive] = useState(false);
  const [isContactActive, setContactIsActive] = useState(false);

  return (
    <nav
      className="navbar sticky-item is-flex is-flex-direction-row is-justify-content-space-between full-width-container"
      role="navigation"
      aria-label="main-navigation"
      style={{
        backgroundColor: "transparent",
        maxHeight: "15vh",
      }}
    >
      <div className="navbar-brand navbar-object">
        <Link to="/" className="navbar-item has-background-white" title="Logo">
          <div 
            id="brand-div" 
            className="has-text-black mx-6" 
            style={{ 
              fontWeight: "100"
            }}
          >
            { () => $("#brand-div").css("font-size", "5rem") }
            marie&nbsp;breloer
          </div>
        </Link>
      </div>
      
      <div className="is-flex is-flex-direction-column is-justify-content-flex-start border-cyan">
        {/* <button
          className={`navbar-burger burger ${isActive && "is-active"}`}
          aria-expanded={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <span />
          <span />
          <span />
        </button> */}
        <button
          id="burger-button"
          className="invisible-btn navbar-item navbar-object mt-6"
          style={{
            display: "none"
          }}
          onClick={ () => $(".menu-list-item").show().addClass("is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center")}
        >
          <div 
            className="is-size-4 has-background-white"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              aspectRatio: "1/1",
              borderRadius: "50%",
              padding: "1rem",
              backgroundColor: "white"
            }}
          >
            <i 
              className="fa-solid fa-bars has-text-black"
            ></i>
          </div>
        </button>
        <a
          className="navbar-item navbar-object menu-list-item is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center" 
          onMouseOver={ (e) => {setAboutIsActive(!isAboutActive); $(e.currentTarget).addClass("has-background-white") }}
          onMouseOut={ (e) => {setAboutIsActive(!isAboutActive); $(e.currentTarget).removeClass("has-background-white") }}
        >
          <div
            id="about-div"
            className="is-size-4 has-text-black has-text-weight-light"
            style={{
              display: isAboutActive ? "block" : "none",
            }}
          >
            about
          </div>
          <div 
            className="is-size-4 has-background-white"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              aspectRatio: "1/1",
              borderRadius: "50%",
              padding: "1rem",
              backgroundColor: "white"
            }}
          >
            <i 
              className="fa-regular fa-circle-user has-text-black"
            ></i>
          </div>
        </a>
        <Link
          to="/work"
          className="menu-list-item navbar-item navbar-object is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center" 
          onMouseOver={ (e) => {setWorkIsActive(!isWorkActive); $(e.currentTarget).addClass("has-background-white") }}
          onMouseOut={ (e) => {setWorkIsActive(!isWorkActive); $(e.currentTarget).removeClass("has-background-white") }}
        >
          <div
            id="about-div"
            className="is-size-4 has-text-black has-text-weight-light"
            style={{
              display: isWorkActive ? "block" : "none",
            }}
          >
            work
          </div>
          <div 
            className="is-size-4 has-background-white"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              aspectRatio: "1/1",
              borderRadius: "50%",
              padding: "1rem",
              backgroundColor: "white"
            }}
          >
            <i className="fa-solid fa-brush has-text-black"></i>
        </div>
        </Link>
        <a 
          className="menu-list-item navbar-item navbar-object is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center" 
          onMouseOver={ (e) => {setPriceIsActive(!isPriceActive); $(e.currentTarget).addClass("has-background-white") }}
          onMouseOut={ (e) => {setPriceIsActive(!isPriceActive); $(e.currentTarget).removeClass("has-background-white") }}
        >
          <div
            id="about-div"
            className="is-size-4 has-text-black has-text-weight-light"
            style={{
              display: isPriceActive ? "block" : "none",
            }}
          >
            prices
          </div>
          <div 
            className="is-size-4 has-background-white"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              aspectRatio: "1/1",
              borderRadius: "50%",
              padding: "1rem",
              backgroundColor: "white"
            }}
          >
            <i className="fa-solid fa-coins has-text-black"></i>
          </div>
        </a>
        <a 
          className="menu-list-item navbar-item navbar-object is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center" 
          onMouseOver={ (e) => {setContactIsActive(!isContactActive); $(e.currentTarget).addClass("has-background-white") }}
          onMouseOut={ (e) => {setContactIsActive(!isContactActive); $(e.currentTarget).removeClass("has-background-white") }}
        >
          <div
            id="about-div"
            className="is-size-4 has-text-black has-text-weight-light"
            style={{
              display: isContactActive ? "block" : "none",
            }}
          >
            contact
          </div>
          <div
            className="is-size-4 has-background-white"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              aspectRatio: "1/1",
              borderRadius: "50%",
              padding: "1rem",
              backgroundColor: "white"
            }}
          >
            <i className="fa-solid fa-phone has-text-black"></i>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
