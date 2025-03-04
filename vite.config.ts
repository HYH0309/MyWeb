import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Specify the output directory
    assetsDir: 'assets', // Place all static assets (e.g., JS, CSS) in a specific folder
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // JS chunk files
        entryFileNames: 'js/[name]-[hash].js', // Entry JS files
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || 'asset'; // Fallback if name is undefined
          const extType = name.split('.').pop(); // Extract extension
          if (extType === 'css') {
            return 'css/[name]-[hash][extname]'; // CSS files
          }
          return `assets/[name]-[hash][extname]`; // Other asset types
        },
      },
    },
  },
});
