
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {},
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'Greeter',
      fileName: (format) => `compiled-greeter-component.${format}.js`,
      formats: ['umd'],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
    minify: true,
    sourcemap: true,
  },
});