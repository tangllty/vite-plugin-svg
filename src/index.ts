import type { Plugin } from 'vite'
import { glob } from 'glob'
import fsExtra from 'fs-extra'
const { readFile } = fsExtra
import { optimize } from 'svgo'
import path from 'path'
import type { SvgOptions } from './types'
import { parse } from 'node-html-parser'
import type { HTMLElement } from 'node-html-parser'

const defaultPattern = 'src/assets/icons/**/*.svg'
const defaultOptions: SvgOptions = {
  pattern: defaultPattern,
  prefix: 'icon'
}

const getSvgSymbols = async (svgOptions: SvgOptions) => {
  const symbols: string[] = []
  const files = await glob(svgOptions.pattern || defaultPattern)
  await Promise.all(files.map(async (file: string) => {
    const content = await readFile(file, 'utf8')
    const svgContent = await optimize(content, { path: file })
    const name = path.basename(file, '.svg')
    const svgElement = parse(svgContent.data).querySelector('svg') as HTMLElement
    const symbolId = svgOptions.prefix ? `${svgOptions.prefix}-${name}` : `${name}`
    const viewBox = svgElement.attributes.viewBox
    const view = svgElement.childNodes.map((node) => node).toString()
    const symbol = `<symbol id="${symbolId}" viewBox="${viewBox}">${view}</symbol>`
    symbols.push(symbol)
  }))
  return symbols
}

export const svgIconsPlugin = (options: SvgOptions = defaultOptions): Plugin => {
  const svgOptions = { ...defaultOptions, ...options } as SvgOptions

  return {
    name: 'vite-plugin-svg',
    transformIndexHtml: async (html) => {
      const symbols = await getSvgSymbols(svgOptions)
      const svgHtml = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">${symbols.join('')}</svg>`
      return html.replace('</body>', `${svgHtml}</body>`)
    }
  }
}
