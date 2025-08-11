# Akhilesh Exports — Static React Site (Vite + Tailwind)

A fully static, self-contained React website for Akhilesh Exports. No backend, no Supabase, no Lovable AI. Optimized for GitHub Pages or any static host.

## Key Goals
- 100% frontend-only (no servers/APIs)
- Works on static hosts without 404s (HashRouter)
- Clean, maintainable structure with assets in src/assets/
- Easy manual updates and deployments

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router (HashRouter)

## Project Structure
```
src/
  assets/                  # All images and static media
  components/              # Reusable UI components
    ui/                    # shadcn ui primitives
    Layout.tsx             # Page wrapper with header/footer
    Navigation.tsx         # Top navigation with logo + links
    Footer.tsx             # Footer with links
  hooks/                   # Custom hooks
  integrations/            # (kept empty; no backend use). If present, unused.
  pages/                   # Route pages
    Index.tsx              # Home
    About.tsx
    Infrastructure.tsx
    Products.tsx
    ProductCategory.tsx
    Buyers.tsx
    Certificates.tsx
    Contact.tsx
  App.tsx                  # Router + routes (HashRouter)
  main.tsx                 # App bootstrap
  index.css                # Global styles and design tokens
index.html                 # App HTML shell + SEO meta
vite.config.ts             # Vite config (base set for GH Pages)
```

## File Roles and Data Flow
<lov-mermaid>
flowchart TD
  A[index.html] --> B[main.tsx]
  B --> C[App.tsx]
  C -->|HashRouter| D[pages/*]
  C --> E[components/Navigation]
  C --> F[components/Footer]
  D --> G[components/ui/*]
  E --> G
  F --> G
  C --> H[index.css tokens]
</lov-mermaid>

- index.html: HTML shell, SEO tags, loads /src/main.tsx
- main.tsx: Boots React, renders <App />
- App.tsx: Sets up HashRouter and defines all routes
- pages/*: Page content; use Layout for consistent header/footer
- components/*: Reusable building blocks; Navigation shows logo + company name
- assets/*: All images (logo, hero, products, etc.)
- vite.config.ts: base set to "/akhileshexports.github.io/" for GitHub Pages

## Routing Setup (No 404s)
- Using HashRouter ensures refresh/navigation won’t 404 on static hosts
- All links use Link from react-router-dom

## Build and Run
- Install: npm install
- Dev: npm run dev
- Build: npm run build (outputs dist/)
- Preview: npm run preview

## Deploy to GitHub Pages
Because package.json is managed by your environment, add these locally:
- Add dependency: gh-pages
- Add scripts:
  - "predeploy": "npm run build"
  - "deploy": "gh-pages -d dist"
- Add homepage: "https://akhileshprakash.github.io/akhileshexports.github.io"

Then:
- npm run deploy
- Your site: https://akhileshprakash.github.io/akhileshexports.github.io/

## Best Practices
- Keep all images in src/assets with descriptive names and alt text
- Use semantic sections and a single H1 per page
- Prefer small, focused components
- Commit often; use tags for releases
- For new pages, add a component in src/pages and a route in App.tsx

## Maintenance
- No backend/services to manage
- Update content directly in pages/* and assets/*
- For SEO, adjust index.html meta and per-page headings

## Removed Integrations
- Supabase and Lovable AI references removed
- Perplexity content generator and related routes removed

## Troubleshooting
- If assets don’t load on GitHub Pages, ensure vite.config.ts base matches the repository path
- If navigation breaks, confirm HashRouter is used and links are relative
