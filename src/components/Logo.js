import React, { useState } from "react";
import { Link } from "gatsby";

const Logo = () => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <div
      id="logo"
      className=""
      // role="navigation"
      // aria-label="main-navigation"
      style={{
        backgroundColor: "transparent",
        zIndex: "100",
        position: "absolute",
        top: "0",
        // width: "100vw",
        height: typeof document === 'undefined' ? "100%" : document.activeElement.scrollHeight,
      }}
    >
      <div className="placeholder"></div>
      <div 
        className="sticky-item has-background-white is-flex is-flex-direction-row is-justify-content-flex-start"
        style={{
          width: "fit-content"
        }}
      >
        <Link to="/" className="" title="Logo">
          <div className="has-text-black mx-6" style={{ fontSize: "5rem", fontWeight: "100"}}>marie&nbsp;breloer</div>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
