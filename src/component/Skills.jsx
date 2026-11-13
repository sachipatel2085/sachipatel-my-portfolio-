import React, { useState } from "react";
import {
  IconCode,
  IconServer,
  IconDatabase,
  IconLayers,
  IconSparkles,
  IconCheck,
} from "./Icons";
import { skillsData } from "../data/portfolioData";

const categoryMeta = [
  {
    key: "frontend",
    title: "Frontend Architecture",
    icon: <IconCode className="w-4 h-4 text-[#C46B45]" />,
    count: skillsData.frontend.length,
    description: "Building responsive, accessible, and fast interfaces using modern DOM patterns and React ecosystems.",
  },
  {
    key: "backend",
    title: "Backend & APIs",
    icon: <IconServer className="w-4 h-4 text-[#C46B45]" />,
    count: skillsData.backend.length,
    description: "Engineering secure Node.js microservices, RESTful endpoints, and stateless authentication pipelines.",
  },
  {
    key: "database",
    title: "Databases & Storage",
    icon: <IconDatabase className="w-4 h-4 text-[#C46B45]" />,
    count: skillsData.database.length,
    description: "Designing schema structures, indexing strategies, and aggregation workflows for high query performance.",
  },
  {
    key: "tools",
    title: "Tools & DevOps",
    icon: <IconLayers className="w-4 h-4 text-[#C46B45]" />,
    count: skillsData.tools.length,
    description: "Version control workflows, API testing suites, and continuous cloud deployment pipelines.",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categoriesToRender =
    activeTab === "all"
      ? categoryMeta
      : categoryMeta.filter((cat) => cat.key === activeTab);

  return (
    <section
      id="skills"
      className="py-24 lg:py-32 bg-[#E8E4DA]/40 border-t border-[#777C62]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C46B45] font-semibold block mb-3">
              [ 06 // TECHNICAL EXPERTISE ]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#20211F]">
              Technical Stack & Engineering Tooling
            </h2>
          </div>

          {/* Interactive Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeTab === "all"
                  ? "bg-[#20211F] text-[#F5F3EE] shadow-sm"
                  : "bg-[#FAF9F6] text-[#777C62] hover:text-[#20211F] border border-[#777C62]/20"
              }`}
            >
              All Domains
            </button>
            {categoryMeta.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeTab === cat.key
                    ? "bg-[#20211F] text-[#F5F3EE] shadow-sm"
                    : "bg-[#FAF9F6] text-[#777C62] hover:text-[#20211F] border border-[#777C62]/20"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {categoriesToRender.map((cat) => {
            const list = skillsData[cat.key] || [];

            return (
              <div
                key={cat.key}
                className="p-8 rounded-3xl bg-[#FAF9F6] border border-[#777C62]/25 shadow-xs"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#777C62]/15 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#E8E4DA]/60 border border-[#777C62]/20 flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#20211F]">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#777C62] font-light mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-[#C46B45] font-semibold px-3 py-1 rounded-full bg-[#E8E4DA]/50 border border-[#777C62]/20 self-start sm:self-auto">
                    {cat.count} TECHNOLOGIES
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {list.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-4 rounded-xl bg-[#F5F3EE] border border-[#777C62]/20 hover:border-[#C46B45] hover:bg-white transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="font-serif text-base font-bold text-[#20211F] group-hover:text-[#C46B45] transition-colors">
                          {skill.name}
                        </h4>
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#E8E4DA]/70 text-[#777C62] font-semibold">
                          {skill.experience}
                        </span>
                      </div>

                      <p className="text-xs text-[#20211F]/70 leading-relaxed font-light">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
