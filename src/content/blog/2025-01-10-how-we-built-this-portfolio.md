---
title: "How We Built This Portfolio: A Human-AI Collaboration Story"
date: 2025-01-10
description: "Behind the scenes of building a modern portfolio website through collaboration between a developer and Claude AI. From initial concept to CMS integration, here's how it all came together."
author: "Aziz Traore"
featured: true
tags: ["ai-collaboration", "astro", "portfolio", "decap-cms", "web-development"]
---

# How We Built This Portfolio: A Human-AI Collaboration Story

What you're reading right now is hosted on a portfolio site that was built in a single session through collaboration between myself and Claude (Anthropic's AI assistant). This post documents that journey - the decisions we made, the tools we chose, and how human direction combined with AI execution to create something functional and polished.

## The Starting Point

I had a clear goal: **create a portfolio to showcase my projects**, particularly those built with AI assistance. But I didn't want just another generic developer portfolio. I wanted something that:

- Reflected my engineering methodology (rigorous, systematic)
- Could be easily updated without touching code
- Showcased the different AI tools I use (Claude Code, Google AI Studio)
- Looked professional but distinctive

<!-- Screenshot placeholder: Initial conversation with Claude about portfolio requirements -->

## Choosing the Tech Stack

### Why Astro?

Claude suggested Astro over a traditional React SPA, and here's why it made sense:

| Consideration | React SPA | Astro |
|--------------|-----------|-------|
| **SEO** | Requires SSR setup | Built-in, excellent |
| **Performance** | ~200KB+ JS bundle | Minimal JS (~20KB) |
| **Content Management** | Needs backend/CMS | Native Markdown/JSON |
| **Complexity** | Higher for static content | Perfect for portfolios |

The key insight: **portfolios are mostly static content**. Astro generates HTML at build time, sending minimal JavaScript to the browser. Interactive elements (like the theme toggle) use "islands" - small React components that hydrate only where needed.

### The "Vault Elegance" Theme

Rather than using a pre-made template, we designed a custom theme called "Vault Elegance":

