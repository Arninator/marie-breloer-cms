import React, { useState } from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
import logo from "../img/logo.png";

const NavbarLogo = () => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar border"
      role="navigation"
      aria-label="main-navigation"
      style={{
        backgroundColor: "transparent",
        // zIndex: "100",
      }}
    >
      <div className="container border is-fixed-almost-top" style={{ marginTop: "10vh", backgroundColor: "inherit"}}>
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <div>Marie Breloer</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogo;
