import React, { useState } from "react";
import Logo from "../components/Logo";

const NavbarLogo = () => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar border"
      role="navigation"
      aria-label="main-navigation"
      style={{
        zIndex: "100",
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
        width: "33%"
      }}
    >
      <div className="navbar-brand has-background-black">
        <Link to="/" className="navbar-item" title="Logo">
          <div className="has-text-white ml-6" style={{ fontSize: "10rem", fontWeight: "900", textShadow: "2px 2px 2px red" }}>Marie Breloer</div>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarLogo;
