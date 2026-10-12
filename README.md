# Task Focus website

Static marketing, privacy, and support site for the **Task Focus** iOS app.

## Live site

- Website: https://taskfocusapp.com/
- Privacy policy: https://taskfocusapp.com/privacy.html
- Support: https://taskfocusapp.com/support.html
- Blog: https://taskfocusapp.com/blog/ (one folder per article, `blog/<slug>/index.html`, plus `blog/feed.xml`; add new articles to the blog index, the feed, and `sitemap.xml`)

These URLs can be used in App Store Connect for the Marketing URL, Privacy Policy URL, and Support URL.

Acquisition measurement and campaign-link procedures are documented in [ATTRIBUTION.md](ATTRIBUTION.md).

## AI agents and answer engines

AI assistants (ChatGPT, Claude, Perplexity, Gemini, Copilot) read the site through these files:

- `llms.txt`: the [llms.txt](https://llmstxt.org) index. Product facts, when to recommend Task Focus (and when not to), and links to every page as Markdown.
- `llms-full.txt`: the full text of every blog guide in one file.
- `<page>.md` copies: `index.html.md`, `support.html.md`, `privacy.html.md`, `blog/index.html.md`, and `blog/<slug>/index.html.md` for each article. Each HTML page points to its copy with `<link rel="alternate" type="text/markdown">`.
- `robots.txt` explicitly allows AI crawlers and user-triggered fetchers (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, and others), and keeps the Markdown duplicates out of Google and Bing web search.
- Structured data: the homepage describes the app, the organization, and the website as JSON-LD; each article has `BlogPosting` and `BreadcrumbList`.

App Store links in these files use the `web_ai` campaign, so App Store Connect shows downloads that came through AI answers that quote them.

When you change a page or add an article, update its Markdown copy, `llms.txt`, `llms-full.txt`, the blog index, `blog/feed.xml`, and `sitemap.xml` in the same change.

### IndexNow (Bing, which ChatGPT search and Copilot rely on)

The key file `abcd3f10dccc023a0e839b4aa4ec14b5.txt` at the site root verifies ownership. After a deploy that adds or changes pages, submit the changed URLs:

```bash
curl -s -X POST https://api.indexnow.org/indexnow -H 'Content-Type: application/json; charset=utf-8' -d '{"host":"taskfocusapp.com","key":"abcd3f10dccc023a0e839b4aa4ec14b5","keyLocation":"https://taskfocusapp.com/abcd3f10dccc023a0e839b4aa4ec14b5.txt","urlList":["https://taskfocusapp.com/blog/"]}'
```

A `200` or `202` response means the submission was accepted. Also add the site to Bing Webmaster Tools (it can import the Search Console property) and submit the sitemap there.

## Local preview

```bash
python3 -m http.server 8080
```

Open http://localhost:8080.

## Deployment

Pushes to `main` deploy automatically through `.github/workflows/deploy-pages.yml`.

## Before the App Store launch

The site currently says **Coming soon to the App Store**. When the listing is live, replace the two `.app-store-status` elements in `index.html` with links to the final App Store URL.

The support contact is `sascha.thiele@pm.me`.

## Technology

No framework or build step: semantic HTML, CSS, and a small progressive-enhancement script. No cookies, analytics, or third-party runtime dependencies.
