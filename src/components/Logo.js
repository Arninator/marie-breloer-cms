import React, { useState } from "react";
import { Link } from "gatsby";

const Logo = () => {
  // const [isActive, setIsActive] = useState(false);

  console.log(document.documentElement.scrollHeight);

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main-navigation"
      style={{
        // zIndex: "100",
        position: "absolute",
        top: "0",
        width: "40%",
        height: "100%",
      }}
    >
      <div className="navbar-brand is-flex is-flex-direction-column is-justify-content-flex-start">
        <Link to="/" className="navbar-item" title="Logo">
          <div className="has-text-black mx-6" style={{ fontSize: "5rem", fontWeight: "100"}}>marie breloer</div>
        </Link>
      </div>
    </nav>
  );
};

export default Logo;
