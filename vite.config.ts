import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    svgr({
      exportAsDefault: true,
    }),
    react(),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css') {
            return 'styles.css'
          }
          return assetInfo.name || 'assets/[name].[ext]'
        },
      },
    },
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: true,
    port: 5000,
  },
})
