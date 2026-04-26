import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.VITE_PORT) || 3344,
    host: process.env.VITE_HOST || true, // Allow external connections (0.0.0.0)
    open: true,
    strictPort: true, // Exit if port is already in use
    cors: true
  },
  preview: {
    port: parseInt(process.env.VITE_PORT) || 3344,
    host: process.env.VITE_HOST || true,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    sourcemap: process.env.NODE_ENV === 'development', // Enable sourcemaps only in development
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          i18n: ['react-i18next', 'i18next'],
          animations: ['framer-motion']
        }
      }
    },
    // Optimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: true
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-i18next', 'i18next', 'framer-motion']
  }
})