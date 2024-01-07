import svgr from 'vite-plugin-svgr';

export default {
  plugins: [svgr()],
  build: {
    rollupOptions: {
      input: 'src/main.tsx',
    },
  },
};
