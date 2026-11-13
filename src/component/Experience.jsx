import React from "react";
import { IconCheck, IconDownload } from "./Icons";
import { personalInfo } from "../data/portfolioData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 lg:py-32 bg-[#F5F3EE] border-t border-[#777C62]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#C46B45] font-semibold block mb-2 sm:mb-3">
            [ 07 // TRAJECTORY & CREDENTIALS ]
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#20211F]">
            Education & Engineering Trajectory
          </h2>
          <p className="mt-3 sm:mt-4 text-[#777C62] text-xs sm:text-sm lg:text-base font-light leading-relaxed">
            Combining rigorous theoretical foundation in computer engineering from Gujarat
            Technological University with hands-on full stack software delivery.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-[#777C62]/30 ml-2.5 sm:ml-6 pl-5 sm:pl-10 space-y-10 sm:space-y-16">
          {/* Milestone 1: Engineering Education */}
          <div className="relative group">
            {/* Timeline Node Pin */}
            <div className="absolute -left-[31px] sm:-left-[51px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FAF9F6] border-2 border-[#C46B45] flex items-center justify-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C46B45]" />
            </div>

            <div className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-[#FAF9F6] border border-[#777C62]/25 shadow-xs hover:border-[#C46B45] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-[#777C62]/15 mb-4 sm:mb-6">
                <div>
                  <span className="font-mono text-[10px] sm:text-xs text-[#C46B45] font-semibold tracking-wider uppercase block">
                    DEGREE PROGRAM // 2022 — 2026
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#20211F] mt-1 leading-snug">
                    Bachelor of Engineering in Computer Engineering
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#777C62] mt-0.5">
                    Gujarat Technological University (GTU) • Gujarat, India
                  </p>
                </div>

                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono bg-[#E8E4DA]/60 border border-[#777C62]/25 text-[#20211F] font-semibold self-start sm:self-auto shrink-0">
                  GRADUATION: 2026
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#20211F]/80 leading-relaxed font-light">
                <p>
                  Pursuing an intensive 4-year undergraduate curriculum in computer engineering,
                  focusing on fundamental computer science paradigms, algorithmic complexity,
                  relational database management, and distributed system architectures.
                </p>

                <div>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#777C62] font-semibold block mb-2">
                    RELEVANT ACADEMIC & TECHNICAL COURSEWORK:
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Database Management (DBMS)",
                      "Object-Oriented Programming",
                      "Operating Systems",
                      "Computer Networks",
                      "Web Technologies",
                      "Software Engineering",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs bg-[#E8E4DA]/50 border border-[#777C62]/20 text-[#20211F] font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 2: Independent Full Stack Engineering */}
          <div className="relative group">
            {/* Timeline Node Pin */}
            <div className="absolute -left-[31px] sm:-left-[51px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FAF9F6] border-2 border-[#777C62] flex items-center justify-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#777C62]" />
            </div>

            <div className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-[#FAF9F6] border border-[#777C62]/25 shadow-xs hover:border-[#C46B45] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-[#777C62]/15 mb-4 sm:mb-6">
                <div>
                  <span className="font-mono text-[10px] sm:text-xs text-[#C46B45] font-semibold tracking-wider uppercase block">
                    PRACTICE & CLIENT BUILDS // 2023 — PRESENT
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#20211F] mt-1 leading-snug">
                    Full Stack Developer & Independent Builder
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#777C62] mt-0.5">
                    Self-Initiated Products & Commercial Client Applications
                  </p>
                </div>

                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono bg-[#E8E4DA]/60 border border-[#777C62]/25 text-[#777C62] font-semibold self-start sm:self-auto shrink-0">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#20211F]/80 leading-relaxed font-light">
                <p>
                  Engineered and launched comprehensive digital platforms spanning agritech,
                  commercial industrial presentation, content management, and luxury hospitality:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-[#C46B45] shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-[#20211F]">Farm Advisory System:</strong> MERN
                      application enabling crop tracking, yield forecasting, and expense/income accounting.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-[#C46B45] shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-[#20211F]">ArticleHub CMS:</strong> Publishing
                      system with secure JWT authentication and rich markdown workflows.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-[#C46B45] shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-[#20211F]">Genuine Forever Containers:</strong> Industrial
                      B2B product showcase with interactive specs and lead capture.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-[#C46B45] shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-[#20211F]">Cue Club Coventry:</strong> Cinematic
                      hospitality web redesign for a premier UK venue with reservation flows.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Banner */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-7 lg:p-8 rounded-2xl bg-[#E8E4DA]/60 border border-[#777C62]/25 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#20211F]">
              Need a verified PDF copy for your hiring pipeline?
            </h4>
            <p className="text-xs sm:text-sm text-[#777C62] font-light">
              Includes full project descriptions, academic coursework, and verified contact links.
            </p>
          </div>

          <a
            href={personalInfo.resumePath}
            download="Sachi_Patel_Resume.pdf"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#20211F] text-[#F5F3EE] text-xs font-semibold uppercase tracking-widest hover:bg-[#C46B45] transition-all shadow-sm shrink-0 text-center"
          >
            <IconDownload className="w-4 h-4" />
            <span>Download Official Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
