# Task Focus website

Static marketing, privacy, and support site for the **Task Focus** iOS app.

## Live site

- Website: https://sthix.github.io/task-focus-website/
- Privacy policy: https://sthix.github.io/task-focus-website/privacy.html
- Support: https://sthix.github.io/task-focus-website/support.html

These URLs can be used in App Store Connect for the Marketing URL, Privacy Policy URL, and Support URL.

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
