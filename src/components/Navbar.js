import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.png";

import $ from "jquery";
import { transform } from "lodash";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isAboutActive, setAboutIsActive] = useState(false);
  const [isWorkActive, setWorkIsActive] = useState(false);
  const [isPriceActive, setPriceIsActive] = useState(false);
  const [isContactActive, setContactIsActive] = useState(false);


  return (
    <nav
      className="navbar is-flex is-flex-direction-column"
      role="navigation"
      aria-label="main-navigation"
      style={{
        backgroundColor: "transparent",
        // zIndex: "100",
        position: "absolute",
        top: "0",
        // left: "90vw",
        height: document.documentElement.scrollHeight,
        minWidth: "100vw",
        maxWidth: "100vw",
        paddingRight: "4rem",
        justifyContent: "flex-start",
        alignItems: "flex-end",
      }}
    >
      <button
        className={`navbar-burger burger ${isActive && "is-active"}`}
        aria-expanded={isActive}
        onClick={() => setIsActive(!isActive)}
      >
        <span />
        <span />
        <span />
      </button>

      <a
        className="is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center" 
        style={{           
          position: "-webkit-sticky",
          position: "sticky",
          top: "3rem",
          width: "20vw",
          marginTop: "5rem"
        }}
        onMouseOver={ (e) => {setAboutIsActive(!isAboutActive); $(e.target).addClass("has-background-white") }}
        onMouseOut={ (e) => {setAboutIsActive(!isAboutActive); $(e.target).removeClass("has-background-white") }}
        >
        <div
          id="about-div"
          className="is-size-2 has-text-black has-text-weight-light"
          style={{
            display: isAboutActive ? "block" : "none",
          }}
        >
          About
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
          <i className="fa-regular fa-circle-user has-text-black"></i>
        </div>
      </a>
      <a 
        className="is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center" 
        style={{           
          position: "-webkit-sticky",
          position: "sticky",
          top: "3rem",
          width: "20vw",
          marginTop: "5rem"
        }}
        onMouseOver={ (e) => {setWorkIsActive(!isWorkActive); $(e.target).addClass("has-background-white") }}
        onMouseOut={ (e) => {setWorkIsActive(!isWorkActive); $(e.target).removeClass("has-background-white") }}
        >
        <div
          id="about-div"
          className="is-size-2 has-text-black has-text-weight-light"
          style={{
            display: isWorkActive ? "block" : "none",
          }}
        >
          Work
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
      </a>
      <a 
        className="is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center" 
        style={{           
          position: "-webkit-sticky",
          position: "sticky",
          top: "3rem",
          width: "20vw",
          marginTop: "5rem"
        }}
        onMouseOver={ (e) => {setPriceIsActive(!isPriceActive); $(e.target).addClass("has-background-white") }}
        onMouseOut={ (e) => {setPriceIsActive(!isPriceActive); $(e.target).removeClass("has-background-white") }}
        >
        <div
          id="about-div"
          className="is-size-2 has-text-black has-text-weight-light"
          style={{
            display: isPriceActive ? "block" : "none",
          }}
        >
          Prices
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
        className="is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center" 
        style={{           
          position: "-webkit-sticky",
          position: "sticky",
          top: "3rem",
          width: "20vw",
          marginTop: "5rem"
        }}
        onMouseOver={ (e) => {setContactIsActive(!isContactActive); $(e.target).addClass("has-background-white") }}
        onMouseOut={ (e) => {setContactIsActive(!isContactActive); $(e.target).removeClass("has-background-white") }}
        >
        <div
          id="about-div"
          className="is-size-2 has-text-black has-text-weight-light"
          style={{
            display: isContactActive ? "block" : "none",
          }}
        >
          Contact
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
    </nav>
  );
};

function onHover(event) {
  $(event.target).css("transform", "scale(1.5)")
}

function onHoverOut(event) {
  $(event.target).css("transform", "scale(1)")
}

export default Navbar;
