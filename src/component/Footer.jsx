import React from "react";
import { useLocation } from "react-router-dom";
import {
  IconGithub,
  IconLinkedin,
  IconInstagram,
  IconMail,
} from "./Icons";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#141513] text-[#F5F3EE] border-t border-[#777C62]/20 pt-12 pb-8 sm:pt-16 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-14 border-b border-[#777C62]/20">
          {/* Brand & Manifesto (5 cols) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#F5F3EE]">
                SACHI PATEL
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C46B45]" />
            </div>

            <p className="font-mono text-[10px] sm:text-xs text-[#777C62] uppercase tracking-widest">
              FULL STACK DEVELOPER // GUJARAT, INDIA
            </p>

            <p className="text-xs sm:text-sm text-[#F5F3EE]/70 font-light leading-relaxed max-w-sm">
              Architecting scalable MERN web applications, resilient backend microservices,
              and refined digital experiences built with performance and clean code.
            </p>

            {/* Availability Pill */}
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#777C62] animate-pulse-subtle shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs text-[#F5F3EE]/80">
                STATUS: AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>
          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#777C62] font-semibold">
              NAVIGATION SHORTCUTS
            </h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[#F5F3EE]/75 hover:text-[#C46B45] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back-to-Top (3 cols) */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#777C62] font-semibold">
              CONNECTED NETWORKS
            </h3>

            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#20211F] border border-[#777C62]/30 flex items-center justify-center text-[#F5F3EE] hover:border-[#C46B45] hover:text-[#C46B45] transition-all"
                aria-label="GitHub"
              >
                <IconGithub className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#20211F] border border-[#777C62]/30 flex items-center justify-center text-[#F5F3EE] hover:border-[#C46B45] hover:text-[#C46B45] transition-all"
                aria-label="LinkedIn"
              >
                <IconLinkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#20211F] border border-[#777C62]/30 flex items-center justify-center text-[#F5F3EE] hover:border-[#C46B45] hover:text-[#C46B45] transition-all"
                aria-label="Instagram"
              >
                <IconInstagram className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.email}
                className="w-10 h-10 rounded-xl bg-[#20211F] border border-[#777C62]/30 flex items-center justify-center text-[#F5F3EE] hover:border-[#C46B45] hover:text-[#C46B45] transition-all"
                aria-label="Email"
              >
                <IconMail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#777C62] hover:text-[#F5F3EE] transition-colors py-2 group"
              >
                <span>↑ RETURN TO TOP</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-[10px] sm:text-xs font-mono text-[#777C62] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Sachi Patel. All Rights Reserved.</p>
          <p>BUILT WITH REACT 19 & TAILWIND CSS • EDITORIAL DESIGN SYSTEM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
