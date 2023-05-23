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
        backgroundColor: "transparent",
        zIndex: "100",
        paddingTop: "20rem",
      }}
    >
      <Logo />
    </nav>
  );
};

export default NavbarLogo;
