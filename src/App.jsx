import { useState } from "react";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Price from "./component/Price";
import Recomm from "./component/Recomm";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Allcategory from "./component/allcategory";
import Uidesign from "./component/Uidesign";
import Webtemplate from "./component/Webtemplate";
import Logo from "./component/Logo";
import Branding from "./component/Branding";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Header" element={<Header />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Services" element={<Services />} />
        <Route path="Price" element={<Price />} />
        <Route path="Recomm" element={<Recomm />} />
        <Route path="Portfolio/*" element={<Portfolio />} />
        <Route path="Allcategory" element={<Allcategory />} />
        <Route path="Uidesign" element={<Uidesign />} />
        <Route path="Webtemplate" element={<Webtemplate />} />
        <Route path="Logo" element={<Logo />} />
        <Route path="Branding" element={<Branding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
