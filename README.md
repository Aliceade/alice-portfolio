# Alice Arimoro — Personal Portfolio

**Stack:** Next.js 16 · TypeScript · Tailwind CSS · Vercel  
**Routes:** Home `/` · Portfolio `/portfolio` · Case Studies `/portfolio/[slug]` · Writing `/blog` · RSS API `/api/rss-sync`

---

## Project Structure

```
alice-portfolio/
├── app/
│   ├── layout.tsx                  # Root layout + SEO metadata
│   ├── page.tsx                    # Home: Hero, Ticker, About, Articles, Newsletter
│   ├── globals.css                 # Brand design system (palette, typography, animations)
│   ├── blog/page.tsx               # Full writing archive from Substack RSS
│   ├── portfolio/
│   │   ├── page.tsx                # Portfolio grid
│   │   └── [slug]/page.tsx         # Individual case study pages
│   └── api/rss-sync/route.ts       # RSS sync endpoint (called by Vercel Cron)
├── components/
│   ├── Nav.tsx                     # Navigation + Subscribe modal trigger
│   ├── SubscribeModal.tsx          # Popup with Substack embed
│   ├── Hero.tsx                    # Landing — add alice.jpg to /public/
│   ├── Ticker.tsx                  # Scrolling skills banner
│   ├── About.tsx                   # About section with animated skill bars
│   ├── Articles.tsx                # Auto-fetches last 2 Substack posts (server component)
│   ├── Newsletter.tsx              # Newsletter section with embedded Substack form
│   └── Footer.tsx                  # Shared footer (all pages)
├── lib/
│   ├── rss.ts                      # Substack RSS parser
│   └── projects.ts                 # All portfolio project data + case study copy
├── public/
│   ├── alice.jpg                   # ← ADD YOUR PHOTO HERE
│   └── portfolio/
│       ├── get-retirement-ready/   # ← ADD: 1.jpg, 2.jpg
│       ├── shinar-wellness/        # ← ADD: 1.jpg, 2.jpg
│       ├── lobster-beach-club/     # ← ADD: 1.jpg, 2.jpg
│       ├── trusted-advisor-os/     # ← ADD: 1.jpg, 2.jpg
│       ├── armada-university/      # ← ADD: 1.jpg, 2.jpg
│       └── allison-kimmey/         # ← ADD: 1.jpg, 2.jpg
├── .env.example                    # Environment variable template
├── vercel.json                     # Cron job + security headers
└── next.config.ts
```

---

## Getting Started in VS Code

### 1. Install prerequisites
- Install [Node.js](https://nodejs.org/) (v18 or above)
- Install [VS Code](https://code.visualstudio.com/)
- Install the [Git](https://git-scm.com/) CLI

### 2. Open the project
Unzip `alice-portfolio.zip`, then in VS Code:
```
File → Open Folder → select alice-portfolio/
```

### 3. Open the terminal
In VS Code: `View → Terminal` (or `` Ctrl+` ``)

### 4. Install dependencies
```bash
npm install
```

### 5. Set up environment variables
```bash
cp .env.example .env.local
```
Then open `.env.local` and set:
```
SUBSTACK_RSS_URL=https://untraditionalbos.substack.com/feed
CRON_SECRET=any_random_string_you_invent
```
That's it — only 2 variables required.

### 6. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Adding Your Photo

1. Get a photo of yourself (any size, portrait or landscape)
2. Rename it `alice.jpg`
3. Drop it into `/public/alice.jpg`
4. The hero section will automatically display it

---

## Adding Portfolio Screenshots

For each project, take a screenshot of the live website and save as:

| Project | Folder | Files |
|---|---|---|
| Get Retirement Ready | `/public/portfolio/get-retirement-ready/` | `1.jpg`, `2.jpg` |
| Shinar Wellness | `/public/portfolio/shinar-wellness/` | `1.jpg`, `2.jpg` |
| Lobster Beach Club | `/public/portfolio/lobster-beach-club/` | `1.jpg`, `2.jpg` |
| Trusted Advisor OS | `/public/portfolio/trusted-advisor-os/` | `1.jpg`, `2.jpg` |
| Armada University | `/public/portfolio/armada-university/` | `1.jpg`, `2.jpg` |
| Allison Kimmey | `/public/portfolio/allison-kimmey/` | `1.jpg`, `2.jpg` |

**Screenshot tips:**
- Use [GoFullPage](https://chrome.google.com/webstore/detail/gofullpage/fdpohaocaechififmbbbbbknoalclacl) Chrome extension for full-page screenshots
- Or press `F12` → Device toolbar → capture screenshot
- Recommended size: 1400×900px minimum, saved as JPG

---

## Deploy to Vercel

```bash
# Step 1 — initialise git and push to GitHub
git init
git add .
git commit -m "Alice Arimoro portfolio"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/alice-portfolio.git
git push -u origin main
```

```
Step 2 — Import to Vercel
1. Go to vercel.com/new
2. Click "Import Git Repository"
3. Select your alice-portfolio repo
4. Under "Environment Variables", add:
   - SUBSTACK_RSS_URL = https://untraditionalbos.substack.com/feed
   - CRON_SECRET = (same random string from .env.local)
5. Click Deploy
```

Vercel gives you a free URL like `alice-portfolio-abc123.vercel.app` immediately.

---

## Updating Portfolio Case Studies

All case study copy lives in `/lib/projects.ts`. To edit a project:

```ts
// Example: update the results for Shinar Wellness
{
  slug: "shinar-wellness",
  results: [
    "Your updated result here",
    "Another result",
  ],
  // ...
}
```

Save the file, Vercel redeploys automatically on push.

---

*Stay Untraditional.*
