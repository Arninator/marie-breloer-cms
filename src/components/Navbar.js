import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.png";

import { getImage } from "gatsby-plugin-image";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-flex-direction-column is-fixed-top"
      role="navigation"
      aria-label="main-navigation"
      style={{
        backgroundColor: "white"
      }}
    >
      <div className="container">
        <div className="navbar-brand is-color-black">
          <Link to="/" className="navbar-item" title="Logo" style={{ fontSize: "50px", fontFamily: ""}}>
            <img src={ logo } alt="Marie Breloer" style={{ width: "388px", height: "100%" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
            {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
            </li>
          <li className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
