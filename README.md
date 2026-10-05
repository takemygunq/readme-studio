<div align="center">

# README Studio

### A premium GitHub profile README generator

Fill in your details — the studio assembles the badges, stats and animated banners<br/>
and exports clean, ready-to-paste markdown for the special repository that becomes your GitHub profile.

<p>
  <img src="https://img.shields.io/badge/HTML%20·%20CSS%20·%20JS-no%20build%20step-F59E0B?style=flat-square&labelColor=0c0d12" height="26" alt="Pure HTML/CSS/JS — no build step" />
  <img src="https://img.shields.io/badge/80%2B%20icons-shields.io-0D9488?style=flat-square&labelColor=0c0d12" height="26" alt="80+ tech icons" />
  <img src="https://img.shields.io/badge/5%20templates-animated-7C3AED?style=flat-square&labelColor=0c0d12" height="26" alt="5 animated templates" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-ready-22C55E?style=flat-square&labelColor=0c0d12" height="26" alt="GitHub Pages ready" />
</p>

<!-- TODO: add docs/media/demo.gif — a screen recording of the full builder flow -->

<p><a href="https://takemygunq.github.io/readme-studio/">Open README Studio →</a></p>

</div>

---

## Why not just write it by hand?

Writing a GitHub profile README is ten minutes of copy-pasting service URLs, badge parameters and markdown alignment tricks.
README Studio puts all of that behind a form: you type your name, pick the technologies you work with and choose a visual
style — the generator handles the badge URLs, the stat card themes, the wave headers and the spacing. The output is plain
markdown with no JavaScript and no runtime dependencies, so it works on GitHub exactly as it looks in the preview.

## How it works

### 1. Fill in your identity

Enter your display name, GitHub username, title, bio and location. The username drives all the dynamic cards — stats,
streaks, top languages — so set it early and the preview updates everywhere at once.

### 2. Pick your tech stack

An icon picker covers 80+ technologies across languages, frameworks, databases, cloud providers and tools. Filter by
category or search by name; selected skills appear as colored chips below the grid and translate to `shields.io`
badges in the output.

### 3. Configure GitHub Stats

Choose which cards to include — the stats grid, the streak counter, the top-languages breakdown and the trophy cabinet —
and pick a colour theme. The stats blocks point at `github-readme-stats` and `streak-stats`, live services that render
server-side SVGs directly in GitHub's markdown.

### 4. Choose a template

| Template | Character |
|---|---|
| **Pro** | Animated wave header via Capsule Render, typing animation, full stats |
| **Minimal** | Plain markdown, no images, maximum readability |
| **Hacker** | Dark terminal aesthetic, a `bash` code block for the intro |
| **Creative** | Bright gradient shark-wave header, vibrant typing animation |
| **Founder** | Centered name and title, dividers, no visual noise |

### 5. Copy and deploy

The Markdown tab shows the raw output; the Preview tab renders it as HTML. Copy to clipboard or download
the file, then paste it into the `README.md` of a repository named exactly like your GitHub username.

## Features

- **Live preview** — markdown source and rendered HTML update on every keystroke, no manual refresh
- **80+ tech icons** — covers languages, frontend, backend, mobile, databases, cloud, DevOps, AI/ML and tools; searchable and filterable
- **GitHub Stats integration** — `github-readme-stats`, `streak-stats`, trophy cabinet and top languages with 10 colour themes
- **Animated headers** — wave, shark and rect banners from Capsule Render; typing animation from `readme-typing-svg`
- **5 templates** — Pro, Minimal, Hacker, Creative, Founder, each with a distinct visual language
- **Profile view counter** — a `komarev.com` badge that counts visits
- **Social badges** — GitHub, Twitter, LinkedIn, YouTube, DEV.to, personal website
- **Zero dependencies** — pure HTML, CSS and vanilla JS; no build step, no `node_modules`, no bundler
- **One click** — copy the markdown or download `README.md`; dark/light mode toggle in the studio itself

## Quick start (local)

No installation needed. Clone and open:

```bash
git clone https://github.com/takemygunq/readme-studio
cd readme-studio
open index.html          # macOS
# xdg-open index.html   # Linux
# start index.html       # Windows
```

Or serve it with any static server:

```bash
npx serve .
python3 -m http.server 8080
```

## Deploy your own copy

The project is a folder of static files — it deploys anywhere that serves HTML.

### GitHub Pages (recommended)

Fork the repository, then go to **Settings → Pages → Source** and select **main / (root)**. Your copy
will be live at `https://<your-username>.github.io/readme-studio/` within a minute.

### Any static host

Drag the folder onto Netlify Drop, Vercel, Cloudflare Pages or any CDN. No build step, no configuration.

## Tech

- **HTML + CSS custom properties** — the full design system lives in `:root` tokens; dark and light themes switch with one attribute
- **Vanilla JS** — state object, form bindings, markdown generator, a lightweight markdown-to-HTML renderer for the preview panel
- **Google Fonts** — Syne (display), DM Sans (UI), DM Mono (code preview)
- **External badge services** — `shields.io` for tech and social badges; `capsule-render` and `readme-typing-svg` for animated elements; `github-readme-stats`, `streak-stats.demolab.com` and `github-profile-trophy` for live stat cards; `komarev.com` for the view counter

```
index.html          main page
css/style.css       design tokens, layout, components
js/icons-data.js    icon registry (id, name, shields.io params, category)
js/templates.js     markdown generators for each template
js/app.js           state, event bindings, preview rendering, copy/download
```

## License

MIT
