---
title: "Building a Portfolio Site with AI Orchestration"
date: "2025-01-10"
description: "How I built this portfolio using Claude Code and Astro in a single session"
tags: ["claude-code", "astro", "portfolio", "ai-development"]
featured: true
---

# Building a Portfolio Site with AI Orchestration

Today I built this entire portfolio website in a single Claude Code session. Here's what I learned.

## The Challenge

I needed a professional portfolio to showcase my projects, but I wanted it to:
- Be completely free to host
- Load instantly (no heavy frameworks)
- Be easy to update without a CMS
- Show off my technical skills

## The Solution

Working with Claude Code, we chose **Astro** - a static site generator that:
- Ships zero JavaScript by default
- Supports React components where needed
- Has built-in content collections for Markdown
- Deploys anywhere for free

## Key Decisions

### 1. Content as Files
Instead of a database or CMS, all content lives in Markdown and JSON files. This means:
- Version control with Git
- No server costs
- Easy backups
- Full ownership

### 2. Theme System
We built a "Vault Elegance" theme with CSS custom properties. Light mode uses warm paper tones, dark mode uses navy and gold.

### 3. Interactive Timeline
The project page features an interactive timeline built with React, showing all 13 development phases of ArbitrageVault.

## Lessons Learned

1. **Astro is perfect for content sites** - The build is fast, the output is optimized
2. **CSS variables make theming simple** - One change propagates everywhere
3. **Markdown is underrated** - It's readable, portable, and powerful

## What's Next

- Add more projects to the portfolio
- Create a blog section for technical writing
- Add methodology examples with real code snippets

---

*This post was written to demonstrate the blog functionality. You can add your own posts by creating Markdown files in the `src/content/blog/` folder.*
