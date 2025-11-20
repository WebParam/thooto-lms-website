# thooto-lms-website

Static HTML website for Thooto LMS.

## Deployment on Netlify

This is a **pure static HTML website** (NOT a Next.js application).

### Important: Remove Next.js Plugin

If you're deploying to Netlify and getting errors about Next.js:

1. Go to your Netlify site dashboard
2. Navigate to **Site Settings** → **Build & Deploy** → **Plugins**
3. Find and **Remove** the `@netlify/plugin-nextjs` plugin
4. This plugin is only for Next.js projects and will cause build failures for static HTML sites

The `netlify.toml` file is already configured correctly for a static site.