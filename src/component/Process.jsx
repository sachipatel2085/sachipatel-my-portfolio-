import React from "react";
import { IconCheck } from "./Icons";
import { developmentProcess } from "../data/portfolioData";

const Process = () => {
  return (
    <section
      id="process"
      className="py-16 sm:py-24 lg:py-32 bg-[#E8E4DA]/30 border-t border-[#777C62]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#C46B45] font-semibold block mb-2 sm:mb-3">
            [ 04 // ENGINEERING WORKFLOW ]
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#20211F] leading-tight">
            A Methodical Four-Stage Development Lifecycle
          </h2>
          <p className="mt-3 sm:mt-4 text-[#777C62] text-xs sm:text-sm lg:text-base font-light leading-relaxed">
            Eliminating guesswork through systematic decomposition. Every web application follows a
            disciplined sequence from scope alignment to production cloud deployment.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {developmentProcess.map((item) => (
            <div
              key={item.step}
              className="group relative p-5 sm:p-7 rounded-2xl bg-[#FAF9F6] border border-[#777C62]/20 hover:border-[#C46B45] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#777C62]/15 mb-4 sm:mb-6">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C46B45] group-hover:scale-105 transition-transform">
                    {item.step}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#777C62] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#E8E4DA]/60 border border-[#777C62]/20 font-medium">
                    {item.phase}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#20211F] mb-2 sm:mb-3 group-hover:text-[#C46B45] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#20211F]/75 leading-relaxed font-light mb-5 sm:mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-3.5 sm:pt-4 border-t border-[#777C62]/15">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#777C62] block mb-2 font-medium">
                  KEY ACTIVITIES:
                </span>
                <ul className="space-y-1.5">
                  {item.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-xs text-[#20211F]/85 flex items-start gap-2"
                    >
                      <IconCheck className="w-3 h-3 text-[#777C62] shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
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
