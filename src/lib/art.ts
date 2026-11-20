// Cover art, drawn at build time. Each picture encodes a real fact about its project,
// and every mark uses currentColor so it follows the cover's text color.
import type { Art } from '../data/site';

const r = (n: number) => Math.round(n * 100) / 100;

/** Open Sun: a disc ringed by one tick per library item (84), grouped into eight pathways. */
function sun() {
  let out = '<circle cx="200" cy="200" r="92" fill="currentColor"/>';
  for (let i = 0; i < 8; i++) {
    const count = i < 4 ? 11 : 10;
    for (let j = 0; j < count; j++) {
      const a = (i / 8 + ((j + 0.5) / count) * (1 / 8) * 0.82 + 0.009) * Math.PI * 2;
      const outer = 150 + (j % 2) * 14;
      out += `<line x1="${r(200 + Math.cos(a) * 116)}" y1="${r(200 + Math.sin(a) * 116)}" x2="${r(200 + Math.cos(a) * outer)}" y2="${r(200 + Math.sin(a) * outer)}" stroke="currentColor" stroke-width="3.4"/>`;
    }
  }
  return { viewBox: '0 0 400 400', body: out };
}

/** Observatory: one bar per institution, filled to its share of articles free to read (2015 to 2025). */
const freeShares = [0.781, 0.71, 0.68, 0.619, 0.605, 0.6, 0.599, 0.544, 0.534, 0.528, 0.521, 0.509, 0.505, 0.502, 0.49, 0.476, 0.442];
function observatory() {
  const out = freeShares
    .map((f, i) => {
      const y = r(6 + i * 23.2);
      return `<rect x="2" y="${y}" width="396" height="15" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="2" y="${y}" width="${r(396 * f)}" height="15" fill="currentColor"/>`;
    })
    .join('');
  return { viewBox: '0 0 400 400', body: out };
}

/** Third Place: 1,200 survey invitations across five universities, one dot per four. The 75 filled dots are the 300 expected responses (25%). */
function third() {
  let out = '';
  let n = 0;
  for (let u = 0; u < 5; u++)
    for (let row = 0; row < 20; row++)
      for (let c = 0; c < 3; c++, n++) {
        const on = (n * 37) % 100 < 25;
        out += `<circle cx="${r(26 + u * 76 + c * 17)}" cy="${r(14 + row * 19.6)}" r="6.4" fill="${on ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.6"/>`;
      }
  return { viewBox: '0 0 400 400', body: out };
}

/** Thomas Cooper: the two trainings, Power BI 101 and 102. */
function training() {
  const t = 'font-family="Archivo Variable, sans-serif" font-weight="800" font-size="190" text-anchor="middle" style="font-stretch:75%"';
  return {
    viewBox: '0 0 340 400',
    body: `<text x="170" y="185" ${t} fill="currentColor">101</text><text x="170" y="375" ${t} fill="none" stroke="currentColor" stroke-width="3">102</text>`,
  };
}

/** UConn policy: ranges of spines, with weeded gaps outlined. */
function shelf() {
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  let out = '';
  for (let row = 0; row < 5; row++) {
    let x = 6;
    const y = 8 + row * 78;
    while (x < 386) {
      const w = 8 + rnd() * 20;
      const h = 48 + rnd() * 22;
      const gone = rnd() < 0.14;
      out += gone
        ? `<rect x="${r(x)}" y="${r(y + 70 - h)}" width="${r(Math.min(w, 394 - x))}" height="${r(h)}" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>`
        : `<rect x="${r(x)}" y="${r(y + 70 - h)}" width="${r(Math.min(w, 394 - x))}" height="${r(h)}" fill="currentColor"/>`;
      x += w + 2.5;
    }
    out += `<line x1="0" x2="400" y1="${y + 72}" y2="${y + 72}" stroke="currentColor" stroke-width="1.5"/>`;
  }
  return { viewBox: '0 0 400 400', body: out };
}

const drawings = { sun, observatory, third, training, shelf };

export function coverArt(kind: Art) {
  return drawings[kind]();
}
