import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "./hero";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
    </>
  );
};

export default Home;
