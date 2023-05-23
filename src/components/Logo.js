import React, { useState } from "react";
import { Link } from "gatsby";

const Logo = () => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className=""
      style={{
        zIndex: "100",
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
        width: "33%"
      }}>
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <div className="has-text-white ml-6" style={{ fontSize: "10rem", fontWeight: "900", textShadow: "2px 2px 2px black"}}>Marie Breloer</div>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
