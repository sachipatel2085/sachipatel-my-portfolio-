import React, { useState } from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconGithub,
  IconLinkedin,
  IconInstagram,
  IconCopy,
  IconCheck,
  IconArrowRight,
} from "./Icons";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please provide your name";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Please specify a subject";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);

    // Prepare message payload
    const text = `*New Inquiry via Sachi Patel Portfolio*\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email}\n📌 *Subject:* ${formData.subject}\n\n💬 *Message:*\n${formData.message}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open WhatsApp direct message with prefilled query
      window.open(
        `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(text)}`,
        "_blank"
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 900);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 bg-[#20211F] text-[#F5F3EE] relative overflow-hidden editorial-grid-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#C46B45] font-semibold block mb-2 sm:mb-3">
            [ 09 // INITIATE DIALOGUE ]
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3EE] leading-tight">
            Let's Build Something Exceptional Together.
          </h2>
          <p className="mt-3 sm:mt-4 text-[#F5F3EE]/70 text-xs sm:text-sm lg:text-base font-light leading-relaxed">
            Whether you have a full-stack engineering opening, a commercial project requirement,
            or wish to discuss modern web architecture, reaching me is straightforward.
          </p>
        </div>

        {/* Contact Grid: Form & Info */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#2D2E2B] border border-[#777C62]/30 shadow-xl">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F3EE] mb-1.5 flex items-center justify-between">
              <span>Send An Inquiry</span>
              <span className="font-mono text-[10px] sm:text-xs text-[#777C62] font-normal">
                DIRECT INBOX
              </span>
            </h3>
            <p className="text-xs text-[#F5F3EE]/60 mb-6 sm:mb-8 font-light">
              Fill out the form below. Messages are routed directly to my mobile device and email.
            </p>

            {submitted && (
              <div className="mb-6 p-3.5 sm:p-4 rounded-xl bg-[#777C62]/20 border border-[#777C62]/50 text-xs sm:text-sm text-[#F5F3EE] flex items-start gap-2.5">
                <IconCheck className="w-4 h-4 text-[#C46B45] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#F5F3EE]">Thank you for reaching out!</p>
                  <p className="text-[#F5F3EE]/80 mt-0.5 text-xs">
                    Your message has been initiated. I will respond to your inquiry shortly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#F5F3EE]/80 mb-1.5"
                  >
                    Your Name <span className="text-[#C46B45]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    className={`w-full bg-[#161715] border rounded-xl px-3.5 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm text-[#F5F3EE] placeholder-[#777C62]/50 focus:outline-none focus:border-[#C46B45] transition-colors ${
                      errors.name ? "border-red-400" : "border-[#777C62]/30"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 font-mono text-[10px] text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#F5F3EE]/80 mb-1.5"
                  >
                    Email Address <span className="text-[#C46B45]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. jane@company.com"
                    className={`w-full bg-[#161715] border rounded-xl px-3.5 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm text-[#F5F3EE] placeholder-[#777C62]/50 focus:outline-none focus:border-[#C46B45] transition-colors ${
                      errors.email ? "border-red-400" : "border-[#777C62]/30"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 font-mono text-[10px] text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#F5F3EE]/80 mb-1.5"
                >
                  Subject / Topic <span className="text-[#C46B45]">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Developer Opening / Commercial Project"
                  className={`w-full bg-[#161715] border rounded-xl px-3.5 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm text-[#F5F3EE] placeholder-[#777C62]/50 focus:outline-none focus:border-[#C46B45] transition-colors ${
                    errors.subject ? "border-red-400" : "border-[#777C62]/30"
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 font-mono text-[10px] text-red-400">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#F5F3EE]/80 mb-1.5"
                >
                  Message <span className="text-[#C46B45]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, or position details..."
                  className={`w-full bg-[#161715] border rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-[#F5F3EE] placeholder-[#777C62]/50 focus:outline-none focus:border-[#C46B45] transition-colors resize-none ${
                    errors.message ? "border-red-400" : "border-[#777C62]/30"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 font-mono text-[10px] text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-[#C46B45] text-[#F5F3EE] font-semibold text-xs uppercase tracking-widest hover:bg-[#D77A51] disabled:opacity-50 transition-all duration-200 shadow-lg shadow-[#C46B45]/20 group text-center"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Dispatch Message</span>
                    <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#2D2E2B] border border-[#777C62]/30">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#161715] border border-[#777C62]/30 flex items-center justify-center text-[#C46B45] shrink-0">
                    <IconMail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#777C62] block">
                      DIRECT EMAIL
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-serif text-base sm:text-lg font-bold text-[#F5F3EE] hover:text-[#C46B45] transition-colors block break-all sm:break-normal"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 sm:p-2.5 rounded-lg bg-[#161715] border border-[#777C62]/30 text-[#777C62] hover:text-[#F5F3EE] transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <IconCheck className="w-4 h-4 text-[#C46B45]" />
                  ) : (
                    <IconCopy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <p className="mt-2 font-mono text-[10px] text-[#C46B45]">
                  ✓ Copied to clipboard!
                </p>
              )}
            </div>

            {/* Phone / WhatsApp Card */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#2D2E2B] border border-[#777C62]/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#161715] border border-[#777C62]/30 flex items-center justify-center text-[#C46B45] shrink-0">
                  <IconPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#777C62] block">
                    PHONE & WHATSAPP
                  </span>
                  <a
                    href={`https://wa.me/${personalInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-base sm:text-lg font-bold text-[#F5F3EE] hover:text-[#C46B45] transition-colors block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#2D2E2B] border border-[#777C62]/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#161715] border border-[#777C62]/30 flex items-center justify-center text-[#C46B45] shrink-0">
                  <IconMapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#777C62] block">
                    LOCATION & TIMEZONE
                  </span>
                  <p className="font-serif text-base sm:text-lg font-bold text-[#F5F3EE]">
                    {personalInfo.location}
                  </p>
                  <p className="font-mono text-[10px] sm:text-xs text-[#777C62] mt-0.5">
                    IST (UTC +5:30) • Open to Global Remote
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Social Media Channels */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#2D2E2B] border border-[#777C62]/30">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#777C62] block mb-3">
                PROFESSIONAL CHANNELS
              </span>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[44px] rounded-xl bg-[#161715] border border-[#777C62]/30 flex items-center justify-center text-[#F5F3EE] hover:border-[#C46B45] hover:text-[#C46B45] transition-all"
                  aria-label="GitHub Profile"
                >
                  <IconGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[44px] rounded-xl bg-[#161715] border border-[#777C62]/30 flex items-center justify-center text-[#F5F3EE] hover:border-[#C46B45] hover:text-[#C46B45] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <IconLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[44px] rounded-xl bg-[#161715] border border-[#777C62]/30 flex items-center justify-center text-[#F5F3EE] hover:border-[#C46B45] hover:text-[#C46B45] transition-all"
                  aria-label="Instagram Profile"
                >
                  <IconInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
