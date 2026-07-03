import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Aestheva/',
  plugins: [react()],
  server: {
    allowedHosts: true
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|react-helmet-async|scheduler)[\\/]/,
              priority: 50,
            },
            {
              name: 'vendor-gsap',
              test: /[\\/]node_modules[\\/](gsap|@gsap)[\\/]/,
              priority: 40,
            },
            {
              name: 'vendor-framer',
              test: /[\\/]node_modules[\\/](framer-motion|motion-dom|motion-utils|motion-value)[\\/]/,
              priority: 30,
            },
            {
              name: 'vendor-lucide',
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              priority: 20,
            },
            {
              name: 'vendor-forms',
              test: /[\\/]node_modules[\\/](zod|react-hook-form|@hookform)[\\/]/,
              priority: 15,
            },
            {
              name: 'vendor-utils',
              test: /[\\/]node_modules[\\/](lenis|react-compare-slider|clsx|tailwind-merge)[\\/]/,
              priority: 10,
            },
            {
              name: 'vendor-others',
              test: /[\\/]node_modules[\\/]/,
              priority: 5,
            }
          ]
        }
      }
    }
  }
})
