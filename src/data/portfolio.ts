export const portfolioData = {
  hero: {
    role: "Aspiring Graduate Engineer Trainee · API Development",
    techTicker: [
      "Java",
      "Python",
      "Spring Boot",
      "Flask",
      "REST APIs",
      "Redis",
      "MySQL",
      "AWS",
      "GCP",
      "Docker",
      "JavaScript",
    ],
  },

  about: {
    paragraphs: [
      "I'm Neeraj — a CSE graduate from KL University with a 9.33 CGPA. I design RESTful backend APIs and JSON API layers using Spring Boot (MVC) and Flask.",
      "My work focuses on core business logic, SQL/NoSQL (Redis) caching for performance, and clean API contracts. I'm passionate about digital and AI advancements that help build scalable, reliable web services.",
    ],
    stats: [
      { value: 4, suffix: "", label: "Projects Built" },
      { value: 8, suffix: "", label: "Certifications Earned" },
      { value: 9, suffix: ".33", label: "CGPA at KL University" },
      { value: 2026, suffix: "", label: "Graduation Year" },
    ],
    logos: ["Java", "Python", "Spring Boot", "Flask", "Redis", "MySQL", "AWS"],
    education: [
      {
        year: "2022 – 2026",
        degree: "B.Tech Computer Science Engineering",
        institution: "Koneru Lakshmaiah University (KL University), Vijayawada",
        detail: "9.33 CGPA",
      },
      {
        year: "2020 – 2022",
        degree: "Intermediate (Mathematics, Physics, Chemistry)",
        institution: "Tirumala Junior College, Bhimavaram",
        detail: "91%",
      },
      {
        year: "2019 – 2020",
        degree: "Secondary Education",
        institution: "Bharatiya Vidya Bhavan's, Bhimavaram",
        detail: "83%",
      },
    ],
    achievements: [
      "Designed RESTful backend APIs and JSON API layers using Spring Boot (MVC) and Flask",
      "Integrated Redis as a NoSQL caching/session layer for OTP verification, rate limiting & token management",
      "Implemented multi-factor authentication, RBAC, and atomic quota checks with row-level locking",
      "Architected web applications with a security-first approach, implementing HMAC-SHA256 signature verification, CORS controls, and secure session management",
      "Utilized modern AI tools and LLMs to accelerate backend API prototyping, automate unit testing, and optimize database query structures",
      "Used Postman and JUnit for API testing, debugging, and validating specifications before release",
    ],
  },

  skills: {
    heading: "Built with the tools that matter.",
    categories: [
      { name: "Languages", items: ["Java", "Python", "JavaScript", "SQL"] },
      {
        name: "Frameworks",
        items: [
          "Spring Boot (MVC)",
          "Flask",
          "Node.js",
          "REST APIs",
          "SOAP APIs",
          "Microservices",
          "OOP",
        ],
      },
      { name: "Data & Caching", items: ["MySQL", "Redis (NoSQL/Caching)", "JSON APIs"] },
      {
        name: "DevOps & Cloud",
        items: ["CI/CD (GitHub Actions)", "GCP", "AWS", "Linux", "Windows", "Netlify"],
      },
      { name: "Tools", items: ["Git", "Docker", "JUnit", "Postman", "Maven", "Swagger/OpenAPI"] },
      {
        name: "Soft Skills",
        items: ["Analytical Thinking", "Problem Solving", "Leadership", "Adaptability", "Team Collaboration"],
      },
    ],
    marquee: [
      "Java",
      "Python",
      "Spring Boot",
      "Flask",
      "Redis",
      "MySQL",
      "AWS",
      "GCP",
      "Docker",
      "REST APIs",
      "Microservices",
    ],
  },

  projects: [
    {
      title: "Campus Recruitment & Placement Tracking System",
      description:
        "Backend built with Java and Spring Boot MVC exposing RESTful APIs for job postings, candidate tracking, interview scheduling and automated status-update notifications. Common API/business-logic layer shared by recruiter and student modules with clean controller/service/data separation. MySQL for high-volume storage; Postman + JUnit for API testing.",
      tech: ["Spring Boot (MVC)", "Java", "MySQL", "JUnit", "Postman"],
      github: "https://github.com/neerajsait/RecruiterService",
      link: "https://github.com/neerajsait/RecruiterService",
    },
    {
      title: "Secure Personal Data Encryption System (ZK Vault)",
      description:
        "Flask backend exposing REST APIs for a zero-knowledge encrypted vault — all business logic (auth, quotas, CRUD) enforced server-side while cryptography stays client-side. Redis used as a NoSQL caching/session layer for OTP verification, rate limiting and token management. MFA, RBAC and atomic quota checks with row-level locking for consistency under concurrent requests.",
      tech: ["Python", "Flask (MVC)", "MySQL", "Redis", "REST APIs"],
      github: "https://github.com/neerajsait/ZK-Vault",
      link: "https://github.com/neerajsait/ZK-Vault",
    },
    {
      title: "Real-Time Network Monitor",
      description:
        "Live packet capture dashboard with GeoIP mapping, anomaly detection alerts, and real-time socket-based updates. Deployed with Flask + Scapy.",
      tech: ["Python", "Flask", "Scapy", "Socket.IO"],
      github: "https://github.com/neerajsait/Network-Monitor",
      link: "https://github.com/neerajsait/Network-Monitor",
    },
    {
      title: "FlavorFlow ERP Platform",
      description:
        "A unified food enterprise platform (B2C ordering, POS checkout, B2B supplier management) with cryptographically signed QR restocking labels, interactive UPI scan-to-pay billing, and scheduled HTML email digests.",
      tech: ["Python", "Flask", "React", "MySQL", "SQLAlchemy", "Tailwind CSS"],
      github: "https://github.com/neerajsait/FlavorFlow",
      link: "https://github.com/neerajsait/FlavorFlow",
    },
  ],

  certifications: [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2025",
      link: "https://www.credly.com/badges/4b61af02-e6d6-409b-a4e3-fc3f95f401c4/public_url",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      year: "2025",
      link: "https://badgr.com/public/assertions/n6jEBEhGRbqsh5MiCcuEjQ",
    },
    {
      title: "Cisco Data Analytics Essentials",
      issuer: "Cisco",
      year: "2024",
      link: "https://www.credly.com/badges/5bd6f98f-f1cf-4e3f-8c59-c330e0fb5c19/public_url",
    },
    {
      title: "Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      year: "2024",
      link: "https://learn.microsoft.com/en-in/users/tiruveedhineerajvenkatasai-1148/credentials/7f6ad6c42a923f73",
    },
    {
      title: "Java Programming",
      issuer: "NPTEL (IIT)",
      year: "2023",
      link: "https://drive.google.com/file/d/1Lndm5bhBLLq0p0GP8r0B8zwtybgD6uPG/view?usp=sharing",
    },
    {
      title: "Linguaskills (B1)",
      issuer: "Cambridge University Press",
      year: "2023",
      link: "https://drive.google.com/file/d/1iFCzXfG71E5E1zRasVBsNQ39_TO2-qpF/view?usp=sharing",
    },
  ],

  contact: {
    email: "2200030957cseh@gmail.com",
    github: "https://github.com/neerajsait",
    linkedin: "https://linkedin.com/in/neerajsait",
    phone: "+91 9642292282",
    location: "Vijayawada, India",
    resume: "https://drive.google.com/file/d/18nwjjszv7J_srYj1hcaUi7cEikXqMT-3/view?usp=sharing",
  },
};
