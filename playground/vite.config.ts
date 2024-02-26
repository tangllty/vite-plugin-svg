import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import { svgIconsPlugin } from '../src/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgIconsPlugin()],
})
