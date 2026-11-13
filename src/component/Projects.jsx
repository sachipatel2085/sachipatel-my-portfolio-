import React, { useState } from "react";
import {
  IconArrowUpRight,
  IconGithub,
  IconSparkles,
  IconCheck,
} from "./Icons";
import { projects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Full Stack (MERN)", value: "fullstack" },
    { label: "Frontend / UI", value: "frontend" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "fullstack") return p.tech.includes("MongoDB") || p.tech.includes("Node.js");
    if (filter === "frontend") return !p.tech.includes("Node.js") || p.category.includes("Hospitality") || p.category.includes("Industrial");
    return true;
  });

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 bg-[#F5F3EE] border-t border-[#777C62]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C46B45] font-semibold block mb-3">
              [ 05 // SELECTED WORK & CASE STUDIES ]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#20211F]">
              Featured Projects & Production Builds
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setFilter(c.value)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  filter === c.value
                    ? "bg-[#20211F] text-[#F5F3EE] shadow-sm"
                    : "bg-[#E8E4DA]/60 text-[#777C62] hover:text-[#20211F] hover:bg-[#E8E4DA]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Project Showcase List */}
        <div className="space-y-16 lg:space-y-24">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <article
                key={project.id}
                className="group relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FAF9F6] border border-[#777C62]/20 hover:border-[#C46B45]/50 transition-all duration-300 shadow-xs"
              >
                <div
                  className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Project Image Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative rounded-2xl overflow-hidden border border-[#777C62]/20 bg-[#20211F] cursor-pointer group/img shadow-md"
                    >
                      {/* Image Frame */}
                      <div className="aspect-[16/10] overflow-hidden bg-[#20211F]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover/img:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                      </div>

                      {/* Hover Overlay with Case Study Prompt */}
                      <div className="absolute inset-0 bg-[#20211F]/50 opacity-0 group-hover/img:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center p-6">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F3EE] text-[#20211F] font-mono text-xs font-semibold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                          Inspect Case Study
                          <IconArrowUpRight className="w-3.5 h-3.5 text-[#C46B45]" />
                        </span>
                      </div>

                      {/* Micro Tag on Image */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#20211F]/80 backdrop-blur-sm text-[#F5F3EE] font-mono text-[10px] uppercase tracking-wider">
                        PROJECT // {project.index}
                      </div>
                    </div>
                  </div>

                  {/* Project Details Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs text-[#C46B45] font-semibold tracking-wider uppercase">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#20211F] group-hover:text-[#C46B45] transition-colors leading-tight">
                        {project.title}
                      </h3>

                      <p className="font-mono text-xs text-[#777C62] mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#20211F]/80 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#777C62] block mb-2 font-medium">
                        TECH STACK:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-md text-xs font-medium bg-[#E8E4DA]/60 border border-[#777C62]/20 text-[#20211F]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#20211F] text-[#F5F3EE] text-xs font-semibold uppercase tracking-wider hover:bg-[#C46B45] transition-all shadow-sm"
                      >
                        <span>Case Study</span>
                        <IconSparkles className="w-3.5 h-3.5 text-[#C46B45]" />
                      </button>

                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#C46B45] text-[#F5F3EE] text-xs font-semibold uppercase tracking-wider hover:bg-[#D77A51] transition-all shadow-xs"
                        >
                          <span>Live Demo</span>
                          <IconArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#777C62]/30 text-[#20211F] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8E4DA] transition-all"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <IconGithub className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
