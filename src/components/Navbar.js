import React from "react";
import { Link } from "react-router-dom";
import TypeAnimation from "react-type-animation";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <TypeAnimation
        cursor={true}
        sequence={["Will Haberer", 1000, "Will Haberer"]}
        wrapper="h2"
        repeat={1}
      />
      <Link id="link" to="/about">
        About
      </Link>
      <Link id="link" to="/portfolio">
        Portfolio
      </Link>
      <Link id="link" to="/contact">
        Contact
      </Link>
      <Link id="link" to="/resume">
        Resume
      </Link>
    </div>
  );
};

export default Navbar;