import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Fix alias for '@'
    },
  },
  server: {
    host: '0.0.0.0', // Allows access from Docker
    port: 5173, // Ensures the port is correctly mapped
    strictPort: true, // Ensures it doesn't switch to a different port
    watch: {
      usePolling: true, // Helps detect file changes inside Docker
    },
  },
});
