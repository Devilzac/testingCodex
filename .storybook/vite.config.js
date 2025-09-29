import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// Minimal Vite config for Storybook
// This prevents loading the project's vite.config.ts with vite-plugin-vue-devtools
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ['storybook/test']
  }
});
