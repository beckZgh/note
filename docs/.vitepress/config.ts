/**
 * vitepress 配置文件
 * v22.09.29
 *
 * https://process1024.github.io/vitepress/config/introduction
 */

import { defineConfig } from 'vitepress'

export default defineConfig({
    base       : '/note/',
    title      : 'Web Note',
    description: '开发笔记',
    themeConfig: {
        outlineTitle   : '标题目录',
        lastUpdatedText: '最后更新时间',
        nav            : [
            { text: '开发指南', link: '/guide/git/basic' },
            { text: '前端开发', link: '/front-end-dev/'  },
            { text: '后端开发', link: '/back-end-dev/'   },
        ],
        sidebar: {
            '/guide/': [
                // {
                //     text : '规范',
                //     items: [
                //         { text: '代码规范', link: '/guide/code-lint'   },
                //         { text: '样式规范', link: '/guide/style-lint'  },
                //         { text: '提交规范', link: '/guide/commit-lint' },
                //         { text: '分支规范', link: '/guide/git-branch'  },
                //         { text: '命名规范', link: '/guide/var-name'    },
                //         { text: '目录规范', link: '/guide/dir-name'    },
                //         { text: '主题规范', link: '/guide/theme'       },
                //     ],
                // },
                {
                    text : 'Git',
                    items: [
                        { text: '基础使用', link: '/guide/git/basic' },
                    ],
                },
                // {
                //     text : '环境搭建',
                //     items: [
                //         { text: 'Window10 前端开发环境搭建', link: '/guide/env/window-font-dev' },
                //     ],
                // },
                {
                    text : 'Vscode',
                    items: [
                        { text: '.editorconfig' , link: '/guide/vscode/editconfig' },
                        { text: 'settings.json' , link: '/guide/vscode/settings'     },
                        { text: '常用插件'      , link: '/guide/vscode/plugins'      },
                    ],
                },
                {
                    text : 'Windows',
                    items: [
                        { text: '右键打开 cmd 配置' , link: '/guide/window/right-click-to-open-cmd' },
                    ],
                },
            ],
        },
    },
})
