export const SITE_URL = "https://portfolio-asad-nawazs-projects-de7caf34.vercel.app";

export const profile = {
  name: "Asad Nawaz",
  role: "React & React Native Developer",
  location: "Pakistan · Remote",
  email: "asad223nawaz@gmail.com",
  linkedin: "https://www.linkedin.com/in/asad-nawaz-509747248",
  github: "https://github.com/AsadNawaz77",
  cv: "/AsadNawaz-CV.pdf",
  summary:
    "I build fast, reliable web and mobile products with React, React Native and Shopify. I like turning rough requirements into clean interfaces, wiring them to real APIs, and fixing what breaks in production.",
};

export const featured = [
  {
    title: "ROWAQ Cloud",
    tag: "POS · Admin · CRM · ERP",
    description:
      "A point-of-sale system with an admin portal, CRM and ERP modules, built for a coffee business client. Covers orders, inventory and day-to-day operations in one place.",
    stack: ["React", "Admin portal", "POS"],
    href: "https://rowaq-cloud-admin.netlify.app/#/login",
    linkLabel: "Open admin portal",
  },
  {
    title: "School Mentor",
    tag: "Web platform",
    description:
      "A school management portal I built in React and Redux during my internship at CES. Refactoring the core components cut portal load times by 30%.",
    stack: ["React", "Redux", "Axios"],
    href: "https://schoolmentor.ai/",
    linkLabel: "Visit site",
  },
  {
    title: "Expenzo",
    tag: "Mobile · AI",
    description:
      "An expense tracker for mobile and web. It reads receipts with OCR and uses LLM APIs to turn the raw text into structured, categorised expense records.",
    stack: ["React Native", "OCR", "LLM APIs"],
  },
  {
    title: "LegalDraft AI",
    tag: "Mobile · Client prototype",
    description:
      "A prototype for a legal firm that drafts custom agreements with generative AI, then regenerates, exports to PDF and shares them from inside the app.",
    stack: ["React Native", "Gemini", "OpenRouter"],
  },
];

export const stores = [
  { name: "Business Neons", href: "https://businessneons.com" },
  { name: "Custom Board Signs", href: "https://customboardsigns.com" },
  { name: "Custom Anything", href: "https://customanything.com" },
  { name: "Educational Toys", href: "https://educationaltoys.com" },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "bluecascade",
    place: "Multan",
    period: "Mar 2026 – Present",
    points: [
      "Build admin dashboards and CRM systems in React with reusable components and clean state management.",
      "Customise Shopify stores with Liquid and ship responsive UI to client requirements.",
      "Work across Laravel and Node.js backends to deliver features end to end.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Zysoftec",
    place: "Islamabad",
    period: "Mar 2026 – Nov 2026",
    points: [
      "Shipped new features and production bug fixes in cross-platform React Native apps.",
      "Integrated REST APIs with optimised network calls and reliable user interactions.",
      "Debugged and tuned performance, delivering stable APK builds for testing.",
    ],
  },
  {
    role: "React Native Intern",
    company: "TectSoft",
    place: "Lahore",
    period: "Feb 2026 – Mar 2026",
    points: [
      "Built UI components and core gameplay features for a React Native mobile game.",
    ],
  },
  {
    role: "React Intern",
    company: "CES",
    place: "Islamabad",
    period: "Jun 2024 – Nov 2024",
    points: [
      "Built and maintained the School Mentor portal with React and Redux.",
      "Cut load times by 30% (about one second per page) by refactoring core components.",
      "Integrated REST APIs with Axios and lifted user engagement by 25% through UX improvements.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "TechTitans",
    place: "Multan",
    period: "Dec 2022 – May 2024",
    points: [
      "Built responsive interfaces with HTML, CSS and JavaScript, working closely with designers and backend teams.",
      "Optimised performance and cross-browser behaviour on web apps.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "SQL", "PHP"] },
  { group: "Frameworks", items: ["React", "React Native", "Node.js", "Express.js"] },
  { group: "Styling & state", items: ["Tailwind CSS", "Bootstrap", "Redux"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Postman"] },
  { group: "AI & automation", items: ["Gemini API", "OpenAI via OpenRouter", "OCR", "Prompt engineering"] },
  { group: "Platforms", items: ["Shopify (Liquid)", "Wix", "Thinkific", "Teachable"] },
];

export const education = {
  degree: "BS Computer Science",
  school: "University of Management and Technology, Lahore",
  period: "2021 – 2025",
};
