import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Particles from "react-tsparticles";

import "./styles/App.css";
import particlesOptions from "./particles.json";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <Particles options={particlesOptions} />
      <BrowserRouter>
        <Fragment>
          <ScrollButton />
        </Fragment>
        <Navbar />
        <div id="body">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
