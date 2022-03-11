import React from "react";

import fmsn from "../assets/fmsn.png";
import ftnssjnks from "../assets/ftnssjnks.png";
import wd from "../assets/wd.png";
import ghLogo from "../assets/ghLogo.png";
import deploymentLogo from "../assets/deploymentLogo.png";
import html5Logo from "../assets/html5Logo.png";
import cssLogo from "../assets/cssLogo.png";
import javascriptLogo from "../assets/javascriptLogo.png";
import mernLogo from "../assets/mernLogo.png";
import webApi from "../assets/webAPIS.png";

import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div id="portfolioContainer">
      <h1 id="portfolioHeader">Portfolio</h1>
      <h4 id="portfolioSubHeader">
        *Hover over a project to learn more or to view the deployment and Github
        links!
      </h4>
      <h3 id="projectName">MERN Stack</h3>
      <div class="image">
        <img class="image__img" src={fmsn} alt="Find Me Something New"></img>
        <div class="image__overlay image__overlay--blur" id="bottomOverlay">
          <div class="image__title">Find Me Something New</div>
          <p class="image__description">
            FMSN offers users an app that can randomely generate new music with
            a relatively low amount of streams. FMSN also allows users to save
            these songs to their profile to listen again later.
          </p>
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
            <li id="skillCard">
              <img
                src={javascriptLogo}
                alt="Javascript Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Javascript</h5>
            </li>
            <li id="skillCard">
              <img
                src={mernLogo}
                alt="Mern Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">MERN</h5>
            </li>
            <li id="skillCard">
              <img
                src={webApi}
                alt="Web API's"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Web APIs</h5>
            </li>
          </ul>
          <div id="projectLinks">
            <a
              href="https://github.com/willhaberer/Find-Me-Something-New"
              target="_blank"
              rel="noreferrer"
              id="projectLogo"
            >
              <img
                src={ghLogo}
                alt="Github Logo"
                height="16%"
                width="16%"
              ></img>
              <div>Github</div>
            </a>

            <a
              href="https://fmsn.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              id="projectLogo"
            >
              <img
                src={deploymentLogo}
                alt="Deployment Logo"
                height="13%"
                width="13%"
              ></img>
              <div>Deployment</div>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <h3 id="projectName">Backend and Data Modeling</h3>
      <div class="image">
        <img class="image__img" src={ftnssjnks} alt="Ftnss Jnks"></img>
        <div class="image__overlay image__overlay--blur">
          <div class="image__title">Ftnss Jnks</div>
          <p class="image__description">Here we have a bri.</p>
          <div id="projectLinks">
            <a
              href="https://github.com/hyanez/Ftnss-Jnks"
              target="_blank"
              rel="noreferrer"
              id="projectLogo"
            >
              <img
                src={ghLogo}
                alt="Github Logo"
                height="16%"
                width="16%"
              ></img>
              <div>Github</div>
            </a>
            <a
              href="https://ftnss-jnks.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              id="projectLogo"
            >
              <img
                src={deploymentLogo}
                alt="Deployment Logo"
                height="13%"
                width="13%"
              ></img>
              <div>Deployment</div>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <h3 id="projectName">Full Stack</h3>
      <div class="image" id="bottomImage">
        <img class="image__img" src={wd} alt="Weather Dash"></img>
        <div class="image__overlay image__overlay--blur">
          <div class="image__title">Weather Dashboard</div>
          <p class="image__description">Here we have a brick wall.</p>
          <div id="projectLinks">
            <a
              href="https://github.com/willhaberer/Weather-Dashboard"
              target="_blank"
              rel="noreferrer"
              id="projectLogo"
            >
              <img
                src={ghLogo}
                alt="Github Logo"
                height="16%"
                width="16%"
              ></img>
              <div>Github</div>
            </a>
            <a
              href="https://willhaberer.github.io/Weather-Dashboard/"
              target="_blank"
              rel="noreferrer"
              id="projectLogo"
            >
              <img
                src={deploymentLogo}
                alt="Deployment Logo"
                height="13%"
                width="13%"
              ></img>
              <div>Deployment</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