**Light Mode**: Warm paper tones (#f5f0e8), mahogany accents (#8b5a4a)
**Dark Mode**: Navy backgrounds (#0f172a), gold accents (#d4af37)

The aesthetic was inspired by antique libraries and luxury vaults - fitting for a portfolio showcasing carefully crafted software.

<!-- Screenshot placeholder: Side-by-side light and dark mode comparison -->

## The Build Process

### Phase 1: Structure (30 minutes)

Claude scaffolded the entire project structure:

```
portfolio/
├── src/
│   ├── components/     # Reusable UI pieces
│   ├── content/        # Markdown & JSON data
│   ├── data/           # Homepage configuration
│   ├── layouts/        # Page templates
│   ├── pages/          # Route definitions
│   └── styles/         # Global CSS
├── public/             # Static assets
└── astro.config.mjs    # Astro configuration
```

### Phase 2: Core Pages (1 hour)

Five main pages were created:

1. **Homepage** - Hero, featured project, methodology preview, skills
2. **Projects** - Dynamic listing from folder structure
3. **Methodology** - Deep dive into my engineering practices
4. **Blog** - You're reading it!
5. **About** - Professional background and contact

### Phase 3: Project Integration (45 minutes)

I provided Claude with links to my GitHub repositories:

- **ArbitrageVault BookFinder** - Built with Claude Code
- **Prompt & Process Vault** - Built with Google AI Studio
- **MindScribe** - Voice-first notes app

For each project, Claude:
1. Analyzed the repository structure
2. Created a `meta.json` with key information
3. Built a dedicated page with relevant sections

<!-- Screenshot placeholder: Project page showing ArbitrageVault with metrics -->

## My Role vs Claude's Role

This collaboration had clear division of responsibilities:

### What I Did (Human)
- **Direction**: Defined requirements and aesthetic preferences
- **Decisions**: Chose between options Claude presented
- **Content**: Provided project URLs, descriptions, context
- **Validation**: Tested the site, identified issues
- **Deployment**: Configured Netlify, domain settings

### What Claude Did (AI)
- **Execution**: Wrote all code (Astro, CSS, TypeScript)
- **Architecture**: Proposed structure and patterns
- **Problem-solving**: Fixed bugs, handled edge cases
- **Documentation**: Created guides and comments
- **Optimization**: Suggested improvements (CMS, SEO)

The key was **iterative refinement**. I'd describe what I wanted, Claude would implement it, I'd test and provide feedback, and we'd iterate.

## The CMS Integration: Editing Without Code

One of my requirements was being able to update content without needing Claude's help every time. The solution: **Decap CMS** (formerly Netlify CMS).

### What Decap CMS Enables

After setup, I can now:

- **Edit blog posts** through a visual editor
- **Update project metadata** via forms
- **Modify homepage content** (hero text, skills, metrics)
- **Add new content** without touching code

<!-- Screenshot placeholder: Decap CMS admin interface showing blog editor -->

### How It Works

1. I go to `/admin` on my site
2. Log in with Netlify Identity
3. Edit content through a visual interface
4. Click "Publish"
5. Netlify automatically rebuilds the site

The content is stored as Markdown and JSON files in the repository. Decap CMS just provides a friendly interface for editing them.

## Technical Decisions Worth Noting

### Content as Data

Instead of hardcoding content in components, we externalized everything:

```javascript
// Before: Hardcoded
const skills = [
  { name: 'Python', category: 'Backend' },
  // ... more items
];

// After: External JSON
import homepageData from '../data/homepage.json';
const { skills } = homepageData;
```

This makes the CMS integration possible and keeps code clean.

### Dynamic Project Loading

Projects are loaded from the filesystem:

```javascript
const projectFolders = fs.readdirSync(projectsDir);
const projects = projectFolders.map(folder => {
  const meta = JSON.parse(fs.readFileSync(`${folder}/meta.json`));
  return { ...meta, slug: folder };
});
```

Adding a new project = creating a new folder with `meta.json`. No code changes needed.

### Responsive Design

Every page was built mobile-first with Tailwind CSS breakpoints:

- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)

<!-- Screenshot placeholder: Mobile view of the portfolio -->

## Lessons Learned

### 1. AI Accelerates, Humans Direct

Claude could write code faster than I ever could, but it needed my guidance on:
- What problem to solve
- Which approach to take when multiple options existed
- Whether the result matched my vision

### 2. Start Simple, Add Complexity

We began with static content, then added:
- Dynamic project loading
- Theme switching
- CMS integration

Each addition was validated before moving to the next.

### 3. Documentation Enables Independence

Claude created `CONTENT_GUIDE.md` explaining how to add content manually. Combined with Decap CMS, I'm now fully independent for content updates.

### 4. The Right Tool for the Job

Using Astro instead of a full React app meant:
- Faster initial load
- Better SEO out of the box
- Simpler mental model for content-focused site

## What's Next?

The portfolio is live and functional, but there's always room for improvement:

- [ ] Add more blog posts documenting projects
- [ ] Integrate analytics to track visitor behavior
- [ ] Add a contact form with Netlify Forms
- [ ] Create OG images for social sharing
- [ ] Add more project case studies

## Try It Yourself

If you're interested in building something similar:

1. **Start with Astro** - Great for content-focused sites
2. **Use a CMS early** - Don't wait until you have lots of content
3. **Leverage AI assistance** - Tools like Claude Code can accelerate development significantly
4. **Focus on content structure** - Good data architecture makes everything easier

---

*This portfolio was built in approximately 3 hours through human-AI collaboration. The source code is available on [GitHub](https://github.com/aziztraorebf-ctrl/portfolio).*

<!-- Screenshot placeholder: Final portfolio homepage -->
