import React, { useState, useEffect } from "react";
import {
  IconGithub,
  IconArrowUpRight,
  IconStar,
  IconGitFork,
  IconTerminal,
} from "./Icons";
import { githubRepos, personalInfo } from "../data/portfolioData";

const GithubActivity = () => {
  const [gitStats, setGitStats] = useState({
    publicRepos: "15+",
    followers: "Active",
    contributions: "Consistent",
    loaded: true,
  });

  // Attempt to fetch public user stats from GitHub API with graceful fallback to real data
  useEffect(() => {
    fetch("https://api.github.com/users/sachipatel2085")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("GitHub API rate limit or offline");
      })
      .then((data) => {
        if (data && data.public_repos) {
          setGitStats({
            publicRepos: data.public_repos.toString(),
            followers: data.followers?.toString() || "Active",
            contributions: "Public",
            loaded: true,
          });
        }
      })
      .catch(() => {
        // Fallback already pre-set to real verified numbers
      });
  }, []);

  return (
    <section
      id="activity"
      className="py-16 sm:py-24 lg:py-32 bg-[#E8E4DA]/40 border-t border-[#777C62]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 lg:mb-16">
          <div>
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#C46B45] font-semibold block mb-2 sm:mb-3">
              [ 08 // CODE & REPOSITORY ACTIVITY ]
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#20211F]">
              Open Source & Public Repositories
            </h2>
          </div>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[42px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#20211F] text-[#F5F3EE] text-xs font-semibold uppercase tracking-wider hover:bg-[#C46B45] transition-all shadow-sm text-center"
          >
            <IconGithub className="w-4 h-4" />
            <span>Visit @sachipatel2085</span>
            <IconArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* GitHub Dossier Strip */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF9F6] border border-[#777C62]/25 mb-8 sm:mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#20211F] text-[#F5F3EE] flex items-center justify-center shrink-0">
              <IconGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#20211F] truncate">
                github.com/sachipatel2085
              </h3>
              <p className="font-mono text-[11px] sm:text-xs text-[#777C62]">
                Full Stack & MERN Repositories
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-6 font-mono text-center sm:text-left pt-3 sm:pt-0 border-t sm:border-t-0 border-[#777C62]/15">
            <div>
              <span className="text-[10px] sm:text-xs text-[#777C62] block">REPOS</span>
              <span className="text-base sm:text-lg font-bold text-[#20211F]">{gitStats.publicRepos}</span>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-[#777C62]/20" />
            <div>
              <span className="text-[10px] sm:text-xs text-[#777C62] block">STACK</span>
              <span className="text-base sm:text-lg font-bold text-[#C46B45]">MERN</span>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-[#777C62]/20" />
            <div>
              <span className="text-[10px] sm:text-xs text-[#777C62] block">LANGUAGE</span>
              <span className="text-base sm:text-lg font-bold text-[#20211F]">JS</span>
            </div>
          </div>
        </div>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {githubRepos.map((repo) => (
            <div
              key={repo.name}
              className="group p-5 sm:p-6 lg:p-7 rounded-2xl bg-[#FAF9F6] border border-[#777C62]/20 hover:border-[#C46B45] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#777C62]/15 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <IconTerminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C46B45]" />
                    <span className="font-mono text-[10px] sm:text-xs text-[#777C62]">REPOSITORY</span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs text-[#777C62] px-2 py-0.5 rounded bg-[#E8E4DA]/60">
                    {repo.language}
                  </span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm sm:text-base font-bold text-[#20211F] group-hover:text-[#C46B45] transition-colors flex items-center gap-1.5 break-all sm:break-normal"
                >
                  <span>{repo.name}</span>
                  <IconArrowUpRight className="w-4 h-4 shrink-0 text-[#777C62] group-hover:text-[#C46B45]" />
                </a>

                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#20211F]/75 leading-relaxed font-light">
                  {repo.description}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#777C62]/15 flex items-center justify-between text-xs text-[#777C62] font-mono">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="flex items-center gap-1">
                    <IconStar className="w-3.5 h-3.5 text-[#C46B45]" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <IconGitFork className="w-3.5 h-3.5" />
                    {repo.forks}
                  </span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C46B45] hover:underline uppercase tracking-wider font-semibold text-[11px] sm:text-xs"
                >
                  Inspect Source →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
