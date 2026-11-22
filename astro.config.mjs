// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with your production URL before deploying.
  site: 'https://shubhamchandok.dev',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
