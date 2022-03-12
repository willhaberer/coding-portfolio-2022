import React from "react";
import { Link } from "react-router-dom";
import TypeAnimation from "react-type-animation";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="siteName">
        <Link id="titleLink" to="/">
          <TypeAnimation
            cursor={true}
            sequence={["Will Haberer Portfolio", 1000, "Will Haberer"]}
            wrapper="h2"
            repeat={1}
          />
        </Link>
      </div>
      <div id="navList">
        <Link id="link" to="/about">
          About
        </Link>
        <Link id="link" to="/portfolio">
          Portfolio
        </Link>
        <a id="link" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
