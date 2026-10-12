# Blog con X

A modern technical blog built with Astro, designed to publish programming tutorials, engineering notes, and algorithm explanations in a clean, fast, and content-focused experience.

## Overview

This project is a content-driven blog platform focused on software development topics such as:

- Algorithms and data structures
- JavaScript and TypeScript patterns
- Front-end architecture and component design
- Programming foundations and practical problem solving

The site is built with Astro for static generation and fast performance, using MDX content files and a lightweight component stack powered by Vue and Tailwind CSS.

## Tech Stack

- Astro
- TypeScript
- MDX
- Vue
- Tailwind CSS
- Vite
- Vitest

## Features

- Responsive blog layout
- Content collection system for posts and categories
- MDX support for rich technical articles
- SEO-friendly pages with metadata and sitemap support
- RSS feed support
- Static site generation for fast deployment
- Built-in tests for site behavior and content validation

## Project Structure

```text
blog-con-x/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable Astro/Vue components
│   ├── content/            # Blog posts and MDX content
│   ├── data/               # Structured data and category metadata
│   ├── layouts/            # Page layouts
│   ├── pages/              # Routes and page entry points
│   ├── styles/             # Global styles
│   ├── utils/              # Helper functions
│   ├── consts.ts
│   ├── content.config.ts
│   └── env.d.ts
├── tests/                  # Vitest test suite
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── .gitignore
└── README.md
```

## Requirements

- Node.js >= 22.12.0
- pnpm

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Start the local development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:4321`.

## Available Scripts

```bash
pnpm dev        # Start local development server
pnpm build      # Build production site
pnpm preview    # Preview production build locally
pnpm test       # Run unit tests
pnpm test:site  # Build app and run site tests
pnpm astro      # Run Astro CLI commands
```

## Writing Posts

Posts live in `src/content/posts` and use MDX format. Each post includes metadata such as:

- title
- slug
- description
- pubDate
- category

Example structure:

```mdx
---
title: "Example post"
slug: "example-post"
description: "A short summary of the article"
pubDate: 2025-01-20
category: "programming-basics"
---

# Example post

Content goes here...
```

## Deployment

This project is designed to be deployed as a static site. You can publish it to any static hosting platform such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

After building, the generated output is placed in the `dist/` directory.

## License

This project is open for personal and educational use. If you plan to use it for production or commercial purposes, please check the repository license before publishing.

## Contributing

Contributions are welcome. If you want to improve the project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Open a pull request

## Contact

For questions or suggestions, feel free to open an issue in the repository or reach out through the project contact channels if available.
