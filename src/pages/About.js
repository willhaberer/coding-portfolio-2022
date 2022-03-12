import React from "react";

import "../styles/About.css";

import html5Logo from "../assets/html5Logo.png";
import cssLogo from "../assets/cssLogo.png";
import javascriptLogo from "../assets/javascriptLogo.png";
import jqueryLogo from "../assets/jqueryLogo.png";
import reactLogo from "../assets/reactLogo.png";
import bootstrapLogo from "../assets/bootstrapLogo.png";
import nodeLogo from "../assets/nodeLogo.png";
import expressLogo from "../assets/expressLogo.png";
import graphLogo from "../assets/graphLogo.png";
import mySqlLogo from "../assets/mySqlLogo.png";
import mongoLogo from "../assets/mongoLogo.png";
import seqLogo from "../assets/sequelizeLogo.png";
import jestLogo from "../assets/jestLogo.png";
import gitLogo from "../assets/gitLogo.png";
import npmLogo from "../assets/npmLogo.png";
import herokuLogo from "../assets/herokuLogo.png";
import premiereLogo from "../assets/premiereLogo.png";
import leadershipLogo from "../assets/leadershipLogo.png";
import gimpLogo from "../assets/gimpLogo.png";
import bcryptLogo from "../assets/bcryptLogo.png";
import webApi from "../assets/webAPIS.png";
import handlebars from "../assets/handlebars.png";
import chameleon from "../assets/chameleon.png";

function About() {
  return (
    <div id="mainContainer">
      <div id="aboutContainer">
        <h3 id="aboutHeader">About Me</h3>
        <p id="aboutP">
          Hello, I am a 23 year old graduate graduate from the Columbia
          University Full Stack Web Development program ready and excited to
          start my career in Tech. In 2020 I graduated from the University of
          Virginia with a Bachelor's Of Arts in Government. Most recently I
          worked as a Digital and Data Director for WRS, a consulting firm based
          out of central Virginia. In this role my duties included project
          managment as well as ensuring data was analyzed and presented to
          relevant parties to target areas of oppurtunity.
        </p>
        <p id="aboutP">
          One of the many reasons I love to code is the ability to both use the
          creative and logical parts of my brain. Due to my past work, I am most
          comfortable on the back end working with data, but am adaptable enough
          to work as a Full Stack developer.
        </p>
        <p id="aboutPbottom">
          In my free time you can find me tring out a new recipe in the kitchen,
          both creating and solving puzzles, and playing/coaching hockey or
          soccer. I'm always interested in discussing politics, Formula One or
          whatever book I'm currently reading!
        </p>
      </div>
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
                src={jqueryLogo}
                alt="Jquery Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">jQuery</h5>
            </li>
            <li id="skillCard">
              <img
                src={reactLogo}
                alt="React Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">React</h5>
            </li>
            <li id="skillCard">
              <img
                src={bootstrapLogo}
                alt="Bootstrap Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Bootstrap</h5>
            </li>
            <li id="skillCard">
              <img
                src={handlebars}
                alt="Handlebars Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Handlebars</h5>
            </li>
          </ul>
        </div>
        <h5 id="aboutSubHeader">Back End</h5>
        <div id="backEnd">
          <ul id="card-wrapper">
            <li id="skillCard">
              <img
                src={nodeLogo}
                alt="Node Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Node Js</h5>
            </li>
            <li id="skillCard">
              <img
                src={expressLogo}
                alt="Express Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Expres Js</h5>
            </li>
            <li id="skillCard">
              <img
                src={graphLogo}
                alt="Graph Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">GraphQL</h5>
            </li>
            <li id="skillCard">
              <img
                src={mongoLogo}
                alt="MongoDB Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">MongoDB</h5>
            </li>
            <li id="skillCard">
              <img
                src={mySqlLogo}
                alt="MySQL Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">MySQL</h5>
            </li>
            <li id="skillCard">
              <img
                src={seqLogo}
                alt="MySQL Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Sequelize</h5>
            </li>
            <li id="skillCard">
              <img
                src={jestLogo}
                alt="Jest Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Jest</h5>
            </li>
          </ul>
        </div>
        <h5 id="aboutSubHeader">Other Skills</h5>
        <div id="backEnd">
          <ul id="card-wrapper">
            <li id="skillCard">
              <img
                src={gitLogo}
                alt="Git Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Git</h5>
            </li>
            <li id="skillCard">
              <img
                src={npmLogo}
                alt="NPM Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">NPM</h5>
            </li>
            <li id="skillCard">
              <img
                src={chameleon}
                alt="Chameleon"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Adaptability</h5>
            </li>
            <li id="skillCard">
              <img
                src={herokuLogo}
                alt="Heroku Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Heroku</h5>
            </li>
            <li id="skillCard">
              <img
                src={premiereLogo}
                alt="PremierePro Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Premeire Pro</h5>
            </li>
            <li id="skillCard">
              <img
                src={leadershipLogo}
                alt="Leadership"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Leadership</h5>
            </li>
            <li id="skillCard">
              <img
                src={gimpLogo}
                alt="Gimp2 Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">Gimp2</h5>
            </li>
            <li id="skillCard">
              <img
                src={bcryptLogo}
                alt="Bcrypt Logo"
                height="50%"
                width="50%"
                id="skillLogo"
              ></img>
              <h5 id="caption">BCrypt</h5>
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
        </div>
      </div>
    </div>
  );
}

export default About;
