export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const heroContent = {
  greeting: "Hi, I'm",
  name: "Samrat Saha",
  role: "Full-Stack Web Developer (MERN) & Data Science Enthusiast",
  summary:
    "B.Tech CSE (Data Science) student specializing in end-to-end MERN applications, scalable APIs, and modern UI/UX. I enjoy turning complex requirements into production-ready experiences with clean, maintainable code.",
  ctas: [
    { label: "View Projects", href: "#projects", style: "primary" },
    { label: "Get in Touch", href: "#contact", style: "ghost" },
  ],
  highlights: [
    { label: "Degree", value: "B.Tech" },
    { label: "CGPA", value: "8.13" },
    { label: "Projects", value: "5+" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Samrat-11" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/samrat-saha-050240245" },
    {
      label: "Resume (PDF)",
      href: "https://drive.google.com/file/d/12zjgHxMaC09rdWc3kw1KVg6bgyCMe7Fj/view?usp=drive_link",
    },
  ],
};

export const aboutContent = {
  eyebrow: "About",
  title: "Developer crafting full-stack experiences with data-driven thinking.",
  paragraphs: [
    "I'm a B.Tech Computer Science and Engineering (Data Science) student at Brainware University, passionate about building real-world products using the MERN stack and modern frontend tooling. I enjoy translating product requirements into robust UIs and APIs that are easy to maintain and extend.",
    "Recently, I've contributed to virtual internships, hackathons, and open-source programs, where I focused on usability, performance, and clean architecture. I'm actively looking for roles and internships where I can grow as a full-stack engineer while contributing to impactful products.",
  ],
  bulletPoints: [
    "B.Tech in CSE (Data Science), Brainware University (CGPA: 8.13 / 10 till 6th Sem)",
    "Strong foundation in JavaScript, Java, Python, SQL, and MERN stack",
    "Hands-on experience with production-ready React, Node.js, Express.js, and MongoDB apps",
  ],
};

export const skillsData = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "Java", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Framer Motion",
      "GSAP",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Node.js", "Express.js"],
  },
  {
    category: "APIs & Tools",
    items: ["RESTful APIs", "Git", "GitHub", "Docker", "VS Code"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
];

export const projectsData = [
  {
    title: "WorkTrack Admin – Task Management Dashboard",
    description:
      "Responsive, admin-driven task management dashboard allowing secure task creation, assignment, and status tracking for teams.",
    stack: ["React.js", "Tailwind CSS", "REST APIs"],
    impact:
      "Improved workflow visibility and accountability by centralizing task operations behind a clean, modular UI.",
    github: "https://github.com/samrat21saha", // replace with exact repo link
    demo: "#projects", // replace with live demo when available
  },
  {
    title: "Seedskraft – Full-Stack E-Commerce Platform",
    description:
      "Scalable MERN-based e-commerce application with modular architecture, fast product search, and interactive comment system.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    impact:
      "Delivered a performant shopping experience with optimized REST APIs for search, comments, and core commerce flows.",
    github: "https://github.com/samrat21saha", // replace with exact repo link
    demo: "#projects", // replace with live demo when available
  },
  {
    title: "FitAI & Hackathon/OSS Contributions",
    description:
      "Contributions to a Flask-based fitness app and multiple hackathon/OSS projects, focusing on modular APIs, UI/UX flows, and backend integrations.",
    stack: ["Flask", "Django", "REST APIs", "GitHub Actions"],
    impact:
      "Improved stability and usability across open-source and hackathon projects through focused debugging and integration work.",
    github: "https://github.com/samrat21saha",
    demo: "#projects",
  },
];

export const experienceData = [
  {
    company: "Forage – Skyscanner",
    title: "Software Engineering Intern (Virtual Job Simulation)",
    period: "Oct 2025 - Nov 2025",
    summary:
      "Completed Skyscanner's software engineering virtual internship focused on redesigning the Ad Portal experience for external clients.",
    bullets: [
      "Completed Task Four: Build a User-Friendly Platform by redesigning the Ad Portal to improve developer usability.",
      "Applied UI/UX design principles to resolve usability, feasibility, and value risks impacting product accessibility.",
      "Created three interactive Figma interfaces for ad creation, performance tracking, and feedback collection.",
      "Demonstrated strong understanding of ad platform workflows, connecting engineering logic with design usability.",
    ],
  },
  {
    company: "Euphoria GenX Pvt. Ltd.",
    title: "MERN Stack Web Development Intern",
    period: "May 2025 - Aug 2025",
    summary:
      "Worked as a MERN stack intern building production-ready web applications with a focus on performance and clean architecture.",
    bullets: [
      "Collaborated with the team to develop 5+ production-ready web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Delivered pixel-perfect, responsive UIs with reusable React components, improving load performance by around 30%.",
      "Integrated REST APIs and implemented secure authentication with JWT and middleware for real-time data interactions.",
      "Worked cross-functionally with designers and backend teams to refine architecture and streamline CI/CD using GitHub Actions and Vercel.",
    ],
  },
];

export const achievementsData = [
  {
    title: "Python for Data Science – IBM",
    detail: "Completed foundational training in Python for data analysis and data science workflows. (Certificate)",
  },
  {
    title: "Getting Started with Artificial Intelligence – IBM",
    detail: "Introduced to core AI concepts and their practical applications. (Certificate)",
  },
  {
    title: "Open Source Connect India 2025 – Rank 1",
    detail:
      "Ranked 1 among 8,317 participants; contributed to FitAI (Flask-based project) by enhancing UI/UX flows, debugging routes, and deploying modular API endpoints.",
  },
  {
    title: "GirlScript Summer of Code 2025 – Contributor",
    detail:
      "Delivered cross-platform modules and optimized backend integrations across multiple open-source repositories.",
  },
  {
    title: "ISRO Bhartiya Antariksh Hackathon 2025",
    detail:
      "Contributed to API integration and analytics layer optimization for geospatial data in a space-tech problem statement.",
  },
  {
    title: "XiBit Texibition2k25 Hackathon – Top 10 Finalist",
    detail:
      "Developed a backend portal within 7 hours using Django ORM and REST APIs, helping the team secure a Top 10 finalist position.",
  },
];

export const contactContent = {
  email: "samrat.saha@example.com", // replace with your preferred email
  location: "Remote / Open to hybrid hubs",
  availability: "Open to SDE / MERN internships, full-time, and freelance opportunities.",
  socials: [
    { label: "GitHub", href: "https://github.com/Samrat-11" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/samrat-saha-050240245" },
  ],
};

