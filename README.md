# 2140 192nd Ave SE — Listing Website

A fast, SEO- and AI-optimized **static website** for the luxury home at
**2140 192nd Ave SE, Sammamish, WA 98075**, built to host for free on **Cloudflare Pages**.

No build step, no framework — just HTML/CSS/JS. That's deliberate: all the content lives in
plain HTML so Google *and* AI answer engines (ChatGPT, Claude, Perplexity, Google AI) can read it.

---

## 📋 Before you publish — fill in the placeholders

Search the project for these and replace them. They're all clearly marked.

| Placeholder                 | Where                                   | What to put |
|-----------------------------|-----------------------------------------|-------------|
| `REPLACE_DOMAIN.com`        | `index.html`, `robots.txt`, `sitemap.xml`, `llms.txt` | Your real domain, e.g. `2140-192nd.com` |
| `$X,XXX,XXX`                | `index.html` hero                       | The asking price |
| `"price": "0000000"`        | `index.html` JSON-LD (Product/Offer)    | Price as digits only, e.g. `2495000` |
| Bathroom count `X`          | `index.html` stats bar + JSON-LD `numberOfBathroomsTotal` + `llms.txt` | Actual # of baths |
| Square footage `X,XXX`      | `index.html` stats bar + `llms.txt`     | Finished sq ft |
| `YOUR_FORM_ID`              | `index.html` contact form `action`      | Your Formspree/Web3Forms ID (or delete the form) |

> Tip: in VS Code, press **Ctrl+Shift+H** (Find & Replace across files) to swap
> `REPLACE_DOMAIN.com` everywhere in one shot.

The **listing agent (Kimberly Freutel, Redfin)** contact info is already wired in. If that
changes, update the Contact section and the JSON-LD `seller` block in `index.html`.

### Add your photos & drone video
See [`assets/README.md`](assets/README.md) for the exact filenames and sizes to drop in.

---

## 🚀 Deploy to Cloudflare Pages

You don't need a build command — this is a static site, so deployment is instant.

### Option A — Drag & drop (fastest, no Git needed)
1. Go to **Cloudflare Dashboard → Workers & Pages → Create → Pages → Upload assets**.
2. Drag this whole folder in.
3. Click **Deploy**. You'll get a free `your-project.pages.dev` URL immediately.
4. To re-deploy after edits, upload again (or use Git, below).

### Option B — Connect a Git repo (auto-deploys on every push)
1. Push this folder to a GitHub/GitLab repo.
2. Cloudflare → Pages → **Connect to Git** → pick the repo.
3. Build settings:
   - **Framework preset:** `None`
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/`
4. Deploy. Every `git push` now publishes automatically.

### Connect your custom domain
1. In your Pages project → **Custom domains → Set up a domain** → enter your domain.
2. If the domain is already on Cloudflare, DNS is configured automatically.
   Otherwise, point your registrar's nameservers to Cloudflare first.
3. HTTPS is automatic and free.
4. **After the domain is live, replace `REPLACE_DOMAIN.com` everywhere** and re-deploy
   so canonical URLs, sitemap, and social previews use the real domain.

---

## 🔎 SEO — what's already done

- Semantic HTML, descriptive `<title>` and meta description, keyword meta
- **Canonical URL**, Open Graph + Twitter Card tags for rich link previews
- **JSON-LD structured data**: `SingleFamilyResidence`, `Product`/`Offer`, and `FAQPage`
  (this is what powers Google rich results)
- `sitemap.xml` (with image sitemap) + `robots.txt`
- Fast, lightweight, mobile-first, accessible (skip link, alt text, reduced-motion support)
- Custom `404.html`

### After deploying — do these (10 minutes, big payoff)
1. **Google Search Console** (https://search.google.com/search-console): add your domain,
   verify, and submit `https://yourdomain.com/sitemap.xml`. Click **Request indexing** on
   the homepage to get crawled within hours instead of weeks.
2. **Bing Webmaster Tools** (https://www.bing.com/webmasters): same thing. **Bing also powers
   ChatGPT search**, so this directly helps AI discovery.
3. Test your rich results: https://search.google.com/test/rich-results
4. Preview your social card: https://www.opengraph.xyz

---

## 🤖 AI / LLM optimization — what's already done

Getting found by ChatGPT, Claude, Perplexity, and Google AI Overviews comes down to:
clean readable content + structured data + being crawlable. All set up here:

- **`llms.txt`** — a plain-language, structured fact sheet at your site root that AI crawlers
  increasingly read (the emerging `llms.txt` standard).
- **`robots.txt` explicitly allows** GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot,
  PerplexityBot, Google-Extended, Applebot-Extended, and Bingbot.
- **`FAQPage` JSON-LD + a visible FAQ section** — AI answer engines love clean Q&A pairs and
  often quote them directly.
- All key facts (beds, location, schools, features) are in **plain HTML text**, not images or
  JavaScript — so models can actually read them.

### To maximize AI discovery
- Get the home **indexed in Bing** (powers ChatGPT) — see step 2 above.
- Earn a few inbound links/mentions (your social posts, neighborhood pages, the MLS/Redfin
  listing linking back) — AI models weight pages that are referenced elsewhere.
- Keep the facts in `llms.txt` and the JSON-LD **accurate and consistent** with the page.

---

## 📁 Files

```
2140-192nd-ave-home/
├── index.html        # the page (content + meta + JSON-LD)
├── styles.css        # luxury styling
├── main.js           # nav, scroll reveal, gallery lightbox
├── llms.txt          # AI/LLM fact sheet
├── robots.txt        # crawler rules (AI bots welcomed)
├── sitemap.xml       # search engine sitemap
├── _headers          # Cloudflare caching + security headers
├── 404.html          # custom not-found page
├── README.md         # this file
└── assets/           # ← put hero.jpg, og-image.jpg, drone-tour.mp4, photo-0X.jpg here
    └── README.md     # filenames & sizes guide
```

## Preview locally
Any static server works. From this folder:
```powershell
python -m http.server 8000
# then open http://localhost:8000
```

---
*Information deemed reliable but not guaranteed. Square footage, bathroom count, lot size, and
ADU/DADU potential to be independently verified by buyer. Equal Housing Opportunity.*
