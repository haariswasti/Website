# Haaris Wasti — Personal Portfolio

Personal portfolio site for Haaris Wasti, Robotics Engineering student at UC Santa Cruz (Class of 2027).

Built with **Next.js 14 App Router**, **Tailwind CSS**, and **Framer Motion**.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  page.tsx              # Home page (single-page scroll)
  blog/
    page.tsx            # Blog index
    [slug]/page.tsx     # Individual blog post
components/
  Navbar.tsx            # Sticky nav with active section highlighting
  Hero.tsx
  About.tsx
  Experience.tsx
  Projects.tsx
  BlogPreview.tsx
  Contact.tsx
  Footer.tsx
  FadeIn.tsx            # Framer Motion scroll animation wrapper
lib/
  posts.ts              # Reads/parses markdown posts with gray-matter + remark
posts/
  *.md                  # Blog posts (markdown with YAML frontmatter)
```

## Adding a new blog post

1. Create a new file in `/posts/` named `your-post-slug.md`.
2. Add YAML frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2025-12-01"
excerpt: "A one-sentence summary shown in the blog index and preview cards."
tags: ["Tag1", "Tag2"]
---

Your markdown content here...
```

3. The post will automatically appear at `/blog/your-post-slug` and in the blog index. No code changes needed.

## Deploying

The easiest option is [Vercel](https://vercel.com) — connect the repo and it deploys automatically on push.

```bash
npx vercel
```
