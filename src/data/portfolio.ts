export const portfolioData = {
  hero: {
    role: "Full-Stack · Backend · Cybersecurity",

    headline: "Backend developer who thinks like an attacker.",

    subDescription:
      "My foundation is software engineering: APIs, backend systems, databases, cloud, security and scalable application architecture.",

    techTicker: [
      "AI-Assisted Development",
      "Java",
      "Python",
      "Spring Boot",
      "Flask",
      "React",
      "REST APIs",
      "Redis",
      "MySQL",
      "AWS",
      "GCP",
      "Docker",
      "Cybersecurity",
    ],

    cta: {
      primary: "Explore My Work",
      secondary: "See How I Build",
    },
  },

  about: {
    heading: "More than a developer who knows tools.",

    paragraphs: [
      "I'm Neeraj — a Computer Science graduate from KL University with a 9.33 CGPA. I build full-stack applications, backend systems, REST APIs, security-focused platforms and AI-assisted solutions.",
    ],

    highlight: {
      title: "AI is my multiplier. Engineering is my foundation.",
      description:
        "I don't treat AI as a replacement for understanding code. I use it to explore faster, validate ideas, solve problems and spend more time thinking about architecture, reliability, security and the product itself.",
    },

    stats: [
      { value: 4, suffix: "", label: "Major Projects Built" },
      { value: 6, suffix: "", label: "Certifications Earned" },
      { value: 9, suffix: ".33", label: "CGPA" },
      { value: 2026, suffix: "", label: "Graduation Year" },
    ],

    logos: [
      "Java",
      "Python",
      "Spring Boot",
      "Flask",
      "React",
      "Redis",
      "MySQL",
      "AWS",
    ],

    education: [
      {
        year: "2022 – 2026",
        degree: "B.Tech Computer Science Engineering",
        institution:
          "Koneru Lakshmaiah University (KL University), Vijayawada",
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
      "Built RESTful backend APIs and JSON API layers using Spring Boot and Flask",

      "Integrated Redis as a caching and ephemeral-data layer for OTP verification, rate limiting, session handling and token management",

      "Implemented multi-factor authentication, RBAC, secure sessions, quota controls and atomic database operations",

      "Designed security-first applications using encryption, HMAC-SHA256 signature verification, CORS controls, authentication, authorization and rate limiting",

      "Worked across Java, Python, JavaScript, React, SQL, Redis, AWS, GCP, Docker and Linux",

      "Used Postman, JUnit, Swagger/OpenAPI and OWASP ZAP for API validation, testing, debugging and security assessment",

    ],
  },

  skills: {
    heading: "The stack behind what I build.",

    categories: [
      {
        name: "Languages",
        items: [
          "Java",
          "Python",
          "SQL",
        ],
      },

      {
        name: "Backend & APIs",
        items: [
          "Spring Boot",
          "Spring MVC",
          "Flask",
          "REST APIs",
          "Microservices",
          "Hibernate/JPA",
          "OOP",
        ],
      },

      {
        name: "Frontend",
        items: [
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "JSP",
        ],
      },

      {
        name: "Data & Caching",
        items: [
          "MySQL",
          "Redis",
          "SQLAlchemy",
          "Database Design",
        ],
      },

      {
        name: "Cloud & DevOps",
        items: [
          "AWS",
          "Oracle Cloud",
          "GCP",
          "Docker",
          "GitHub Actions",
          "CI/CD",
        ],
      },

      {
        name: "Security",
        items: [
          "OWASP & ZAP",
          "Secure Sessions",
          "Rate Limiting",
          "Zero Trust",
          "Zero Knowledge",
        ],
      },

      {
        name: "Engineering Tools",
        items: [
          "Git",
          "Maven",
          "JUnit",
          "Postman",
          "Code Review",
          "AI-Assisted Development",
        ],
      },
    
    ],

    marquee: [
      "AI",
      "Java",
      "Python",
      "Spring Boot",
      "Flask",
      "React",
      "REST APIs",
      "Redis",
      "MySQL",
      "AWS",
      "GCP",
      "Docker",
      "Cybersecurity",
      "System Design",
    ],
  },

  projects: [
    {
      title: "ZK Vault — Secure Personal Data Encryption System",

      description:
        "A zero-knowledge inspired encrypted vault designed around the principle that sensitive plaintext should never need to reach the backend. Cryptographic operations are performed locally while the Flask backend handles encrypted data, authentication workflows, quotas and business logic.",

      tech: [
        "Python-Flask",
        "MySQL",
        "Redis",
        "Security",
      ],

      

      story: {
        hook: "What if the server never sees your data?",
        problem: "Sensitive user data needed protection even from the backend.",
        decisions: [
          "Encrypt before data leaves the client",
          "Use Redis for short-lived security state",
          "Keep encrypted data in MySQL",
        ],
        flow: [
          "User",
          "Argon2id",
          "AES-GCM",
          "Flask API",
          "Redis",
          "MySQL",
        ],
        challenge:
          "Making authentication and encryption work together without weakening the security model.",
        result:
          "A client-encrypted vault with a security-first backend.",
      },

      github: "https://github.com/neerajsait/ZK-Vault",
      link: "https://github.com/neerajsait/ZK-Vault",
    },

    {
      title: "Campus Recruitment & Placement Tracking System",

      description:
        "A backend-driven recruitment platform built with Java and Spring Boot MVC. It exposes RESTful APIs for job postings, candidate tracking, interview scheduling and automated status updates, with shared business logic across recruiter and student modules.",

      tech: [
        "Java-Spring Boot",
        "MySQL",
        "REST APIs",
        "JUnit",
        "Postman",
      ],

      story: {
        hook: "What if a fake company could reach students before anyone verified it?",
        problem:
          "Students can be exposed to fraudulent job postings when companies are allowed to recruit without verification.",
        decisions: [
          "Require company verification immediately after recruiter registration",
          "Keep recruiter features locked until the company is verified",
          "Have an admin manually contact and verify the company before approval",
        ],
        flow: [
          "Recruiter Registration",
          "Company Details",
          "Admin Verification",
          "Company Approved",
          "Recruiter Access",
          "Student Recruitment",
        ],
        challenge:
          "Designing a verification workflow that prevents unverified companies from accessing recruitment features while keeping the process simple for legitimate recruiters.",
        result:
          "A recruitment platform where companies must pass admin verification before they can post jobs and hire students.",
      },

      github: "https://github.com/neerajsait/RecruiterService",
      link: "https://neerajsait.github.io/RecruiterService/",
    },

    {
      title: "FoodPilot ERP Platform",

      description:
        "A unified business platform combining B2C ordering, POS operations and B2B supplier management. The system connects customer ordering, inventory, authentication, payments, supplier workflows and automated notifications through a Flask and React architecture.",

      tech: [
        "Python-Flask",
        "React",
        "MySQL",
        "Redis",
        "Tailwind CSS",
      ],

      story: {
        hook: "What if one system could connect the entire food business?",
        problem:
          "Customers, POS staff, outlets, inventory and suppliers often work through disconnected workflows, making it difficult to keep orders, stock and business operations in sync.",
        decisions: [
          "Build a shared backend for customer, POS, outlet and supplier workflows",
          "Keep inventory synchronized across orders and operational activities",
          "Secure sensitive operations with JWT authentication, rate limiting and signed QR codes",
        ],
        flow: [
          "Customer",
          "QR Order",
          "Payment",
          "Inventory",
          "POS",
          "Outlet",
          "Supplier",
        ],
        challenge:
          "Keeping multiple business workflows synchronized while ensuring that customers, staff and administrators only access the operations they are authorized to perform.",
        result:
          "A unified food business platform connecting B2C ordering, POS operations, inventory, outlets and B2B supplier management.",
      },

      github: "https://github.com/neerajsait/FoodPilot",
      link: "https://foodpilot-customer.netlify.app/",
    },

    {
      title: "Real-Time Network Monitor",

      description:
        "A real-time network monitoring and host-based intrusion detection system built with Python, Flask and Scapy. It combines packet capture, deep packet inspection, DLP-style pattern detection, GeoIP analysis, WebSocket streaming and a honeypot into a live security dashboard.",

      tech: [
        "Python-Flask",
        "Scapy",
        "Socket.IO",
        "Network Security",
        "Honeypot",
      ],

      story: {
        hook: "What if you could watch network activity as it happened on your device?",
        problem:
          "Traditional logs can tell you what happened later, but I wanted to see suspicious network activity as it happened.",
        decisions: [
          "Capture packets in real time with Scapy",
          "Inspect traffic for suspicious patterns and sensitive data",
          "Stream detected events directly to a live dashboard",
        ],
        flow: [
          "Network Traffic",
          "Scapy",
          "Packet Inspection",
          "DPI & DLP Detection",
          "GeoIP",
          "WebSocket Dashboard",
        ],
        challenge:
          "Capturing and analyzing network traffic continuously without blocking the application or overwhelming the live dashboard.",
        result:
          "A real-time network monitoring system that captures, analyzes and visualizes suspicious activity as it happens.",
      },

      github: "https://github.com/neerajsait/Network-Monitor",
      link: "https://github.com/neerajsait/Network-Monitor",
    },
  ],

  certifications: [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2025",
      link:
        "https://www.credly.com/badges/4b61af02-e6d6-409b-a4e3-fc3f95f401c4/public_url",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      year: "2025",
      link:
        "https://badgr.com/public/assertions/n6jEBEhGRbqsh5MiCcuEjQ",
    },
    {
      title: "Cisco Data Analytics Essentials",
      issuer: "Cisco",
      year: "2024",
      link:
        "https://www.credly.com/badges/5bd6f98f-f1cf-4e3f-8c59-c330e0fb5c19/public_url",
    },
    {
      title: "Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      year: "2024",
      link:
        "https://learn.microsoft.com/en-in/users/tiruveedhineerajvenkatasai-1148/credentials/7f6ad6c42a923f73",
    },
    {
      title: "Java Programming",
      issuer: "NPTEL (IIT)",
      year: "2023",
      link:
        "https://drive.google.com/file/d/1Lndm5bhBLLq0p0GP8r0B8zwtybgD6uPG/view?usp=sharing",
    },
    {
      title: "Linguaskills (B1)",
      issuer: "Cambridge University Press",
      year: "2023",
      link:
        "https://drive.google.com/file/d/1iFCzXfG71E5E1zRasVBsNQ39_TO2-qpF/view?usp=sharing",
    },
  ],

  contact: {
    email: "2200030957cseh@gmail.com",
    github: "https://github.com/neerajsait",
    linkedin: "https://linkedin.com/in/neerajsait",
    phone: "+91 9642292282",
    location: "Vijayawada, India",
    resume:
      "https://drive.google.com/file/d/18nwjjszv7J_srYj1hcaUi7cEikXqMT-3/view?usp=sharing",
  },
};
