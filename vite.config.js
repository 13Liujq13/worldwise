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
})
