import React from "react";

import fmsn from "../assets/fmsn.png";
import ftnssjnks from "../assets/ftnssjnks.png";
import wd from "../assets/wd.png";
import ghLogo from "../assets/ghLogo.png";
import deploymentLogo from "../assets/deploymentLogo.png";

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
                height="20%"
                width="20%"
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
                height="20%"
                width="20%"
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
                height="20%"
                width="20%"
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
                height="20%"
                width="20%"
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
                height="20%"
                width="20%"
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
                height="20%"
                width="20%"
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
