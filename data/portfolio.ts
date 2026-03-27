export type ProjectResourceLink = {
  href: string;
  label: string;
  tone?: "amber" | "blue" | "violet";
};

export type Project = {
  title: string;
  category: string;
  buildTime: string;
  url: string;
  repoUrl: string;
  resourceLinks?: ProjectResourceLink[];
  domain: string;
  thumbnail: string;
  headline: string;
  summary: string;
  tags: string[];
  highlights: Array<{
    label: string;
    value: string;
  }>;
};

type Capability = {
  title: string;
  description: string;
};

type Principle = {
  title: string;
  description: string;
};

type StackItem = {
  label: string;
  detail: string;
};

export const portfolioContent: {
  name: string;
  role: string;
  intro: string;
  description: string;
  availability: string;
  navigation: string[];
  highlights: Array<{ value: string; label: string }>;
  signals: string[];
  capabilities: Capability[];
  principles: Principle[];
  stack: StackItem[];
} = {
  name: "Stefano Caruso",
  role: "AI-first Product Leader",
  intro:
    "AI-first Product Leader with over 16 years of experience in data, and a strong track record in team building, stakeholder alignment and product delivery.",
  description:
    "Leverages data and first-principles thinking to drive execution and business outcomes.",
  availability:
    "Open for product strategy, design systems, AI workflow design, and full-stack delivery for ambitious software teams.",
  navigation: ["Projects", "Services", "Process", "Stack", "Next Build"],
  highlights: [
    {
      value: "6 live products",
      label: "captured from the active URLs you shared",
    },
    {
      value: "AI + ops + data",
      label: "work spanning collaboration, runtime, finance, and marketplaces",
    },
    {
      value: "Narrative-first layout",
      label: "hero, proof, project reel, operating model, and CTA flow",
    },
  ],
  signals: [
    "Live homepage thumbnails",
    "Horizontal swipe carousel",
    "Dark neumorphic visual system",
    "Responsive App Router scaffold",
  ],
  capabilities: [
    {
      title: "Product Framing",
      description:
        "Position complex platforms with clear value, sharper hierarchy, and interface narratives that help buyers and users understand the product fast.",
    },
    {
      title: "Design Systems",
      description:
        "Build reusable surfaces, interaction patterns, and visual rules that keep the product coherent across launch pages and applications.",
    },
    {
      title: "AI Workflow UX",
      description:
        "Shape experiences where assistants, search, retrieval, and guided actions feel embedded in the workflow instead of bolted on.",
    },
    {
      title: "Full-Stack Delivery",
      description:
        "Ship polished frontends on a modern React stack with assets, animation, performance, and maintainable structure ready for iteration.",
    },
  ],
  principles: [
    {
      title: "Lead With A Point Of View",
      description:
        "The first screen should clarify who you are, what kind of products you build, and why the work matters before the visitor has to scroll.",
    },
    {
      title: "Feature The Proof Early",
      description:
        "World-class portfolio layouts push featured work near the top so visitors can reach live product evidence immediately, not after a long bio.",
    },
    {
      title: "Turn Cards Into Doorways",
      description:
        "Projects should feel like distinct destinations with visual context, crisp framing, and a clear path to click through to the real experience.",
    },
  ],
  stack: [
    {
      label: "Next.js 16",
      detail: "App Router foundation with server-first page composition.",
    },
    {
      label: "React 19",
      detail: "Modern component model for interactive UI and reusable sections.",
    },
    {
      label: "TypeScript 5",
      detail: "Typed content model for projects, sections, and future updates.",
    },
    {
      label: "Tailwind CSS 4",
      detail: "Token-driven styling layered with custom neumorphic CSS surfaces.",
    },
    {
      label: "Motion 12",
      detail: "Controlled reveal animation instead of generic template movement.",
    },
    {
      label: "Gesture Carousel",
      detail: "State-driven horizontal project reel with swipe gestures and button navigation.",
    },
    {
      label: "Playwright CLI",
      detail: "Repeatable script to refresh homepage thumbnails from the live URLs.",
    },
  ],
};

