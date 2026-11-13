import React from "react";
import { IconCheck, IconSparkles } from "./Icons";
import { developmentProcess } from "../data/portfolioData";

const Process = () => {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-[#E8E4DA]/30 border-t border-[#777C62]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C46B45] font-semibold block mb-3">
            [ 04 // ENGINEERING WORKFLOW ]
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#20211F] leading-tight">
            A Methodical Four-Stage Development Lifecycle
          </h2>
          <p className="mt-4 text-[#777C62] text-base font-light leading-relaxed">
            Eliminating guesswork through systematic decomposition. Every web application follows a
            disciplined sequence from scope alignment to production cloud deployment.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {developmentProcess.map((item) => (
            <div
              key={item.step}
              className="group relative p-7 rounded-2xl bg-[#FAF9F6] border border-[#777C62]/20 hover:border-[#C46B45] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#777C62]/15 mb-6">
                  <span className="font-serif text-3xl font-bold text-[#C46B45] group-hover:scale-105 transition-transform">
                    {item.step}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#777C62] px-2.5 py-1 rounded-md bg-[#E8E4DA]/60 border border-[#777C62]/20 font-medium">
                    {item.phase}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-xl font-bold text-[#20211F] mb-3 group-hover:text-[#C46B45] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#20211F]/75 leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-[#777C62]/15">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#777C62] block mb-2 font-medium">
                  KEY ACTIVITIES:
                </span>
                <ul className="space-y-1.5">
                  {item.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-xs text-[#20211F]/85 flex items-start gap-2"
                    >
                      <IconCheck className="w-3 h-3 text-[#777C62] shrink-0 mt-0.5" />
                      <span className="leading-tight">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
