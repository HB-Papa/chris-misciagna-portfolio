// Quality check against a running preview (npm run preview, default http://localhost:4321).
// For desktop and phone widths: axe accessibility scan, horizontal overflow, broken in-page links,
// keyboard widening of covers, and a full-page screenshot. Also renders public/og.png.
// Usage: node scripts/check.mjs [baseUrl] [outDir]
import puppeteer from 'puppeteer-core';
import { readFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const base = process.argv[2] ?? 'http://localhost:4321';
const out = process.argv[3] ?? 'check-output';
mkdirSync(out, { recursive: true });
const axeSource = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const browser = await puppeteer.launch({
  executablePath: process.env.BROWSER ?? 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  headless: true,
});

const views = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'phone', width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
];
let failed = false;

for (const v of views) {
  for (const path of ['/', '/404']) {
    const page = await browser.newPage();
    await page.setViewport(v);
    await page.goto(base + path, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    await page.addScriptTag({ content: axeSource });
    const axe = await page.evaluate(async () => {
      const r = await window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] });
      return {
        violations: r.violations.map((x) => ({ id: x.id, impact: x.impact, nodes: x.nodes.map((n) => n.target.join(' ')).slice(0, 5) })),
        incomplete: r.incomplete.map((x) => `${x.id} (${x.nodes.length})`),
      };
    });
    const layout = await page.evaluate(() => ({
      overflowX: document.documentElement.scrollWidth > window.innerWidth,
      brokenAnchors: [...document.querySelectorAll('a[href^="#"]')].map((a) => a.getAttribute('href')).filter((h) => h.length > 1 && !document.querySelector(h)),
      emptyLinks: [...document.querySelectorAll('a')].filter((a) => !a.getAttribute('href') || a.getAttribute('href') === '#').length,
      phoneNumber: /\(?203\)?[-. ]?240|8924/.test(document.body.innerText),
      clipped: [...document.querySelectorAll('.title, .spread h2, .facts dd, .num')].filter((e) => e.scrollWidth > e.clientWidth + 1).map((e) => e.textContent.trim().slice(0, 40)),
    }));
    console.log(`\n[${v.name} ${path}]`, JSON.stringify({ ...layout, violations: axe.violations, needsReview: axe.incomplete }, null, 1));
    if (axe.violations.length || layout.overflowX || layout.brokenAnchors.length || layout.emptyLinks || layout.phoneNumber || layout.clipped.length) failed = true;
    if (path === '/') {
      await page.screenshot({ path: `${out}/${v.name}.png`, fullPage: true });
      if (v.name === 'desktop') {
        // Keyboard: tab past the skip link, the name, and five nav links, then into the covers.
        const opened = [];
        await page.focus('body');
        for (let i = 0; i < 12; i++) {
          await page.keyboard.press('Tab');
          opened.push(await page.evaluate(() => {
            const a = document.activeElement;
            const on = document.querySelector('.cover.on .title')?.textContent;
            return `${a?.textContent?.trim().slice(0, 24)} -> open: ${on}`;
          }));
        }
        console.log('[keyboard]', opened.join('\n  '));
        await page.hover('.cover:nth-child(3)');
        await new Promise((r) => setTimeout(r, 700));
        console.log('[hover third cover] open:', await page.evaluate(() => document.querySelector('.cover.on .title')?.textContent));
      }
    }
    await page.close();
  }
}

// Open Graph image: the shelf at 1200x630.
const og = await browser.newPage();
await og.setViewport({ width: 1200, height: 690 });
await og.goto(base + '/', { waitUntil: 'networkidle0' });
await og.evaluate(() => document.fonts.ready);
const shelf = await og.$('.shelf');
const box = await shelf.boundingBox();
await og.screenshot({ path: 'public/og.png', clip: { x: 0, y: box.y, width: 1200, height: 630 } });

await browser.close();
console.log(failed ? '\nCHECK FAILED' : '\nCHECK PASSED');
process.exit(failed ? 1 : 0);
