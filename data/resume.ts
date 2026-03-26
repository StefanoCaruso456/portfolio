export type ResumeRole = {
  company: string;
  title: string;
  period: string;
  context: string;
  highlights: string[];
  badges: string[];
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoClassName?: string;
  logoFrameClassName?: string;
  note?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const resumeIntro = {
  eyebrow: "Experience",
  title: "Career depth across AI product, data systems, and founder-led delivery.",
  description: "",
  resumeHref: "/resume-stefano-caruso.pdf",
  resumeLabel: "Open resume PDF",
};

export const resumeRoles: ResumeRole[] = [
  {
    company: "Gauntlet AI",
    title: "AI Fellowship & Product Engineer",
    period: "Feb 2026 - May 2026",
    context:
      "Built multi-agent product systems inside an AI factory model, combining product strategy with hands-on implementation.",
    badges: ["AI agents", "Product engineering", "Multi-agent workflows"],
    logoSrc: "/logos/gauntlet-ai.png",
    logoAlt: "Gauntlet AI logo",
    logoWidth: 24,
    logoHeight: 30,
    logoClassName: "opacity-90",
    logoFrameClassName: "bg-white/[0.03] border-white/10",
    highlights: [
      "Built and orchestrated AI agent systems within a BMAD-style AI factory architecture for structured end-to-end application delivery.",
      "Used MCP, agent skills, and tool calling to improve reasoning quality, performance, and task execution reliability.",
      "Defined product vision, specs, roadmaps, and success metrics so AI agents could operate with clearer delivery guidance.",
    ],
  },
  {
    company: "Projectz AI",
    title: "Founder",
    period: "Jan 2025 - Present",
    context:
      "Leading an AI-native platform at the intersection of home design, project planning, and contractor matching.",
    badges: ["Founder", "Customer research", "Full-stack build"],
    highlights: [
      "Ran customer research, surveys, and UX studies to identify unmet needs and shape the product direction.",
      "Used early beta adoption to validate demand signals, refine the moat, and surface the highest-value workflow problems.",
      "Built the platform end-to-end with JavaScript, React, TypeScript, Python, REST APIs, and backend/database architecture.",
    ],
  },
  {
    company: "Hyatt (Gavin Heath)",
    title: "AI Product Manager, AI SEO",
    period: "Jul 2024",
    context:
      "Owned the data-to-insight workflow for AI SEO and analytics, aligning architecture, governance, and downstream reporting.",
    badges: ["AI SEO", "Data architecture", "Governance"],
    logoSrc: "/logos/hyatt.svg",
    logoAlt: "Hyatt logo",
    logoWidth: 76,
    logoHeight: 18,
    logoClassName: "brightness-0 invert opacity-80",
    logoFrameClassName: "bg-white/[0.03] border-white/10",
    highlights: [
      "Led the flow from extraction through AWS ingestion, S3 storage, Snowflake staging, transformation, and ThoughtSpot consumption.",
      "Drove data-governance work including personal-data masking to support security and compliance.",
      "Created the product vision, PRD, and program increment planning for the machine-learning team.",
    ],
  },
  {
    company: "Tesla",
    title: "Technical Product Manager",
    period: "Mar 2023 - Jun 2024",
    context:
      "Owned internal manufacturing software and defect-tracking workflows used at significant operational scale.",
    badges: ["30K internal users", "+6.25% ROI", "Factory systems"],
    logoSrc: "/logos/tesla.svg",
    logoAlt: "Tesla logo",
    logoWidth: 22,
    logoHeight: 22,
    logoClassName: "brightness-0 invert opacity-82",
    logoFrameClassName: "bg-white/[0.03] border-white/10",
    highlights: [
      "Owned frontend UX/UI for a vehicle defect tracking system used daily by 30K internal users.",
      "Led stakeholder alignment and prioritized Jira epics, features, and issues that drove a 6.25% increase in ROI.",
      "Designed an internal data-labeling solution that reduced bottlenecks and recurring defects while improving quality and evaluation insight.",
    ],
    note: "Official org titles held during this period: Engineering Tech, Quality Tech, Production Associate.",
  },
  {
    company: "The Home Depot (Proven Method | American SW)",
    title: "Data Product Manager",
    period: "Mar 2023 - Sep 2023",
    context:
      "Drove finance analytics products through SQL, metric design, backlog ownership, and executive-facing reporting.",
    badges: ["Finance dashboards", "BigQuery", "ROI metrics"],
    logoSrc: "/logos/the-home-depot.svg",
    logoAlt: "The Home Depot logo",
    logoWidth: 34,
    logoHeight: 34,
    logoFrameClassName: "bg-[#151922] border-white/8",
    highlights: [
      "Wrote SQL powering a major finance dashboard and the ROI / OKR metrics behind it.",
      "Partnered with data engineers on backend pipeline design in Google BigQuery and metric definitions that drove decision-ready insights.",
      "Owned the Jira backlog, sprint ceremonies, dashboards, and reporting for directors and team leaders.",
    ],
  },
  {
    company: "Uva Mare",
    title: "CEO",
    period: "Jan 2016 - Jul 2022",
    context:
      "Built a consulting business around analytics, client retention, and revenue growth across multiple business functions.",
    badges: ["100+ accounts", "50% YoY growth", "$10.8M client value"],
    highlights: [
      "Grew the business through customer success, retention, and management of more than 100 accounts.",
      "Scaled revenue from $75K to $392K while expanding solutions across finance, production, marketing, and investments.",
      "Built an analytics consulting dashboard offering that generated $10.8M in client value and supported over $85M in customer sales volume.",
    ],
  },
];

export const resumeSkillGroups: SkillGroup[] = [
  {
    title: "Product Leadership",
    description:
      "Bringing structure to ambiguity through vision, prioritization, stakeholder alignment, and delivery focus.",
    items: [
      "Product vision",
      "Stakeholder management",
      "PRDs",
      "Roadmaps",
      "Sprint planning",
      "Go-to-market strategy",
      "Direct client interaction",
    ],
  },
  {
    title: "AI + Agent Systems",
    description:
      "Working across applied AI workflows, orchestration, evaluation, and production-ready agent tooling.",
    items: [
      "Agent orchestration",
      "MCP",
      "Agent skills",
      "Tool calling",
      "ReAct agents",
      "RAG",
      "Prompt engineering",
      "LLM evaluation",
      "Context management",
      "Generative AI",
    ],
  },
  {
    title: "Data + Cloud",
    description:
      "Designing the path from raw data through storage, transformation, governance, and decision-making.",
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Snowflake",
      "BigQuery",
      "PostgreSQL",
      "MySQL",
      "ThoughtSpot",
      "Tableau",
      "Braintrust",
      "Langfuse",
    ],
  },
  {
    title: "Engineering Stack",
    description:
      "Shipping product surfaces with modern frontend, backend, analytics, and workflow tooling.",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "SQL",
      "REST APIs",
      "Git",
      "Pandas",
      "GitHub",
      "Postman",
      "Railway",
      "Vercel",
    ],
  },
];

export const resumeCertifications = [
  "Product School: Product Manager, AI Product Manager, Product Leader, AI Agents, GTM",
  "Weights & Biases: RAG++, From POC to Production, LLM Evaluation",
  "Microsoft Certified: Power Platform Fundamentals, Azure Cloud AI/ML Deployment",
  "AWS: Cloud Practitioner",
];

export const resumeEducation = [
  "Flatiron School, New York, NY - Data Science & Advanced Machine Learning",
  "Gauntlet AI, Austin, TX - AI Product Engineering, Agents & AI Factories",
];
