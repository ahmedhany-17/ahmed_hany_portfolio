import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

// https://vite.dev/config/
// For GitHub Pages deployment, base is set to the repo name.
// For Vercel / Netlify root deployment, change base to '/'.
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        copyFileSync(resolve(__dirname, 'dist/index.html'), resolve(__dirname, 'dist/404.html'));
      },
    },
  ],
  base: '/ahmed_hany_portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
