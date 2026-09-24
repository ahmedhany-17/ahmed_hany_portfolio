import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// For GitHub Pages deployment, base is set to the repo name.
// For Vercel / Netlify root deployment, change base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/ahmed-hany-portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
