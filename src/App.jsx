import { useState } from "react";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="About" element={<About />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Services" element={<Services />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
