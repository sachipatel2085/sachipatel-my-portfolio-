import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeSEOMeta = {
  "/": {
    title: "Sachi Patel — Full Stack Developer & MERN Engineer | Portfolio",
    description: "Official portfolio of Sachi Patel — Full Stack Developer & MERN Engineer based in Gujarat, India. Specializing in React.js, Node.js, Express, and MongoDB. Explore projects, case studies & hire.",
    canonical: "https://sachipatel-my-portfolio.vercel.app/",
  },
  "/about": {
    title: "About Sachi Patel | Computer Engineer & Full Stack Developer GTU",
    description: "Learn more about Sachi Patel — Computer Engineering student at Gujarat Technological University (GTU '26) and Full Stack Developer specializing in MERN architectures.",
    canonical: "https://sachipatel-my-portfolio.vercel.app/about",
  },
  "/projects": {
    title: "Selected Projects & Case Studies | Sachi Patel — Full Stack Developer",
    description: "Explore real-world software applications built by Sachi Patel: Farm Advisory System (MERN Agritech), ArticleHub CMS, Genuine Forever Containers, and Cue Club Coventry.",
    canonical: "https://sachipatel-my-portfolio.vercel.app/projects",
  },
  "/skills": {
    title: "Technical Skills & Tech Stack | Sachi Patel (React, Node, Mongo, Express)",
    description: "Detailed breakdown of Sachi Patel's technical competencies: React.js, JavaScript (ES6+), Node.js, Express.js, MongoDB, REST APIs, Tailwind CSS, Git, and cloud tooling.",
    canonical: "https://sachipatel-my-portfolio.vercel.app/skills",
  },
  "/experience": {
    title: "Experience & Education Timeline | Sachi Patel (B.E. Computer Engineering)",
    description: "Educational milestones at Gujarat Technological University (2022–2026) and professional software engineering trajectory of Sachi Patel.",
    canonical: "https://sachipatel-my-portfolio.vercel.app/experience",
  },
  "/services": {
    title: "Engineering Capabilities & Services | Sachi Patel — Full Stack Developer",
    description: "Frontend architecture, full stack MERN delivery, RESTful API microservices, database schema modeling, responsive design, and Core Web Vitals optimization by Sachi Patel.",
    canonical: "https://sachipatel-my-portfolio.vercel.app/services",
  },
  "/contact": {
    title: "Contact & Hire Sachi Patel | Full Stack Developer Gujarat, India",
    description: "Get in touch with Sachi Patel for full-time software engineering roles, internships, or commercial web projects. Email: sachixl300@gmail.com | Phone: +91 78638 47823.",
    canonical: "https://sachipatel-my-portfolio.vercel.app/contact",
  },
};

const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeSEOMeta[pathname] || routeSEOMeta["/"];

    // Update document title
    document.title = meta.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", meta.description);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", meta.canonical);
    }

    // Update OpenGraph title and description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", meta.canonical);

    // Update Twitter title and description
    const twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", meta.title);

    const twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", meta.description);

    const twUrl = document.querySelector('meta[property="twitter:url"]');
    if (twUrl) twUrl.setAttribute("content", meta.canonical);
  }, [pathname]);

  return null;
};

export default SEO;
