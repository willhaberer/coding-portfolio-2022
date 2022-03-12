import React from "react";

import "../styles/Home.css";

function Home() {
  return (
    <div id="homeContainer">
      <h1 id="homeHeader">Hello, Welcome to My Portfolio</h1>
      <p id="homeP">
        I'm excited to start a career in Full-Stack Web Development where I can
        translate my passion for creating and solving logic based puzzles into a
        career.
      </p>
      <p id="homeBottomP">
        Feel free to reach out to me at: willhaberer@gmail.com
      </p>
      <a
        href="https://drive.google.com/file/d/1dajCpMUXYZkPetFmzWwFPCbmbqNgqxis/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        id="resumeA"
      >
        <h4 id="resume">Resume</h4>
      </a>
    </div>
  );
}

export default Home;
