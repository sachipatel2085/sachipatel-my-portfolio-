import React, { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
*New Portfolio Inquiry*

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📌 Subject: ${formData.subject}

💬 Message:
${formData.message}
`;

    window.open(
      `https://wa.me/917863847823?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section className="bg-black text-white py-24">
      {" "}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 uppercase tracking-widest text-sm">
            Contact
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Get In
            <span className="text-yellow-500"> Touch</span>
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Have a project, internship opportunity, or freelance work? Feel free
            to contact me. I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-500">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:border-yellow-500 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:border-yellow-500 focus:outline-none"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:border-yellow-500 focus:outline-none"
              />

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 resize-none focus:border-yellow-500 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-6 flex items-center gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black border border-yellow-500/30">
                <i className="fa-solid fa-envelope text-yellow-500 text-xl"></i>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-zinc-400">sachixl300@gmail.com</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-6 flex items-center gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black border border-yellow-500/30">
                <i className="fa-solid fa-phone text-yellow-500 text-xl"></i>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-zinc-400">+91 78638 47823</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-6 flex items-center gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black border border-yellow-500/30">
                <i className="fa-solid fa-location-dot text-yellow-500 text-xl"></i>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-zinc-400">Himmatnagar, Gujarat, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-6">
              <h4 className="font-semibold text-lg mb-5">Follow Me</h4>

              <div className="flex gap-4">
                <a
                  href="https://github.com/sachipatel2085"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
                >
                  <i className="fa-brands fa-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/sachikumar-patel-b847612a0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

                <a
                  href="https://www.instagram.com/patelsachi2025?igsh=MWV2eHc4aGFzNXVwcg=="
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
                >
                  <i className="fa-brands fa-instagram"></i>
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
