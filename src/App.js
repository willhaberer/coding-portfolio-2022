import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Particles from "react-tsparticles";

import "./styles/App.css";
import particlesOptions from "./particles.json";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Particles options={particlesOptions} />
      <BrowserRouter>
        <Navbar />
        <div id="body">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
