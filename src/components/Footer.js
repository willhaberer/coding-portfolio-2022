import React from "react";
import { Link } from "react-router-dom";

import ghLogo from "../assets/ghLogo.png";
import liLogo from "../assets/LiLogo.png";
import emailLogo from "../assets/emailLogo.png";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <h3 id="footerContact">Contact</h3>
      <div id="contactLinks">
        <a
          href="https://github.com/willhaberer"
          target="_blank"
          rel="noreferrer"
          id="contactLogo"
        >
          <img src={ghLogo} alt="Github Logo" height="8%" width="8%"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/will-haberer/"
          target="_blank"
          rel="noreferrer"
          id="contactLogo"
        >
          <img src={liLogo} alt="Linkedin Logo" height="8%" width="8%"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/will-haberer/"
          target="_blank"
          rel="noreferrer"
          id="contactLogo"
        >
          <img src={emailLogo} alt="Email Logo" height="8%" width="8%"></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
