export const profile = {
  name: "Asad Nawaz",
  email: "asad223nawaz@gmail.com",
  linkedin: "https://www.linkedin.com/in/asad-nawaz-509747248",
  github: "https://github.com/AsadNawaz77",
  cv: "/AsadNawaz-CV.pdf",
  status: "Software engineer at bluecascade, open to remote roles",
  pitch:
    "I build React and React Native apps, and Shopify stores that sell. I'm based in Pakistan and work remotely.",
};

export const projects = [
  {
    id: "alliesia",
    title: "Alliesia",
    kind: "Zysoftec, work management app",
    mock: "tasks",
    description:
      "A work management app in the vein of ClickUp and Monday: projects, tasks and teams in one place. Built during my time at Zysoftec.",
    stack: "React Native",
    links: [{ label: "Visit alliesia.com", href: "https://alliesia.com" }],
  },
  {
    id: "tasquash",
    title: "Tasquash",
    kind: "Zysoftec, job marketplace",
    mock: "jobs",
    description:
      "An online marketplace where people post jobs and others pick them up. I built features and fixed production bugs across the app.",
    stack: "React Native",
  },
  {
    id: "velocity",
    title: "Velocity App",
    kind: "Zysoftec, AI floor mapping",
    mock: "floor",
    description:
      "An app that uses AI to generate floor maps and related layouts, so a space can be drawn from a few inputs instead of by hand.",
    stack: "React Native, AI APIs",
  },
  {
    id: "steppals",
    title: "Step Pals",
    kind: "Walking game, design work",
    mock: "steps",
    description:
      "A React Native walking game, live on the App Store and Google Play. I worked on the app's design.",
    stack: "React Native, UI design",
    links: [
      {
        label: "See it on the App Store",
        href: "https://apps.apple.com/gb/app/step-pals-walking-game/id6747041627",
      },
    ],
  },
  {
    id: "whatscriby",
    title: "Whatscriby",
    kind: "Personal project, Play Store",
    mock: "voice",
    description:
      "Turns long WhatsApp voice notes into short bullet points. Share a voice note to the app and it transcribes and summarises it with AI. The full transcript is there when you want it. I designed, built and published it on the Play Store myself.",
    stack: "React Native, AI transcription and summaries",
  },
  {
    id: "tickets",
    title: "Ticketing system",
    kind: "bluecascade, internal tool",
    mock: "tasks",
    description:
      "A Trello-style ticketing system the whole organisation uses internally: boards, columns and tickets that move as work moves.",
    stack: "React, Laravel, MySQL",
  },
  {
    id: "rowaq",
    title: "ROWAQ Cloud",
    kind: "Client project, POS and admin",
    mock: "pos",
    description:
      "A point-of-sale system with an admin portal, CRM and ERP modules for a coffee business. Orders, stock and daily operations live in one place.",
    stack: "React, admin portal, POS",
    links: [{ label: "Open the admin portal", href: "https://rowaq-cloud-admin.netlify.app/#/login" }],
  },
  {
    id: "expenzo",
    title: "Expenzo",
    kind: "Mobile and web app",
    mock: "receipt",
    description:
      "An expense tracker that reads a photo of a receipt with OCR, then asks an LLM to turn the raw text into categorised expense records.",
    stack: "React Native, OCR, LLM APIs",
  },
  {
    id: "legaldraft",
    title: "LegalDraft AI",
    kind: "Client prototype, mobile",
    mock: "legal",
    description:
      "A prototype for a law firm. It drafts custom agreements with generative AI, regenerates them on request, then exports to PDF and shares them without leaving the app.",
    stack: "React Native, Gemini, OpenRouter",
  },
  {
    id: "assistant",
    title: "AI personal assistant",
    kind: "Mobile app",
    mock: "calendar",
    description:
      "An assistant that schedules meetings and starts calls from calendar events, so the day runs from one screen.",
    stack: "React Native, Node.js",
  },
  {
    id: "leads",
    title: "Lead reconciliation dashboard",
    kind: "Client work, admin dashboard",
    mock: "dash",
    description:
      "A Laravel and Livewire dashboard for a group of client stores. It checks each store's leads against HubSpot, Airtable and Google Ads, retries failed checks on a backoff schedule, and reconciles Klaviyo email opens.",
    stack: "Laravel, Livewire, MySQL",
  },
  {
    id: "customizer",
    title: "Logo customizer",
    kind: "Etsy, web tool",
    mock: "logo",
    description:
      "A web tool where a buyer customises a logo I designed, then sees the result before they order. React on the front end, Laravel behind it.",
    stack: "React, Laravel",
  },
  {
    id: "shopify",
    title: "Shopify stores",
    kind: "bluecascade, e-commerce",
    mock: "store",
    description:
      "Custom themes and features written in Liquid for four stores, from sign makers to educational toys.",
    stack: "Shopify, Liquid",
    links: [
      { label: "Business Neons", href: "https://businessneons.com" },
      { label: "Custom Board Signs", href: "https://customboardsigns.com" },
      { label: "Custom Anything", href: "https://customanything.com" },
      { label: "Educational Toys", href: "https://educationaltoys.com" },
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "bluecascade",
    when: "Mar 2026 to now",
    place: "Multan",
    points: [
      "Admin dashboards, CRM systems and an internal ticketing system in React, Laravel and MySQL.",
      "Shopify stores customised in Liquid to client requirements.",
      "Features across Laravel and Node.js backends.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Zysoftec",
    when: "Mar to Nov 2026",
    place: "Islamabad",
    points: [
      "Built and shipped features for Alliesia, Tasquash and Velocity App.",
      "REST API integration with optimised network calls.",
      "Performance debugging and stable APK builds for testing.",
    ],
  },
  {
    role: "React Native Intern",
    company: "TectSoft",
    when: "Feb to Mar 2026",
    place: "Lahore",
    points: ["UI components and core gameplay features for a React Native mobile game."],
  },
  {
    role: "React Intern",
    company: "CES",
    when: "Jun to Nov 2024",
    place: "Islamabad",
    points: [
      "Built and maintained the School Mentor portal in React and Redux.",
      "Cut portal load times by 30%, about one second per page.",
      "Lifted user engagement by 25% through UX improvements.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "TechTitans",
    when: "Dec 2022 to May 2024",
    place: "Multan",
    points: [
      "Responsive interfaces in HTML, CSS and JavaScript, built with designers and backend teams.",
      "Cross-browser and mobile performance work.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: "JavaScript, PHP, Laravel, SQL" },
  { group: "Frameworks", items: "React, React Native, Node.js, Express" },
  { group: "Styling and state", items: "Tailwind CSS, Bootstrap, Redux" },
  { group: "AI and automation", items: "Gemini API, OpenAI via OpenRouter, OCR, prompt engineering" },
  { group: "Commerce platforms", items: "Shopify (Liquid), Wix, Thinkific, Teachable" },
  { group: "Tools", items: "Git, GitHub, VS Code, Figma, Postman, MySQL" },
];

export const education = "BS Computer Science, University of Management and Technology, Lahore, 2021 to 2025";
