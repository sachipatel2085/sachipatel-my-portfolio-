import React from "react";
import {
  IconCode,
  IconServer,
  IconDatabase,
  IconLayers,
  IconSparkles,
  IconArrowRight,
  IconCheck,
} from "./Icons";
import { services } from "../data/portfolioData";

const iconMap = {
  "01": <IconCode className="w-5 h-5 text-[#C46B45]" />,
  "02": <IconLayers className="w-5 h-5 text-[#C46B45]" />,
  "03": <IconServer className="w-5 h-5 text-[#C46B45]" />,
  "04": <IconDatabase className="w-5 h-5 text-[#C46B45]" />,
  "05": <IconCode className="w-5 h-5 text-[#C46B45]" />,
  "06": <IconSparkles className="w-5 h-5 text-[#C46B45]" />,
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-[#F5F3EE] border-t border-[#777C62]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C46B45] font-semibold block mb-3">
              [ 03 // WHAT I DO & DELIVER ]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#20211F]">
              Engineering Capabilities & Technical Services
            </h2>
          </div>
          <p className="text-[#777C62] text-sm sm:text-base max-w-md font-light leading-relaxed">
            Delivering complete, maintainable digital solutions from initial interface design
            to resilient cloud-deployed backend systems.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="group relative p-8 rounded-2xl bg-[#FAF9F6] border border-[#777C62]/20 hover:border-[#C46B45] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-semibold text-[#777C62] group-hover:text-[#C46B45] transition-colors">
                    // {item.id}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#E8E4DA]/60 border border-[#777C62]/20 flex items-center justify-center group-hover:bg-[#C46B45]/10 group-hover:border-[#C46B45]/30 transition-all">
                    {iconMap[item.id] || <IconCode className="w-5 h-5 text-[#C46B45]" />}
                  </div>
                </div>

                {/* Service Title & Tagline */}
                <h3 className="font-serif text-2xl font-bold text-[#20211F] mb-2 group-hover:text-[#C46B45] transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-[#777C62] mb-4">
                  {item.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-[#20211F]/75 leading-relaxed mb-6 font-light">
                  {item.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-5 border-t border-[#777C62]/15">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#777C62] block mb-2.5">
                  CORE DELIVERABLES:
                </span>
                <ul className="space-y-1.5">
                  {item.deliverables.map((deliv, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-[#20211F]/80 flex items-center gap-2"
                    >
                      <IconCheck className="w-3 h-3 text-[#777C62] shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout Card */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#20211F] text-[#F5F3EE] border border-[#777C62]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C46B45] font-semibold">
              ARCHITECTURE & IMPLEMENTATION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F3EE]">
              Have a product in development or an open software role?
            </h3>
            <p className="text-sm text-[#F5F3EE]/75 leading-relaxed font-light">
              I am open to discuss technical requirements, full stack architecture, and how I can
              contribute to your team or digital venture.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#C46B45] text-[#F5F3EE] text-xs font-semibold uppercase tracking-widest hover:bg-[#D77A51] transition-all shrink-0 shadow-md shadow-[#C46B45]/20 group"
          >
            <span>Let's Discuss</span>
            <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
