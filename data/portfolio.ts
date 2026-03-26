export type Project = {
  title: string;
  category: string;
  url: string;
  repoUrl: string;
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
    url: "https://d1woqw06xb054i.cloudfront.net/login",
    repoUrl: "https://github.com/StefanoCaruso456/Ship",
    domain: "d1woqw06xb054i.cloudfront.net",
    thumbnail: "/projects/ship.png",
    headline:
      "Project management and documentation wrapped around accountability and a context-aware assistant.",
    summary:
      "The product combines structured docs, action items, and operational follow-through inside a single workspace, with FleetGraph helping teams reason about active work.",
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
    url: "https://brainstormaigauntletai.com/login",
    repoUrl: "https://github.com/StefanoCaruso456/BrainstormAI",
    domain: "brainstormaigauntletai.com",
    thumbnail: "/projects/brainstorm-gauntlet.png",
    headline:
      "A real-time AI-powered canvas built to help teams think clearly, align faster, and ship sooner.",
    summary:
      "The interface positions AI as a collaborative layer for ideation and decision-making, pairing a clean landing experience with a fast on-ramp into the product.",
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
    url: "https://www.nationalseismichazardmaps.com/",
    repoUrl: "https://github.com/StefanoCaruso456/National-Seismic-Hazard-Maps",
    domain: "nationalseismichazardmaps.com",
    thumbnail: "/projects/national-seismic.png",
    headline:
      "Seismic code intelligence for understanding a legacy technical codebase with confidence.",
    summary:
      "LegacyLens reframes a dense engineering system as something explorable, searchable, and explainable through chat, graph/hybrid search, and code-focused analysis modes.",
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
    url: "https://app.ghostclone.xyz/en/start",
    repoUrl: "https://github.com/StefanoCaruso456/Ghostfolio",
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
    category: "Runtime Tooling",
    url: "https://shipyard1.vercel.app/",
    repoUrl: "https://github.com/StefanoCaruso456/ShipYard",
    domain: "shipyard1.vercel.app",
    thumbnail: "/projects/shipyard.png",
    headline:
      "A runtime workspace for turning repo questions and implementation tasks into executable product work.",
    summary:
      "Shipyard is positioned like an operating console: project inventory on the side, guided prompts in the middle, and a workflow that encourages scoped action instead of vague requests.",
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
    url: "https://projectzai.com/",
    repoUrl: "https://github.com/StefanoCaruso456/ProjectzAI",
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
