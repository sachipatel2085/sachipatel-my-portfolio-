import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconDownload, IconMenu, IconClose, IconArrowRight } from "./Icons";
import { personalInfo } from "../data/portfolioData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "#home", route: "/" },
    { name: "About", href: "#about", route: "/about" },
    { name: "Services", href: "#services", route: "/services" },
    { name: "Projects", href: "#projects", route: "/projects" },
    { name: "Skills", href: "#skills", route: "/skills" },
    { name: "Experience", href: "#experience", route: "/experience" },
    { name: "Contact", href: "#contact", route: "/contact" },
  ];

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Track scroll state and progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      setScrolled(currentScroll > 30);
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

      // Section spy if on home page
      if (location.pathname === "/") {
        const sections = ["home", "about", "services", "projects", "skills", "experience", "contact"];
        const scrollPosition = currentScroll + 200;

        for (const sec of sections) {
          const el = document.getElementById(sec);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sec);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle smooth scroll or route transition
  const handleNavClick = (e, link) => {
    setMobileMenuOpen(false);

    if (location.pathname === "/") {
      const targetId = link.href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
      }
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#777C62] via-[#C46B45] to-[#C46B45] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#777C62]/15 shadow-sm py-3 sm:py-4"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Typographic Branding */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="group flex flex-col shrink-0"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#20211F] group-hover:text-[#C46B45] transition-colors duration-200">
                SACHI PATEL
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C46B45]" />
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#777C62] uppercase -mt-0.5">
              FULL STACK DEVELOPER
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === "/"
                  ? activeSection === link.href.replace("#", "")
                  : location.pathname.toLowerCase() === link.route.toLowerCase();

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative text-xs uppercase tracking-widest font-semibold transition-colors duration-200 py-1 ${
                    isActive ? "text-[#C46B45]" : "text-[#20211F]/75 hover:text-[#20211F]"
                  }`}
                >
                  {link.name}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#C46B45] transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action: Status Pill + Resume CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {/* Availability Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8E4DA]/60 border border-[#777C62]/20">
              <span className="w-2 h-2 rounded-full bg-[#777C62] animate-pulse-subtle" />
              <span className="font-mono text-[10px] xl:text-[11px] text-[#20211F] font-medium tracking-wide">
                AVAILABLE
              </span>
            </div>

            {/* Resume Button */}
            <a
              href={personalInfo.resumePath}
              download="Sachi_Patel_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#20211F] text-[#F5F3EE] text-xs font-semibold tracking-wider uppercase hover:bg-[#C46B45] transition-colors duration-200 shadow-sm"
            >
              <IconDownload className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg border border-[#777C62]/20 text-[#20211F] hover:bg-[#E8E4DA] transition-colors shrink-0"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <IconClose className="w-5 h-5 sm:w-6 sm:h-6" /> : <IconMenu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Animated Dropdown Drawer */}
        <div
          className={`lg:hidden overflow-y-auto transition-all duration-300 ease-in-out bg-[#F5F3EE] border-b border-[#777C62]/20 ${
            mobileMenuOpen ? "max-h-[calc(100vh-64px)] opacity-100 py-6" : "max-h-0 opacity-0 py-0 overflow-hidden"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#777C62]/15">
              <span className="w-2 h-2 rounded-full bg-[#777C62] animate-pulse-subtle" />
              <span className="font-mono text-xs text-[#777C62]">
                STATUS: AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === "/"
                    ? activeSection === link.href.replace("#", "")
                    : location.pathname.toLowerCase() === link.route.toLowerCase();

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-serif font-bold transition-colors ${
                      isActive ? "text-[#C46B45] bg-[#E8E4DA]/60" : "text-[#20211F] hover:text-[#C46B45] hover:bg-[#E8E4DA]/30"
                    }`}
                  >
                    <span>{link.name}</span>
                    <IconArrowRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#777C62]/15 flex flex-col gap-2.5">
              <a
                href={personalInfo.resumePath}
                download="Sachi_Patel_Resume.pdf"
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C46B45] text-[#F5F3EE] font-semibold text-xs uppercase tracking-widest hover:bg-[#D77A51] transition shadow-xs"
              >
                <IconDownload className="w-4 h-4" />
                Download CV
              </a>

              <a
                href="mailto:sachixl300@gmail.com"
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 rounded-xl border border-[#20211F]/30 text-[#20211F] font-semibold text-xs uppercase tracking-widest hover:bg-[#20211F] hover:text-[#F5F3EE] transition"
              >
                Direct Inquiry
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
