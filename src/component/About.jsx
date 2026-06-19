import React from "react";

const About = () => {
  return (
    <section className="bg-black text-white py-24">
      {" "}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 uppercase tracking-widest text-sm">
            About Me
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Know More About
            <span className="text-yellow-500"> Me</span>
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Full Stack Developer</h3>

            <p className="text-zinc-400 leading-8 text-lg">
              I am a passionate Full Stack Developer from Gujarat, India. I
              specialize in creating responsive web applications using React,
              Node.js, Express, MongoDB, and modern web technologies.
            </p>

            <p className="text-zinc-400 leading-8 text-lg mt-4">
              My goal is to build scalable, user-friendly, and visually
              appealing applications that solve real-world problems.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div>
                <p className="text-zinc-400">Name</p>
                <h4 className="font-semibold text-lg">Sachi Patel</h4>
              </div>

              <div>
                <p className="text-zinc-400">Age</p>
                <h4 className="font-semibold text-lg">22 Years</h4>
              </div>

              <div>
                <p className="text-zinc-400">Location</p>
                <h4 className="font-semibold text-lg">Himmatnagar, Gujarat</h4>
              </div>

              <div>
                <p className="text-zinc-400">Freelance</p>
                <h4 className="font-semibold text-yellow-500">Available</h4>
              </div>
            </div>

            <a
              href="/resumepatelsachikumaranilbhai.pdf"
              download
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold hover transition-all duration-300"
            >
              <i className="fa-solid fa-download mr-2"></i>
              Download CV
            </a>
          </div>

          {/* Right Side */}
          <div className="grid gap-6">
            {/* Skills */}
            <div className="bg-zinc-900 border border-yellow-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-5 text-yellow-500">
                Technical Skills
              </h3>

              {[
                { skill: "HTML", percent: "95%" },
                { skill: "CSS", percent: "90%" },
                { skill: "JavaScript", percent: "85%" },
                { skill: "React", percent: "90%" },
              ].map((item) => (
                <div key={item.skill} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span>{item.skill}</span>
                    <span>{item.percent}</span>
                  </div>

                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-amber-600"
                      style={{ width: item.percent }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="bg-zinc-900 border border-yellow-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                Languages
              </h3>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-black border border-yellow-500/20">
                  Gujarati
                </span>

                <span className="px-4 py-2 rounded-lg bg-black border border-yellow-500/20">
                  Hindi
                </span>

                <span className="px-4 py-2 rounded-lg bg-black border border-yellow-500/20">
                  English
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
