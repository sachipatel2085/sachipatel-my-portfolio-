import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React.js", level: "90%" },
    { name: "Node.js", level: "85%" },
    { name: "Express.js", level: "85%" },
    { name: "MongoDB", level: "80%" },
    { name: "Tailwind CSS", level: "95%" },
  ];

  const technologies = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind",
    "Git",
    "GitHub",
    "REST API",
    "JWT",
    "Cloudinary",
    "Vercel",
    "Render",
  ];

  return (
    <section className="bg-black text-white py-24">
      {" "}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 uppercase tracking-widest text-sm">
            My Skills
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Technical
            <span className="text-yellow-500"> Expertise</span>
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Progress Bars */}
          <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-8 text-yellow-500">
              Development Skills
            </h3>

            {skills.map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-yellow-500">{skill.level}</span>
                </div>

                <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-amber-600"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-8 text-yellow-500">
              Technologies & Tools
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="bg-black border border-yellow-500/20 rounded-xl p-4 text-center hover:border-yellow-500 hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-zinc-900 border border-yellow-500/20 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-500">20+</h3>
            <p className="text-zinc-400 mt-2">Projects</p>
          </div>

          <div className="bg-zinc-900 border border-yellow-500/20 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-500">1+</h3>
            <p className="text-zinc-400 mt-2">Years Learning</p>
          </div>

          <div className="bg-zinc-900 border border-yellow-500/20 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-500">10+</h3>
            <p className="text-zinc-400 mt-2">Technologies</p>
          </div>

          <div className="bg-zinc-900 border border-yellow-500/20 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-500">100%</h3>
            <p className="text-zinc-400 mt-2">Dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
