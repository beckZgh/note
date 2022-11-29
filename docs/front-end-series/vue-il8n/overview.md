---
outline: [2, 3]
---

# Vue-il8n 国际化

[Vue I18n](https://vue-i18n.intlify.dev/) 是 [Vue.js](https://cn.vuejs.org/) 的国际化插件，用于处理本地化功能集成到到应用程序中。

> 在 Vue I18n v9 及之后的版本中，Vue I18n v8.x 提供的 API 被称为Legacy API模式。

## 安装插件

```sh
pnpm install vue-i18n@9
```

## 简单示例

```ts
import { createApp  } from 'vue'
import { createI18n } from 'vue-il8n'

// 1. 已翻译好的语言环境消息,每个语言环境对应自身的分层对象结构
const messages = {
    'en-US': {
        hello: 'hello world'
    },
    'zh-CN': {
        hello: '你好，世界'
    }
}

// 2. 创建 il8n 实例
const il8n = createI18n({
    locale        : 'en-US'        , // 默认使用语言
    fallbackLocale: 'zh-CN', // 设置保底语言
    messages,
})

/**
 * 3. 安装插件
 *
 * 调用 app.use(il8n) 后
 * - 每个组件都可以访问 VueIl8n 实例 `this.$il8n` (Vue2)
 * - 使用 `uesIl8n` 函数取得类似方法 (Vue3)
 * - 翻译 API `this.$t` 也会注入到每个组件中，在模板中可以直接使用
 */
createApp({
    // ...
}).use(il8n).mount('#app')
```
