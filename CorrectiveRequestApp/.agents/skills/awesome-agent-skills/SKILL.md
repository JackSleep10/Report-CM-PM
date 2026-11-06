---
name: awesome-agent-skills
description: Catalog, search directory, and installation guide for 1,400+ curated AI agent skills from VoltAgent/awesome-agent-skills. Use when asked to find, recommend, explore, search, or install agent skills across web development, test automation, databases, cloud, DevOps, and productivity.
---

# Awesome Agent Skills

A curated catalog of 1,400+ production-ready AI agent skills from leading engineering teams and the community, curated by [VoltAgent](https://github.com/VoltAgent/awesome-agent-skills).

## When to Use This Skill

- When the user asks: *"มี skill อะไรให้ใช้บ้าง"*, *"ค้นหา skill เกี่ยวกับ..."*, *"แนะนำ skill สำหรับ..."*
- When searching for specialized skills across:
  - **Testing & QA:** Playwright, Cypress, Jest, Puppeteer, Selenium, TestMu AI
  - **Databases & Backend:** Supabase, Firebase, Neon, PostgreSQL, MongoDB, Redis, ClickHouse
  - **Frontend & UI/UX:** Frontend Design, Canvas, Theme Factory, GSAP, Figma
  - **Documents & Media:** PDF, DOCX, XLSX, Remotion, Canvas Design
  - **Cloud & DevOps:** Cloudflare, Vercel, Netlify, Terraform, Docker, AWS, GCP
  - **Security & Quality:** Trail of Bits, Snyk, CodeRabbit, Web Quality

## Catalog Reference

The complete catalog containing all 1,400+ skills is located in:
`references/catalog.md`

Agents can search this reference file using grep, node, or file viewer to find matching skills by keyword or provider.

## How to Install a Skill from the Catalog into this Project

In Google Antigravity, project-level skills are placed in:
`$PROJECT_ROOT/.agents/skills/<skill-name>/`

### Skill Structure
Each installed skill must follow this standard format:
```
.agents/skills/<skill-name>/
├── SKILL.md                 # Required: YAML frontmatter (name, description) + instructions
├── scripts/                 # Optional: helper scripts/tools
├── references/              # Optional: documentation, schemas
└── resources/               # Optional: templates or assets
```

### Installation Steps
1. Find the skill URL or repository in `references/catalog.md`.
2. Fetch the target skill's `SKILL.md` (and supporting files if any).
3. Create `.agents/skills/<skill-name>/SKILL.md`.
4. Ensure `.claspignore` (if using Google Apps Script) continues to ignore `.agents/`.

## Featured Categories & Popular Skills

| Category | Top Providers | Notable Skills |
| :--- | :--- | :--- |
| **Documents & Data** | Anthropic | `pdf`, `xlsx`, `docx`, `doc-coauthoring` |
| **Frontend & UI** | Anthropic, GSAP, Figma | `frontend-design`, `web-artifacts-builder`, `theme-factory` |
| **Testing & Automation** | TestMu AI, Anthropic | `webapp-testing`, `playwright-skill`, `cypress-skill`, `puppeteer-skill` |
| **Databases** | Supabase, Neon, MongoDB, Redis | `supabase-management`, `neon-postgres`, `redis-cli` |
| **Cloud & Hosting** | Vercel, Cloudflare, Netlify | `cloudflare-workers`, `vercel-deploy`, `netlify-functions` |
| **Frameworks** | Expo, Angular, Flutter, VoltAgent | `create-voltagent`, `expo-router`, `flutter-testing` |
