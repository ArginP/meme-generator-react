import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
      react(),
      ViteImageOptimizer({}),
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer({})
            ],
        }
    }
})




