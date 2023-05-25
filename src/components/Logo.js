import React, { useState } from "react";
import { Link } from "gatsby";

const Logo = () => {
  // const [isActive, setIsActive] = useState(false);

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
        height: typeof document != undefined ? document.documentElement.scrollHeight : "100%",
      }}
    >
      <div className="navbar-brand has-background-white">
        <Link to="/" className="navbar-item" title="Logo">
          <div className="has-text-black mx-6" style={{ fontSize: "5rem", fontWeight: "300"}}>Marie Breloer</div>
        </Link>
      </div>
    </nav>
  );
};

export default Logo;
