# vite-plugin-svg

SVG sprites 轻量级 Vite 5 插件。

## 安装

```bash
npm install @tang/vite-plugin-svg -D
# or
yarn add @tang/vite-plugin-svg -D
# or
pnpm install @tang/vite-plugin-svg -D
```

## 使用

- 在 vite.config.ts 中配置插件

```ts
import { createSvgPlugin } from '@tang/vite-plugin-svg'

export default defineConfig({
  plugins: [
    svgIconsPlugin()
  ]
})
```

- 在组件中使用请查看 [SvgIcon](https://gitee.com/tangllty/vite-plugin-svg/blob/master/playground/src/components/SvgIcon/index.vue)。

## 贡献

如果你有任何问题、建议或发现了 bug，请提交 [Issues](https://gitee.com/tangllty/vite-plugin-svg/issues/new) 或提供 [Pull Request](https://gitee.com/tangllty/vite-plugin-svg/pull/new) 来帮助改进该项目。

## 许可证

vite-plugin-svg 使用 MIT 许可证。更多详情请查阅 [LICENSE](https://gitee.com/tangllty/vite-plugin-svg/blob/master/LICENSE) 文件。

## 交流群

- 微信

  - ![WeChat](https://gitee.com/tangllty/tang-docs/raw/master/docs/public/wechat.png)
- Telegram

  - ![Telegram](https://gitee.com/tangllty/tang-docs/raw/master/docs/public/telegram.png)
- QQ

  - ![QQ](https://gitee.com/tangllty/tang-docs/raw/master/docs/public/qq.png)
