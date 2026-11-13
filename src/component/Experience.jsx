import React from "react";
import { IconCheck, IconDownload, IconSparkles } from "./Icons";
import { personalInfo } from "../data/portfolioData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32 bg-[#F5F3EE] border-t border-[#777C62]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C46B45] font-semibold block mb-3">
            [ 07 // TRAJECTORY & CREDENTIALS ]
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#20211F]">
            Education & Engineering Trajectory
          </h2>
          <p className="mt-4 text-[#777C62] text-base font-light leading-relaxed">
            Combining rigorous theoretical foundation in computer engineering from Gujarat
            Technological University with hands-on full stack software delivery.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-[#777C62]/30 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-16">
          {/* Milestone 1: Engineering Education */}
          <div className="relative group">
            {/* Timeline Node Pin */}
            <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#FAF9F6] border-2 border-[#C46B45] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#C46B45]" />
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-[#777C62]/25 shadow-xs hover:border-[#C46B45] transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#777C62]/15 mb-6">
                <div>
                  <span className="font-mono text-xs text-[#C46B45] font-semibold tracking-wider uppercase block">
                    DEGREE PROGRAM // 2022 — 2026
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F] mt-1">
                    Bachelor of Engineering in Computer Engineering
                  </h3>
                  <p className="text-sm font-medium text-[#777C62] mt-0.5">
                    Gujarat Technological University (GTU) • Gujarat, India
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#E8E4DA]/60 border border-[#777C62]/25 text-[#20211F] font-semibold">
                  GRADUATION: 2026
                </span>
              </div>

              <div className="space-y-4 text-sm text-[#20211F]/80 leading-relaxed font-light">
                <p>
                  Pursuing an intensive 4-year undergraduate curriculum in computer engineering,
                  focusing on fundamental computer science paradigms, algorithmic complexity,
                  relational database management, and distributed system architectures.
                </p>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#777C62] font-semibold block mb-2">
                    RELEVANT ACADEMIC & TECHNICAL COURSEWORK:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Database Management Systems (DBMS)",
                      "Object-Oriented Programming (OOP)",
                      "Operating Systems",
                      "Computer Networks",
                      "Web Technologies",
                      "Software Engineering",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-lg text-xs bg-[#E8E4DA]/50 border border-[#777C62]/20 text-[#20211F] font-medium"
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
            <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#FAF9F6] border-2 border-[#777C62] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#777C62]" />
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-[#777C62]/25 shadow-xs hover:border-[#C46B45] transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#777C62]/15 mb-6">
                <div>
                  <span className="font-mono text-xs text-[#C46B45] font-semibold tracking-wider uppercase block">
                    PRACTICE & CLIENT BUILDS // 2023 — PRESENT
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F] mt-1">
                    Full Stack Developer & Independent Builder
                  </h3>
                  <p className="text-sm font-medium text-[#777C62] mt-0.5">
                    Self-Initiated Products & Commercial Client Applications
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#E8E4DA]/60 border border-[#777C62]/25 text-[#777C62] font-semibold">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-4 text-sm text-[#20211F]/80 leading-relaxed font-light">
                <p>
                  Engineered and launched comprehensive digital platforms spanning agritech,
                  commercial industrial presentation, content management, and luxury hospitality:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5">
                    <IconCheck className="w-4 h-4 text-[#C46B45] shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-[#20211F]">Farm Advisory System:</strong> Designed
                      and deployed an end-to-end MERN application enabling crop tracking, yield forecasting, and
                      multi-category income/expense accounting for farmers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <IconCheck className="w-4 h-4 text-[#C46B45] shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-[#20211F]">ArticleHub CMS:</strong> Developed a
                      robust content publishing system featuring secure JWT authentication, rich text editing,
                      and category indexing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <IconCheck className="w-4 h-4 text-[#C46B45] shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-[#20211F]">Genuine Forever Containers:</strong> Built
                      an industrial B2B product showcase with interactive specification tables and direct lead capture.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <IconCheck className="w-4 h-4 text-[#C46B45] shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-[#20211F]">Cue Club Coventry:</strong> Crafted a
                      cinematic web redesign for a premier UK entertainment venue with table booking functionality.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#E8E4DA]/60 border border-[#777C62]/25 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-[#20211F]">
              Need a verified PDF copy for your hiring pipeline?
            </h4>
            <p className="text-xs sm:text-sm text-[#777C62] font-light">
              Includes full project descriptions, academic coursework, and verified contact links.
            </p>
          </div>

          <a
            href={personalInfo.resumePath}
            download="Sachi_Patel_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#20211F] text-[#F5F3EE] text-xs font-semibold uppercase tracking-widest hover:bg-[#C46B45] transition-all shadow-sm shrink-0"
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
