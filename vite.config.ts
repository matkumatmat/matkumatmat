import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub Pages project sites serve under /<repo>/, so the base follows the
// repo name when building in Actions and stays / for local dev.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
export default defineConfig({
  base: repoName ? `/${repoName}/` : '/',
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })

  ],
})
