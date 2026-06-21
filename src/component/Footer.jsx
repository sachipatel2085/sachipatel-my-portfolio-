import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-500/20 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Sachi<span className="text-yellow-500">.</span>
            </h2>

            <p className="mt-4 text-zinc-400 leading-7">
              Full Stack Developer passionate about building modern, scalable
              and responsive web applications using MERN Stack.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <NavLink
                to="/"
                className="text-zinc-400 hover:text-yellow-500 transition"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="text-zinc-400 hover:text-yellow-500 transition"
              >
                About
              </NavLink>

              <NavLink
                to="/skills"
                className="text-zinc-400 hover:text-yellow-500 transition"
              >
                Skills
              </NavLink>

              <NavLink
                to="/projects"
                className="text-zinc-400 hover:text-yellow-500 transition"
              >
                Projects
              </NavLink>

              <NavLink
                to="/contact"
                className="text-zinc-400 hover:text-yellow-500 transition"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Contact Info
            </h3>

            <div className="space-y-3 text-zinc-400">
              <p>
                <i className="fa-solid fa-location-dot mr-2 text-yellow-500"></i>
                Himmatnagar, Gujarat
              </p>

              <p>
                <i className="fa-solid fa-phone mr-2 text-yellow-500"></i>
                +91 78638 47823
              </p>

              <p>
                <i className="fa-solid fa-envelope mr-2 text-yellow-500"></i>
                sachixl300@gmail.com
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/sachipatel2085"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/sachikumar-patel-b847612a0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="https://www.instagram.com/patelsachi2025?igsh=MWV2eHc4aGFzNXVwcg=="
                className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-center">
              © {new Date().getFullYear()} Sachi Patel. All Rights Reserved.
            </p>

            <p className="text-zinc-500 text-center">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
