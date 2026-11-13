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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#20211F]/70 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl my-auto bg-[#F5F3EE] text-[#20211F] rounded-2xl shadow-2xl border border-[#777C62]/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#777C62]/15">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C46B45] tracking-widest font-semibold">
              CASE STUDY // {project.index}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#777C62]/40" />
            <span className="hidden sm:inline-block text-xs uppercase tracking-wider text-[#777C62] font-medium">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#777C62]/20 text-[#20211F] hover:bg-[#20211F] hover:text-[#F5F3EE] transition-colors duration-200"
            aria-label="Close modal"
          >
            <IconClose className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-10">
          {/* Main Title & Action Links */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#777C62]/20">
            <div>
              <h2
                id="modal-project-title"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#20211F]"
              >
                {project.title}
              </h2>
              <p className="mt-2 text-base sm:text-lg text-[#777C62] max-w-2xl">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#20211F]/30 text-[#20211F] text-xs font-semibold tracking-wider uppercase hover:border-[#20211F] hover:bg-[#20211F]/5 transition-all"
                >
                  <IconGithub className="w-4 h-4" />
                  Source Code
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C46B45] text-[#F5F3EE] text-xs font-semibold tracking-wider uppercase hover:bg-[#D77A51] transition-all shadow-md shadow-[#C46B45]/20"
                >
                  <span>Launch Live</span>
                  <IconArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Project Image Preview */}
          <div className="relative rounded-xl overflow-hidden border border-[#777C62]/20 bg-[#20211F]/5 shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[460px] object-cover object-top"
              loading="lazy"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#20211F]/80 backdrop-blur-sm text-[#F5F3EE] font-mono text-xs rounded-md">
              LIVE PREVIEW ARTIFACT
            </div>
          </div>

          {/* Metadata Row */}
          {caseStudy && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#E8E4DA]/60 border border-[#777C62]/15">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#777C62]">
                  Context
                </p>
                <p className="mt-1 font-semibold text-sm text-[#20211F]">
                  {caseStudy.client}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#777C62]">
                  My Role
                </p>
                <p className="mt-1 font-semibold text-sm text-[#20211F]">
                  {caseStudy.role}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#777C62]">
                  Timeline
                </p>
                <p className="mt-1 font-semibold text-sm text-[#20211F]">
                  {caseStudy.timeline}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#777C62]">
                  Category
                </p>
                <p className="mt-1 font-semibold text-sm text-[#20211F]">
                  {project.category}
                </p>
              </div>
            </div>
          )}

          {/* Technology Badges */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#777C62] mb-3">
              Engineered With
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#FAF9F6] border border-[#777C62]/25 text-[#20211F]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Details */}
          {caseStudy && (
            <div className="space-y-8">
              {/* Project Overview */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#20211F] mb-3">
                  Project Overview
                </h3>
                <p className="text-[#20211F]/80 leading-relaxed text-base">
                  {caseStudy.overview}
                </p>
              </div>

              {/* The Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#FAF9F6] border border-[#777C62]/20">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#C46B45] font-semibold">
                    The Challenge
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#20211F] mt-2 mb-3">
                    Problem Being Solved
                  </h4>
                  <p className="text-sm text-[#20211F]/80 leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#FAF9F6] border border-[#777C62]/20">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#777C62] font-semibold">
                    My Contribution
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#20211F] mt-2 mb-3">
                    Architecture & Delivery
                  </h4>
                  <p className="text-sm text-[#20211F]/80 leading-relaxed">
                    {caseStudy.contribution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#20211F] mb-4">
                  Key Architectural Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {caseStudy.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FAF9F6] border border-[#777C62]/15"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#777C62]/15 text-[#777C62] flex items-center justify-center shrink-0 mt-0.5">
                        <IconCheck className="w-3 h-3" />
                      </span>
                      <span className="text-sm text-[#20211F]/85 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              {caseStudy.challenges && caseStudy.challenges.length > 0 && (
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#20211F] mb-4">
                    Engineering Challenges & Resolutions
                  </h3>
                  <div className="space-y-4">
                    {caseStudy.challenges.map((c, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl border border-[#777C62]/20 bg-[#FAF9F6]"
                      >
                        <p className="font-semibold text-sm text-[#20211F] flex items-center gap-2">
                          <span className="font-mono text-xs text-[#C46B45]">
                            [ CHALLENGE {i + 1} ]
                          </span>
                          {c.challenge}
                        </p>
                        <p className="mt-2 text-sm text-[#777C62] leading-relaxed pl-4 border-l-2 border-[#C46B45]">
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
          <div className="pt-6 border-t border-[#777C62]/20 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-xs text-[#777C62]">
              SACHI PATEL // FULL STACK PORTFOLIO
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg border border-[#777C62]/30 text-sm font-medium hover:bg-[#20211F] hover:text-[#F5F3EE] transition"
              >
                Close Case Study
              </button>
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#C46B45] text-[#F5F3EE] text-sm font-semibold tracking-wide uppercase hover:bg-[#D77A51] transition shadow-md shadow-[#C46B45]/20"
                >
                  Visit Live Project
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
