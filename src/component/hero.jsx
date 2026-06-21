import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-25 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-500/30 bg-zinc-900/70 text-yellow-400 text-sm font-medium backdrop-blur-sm">
              ✨ Welcome to my portfolio
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              Hi, I'm
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Sachi Patel
              </span>
            </h1>

            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-zinc-300">
              Full Stack Developer
            </h2>

            <p className="mt-6 text-zinc-400 text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              I create modern, responsive, and scalable web applications using
              React, Node.js, Express, MongoDB, and cutting-edge technologies.
              Turning ideas into premium digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <NavLink
                to="/contact"
                className="group h-14 px-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold hover:scale-105 transition-all duration-300"
              >
                Hire Me
                <i className="fa-solid fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
              </NavLink>

              <a
                href="/resumepatelsachikumaranilbhai.pdf"
                download
                className="h-14 px-8 min-w-[180px] flex items-center justify-center rounded-xl border-2 border-yellow-500 text-yellow-400 font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                <i className="fa-solid fa-download mr-2"></i>
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-10 justify-center lg:justify-start">
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

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"></div>

              {/* Image Card */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-[30px] overflow-hidden border border-yellow-500/20 bg-zinc-900 backdrop-blur-md shadow-2xl shadow-yellow-500/10">
                <img
                  src="/profile.jpg"
                  alt="Sachi Patel"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-5 px-5 py-3 rounded-xl bg-zinc-900 border border-yellow-500/30 shadow-lg">
                <h3 className="text-yellow-400 font-bold">MERN Stack</h3>
                <p className="text-xs text-zinc-400">React • Node • MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
