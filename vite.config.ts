import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/runtime/index.ts',
      formats: ['iife'],
      name: 'NTG',
      fileName: () => 'ntg-design-system.min.js'
    },
    rollupOptions: {
      external: [],
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
        exports: 'named'
      }
    },
    minify: 'esbuild',
    sourcemap: false,
    emptyOutDir: true,
    cssMinify: true
  },
  plugins: [
    dts({
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.stories.tsx', 'src/**/*.tsx'],
      outDir: 'dist/types'
    })
  ]
});
