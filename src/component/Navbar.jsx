import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-white">Sachi</span>
              <span className="text-yellow-500">.</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium transition duration-300 ${
                    isActive
                      ? "text-yellow-500 after:w-full"
                      : "text-zinc-300 hover:text-yellow-500 after:w-0 hover:after:w-full"
                  }
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:bg-yellow-500
    after:transition-all after:duration-300`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          {/* Resume Button */}
          <div className="hidden lg:block">
            <a
              href="/resumepatelsachikumaranilbhai.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20"
            >
              <i className="fa-solid fa-file-arrow-down mr-2"></i>
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-yellow-500 text-2xl"
            onClick={() => setOpen(!open)}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-yellow-500"
                      : "text-zinc-300 hover:text-yellow-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>{" "}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
