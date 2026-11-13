import React from "react";
import {
  IconDownload,
  IconSparkles,
  IconMapPin,
} from "./Icons";
import { personalInfo, timelineData } from "../data/portfolioData";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 bg-[#E8E4DA]/40 border-t border-[#777C62]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#C46B45] font-semibold">
              [ 02 // ABOUT & PHILOSOPHY ]
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#20211F] max-w-3xl leading-tight">
            Engineering scalable web systems with deliberate minimalism and architectural discipline.
          </h2>
          <div className="w-16 h-0.5 bg-[#C46B45] mt-4 sm:mt-6" />
        </div>

        {/* Two-Column Creative Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Narrative & Personal Credentials (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-4 text-sm sm:text-base lg:text-lg text-[#20211F]/80 leading-relaxed font-light">
              <p>
                I am a Computer Engineering student at{" "}
                <strong className="font-semibold text-[#20211F]">
                  Gujarat Technological University (GTU)
                </strong>
                , completing my Bachelor of Engineering degree in 2026. My work bridges the
                disciplined principles of software engineering with modern, responsive frontend
                aesthetics.
              </p>
              <p>
                Specializing in the{" "}
                <strong className="font-semibold text-[#20211F]">MERN Stack</strong> (React,
                Node.js, Express.js, MongoDB), I focus on building reliable, end-to-end digital
                solutions. From architecting normalized and indexed database schemas to crafting
                accessible user interfaces with sub-second page loads, I treat every layer of the
                stack with precision.
              </p>
              <p>
                My problem-solving methodology is rooted in first principles: understanding real
                user needs, breaking large features into decoupled modules, writing clean,
                maintainable code, and testing continuously across viewports and networks.
              </p>
            </div>

            {/* Personal Professional Details Grid */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF9F6] border border-[#777C62]/25 shadow-xs">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#777C62] font-semibold mb-4 sm:mb-5 flex items-center gap-2">
                <IconSparkles className="w-3.5 h-3.5 text-[#C46B45]" />
                PROFESSIONAL DOSSIER
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-6 text-sm">
                <div className="pb-2.5 border-b border-[#777C62]/15">
                  <span className="font-mono text-[11px] text-[#777C62] block">Full Name</span>
                  <span className="font-medium text-[#20211F]">{personalInfo.fullName}</span>
                </div>

                <div className="pb-2.5 border-b border-[#777C62]/15">
                  <span className="font-mono text-[11px] text-[#777C62] block">Education</span>
                  <span className="font-medium text-[#20211F]">
                    B.E. Computer Engineering (GTU '26)
                  </span>
                </div>

                <div className="pb-2.5 border-b border-[#777C62]/15">
                  <span className="font-mono text-[11px] text-[#777C62] block">Location</span>
                  <span className="font-medium text-[#20211F] flex items-center gap-1.5">
                    <IconMapPin className="w-3.5 h-3.5 text-[#C46B45] shrink-0" />
                    <span>{personalInfo.location}</span>
                  </span>
                </div>

                <div className="pb-2.5 border-b border-[#777C62]/15">
                  <span className="font-mono text-[11px] text-[#777C62] block">Availability</span>
                  <span className="font-medium text-[#C46B45] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#777C62] shrink-0" />
                    <span>Available for Opportunities</span>
                  </span>
                </div>

                <div className="pt-0.5 sm:pt-1">
                  <span className="font-mono text-[11px] text-[#777C62] block">Languages</span>
                  <span className="font-medium text-[#20211F]">English, Hindi, Gujarati</span>
                </div>

                <div className="pt-0.5 sm:pt-1">
                  <span className="font-mono text-[11px] text-[#777C62] block">Primary Focus</span>
                  <span className="font-medium text-[#20211F]">MERN Stack & Scalable Web</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href={personalInfo.resumePath}
                download="Sachi_Patel_Resume.pdf"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#20211F] text-[#F5F3EE] text-xs font-semibold uppercase tracking-widest hover:bg-[#C46B45] transition-colors shadow-sm"
              >
                <IconDownload className="w-4 h-4" />
                <span>Download Complete Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#777C62]/30 text-[#20211F] text-xs font-semibold uppercase tracking-widest hover:bg-[#FAF9F6] transition-colors"
              >
                <span>Initiate Conversation</span>
              </a>
            </div>
          </div>

          {/* Right Column: Statistics Cards & Mini Timeline (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-[#777C62]/20 shadow-xs hover:border-[#C46B45]/50 transition-all"
                >
                  <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#C46B45] block">
                    {stat.value}
                  </span>
                  <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#20211F] mt-1 leading-snug">
                    {stat.label}
                  </h4>
                  <p className="font-mono text-[10px] sm:text-[11px] text-[#777C62] mt-0.5 sm:mt-1 leading-tight">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Small Visual Timeline */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF9F6] border border-[#777C62]/25 shadow-xs space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#777C62]/15">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#777C62] font-semibold">
                  CHRONOLOGY // ACADEMIC & BUILDER PATH
                </h3>
                <span className="font-mono text-[10px] text-[#C46B45]">VERIFIED</span>
              </div>

              <div className="space-y-5 sm:space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#777C62]/30 pl-6 sm:pl-7">
                {timelineData.map((item, i) => (
                  <div key={i} className="relative">
                    {/* Timeline Node Dot */}
                    <span className="absolute -left-[21px] sm:-left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#C46B45] ring-4 ring-[#FAF9F6]" />
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#C46B45] font-semibold block">
                      {item.period}
                    </span>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-[#20211F] mt-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#777C62] font-medium">
                      {item.organization} • {item.location}
                    </p>
                    <p className="text-xs text-[#20211F]/70 mt-1.5 sm:mt-2 leading-relaxed font-light">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Quote Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#20211F] text-[#F5F3EE] border border-[#777C62]/25">
              <p className="font-serif text-sm sm:text-base italic leading-relaxed text-[#F5F3EE]/90">
                "Effective software is built where engineering rigor meets quiet restraint. When code
                is written cleanly, the user interface feels effortless."
              </p>
              <div className="mt-3.5 sm:mt-4 pt-3 border-t border-[#777C62]/25 flex items-center justify-between">
                <span className="font-mono text-[10px] sm:text-[11px] text-[#C46B45]">SACHI PATEL</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#777C62]">CORE VALUE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
