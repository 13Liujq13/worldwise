import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  optimizeDeps: {
    // Workaround: react-datepicker ships a broken sourcemap in some versions
    // which crashes esbuild during dev dependency optimization.
    exclude: ['react-datepicker'],
  },
  build: {
    rollupOptions: {
      output: {
        // 把体积较大的第三方依赖拆成独立 chunk，避免主包超过 500 kB
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-map': ['leaflet', 'react-leaflet'],
          'vendor-picker': ['react-datepicker'],
        },
      },
    },
  },
})
