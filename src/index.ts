import type { Plugin } from 'vite'
import { glob } from 'glob'
import { optimize } from 'svgo'
import { readFile } from 'fs-extra'

export const getSvgFiles = async () => {
  const files = await glob('src/**/*.svg')
  files.forEach(async (file: string) => {
    console.log(file)
    // const content = await readFile(file, 'utf8')
    // const svgContent = await optimize(content, { path: file })
    // console.dir('svgContent: ' + svgContent.data);

    // const result = await optimize(file, { path: file })
    // console.log(result.data)
  })
}

const getSvgHtml = async () => {
  await getSvgFiles()
  return ''
}

export const svgIconsPlugin = (): Plugin => {

  return {
    name: 'vite-plugin-svg',
    // enforce: 'pre',
    config: (config) => {
      // console.log(config)
    },
    transformIndexHtml: (html) => {
      const svgHtml = getSvgHtml()

      return html.replace('</body>', `${svgHtml}</body>`)
    },
    configureServer: (server) => {
      return () => {

        server.middlewares.use((req, res, next) => {
          next()
        })
      }
    }
  }
}
