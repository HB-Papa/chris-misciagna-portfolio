# Chris Misciagna: portfolio

The portfolio at chrismisciagna.com. One page, styled as a university-press paperback series: each featured project is a faced-out cover, then a two-page spread with what it is and the thinking behind it.

A static site built with [Astro](https://astro.build). No database, no tracking, no cookies. Fonts are served from the site itself.

## Change the words

Everything a visitor reads is in **`src/data/site.ts`**: the statement, the five featured projects, the "Also from the MLIS" list, the résumé, and the contact details. Edit the text there and rebuild. You shouldn't need to touch any other file to update content.

- **To feature a different project,** replace one entry in `projects`. Give it a `color` (marigold, ultra, vermilion, pine, or ink) and an `art` drawing from `src/lib/art.ts`. A new project needs a new drawing there, ideally one that shows a real fact about it.
- **To add a document link** (a paper, a policy), put the file in `public/` and add `{ label: 'Read the policy', href: '/the-file.pdf' }` to that project's `links`.
- **Rules the content follows:** course work is labeled as course work, designed or proposed work is never described as finished or funded, and no phone number, address, or student ID appears on the site.

## Run it

You need Node 22.12 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:4321. To check the finished build the way a visitor sees it:

```bash
npm run build
```

```bash
npm run preview
```

## Check it

With `npm run preview` running in another terminal:

```bash
npm run check
```

This loads the site in Microsoft Edge at desktop and phone widths. It runs an axe accessibility scan, looks for sideways scrolling, broken links, cut-off text, or a phone number, and confirms the covers open with the keyboard. It saves full-page screenshots to `check-output/` and redraws the link preview image, `public/og.png`. Set `BROWSER` to a Chrome or Edge path if Edge is installed somewhere else.

## Publish it

The site is live at **https://chrismisciagna.com**. It's hosted on Vercel in the project `chris-misciagna-portfolio` (team hb-papa), and the code is on GitHub at HB-Papa/chris-misciagna-portfolio.

- **Publish a change:** push to the `main` branch. Vercel builds it and updates the live site in about a minute.
- **Try a change privately first:** push to any other branch. Vercel builds a private preview that only signed-in team members can open, and leaves the live site alone.

**Domain:** chrismisciagna.com is registered through Canva, which also runs its DNS. In Canva, under Web domains, then chrismisciagna.com, then Advanced settings, "Connected to Canva" is switched off and there are two DNS records:

| Type | Name/Host | Value |
|---|---|---|
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `300d10915b84a332.vercel-dns-017.com` |

Keep the domain's renewal active in Canva, or the address stops working.

`vercel.json` sets security headers that allow no outside scripts, fonts, or tracking.
