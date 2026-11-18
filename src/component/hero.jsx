import React, { useState, useEffect, useRef } from "react";
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconArrowRight,
  IconDownload,
  IconTerminal,
  IconSparkles,
} from "./Icons";
import { personalInfo } from "../data/portfolioData";

const Hero = () => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const cardRef = useRef(null);

  const skillsList = [
    "Full Stack MERN Architecture",
    "High-Performance React Interfaces",
    "Scalable Node.js & Express Endpoints",
    "Robust MongoDB Data Modeling",
    "RESTful API & JWT Security",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % skillsList.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [skillsList.length]);

  const handleMouseMove = (e) => {
    // Disable 3D tilt on touch screens for optimal scroll performance
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28 overflow-hidden editorial-grid-bg flex items-center"
    >
      {/* Decorative Editorial Border Accents (Hidden on small mobile) */}
      <div className="hidden md:block absolute top-24 left-6 lg:left-12 font-mono text-[10px] text-[#777C62]/60 tracking-widest pointer-events-none select-none">
        INDEX // 001 — ARCHITECTURE & INTERFACES
      </div>
      <div className="hidden lg:block absolute top-24 right-12 font-mono text-[10px] text-[#777C62]/60 tracking-widest pointer-events-none select-none">
        LOC: GUJARAT, IN [23.59° N, 72.96° E]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        {/* Availability Badge Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8E4DA]/80 border border-[#777C62]/30 shadow-xs">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#777C62] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#777C62]" />
            </span>
            <span className="font-mono text-[11px] sm:text-xs text-[#20211F] font-medium tracking-wide">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs text-[#777C62]">
            <span>GTU '26</span>
            <span className="text-[#C46B45]">•</span>
            <span>MERN STACK</span>
          </div>
        </div>

        {/* Main Asymmetric Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#C46B45] font-semibold flex items-center gap-1.5">
                <IconSparkles className="w-3.5 h-3.5 text-[#C46B45] shrink-0" />
                PORTFOLIO & SYSTEM ARCHITECTURE
              </span>

              {/* Responsive Fluid Name & Title (Semantic H1 Entity for Google Indexing) */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#20211F] leading-[1.05] break-words">
                Sachi <span className="italic font-normal text-[#C46B45]">Patel</span>
                <span className="sr-only"> — Full Stack Developer &amp; MERN Stack Engineer</span>
              </h1>

              <div className="pt-1">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-[#777C62] font-semibold tracking-wide">
                  Full Stack Developer &amp; MERN Engineer
                </h2>
              </div>
            </div>

            {/* Rotating Skill Pill */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF9F6] border border-[#777C62]/20 max-w-xl shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#C46B45] font-semibold shrink-0">
                  SPECIALIZATION //
                </span>
                <span
                  key={activeSkillIndex}
                  className="font-mono text-xs sm:text-sm text-[#20211F] font-medium transition-all duration-300 animate-fadeIn truncate"
                >
                  {skillsList[activeSkillIndex]}
                </span>
              </div>
            </div>

            {/* Approach Description */}
            <p className="text-[#20211F]/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
              Transforming complex business logic and databases into high-performance,
              intuitive digital systems. Specializing in{" "}
              <strong className="font-semibold text-[#20211F]">React</strong>,{" "}
              <strong className="font-semibold text-[#20211F]">Node.js</strong>, and modern full-stack
              architectures built with precision, speed, and refined minimalism.
            </p>

            {/* CTAs & Social Links */}
            <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-[#C46B45] text-[#F5F3EE] font-semibold text-xs uppercase tracking-widest hover:bg-[#D77A51] transition-all duration-200 shadow-md shadow-[#C46B45]/20 group"
              >
                <span>Explore My Work</span>
                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Sachi_Patel_Resume.pdf"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-[#20211F]/30 text-[#20211F] font-semibold text-xs uppercase tracking-widest hover:bg-[#20211F] hover:text-[#F5F3EE] transition-all duration-200"
              >
                <IconDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Channels Row */}
            <div className="pt-2 flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#777C62] mr-1 sm:mr-2">
                CONNECT:
              </span>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#777C62]/25 text-[#20211F] hover:border-[#C46B45] hover:text-[#C46B45] hover:bg-[#FAF9F6] transition-all shrink-0"
                aria-label="GitHub Profile"
              >
                <IconGithub className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#777C62]/25 text-[#20211F] hover:border-[#C46B45] hover:text-[#C46B45] hover:bg-[#FAF9F6] transition-all shrink-0"
                aria-label="LinkedIn Profile"
              >
                <IconLinkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.email}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#777C62]/25 text-[#20211F] hover:border-[#C46B45] hover:text-[#C46B45] hover:bg-[#FAF9F6] transition-all shrink-0"
                aria-label="Send Email"
              >
                <IconMail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Themed Portrait with 3D Interactive Tilt (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md select-none"
              style={{
                perspective: "1200px",
              }}
            >
              {/* Corner crosshairs for architectural aesthetic */}
              <div className="absolute -top-3 -left-3 font-mono text-xs text-[#777C62]/50 z-20">+</div>
              <div className="absolute -top-3 -right-3 font-mono text-xs text-[#777C62]/50 z-20">+</div>
              <div className="absolute -bottom-3 -left-3 font-mono text-xs text-[#777C62]/50 z-20">+</div>
              <div className="absolute -bottom-3 -right-3 font-mono text-xs text-[#777C62]/50 z-20">+</div>

              {/* Themed Portrait Frame with 3D Tilt */}
              <div
                className="relative rounded-2xl overflow-hidden border border-[#777C62]/35 bg-[#20211F] shadow-2xl transition-transform duration-200 ease-out group"
                style={{
                  transform: tilt.active
                    ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
                    : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Themed Profile Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#161715]">
                  <img
                    src="/profile.jpg"
                    alt="Sachi Patel — Full Stack Developer & MERN Engineer in Gujarat, India"
                    width="1023"
                    height="1160"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-top filter contrast-[1.06] group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="eager"
                  />
                  
                  {/* Subtle Theme Warmth & Charcoal Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20211F]/95 via-[#20211F]/20 to-transparent pointer-events-none" />
                  <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#C46B45]/20 blur-3xl rounded-full pointer-events-none" />

                  {/* Top Editorial Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-[#20211F]/85 backdrop-blur-md border border-[#777C62]/30 text-[#F5F3EE]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C46B45] animate-pulse" />
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C46B45] font-semibold">
                      ENGINEER PORTRAIT
                    </span>
                  </div>

                  {/* Overlay Meta */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-[#F5F3EE] z-10">
                    <p className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#C46B45] uppercase">
                      PORTRAIT // SACHI PATEL
                    </p>
                    <p className="font-serif text-lg sm:text-xl font-bold text-[#F5F3EE]">
                      Full Stack Engineer
                    </p>
                    <p className="font-mono text-[10px] sm:text-[11px] text-[#777C62] mt-0.5 truncate">
                      B.E. Computer Engineering '26 • Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Code Annotation Floating Badge */}
              <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-xl bg-[#20211F] text-[#F5F3EE] border border-[#777C62]/30 shadow-lg space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#777C62]/30">
                  <div className="flex items-center gap-2">
                    <IconTerminal className="w-3.5 h-3.5 text-[#C46B45]" />
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#F5F3EE]">system_spec.json</span>
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] text-[#777C62]">NODE v24</span>
                </div>
                <div className="font-mono text-[10px] sm:text-[11px] text-[#777C62] leading-tight space-y-1">
                  <p>
                    <span className="text-[#C46B45]">engineer</span>: "Sachi Patel"
                  </p>
                  <p>
                    <span className="text-[#C46B45]">stack</span>: ["React19", "Node", "Mongo", "Express"]
                  </p>
                  <p>
                    <span className="text-[#C46B45]">status</span>: "Available for Hire"
                  </p>
                  <p>
                    <span className="text-[#C46B45]">education</span>: "B.E. Computer Engineering '26"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
