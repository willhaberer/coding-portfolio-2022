import React from "react";

import "../styles/About.css";

import html5Logo from "../assets/html5Logo.png";
import cssLogo from "../assets/cssLogo.png";

function About() {
  return (
    <div id="mainContainer">
      <h1>About</h1>
      <div id="skillsContainer">
        <h3 id="aboutHeader">Skills</h3>
        <h5 id="aboutSubHeader">Front End</h5>
        <div id="frontEnd">
          <ul id="card-wrapper">
            <li id="skillCard">
              <img
                src={html5Logo}
                alt="HTML5 Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">HTML5</h5>
            </li>
            <li id="skillCard">
              <img
                src={cssLogo}
                alt="CSS Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">CSS</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
