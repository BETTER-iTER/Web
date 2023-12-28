import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
export default defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg?react' })],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: https://dev.betteritem.store,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
  optimizeDeps: {
    include: ['aws-sdk'],
  },
  define: {
    global: {},
  },
});
