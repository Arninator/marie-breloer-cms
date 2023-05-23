import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.png";

// import FontAwesomeIcon from ".."

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-flex-direction-column is-align-content-end"
      role="navigation"
      aria-label="main-navigation"
      style={{
        backgroundColor: "transparent",
        zIndex: "100",
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
        marginTop: "-28vh",
        marginLeft: "90vw",
        height: "50vh",
        justifyContent: "space-around",
        alignItems: "flex-end",
        padding: "2% 0"
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
      <div className="is-flex is-flex-direction-row is-justify-content-center has-background-white" style={{ borderRadius: "0%", paddingRight: "5vw", paddingLeft: "2vw"}}>
        <a className="is-size-1 has-text-weight-light">
          <i class="fa-regular fa-eye has-text-black has-text-centered has-text-weight-light"></i>
        </a>
      </div>
      <div className="is-flex is-flex-direction-row is-justify-content-center has-background-white" style={{ borderRadius: "0%", paddingRight: "5vw", paddingLeft: "2vw"}}>
        <a className="is-size-1 has-text-weight-light">
          <i class="fas fa-euro-sign has-text-black has-text-centered has-text-weight-light"></i>
        </a>
      </div>
      <div className="is-flex is-flex-direction-row is-justify-content-center has-background-white" style={{ borderRadius: "0%", paddingRight: "5vw", paddingLeft: "2vw"}}>
        <a className="is-size-1 has-text-weight-light">
          	<i class="fas fa-phone-volume has-text-black has-text-centered has-text-weight-light"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
