# vite-plugin-svg

A lightweight Vite 5 plugin for SVG sprites.

## install

```bash
npm install @tangllty/vite-plugin-svg -D
# or
yarn add @tangllty/vite-plugin-svg -D
# or
pnpm install @tangllty/vite-plugin-svg -D
```

## Usage

- Configuration plugin in vite.config.ts

```ts
import { createSvgPlugin } from '@tangllty/vite-plugin-svg'

export default defineConfig({
  plugins: [
    svgIconsPlugin()
  ]
})
```
- Using in component please see [SvgIcon](https://github.com/tangllty/vite-plugin-svg/blob/master/playground/src/components/SvgIcon/index.vue).

## Contributing

If you have any questions, suggestions, or find bugs, please submit an [Issues](https://github.com/tangllty/vite-plugin-svg/issues/new) or provide a [Pull Request](https://github.com/tangllty/vite-plugin-svg/pull/new) to help improve the project.

## License

vite-plugin-svg uses the MIT license. For more details, please refer to [LICENSE](https://github.com/tangllty/vite-plugin-svg/blob/master/LICENSE) files.

## Discussion Group

- WeChat

  - ![WeChat](https://github.com/tangllty/tang-docs/raw/master/docs/public/wechat.png)
- Telegram

  - ![Telegram](https://github.com/tangllty/tang-docs/raw/master/docs/public/telegram.png)
- QQ

  - ![QQ](https://github.com/tangllty/tang-docs/raw/master/docs/public/qq.png)
