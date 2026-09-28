# 💻 Personal Portfolio — Noman Nawaz (AI & Full-Stack Developer)

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![TanStack Router](https://img.shields.io/badge/TanStack%20Router-Enabled-FF4154)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000?logo=shadcnui&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-Runtime-000000?logo=bun&logoColor=white)

A modern, high-performance personal portfolio website built with **React**, **TypeScript**, **TanStack Router**, **shadcn/ui**, **Tailwind CSS**, and **Vite** (powered by **Bun**). Designed to showcase projects, skills, certifications, and experience in **AI Development, Agentic AI, RAG Systems, and Full-Stack Engineering**[cite: 11, 14].

---

## 🏷️ Technologies

React | TypeScript | Vite | TanStack Router | Tailwind CSS | shadcn/ui | Bun | Lucide Icons | ESLint | Prettier

---

## 📌 Project Overview

This repository contains the source code for the personal portfolio of **Noman Nawaz**, a Software Engineering student at Foundation University Islamabad[cite: 11, 12]. 

The portfolio serves as an interactive showcase of real-world AI applications, agentic workflows, RAG implementations, and web development projects[cite: 12, 14, 15]. It incorporates dark-mode aesthetic cards, smooth tilt effects, a dynamic technical spec sheet, an academic timeline, and verified certification cards[cite: 13, 14, 16, 17].

---

## 🚀 Key Features

### 👤 Modern Hero & Bio Section
- Highlighting roles: **AI Development, Agentic AI, RAG Systems, Automations & Full-Stack Development**[cite: 11].
- Quick links for downloadable CV and direct contact channels.

### 🛠️ Interactive Technical Spec Sheet
- Dynamic categorization of skills: Languages, Web, Databases, Artificial Intelligence, Tools, and Automation & Integration[cite: 14].
- Clean tech badges for fast scanning[cite: 14].

### 💻 Featured Projects Showcase
- Directly links to public GitHub repositories[cite: 15].
- Highlights key projects including:
  - **Chest Xpert AI & Clinical Reporting System**[cite: 15]
  - **Multi-Agent Content Writer (LangGraph)**[cite: 15]
  - **Brand Pilot AI Social Media Automation (n8n)**[cite: 15]

### 📜 Verified Certifications & Training
- Visual verification badges for completed internships and training programs[cite: 16].
- Features certificates from **ISPR** and **Teerop SMC Private Limited**[cite: 16].

### 📊 At a Glance (Metrics)
- Highlights key academic and professional milestones:
  - **4th Year** BS Software Engineering[cite: 17]
  - **05** Internships Completed[cite: 17]
  - **20+** Public GitHub Projects[cite: 17]
  - **10+** Certifications Earned[cite: 17]

### 🎓 Academic Timeline
- Chronological breakdown of education history from Matriculation to BS Software Engineering.

### 📬 Direct Contact Section
- Integrated email, phone number, GitHub, and LinkedIn social links.

---

## 🏗️ Project Structure

```text
Personal-Portfolio/
├── src/
│   ├── assets/               # Certificate images and static assets
│   ├── components/
│   │   └── ui/               # shadcn/ui component library
│   ├── hooks/
│   │   └── use-mobile.tsx    # Mobile responsiveness hook
│   ├── lib/
│   │   ├── error-capture.ts  # Error handling utilities
│   │   ├── error-page.ts     # Error boundary logic
│   │   └── utils.ts          # Class merging (clsx/tailwind-merge)
│   ├── routes/               # TanStack file-based routes
│   ├── portfolio.html        # HTML entry point
│   ├── router.tsx            # TanStack Router configuration
│   ├── routeTree.gen.ts      # Auto-generated route tree
│   ├── server.ts             # Server entry point
│   ├── start.ts              # App startup file
│   └── styles.css            # Global Tailwind CSS styles
├── .gitignore                # Git ignore rules
├── .prettierrc               # Prettier configuration
├── bun.lock                  # Bun lockfile
├── bunfig.toml               # Bun configuration file
├── components.json           # shadcn/ui configuration
├── eslint.config.js          # ESLint setup
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript compiler options
└── vite.config.ts            # Vite bundler configuration
