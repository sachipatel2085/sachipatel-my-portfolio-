import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import CustomCursor from "./component/CustomCursor";

// Scroll to top on route navigation
const RouteChangeTracker = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

// Route wrapper for dedicated standalone section views
const DedicatedView = ({ title, subtitle, children }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-4">
        <div className="pb-4 border-b border-[#777C62]/20 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C46B45] font-semibold">
              STANDALONE VIEW // {subtitle}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#20211F]">
              {title}
            </h1>
          </div>
          <a
            href="/"
            className="font-mono text-xs uppercase tracking-wider text-[#777C62] hover:text-[#C46B45] transition-colors"
          >
            ← Full Portfolio
          </a>
        </div>
      </div>
      {children}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <RouteChangeTracker />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <DedicatedView title="About Sachi Patel" subtitle="BACKGROUND">
              <About />
            </DedicatedView>
          }
        />
        <Route
          path="/services"
          element={
            <DedicatedView title="Services & Capabilities" subtitle="WHAT I DO">
              <Services />
            </DedicatedView>
          }
        />
        <Route
          path="/projects"
          element={
            <DedicatedView title="Selected Projects" subtitle="PORTFOLIO">
              <Projects />
            </DedicatedView>
          }
        />
        <Route
          path="/skills"
          element={
            <DedicatedView title="Technical Skills" subtitle="EXPERTISE">
              <Skills />
            </DedicatedView>
          }
        />
        <Route
          path="/experience"
          element={
            <DedicatedView title="Experience & Education" subtitle="TRAJECTORY">
              <Experience />
            </DedicatedView>
          }
        />
        <Route
          path="/contact"
          element={
            <DedicatedView title="Initiate Dialogue" subtitle="CONTACT">
              <Contact />
            </DedicatedView>
          }
        />
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
