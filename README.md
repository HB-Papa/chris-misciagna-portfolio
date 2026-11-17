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

This folder is linked to the Vercel project `chris-misciagna-portfolio` (team hb-papa). It isn't live yet.

- **Private preview** (signed-in Vercel team members only):

  ```bash
  vercel deploy
  ```

- **Go live** (only once the site is approved):

  ```bash
  vercel deploy --prod
  ```

  This makes chris-misciagna-portfolio.vercel.app public. Point chrismisciagna.com at it in the project's Domains settings.

`vercel.json` sets security headers that allow no outside scripts, fonts, or tracking. The first deploy on 2026-11-16 became production automatically, so its public address was removed with `vercel alias rm` to keep the site private until launch.
