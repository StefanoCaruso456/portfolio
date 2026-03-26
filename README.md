# Portfolio

Personal portfolio website for showcasing live product work across AI collaboration, developer tooling, code intelligence, financial interfaces, and AI-assisted marketplace experiences.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232a?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-0F172A?logo=tailwindcss&logoColor=38BDF8)
![Status](https://img.shields.io/badge/status-production--ready-0f766e)

## Preview

![Portfolio Preview](./public/readme/portfolio-preview.png)

## Overview

This project is a polished, GitHub-ready portfolio built with a dark neumorphic visual system and a narrative-first layout. Instead of relying on static mockups, the site highlights real products with clickable project cards, captured homepage thumbnails, and concise product framing for each launch.

The homepage is structured to feel like a premium product presentation:

- strong hero section with positioning and value statement
- featured projects shown early in the scroll
- horizontal carousel with button navigation and swipe gestures
- service and stack sections for technical credibility
- process section that explains the design thinking behind the layout

## Highlights

- Dark neumorphic UI with layered surfaces, depth, glow, and motion
- Live project showcase built from the current production URLs
- Reusable section-based architecture for easy iteration
- Typed content model for projects, services, and portfolio copy
- Repo-ready thumbnail refresh workflow using Playwright
- Responsive layout optimized for desktop and mobile

## Featured Live Projects

- [Ship](https://d1woqw06xb054i.cloudfront.net/login)
- [BrainStorm AI](https://brainstormaigauntletai.com/login)
- [LegacyLens](https://www.nationalseismichazardmaps.com/)
- [Ghostclone](https://app.ghostclone.xyz/en/start)
- [Shipyard](https://shipyard1.vercel.app/)
- [Projectz AI](https://projectzai.com/)

## Tech Stack

- `Next.js 16` with App Router
- `React 19`
- `TypeScript 5`
- `Tailwind CSS 4`
- `motion`
- `lucide-react`
- Playwright CLI for thumbnail capture

## Project Structure

```text
.
├── app/                  # App Router entry, metadata, global theme
├── components/           # Reusable UI pieces such as carousel and reveals
├── data/                 # Typed portfolio content and project metadata
├── public/
│   ├── projects/         # Captured homepage thumbnails for project cards
│   └── readme/           # Repository preview assets
├── scripts/              # Utility scripts such as thumbnail capture
└── sections/             # Homepage sections composed into the landing page
```

## Getting Started

### Prerequisites

- Node.js 22 LTS recommended
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run capture:thumbnails
```

## Refresh Project Thumbnails

The project cards use locally stored screenshots for fast loading and consistent presentation. To refresh those captures from the live URLs:

```bash
npm run capture:thumbnails
```

This runs:

```bash
./scripts/capture-project-thumbnails.sh
```

## Customization

Most portfolio content can be updated in one place:

- `data/portfolio.ts` for hero copy, service copy, stack details, and project metadata
- `sections/` for homepage layout and content presentation
- `app/globals.css` for theme, neumorphic styling, and global visual tokens

## Production Checks

The project has been verified with:

- `npm run lint`
- `npm run build`

## Notes

- Project thumbnails are stored locally in `public/projects/` for performance and presentation consistency.
- The README preview image is stored in `public/readme/portfolio-preview.png`.
- If you plan to deploy this publicly, update the content in `data/portfolio.ts` with your final personal bio, CTA links, and production contact details.

## Author

Built for Stefano Caruso's portfolio repository.