export const portfolioProjects: Project[] = [
  {
    title: "Ship",
    category: "AI Workflow / Project Ops",
    buildTime: "6-day build",
    url: "https://d1woqw06xb054i.cloudfront.net/login",
    repoUrl: "https://github.com/StefanoCaruso456/ShipShape_Gov",
    resourceLinks: [
      {
        href: "https://drive.google.com/file/d/17MQodDZHqxKdO2rYlhgGQg62u18MT46s/view?usp=drive_link",
        label: "Main app demo",
        tone: "violet",
      },
    ],
    domain: "d1woqw06xb054i.cloudfront.net",
    thumbnail: "/projects/ship.png",
    headline:
      "Jira-like product management and documentation platform with an event-driven AI layer and a chat assistant for dependencies, program insight, and issue-level context.",
    summary:
      "Ship brings programs, projects, issues, and documentation into one operating workspace. One AI system runs quietly in the background through event-triggered automations, while a second chat assistant reliably surfaces dependencies, risks, and data insights across the delivery workflow.",
    tags: ["Docs", "Team ops", "Accountability", "Assistant UX"],
    highlights: [
      {
        label: "Live signal",
        value: "Documentation workspace with embedded action tracking.",
      },
      {
        label: "Experience move",
        value: "Assistant context is tied directly to the current work surface.",
      },
    ],
  },
  {
    title: "BrainStorm AI",
    category: "AI Collaboration",
    buildTime: "6-day build",
    url: "https://brainstormaigauntletai.com/login",
    repoUrl: "https://github.com/StefanoCaruso456/BrainstormAI",
    resourceLinks: [
      {
        href: "https://drive.google.com/file/d/14zLSi5d-HE8GgUiTT8nE-voQYIkcJQyR/view?usp=sharing",
        label: "Demo video",
        tone: "violet",
      },
    ],
    domain: "brainstormaigauntletai.com",
    thumbnail: "/projects/brainstorm-gauntlet.png",
    headline:
      "Miro-style collaborative whiteboard where teams brainstorm, plan, and align in real time with AI layered directly into the canvas experience.",
    summary:
      "BrainStorm AI is built like a real-time team board system, using WebSocket and Yjs to keep multiplayer collaboration fast and synchronized. The product combines shared canvas workflows with AI-assisted ideation so distributed teams can think together, organize work visually, and move from discussion to execution faster.",
    tags: ["Collaboration", "AI canvas", "Team alignment", "Realtime"],
    highlights: [
      {
        label: "Live signal",
        value: "Clear sign-in flow anchored by a strong product promise.",
      },
      {
        label: "Experience move",
        value: "Landing copy focuses on speed, clarity, and team execution.",
      },
    ],
  },
  {
    title: "LegacyLens",
    category: "Code Intelligence",
    buildTime: "6-day build",
    url: "https://www.nationalseismichazardmaps.com/",
    repoUrl: "https://github.com/StefanoCaruso456/National-Seismic-Hazard-Maps",
    resourceLinks: [
      {
        href: "https://docs.google.com/videos/d/1E3QMDWkAdKTNO_135hMyiX9fMYaxbUs5oTHdef_syQI/edit?usp=sharing",
        label: "Demo video",
        tone: "violet",
      },
    ],
    domain: "nationalseismichazardmaps.com",
    thumbnail: "/projects/national-seismic.png",
    headline:
      "Brownfield codebase audit platform for onboarding new hires, mapping dependencies and risk, and helping teams understand legacy systems with confidence.",
    summary:
      "LegacyLens helps engineers, product managers, and cross-functional teams audit complex legacy codebases by making dependencies, risks, system architecture, data flows, and user flows searchable and explainable. It supports faster onboarding for new hires, clearer planning across existing teams, and safer decision-making for organizations working inside brownfield systems.",
    tags: ["Legacy systems", "RAG", "Search", "Technical analysis"],
    highlights: [
      {
        label: "Live signal",
        value: "Mode switching across chat, hybrid graph, search, and audits.",
      },
      {
        label: "Experience move",
        value: "Makes a specialized technical domain approachable without flattening depth.",
      },
    ],
  },
  {
    title: "Ghostclone",
    category: "Wealth Dashboard",
    buildTime: "6-day build",
    url: "https://app.ghostclone.xyz/en/start",
    repoUrl: "https://github.com/StefanoCaruso456/Ghostfolio",
    resourceLinks: [
      {
        href: "https://drive.google.com/file/d/1AM-8tT-vDfUGwB0fp8NTAGKIabXndpJH/view?usp=sharing",
        label: "Demo video",
        tone: "violet",
      },
    ],
    domain: "app.ghostclone.xyz",
    thumbnail: "/projects/ghostclone.png",
    headline:
      "A privacy-first wealth interface with onboarding, portfolio visibility, and open-source product DNA.",
    summary:
      "The live experience routes into a Ghostfolio-powered product surface focused on net worth, allocation, and investment clarity while keeping the UI clean and high trust.",
    tags: ["Finance UX", "Onboarding", "Open source", "Portfolio tracking"],
    highlights: [
      {
        label: "Live signal",
        value: "Registration-led entry into a polished personal finance dashboard.",
      },
      {
        label: "Experience move",
        value: "Strong trust framing through privacy, transparency, and education.",
      },
    ],
  },
  {
    title: "Shipyard",
    category: "AI coding agent",
    buildTime: "6-day build",
    url: "https://shipyard1.vercel.app/",
    repoUrl: "https://github.com/StefanoCaruso456/ShipYard",
    domain: "shipyard1.vercel.app",
    thumbnail: "/projects/shipyard.png",
    headline:
      "Codex-style AI software generator and execution harness built to turn scoped software requests into structured delivery work.",
    summary:
      "Shipyard is a Codex-inspired runtime surface for generating software, coordinating agent-driven execution, and moving from prompts into real implementation. It is being developed as part of a broader AI software factory direction, where agent swarms can operate like delivery teams instead of isolated assistants.",
    tags: ["Developer tooling", "Runtime", "Prompt ops", "Execution"],
    highlights: [
      {
        label: "Live signal",
        value: "Task-focused runtime shell with guided starting points.",
      },
      {
        label: "Experience move",
        value: "The product frames AI as a concrete production partner, not a novelty overlay.",
      },
    ],
  },
  {
    title: "Projectz AI",
    category: "AI Design Marketplace",
    buildTime: "5-month build",
    url: "https://projectzai.com/",
    repoUrl: "https://github.com/StefanoCaruso456/ProjectzAI",
    resourceLinks: [
      {
        href: "/pitch-decks/projectz-ai-pitch-deck.pdf",
        label: "Pitch deck",
        tone: "amber",
      },
    ],
    domain: "projectzai.com",
    thumbnail: "/projects/projectzai.png",
    headline:
      "AI home design, project management, and contractor matching pulled into one consumer-friendly platform.",
    summary:
      "Projectz AI ties inspiration, generation, project organization, and contractor discovery into a single journey, translating complex planning into a beginner-friendly experience.",
    tags: ["Home design", "Marketplace", "AI generation", "Project hub"],
    highlights: [
      {
        label: "Live signal",
        value: "Multi-path homepage spanning design, quotes, contractors, and project management.",
      },
      {
        label: "Experience move",
        value: "Large category system makes the product approachable for both homeowners and professionals.",
      },
    ],
  },
];
