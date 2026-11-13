import fs from 'fs';
import path from 'path';

// Generate a valid PDF-1.4 document containing Sachi Patel's professional resume
function generateResumePDF(outputPath) {
  const lines = [
    "%PDF-1.4",
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >> endobj",
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> endobj",
    "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj"
  ];

  // Resume content commands in PDF stream
  // 595 x 842 is standard A4 points
  const streamCommands = [
    "BT",
    "/F1 22 Tf",
    "50 800 Td (SACHI PATEL) Tj",
    "ET",
    "BT",
    "/F2 12 Tf",
    "50 782 Td (FULL STACK DEVELOPER | COMPUTER ENGINEERING) Tj",
    "ET",
    "BT",
    "/F2 10 Tf",
    "50 766 Td (Email: sachixl300@gmail.com | Phone: +91 78638 47823 | Location: Himmatnagar, Gujarat, India) Tj",
    "ET",
    "BT",
    "/F2 10 Tf",
    "50 752 Td (GitHub: https://github.com/sachipatel2085 | LinkedIn: sachikumar-patel-b847612a0) Tj",
    "ET",
    // Line separator
    "0.76 0.42 0.27 rg", // #C46B45 Burnt orange
    "50 740 495 1.5 re f",
    "0.12 0.13 0.12 rg", // #20211F Charcoal
    
    // Education Section
    "BT",
    "/F1 13 Tf",
    "50 720 Td (EDUCATION) Tj",
    "ET",
    "BT",
    "/F1 10 Tf",
    "50 702 Td (Bachelor of Engineering in Computer Engineering) Tj",
    "ET",
    "BT",
    "/F2 10 Tf",
    "50 688 Td (Gujarat Technological University (GTU) | 2022 - 2026) Tj",
    "ET",

    // Skills Section
    "BT",
    "/F1 13 Tf",
    "50 660 Td (TECHNICAL SKILLS) Tj",
    "ET",
    "BT",
    "/F1 10 Tf",
    "50 642 Td (Frontend:) Tj",
    "/F2 10 Tf",
    "110 642 Td (React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap) Tj",
    "ET",
    "BT",
    "/F1 10 Tf",
    "50 626 Td (Backend:) Tj",
    "/F2 10 Tf",
    "110 626 Td (Node.js, Express.js, RESTful APIs, JWT Authentication) Tj",
    "ET",
    "BT",
    "/F1 10 Tf",
    "50 610 Td (Databases:) Tj",
    "/F2 10 Tf",
    "110 610 Td (MongoDB, MySQL, SQL) Tj",
    "ET",
    "BT",
    "/F1 10 Tf",
    "50 594 Td (Tools & DevOps:) Tj",
    "/F2 10 Tf",
    "135 594 Td (Git, GitHub, Postman, VS Code, Vercel, Render) Tj",
    "ET",

    // Selected Projects
    "BT",
    "/F1 13 Tf",
    "50 566 Td (SELECTED PROJECTS) Tj",
    "ET",
    
    // Project 1: Farm Advisory System
    "BT",
    "/F1 11 Tf",
    "50 546 Td (1. Farm Advisory System) Tj",
    "/F2 9 Tf",
    "200 546 Td ((React, Node.js, Express.js, MongoDB)) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 532 Td (- Engineered a full-stack agritech platform for farm accounting, crop disease advisory, and harvest forecasting.) Tj",
    "50 518 Td (- Implemented income and expense management with interactive financial dashboards and field logging.) Tj",
    "50 504 Td (- Live: https://sachipatel-farm-advisory.vercel.app/) Tj",
    "ET",

    // Project 2: Blog Management System (ArticleHub)
    "BT",
    "/F1 11 Tf",
    "50 480 Td (2. Blog Management Platform (ArticleHub)) Tj",
    "/F2 9 Tf",
    "260 480 Td ((React, Node.js, Express, MongoDB, JWT)) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 466 Td (- Developed a multi-user blogging and publishing CMS with secure JWT authentication and role authorization.) Tj",
    "50 452 Td (- Features rich markdown authoring, category filtering, reading analytics, and cloud image persistence.) Tj",
    "50 438 Td (- Live: https://sachipatel-article-hub-frontend.vercel.app/) Tj",
    "ET",

    // Project 3: Genuine Forever Containers
    "BT",
    "/F1 11 Tf",
    "50 414 Td (3. Genuine Forever Containers) Tj",
    "/F2 9 Tf",
    "230 414 Td ((React, Tailwind CSS, 3D Product Presentation)) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 400 Td (- Designed and deployed an industrial corporate website showcasing heavy-duty container products.) Tj",
    "50 386 Td (- Engineered interactive product visualizers, dynamic technical specification tables, and direct inquiry forms.) Tj",
    "50 372 Td (- Live: https://genuineforevercontainers.com/) Tj",
    "ET",

    // Project 4: Cue Club Coventry
    "BT",
    "/F1 11 Tf",
    "50 348 Td (4. Cue Club Coventry) Tj",
    "/F2 9 Tf",
    "180 348 Td ((React, Tailwind CSS, Framer Motion)) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 334 Td (- Architected a luxury cinematic web redesign for Cue Club Coventry in the UK.) Tj",
    "50 320 Td (- Features high-converting booking flows, fluid scroll animations, and premium mobile-first responsiveness.) Tj",
    "50 306 Td (- Live: https://sachipatel-cueclub.vercel.app/) Tj",
    "ET",

    // Development Methodology
    "BT",
    "/F1 13 Tf",
    "50 276 Td (DEVELOPMENT METHODOLOGY & PRACTICES) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 258 Td (- Systematic 4-stage process: Discover -> Design -> Develop -> Deliver.) Tj",
    "50 244 Td (- Strong commitment to clean code, modular component architecture, and Core Web Vitals optimization.) Tj",
    "50 230 Td (- Proficient in cross-browser testing, RESTful design, database schema modeling, and production deployment.) Tj",
    "ET"
  ];

  const streamContent = streamCommands.join("\n");
  const streamLength = Buffer.byteLength(streamContent, 'utf-8');

  lines.push(`6 0 obj << /Length ${streamLength} >> stream`);
  lines.push(streamContent);
  lines.push("endstream endobj");

  // Calculate xref offsets
  let offset = 0;
  const offsets = [0];
  const pdfStringWithoutXref = lines.join("\n") + "\n";
  
  // Calculate exact byte offsets for each obj
  const contentParts = lines.join("\n");
  let currentPos = 0;
  const regex = /(\d+ 0 obj)/g;
  let match;
  const objOffsets = {};

  const linesArr = lines.join("\n").split("\n");
  let byteCount = 0;
  for (let i = 0; i < linesArr.length; i++) {
    const l = linesArr[i];
    const m = l.match(/^(\d+) 0 obj/);
    if (m) {
      objOffsets[parseInt(m[1])] = byteCount;
    }
    byteCount += Buffer.byteLength(l, 'utf-8') + 1; // +1 for newline
  }

  const xrefStart = byteCount;
  let xref = `xref\n0 7\n0000000000 65535 f \n`;
  for (let i = 1; i <= 6; i++) {
    const off = String(objOffsets[i] || 0).padStart(10, '0');
    xref += `${off} 00000 n \n`;
  }
  xref += `trailer << /Size 7 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  const finalPdf = lines.join("\n") + "\n" + xref;
  fs.writeFileSync(outputPath, finalPdf, 'utf-8');
  console.log(`Resume generated successfully at ${outputPath}`);
}

const out = path.resolve('public/resumepatelsachikumaranilbhai.pdf');
generateResumePDF(out);
