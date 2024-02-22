import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import { svgIconsPlugin } from '../src/index'
import ts from 'typescript'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgIconsPlugin()],
})
