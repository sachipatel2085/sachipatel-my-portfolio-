import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Farm Advisory System",
      description:
        "A MERN-based agriculture platform that helps farmers manage crops, fields, expenses, profits, and advisory services.",
      image: "/projects/farm.png",
      tech: ["React", "Node.js", "MongoDB"],
      github:
        "https://github.com/sachipatel2085/sachipatel-farm-advisory-back.git",
      live: "https://sachipatel-farm-advisory.vercel.app/",
    },
    {
      title: "Blog Management System",
      description:
        "Modern blogging platform with authentication, CRUD operations, image uploads, and admin management.",
      image: "/projects/blog.png",
      tech: ["React", "Node.js", "JWT"],
      github:
        "https://github.com/sachipatel2085/sachipatel-ArticleHub-frontend-.git",
      live: "https://sachipatel-article-hub-frontend.vercel.app/",
    },
    {
      title: "Genuine Forever Containers",
      description:
        "Industrial product website featuring responsive design, product catalog, and inquiry management.",
      image: "/projects/gfc.png",
      tech: ["React", "Tailwind", "3d Design"],
      github: "https://github.com/bagalepa/gfc2.git",
      live: "https://genuineforevercontainers.com/",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing skills, projects, achievements, and contact information.",
      image: "/projects/portfolio.png",
      tech: ["React", "Tailwind"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      {" "}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 uppercase tracking-widest text-sm">
            Portfolio
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            My Latest
            <span className="text-yellow-500"> Projects</span>
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I have developed using modern web
            technologies and best development practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-500 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-zinc-400 leading-7 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-black border border-yellow-500/20 text-yellow-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 text-center py-3 rounded-xl border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="flex-1 text-center py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold hover:scale-105 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
