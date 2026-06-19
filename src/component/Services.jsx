import React from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Frontend Development",
      description:
        "Modern, responsive, and interactive user interfaces built using React.js, Tailwind CSS, and JavaScript.",
    },
    {
      icon: "fa-solid fa-server",
      title: "Backend Development",
      description:
        "Scalable backend applications with Node.js, Express.js, REST APIs, authentication, and database integration.",
    },
    {
      icon: "fa-solid fa-database",
      title: "Database Design",
      description:
        "Efficient MongoDB database design, schema creation, optimization, and data management solutions.",
    },
    {
      icon: "fa-solid fa-laptop-code",
      title: "Full Stack Applications",
      description:
        "Complete MERN stack applications from frontend UI to backend APIs and database architecture.",
    },
    {
      icon: "fa-solid fa-mobile-screen",
      title: "Responsive Design",
      description:
        "Mobile-first responsive websites that provide seamless experiences across all devices and screen sizes.",
    },
    {
      icon: "fa-solid fa-cloud",
      title: "Deployment & Hosting",
      description:
        "Deploy applications on Vercel, Render, and cloud platforms with performance optimization and security.",
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      {" "}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 uppercase tracking-widest text-sm">
            Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            What I<span className="text-yellow-500"> Offer</span>
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            I build modern, scalable, and high-performance web applications
            using the latest technologies and industry best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black border border-yellow-500/30 mb-6">
                <i className={`${service.icon} text-2xl text-yellow-500`}></i>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-500 transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 leading-7">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-zinc-900 border border-yellow-500/20 rounded-3xl p-10">
          <h3 className="text-3xl font-bold mb-4">Have a Project in Mind?</h3>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Let's work together to create something amazing. I'm available for
            freelance projects, internships, and full-time opportunities.
          </p>

          <NavLink
            to="/contact"
            className="group h-14 px-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold hover:scale-105 transition-all duration-300"
          >
            Contact Me
            <i className="fa-solid fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Services;
