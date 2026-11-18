import React, { useEffect } from "react";
import { IconClose, IconArrowUpRight, IconGithub, IconCheck } from "./Icons";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    // Prevent body scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-10 bg-[#20211F]/75 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl my-auto bg-[#F5F3EE] text-[#20211F] rounded-xl sm:rounded-2xl shadow-2xl border border-[#777C62]/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#777C62]/15">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[11px] sm:text-xs text-[#C46B45] tracking-widest font-semibold">
              CASE STUDY // {project.index}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#777C62]/40" />
            <span className="hidden sm:inline-block text-[11px] sm:text-xs uppercase tracking-wider text-[#777C62] font-medium">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-[#777C62]/20 text-[#20211F] hover:bg-[#20211F] hover:text-[#F5F3EE] transition-colors duration-200 shrink-0"
            aria-label="Close modal"
          >
            <IconClose className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="max-h-[85vh] sm:max-h-[82vh] overflow-y-auto p-4 sm:p-7 lg:p-10 space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Main Title & Action Links */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-[#777C62]/20">
            <div>
              <h2
                id="modal-project-title"
                className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#20211F] break-words"
              >
                {project.title}
              </h2>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg text-[#777C62] max-w-2xl">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-2 md:pt-0">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#20211F]/30 text-[#20211F] text-xs font-semibold tracking-wider uppercase hover:border-[#20211F] hover:bg-[#20211F]/5 transition-all text-center"
                >
                  <IconGithub className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#C46B45] text-[#F5F3EE] text-xs font-semibold tracking-wider uppercase hover:bg-[#D77A51] transition-all shadow-md shadow-[#C46B45]/20 text-center"
                >
                  <span>Launch Live</span>
                  <IconArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Project Image Preview */}
          <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-[#777C62]/20 bg-[#20211F]/5 shadow-inner">
            <img
              src={project.image}
              alt={`${project.title} — ${project.category} case study preview by Sachi Patel`}
              width="1200"
              height="750"
              decoding="async"
              className="w-full h-auto max-h-[360px] sm:max-h-[460px] object-cover object-top"
              loading="lazy"
            />
            <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 px-2.5 py-1 bg-[#20211F]/80 backdrop-blur-sm text-[#F5F3EE] font-mono text-[10px] sm:text-xs rounded-md">
              LIVE PREVIEW ARTIFACT
            </div>
          </div>

          {/* Metadata Row */}
          {caseStudy && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 p-3.5 sm:p-5 rounded-xl bg-[#E8E4DA]/60 border border-[#777C62]/15">
              <div>
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#777C62]">
                  Context
                </p>
                <p className="mt-0.5 font-semibold text-xs sm:text-sm text-[#20211F] truncate">
                  {caseStudy.client}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#777C62]">
                  My Role
                </p>
                <p className="mt-0.5 font-semibold text-xs sm:text-sm text-[#20211F] truncate">
                  {caseStudy.role}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#777C62]">
                  Timeline
                </p>
                <p className="mt-0.5 font-semibold text-xs sm:text-sm text-[#20211F]">
                  {caseStudy.timeline}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#777C62]">
                  Category
                </p>
                <p className="mt-0.5 font-semibold text-xs sm:text-sm text-[#20211F] truncate">
                  {project.category}
                </p>
              </div>
            </div>
          )}

          {/* Technology Badges */}
          <div>
            <h3 className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#777C62] mb-2 sm:mb-3">
              Engineered With
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-[#FAF9F6] border border-[#777C62]/25 text-[#20211F]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Details */}
          {caseStudy && (
            <div className="space-y-6 sm:space-y-8">
              {/* Project Overview */}
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#20211F] mb-2 sm:mb-3">
                  Project Overview
                </h3>
                <p className="text-[#20211F]/80 leading-relaxed text-xs sm:text-sm lg:text-base font-light">
                  {caseStudy.overview}
                </p>
              </div>

              {/* The Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 rounded-xl bg-[#FAF9F6] border border-[#777C62]/20">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#C46B45] font-semibold">
                    The Challenge
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#20211F] mt-1.5 mb-2">
                    Problem Being Solved
                  </h4>
                  <p className="text-xs sm:text-sm text-[#20211F]/80 leading-relaxed font-light">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="p-4 sm:p-6 rounded-xl bg-[#FAF9F6] border border-[#777C62]/20">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#777C62] font-semibold">
                    My Contribution
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#20211F] mt-1.5 mb-2">
                    Architecture & Delivery
                  </h4>
                  <p className="text-xs sm:text-sm text-[#20211F]/80 leading-relaxed font-light">
                    {caseStudy.contribution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#20211F] mb-3 sm:mb-4">
                  Key Architectural Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {caseStudy.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-lg bg-[#FAF9F6] border border-[#777C62]/15"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#777C62]/15 text-[#777C62] flex items-center justify-center shrink-0 mt-0.5">
                        <IconCheck className="w-3 h-3" />
                      </span>
                      <span className="text-xs sm:text-sm text-[#20211F]/85 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              {caseStudy.challenges && caseStudy.challenges.length > 0 && (
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#20211F] mb-3 sm:mb-4">
                    Engineering Challenges & Resolutions
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {caseStudy.challenges.map((c, i) => (
                      <div
                        key={i}
                        className="p-4 sm:p-5 rounded-xl border border-[#777C62]/20 bg-[#FAF9F6]"
                      >
                        <p className="font-semibold text-xs sm:text-sm text-[#20211F] flex items-center gap-2">
                          <span className="font-mono text-[10px] sm:text-xs text-[#C46B45]">
                            [ {i + 1} ]
                          </span>
                          {c.challenge}
                        </p>
                        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#777C62] leading-relaxed pl-3 sm:pl-4 border-l-2 border-[#C46B45]">
                          <strong className="text-[#20211F]">Solution:</strong> {c.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="pt-4 sm:pt-6 border-t border-[#777C62]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <p className="font-mono text-[11px] text-[#777C62] text-center sm:text-left">
              SACHI PATEL // FULL STACK PORTFOLIO
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto min-h-[42px] px-5 py-2.5 rounded-lg border border-[#777C62]/30 text-xs sm:text-sm font-medium hover:bg-[#20211F] hover:text-[#F5F3EE] transition text-center"
              >
                Close Case Study
              </button>
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[42px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C46B45] text-[#F5F3EE] text-xs sm:text-sm font-semibold tracking-wide uppercase hover:bg-[#D77A51] transition shadow-md shadow-[#C46B45]/20 text-center"
                >
                  <span>Visit Live Project</span>
                  <IconArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
