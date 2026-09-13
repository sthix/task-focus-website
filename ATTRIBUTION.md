# Acquisition measurement

This runbook keeps website acquisition reporting useful without adding analytics scripts, advertising pixels, cookies, or behavioral identifiers to the site.

Do not commit Search Console exports, App Store Connect exports, account credentials, provider tokens, or personal data. Store private exports in the account owner's private reporting workspace.

## Reporting scope

Use one comparable 28-day window across both systems. The initial baseline window is **2026-08-15 through 2026-09-11**, the latest 28 complete days available when setup began on 2026-09-13.

- Search Console dates use Pacific Time (PT).
- App Store Connect Analytics dates use Coordinated Universal Time (UTC).
- Record both timezones in every comparison. Do not compare daily values as if their day boundaries were identical.
- Data that is withheld, suppressed, delayed, or not yet collected is **unavailable**, never zero.

## Google Search Console

Property: `https://sthix.github.io/task-focus-website/` (URL-prefix property)

Verification uses the `google-site-verification` meta element in `index.html`. Keep the element published after verification succeeds.

### Setup and evidence

1. Open the URL-prefix property in Search Console and confirm that ownership is verified.
2. Submit `https://sthix.github.io/task-focus-website/sitemap.xml` in **Indexing > Sitemaps**.
3. Record the submission date and the status shown by Search Console. A successful submission means Google could read the sitemap, not that every URL is indexed.
4. Inspect `https://sthix.github.io/task-focus-website/` with URL Inspection.
5. Record the index status, last crawl time, user-declared canonical, Google-selected canonical, referring sitemap, and any crawl or indexing issue.
6. Run **Test live URL**, open the tested page details, and confirm that the rendered HTML contains the visible hero heading, hero description, and App Store link.

Record evidence in the private reporting workspace. Screenshots may contain account details, so do not add them to this public repository.

### Baseline export

In **Performance > Search results**, select Web and the exact baseline dates. Export each table separately with all four metrics enabled: clicks, impressions, CTR, and average position.

- Pages, grouped by landing page
- Queries
- Countries
- Devices

Record the chart totals alongside each export. Search Console can omit anonymized queries and truncate table rows, so query rows may not add up to the chart totals.

Classify a query as branded after lowercasing it, trimming whitespace, and treating punctuation as spaces when it contains one of these phrases or variants:

- `task focus`
- `taskfocus`
- `task focus app`
- `task focus adhd app blocker`
- `task focus adhd blocker`
- `task focas`
- `task fokus`

Review new query exports for additional obvious spelling variants before comparing periods. Keep the rule unchanged for historical comparisons, or document the date on which it changed.

## App Store Connect Analytics

App: **Task Focus: ADHD App Blocker**, Apple ID `6792549661`

For the baseline window, record the following in App Store Connect Analytics:

- Product Page Views and First-Time Downloads with Source Type set to Web Referrer
- the Web Referrer breakdown for the website host
- Product Page Views and First-Time Downloads for each website campaign
- the exact date range, UTC timezone, storefront or territory filters, device filters, and product-page filters

If the dashboard does not show a value because volume is below Apple's threshold, record `unavailable (suppressed)`. If the period predates data collection or the account cannot be accessed, record `unavailable` with the reason. Apple campaign metrics appear only after the campaign has run for at least 24 hours and reached the applicable minimum threshold.

## Campaign links

Use a single campaign token per published page. Do not split campaigns by CTA position because that fragments low-volume data.

| Page | Campaign token | Status |
| --- | --- | --- |
| Homepage (`/task-focus-website/`) | `web_home` | Create first |
| Block-apps guide | `web_block_apps_guide` | Create when published |
| No-countdown page | `web_no_countdown` | Create when published |

Create links only in App Store Connect:

1. Open Task Focus in **Apps**, then open **Analytics > Acquisition > Campaigns**.
2. Add the campaign token from the table.
3. Copy the generated URL. It must point to Apple ID `6792549661` and contain Apple's real provider token (`pt`), the page campaign token (`ct`), and media type (`mt=8`).
4. Use the provider token only as part of an App Store Connect generated campaign URL. It is a public attribution parameter, not an API credential. Do not guess it or document it separately from a verified public campaign link.
5. Put the generated `web_home` URL into every homepage App Store CTA. Use the page's one token for all CTA placements.
6. Test the link on desktop and iPhone. Confirm that it opens the Task Focus product page and that `pt`, `ct`, and `mt` remain present after the App Store redirect.
7. After at least 24 hours, check whether the campaign appears in Analytics. Treat metrics below Apple's minimum threshold as unavailable.

The URL shape is documented for validation only:

```text
https://apps.apple.com/app/apple-store/id6792549661?pt=<APPLE_PROVIDER_TOKEN>&ct=web_home&mt=8
```

Never substitute a guessed provider token.

## Attribution boundaries

- `web_home` covers every visitor who uses a homepage CTA, including direct, referral, social, and search traffic.
- Organic search performance comes from Search Console. Website campaign performance comes from App Store Connect.
- Do not divide all website campaign downloads by Google clicks and label the result an organic conversion rate.
- Apple credits a First-Time Download when it happens within 24 hours of the campaign click. If multiple campaign links were clicked, the most recent eligible campaign receives credit.
- Reporting delays and privacy thresholds mean that recent or low-volume values may remain unavailable.

## Setup record

| Item | Status on 2026-09-13 | Evidence or next action |
| --- | --- | --- |
| Search Console URL-prefix property | Pending publication | Property created; verification meta element added to `index.html` |
| Sitemap submission | Pending verification | Submit the full sitemap URL after property verification |
| Homepage URL inspection | Pending verification | Inspect indexed and live versions after property verification |
| Search Console baseline | Pending verification | Export the four dimensions for the baseline window |
| App Store Connect baseline | Unavailable | App Store Connect requires an authenticated account session |
| `web_home` campaign URL | Unavailable | Generate it in App Store Connect; no provider token has been guessed or added |
| Future page campaigns | Not yet applicable | Create each token when its page is published |

## References

- [Google Search Console performance dimensions and timezones](https://support.google.com/webmasters/answer/17011259)
- [Google URL Inspection](https://support.google.com/webmasters/answer/9012289)
- [Google Search Console exports](https://support.google.com/webmasters/answer/12919797)
- [Apple campaign links](https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links)
- [Apple analytics dashboard](https://developer.apple.com/help/app-store-connect-analytics/overview/analytics-dashboard)
- [Apple analytics reporting differences and UTC timezone](https://developer.apple.com/help/app-store-connect/measure-app-performance/differences-in-reporting-tools)
