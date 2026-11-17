// Static site: every page is plain HTML built ahead of time. No server, no client
// framework, no analytics. The only script is the small one that widens covers.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chrismisciagna.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  prefetch: false,
});
