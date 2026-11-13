import React from "react";
import Hero from "./hero";
import About from "./About";
import Services from "./Services";
import Process from "./Process";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import GithubActivity from "./GithubActivity";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#20211F]">
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <Skills />
      <Experience />
      <GithubActivity />
      <Contact />
    </main>
  );
};

export default Home;
