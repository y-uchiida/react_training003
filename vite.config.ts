import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  publicDir: '../public',
  base: process.env.GITHUB_PAGES
    ? "react_training003"
    : "./",
  plugins: [react()]
})
