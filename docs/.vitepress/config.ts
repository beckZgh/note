/**
 * vitepress 配置文件
 * v22.09.29
 *
 * https://process1024.github.io/vitepress/config/introduction
 */

import { defineConfig } from 'vitepress'

export default defineConfig({
    base       : '/note/',
    lang       : 'zh-CN',
    description: '开发笔记',
    themeConfig: {
        logo           : '/logo.svg',
        siteTitle      : 'Note',
        outlineTitle   : '大纲',
        lastUpdatedText: '最后更新时间',
        socialLinks    : [
            { icon: 'github', link: 'https://github.com/beckZgh/note' },
        ],
        footer: {
            message  : 'Released under the MIT License.',
            copyright: 'Copyright © 2022-PRESENT 朱国华',
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },
        nav: [
            { text: '笔记', link: '/guide/git/basic'    },
            // { text: '前端', link: '/front-end-dev/'     },
            // { text: '后端', link: '/back-end-dev/'      },
            // { text: '文章', link: '/articles/'          },
            { text: '书签', link: '/bookmark/often/web' },
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
                {
                    text : 'Vmware 虚拟机',
                    items: [
                        { text: 'Ubunto Server 环境搭建', link: '/guide/vmware/ubunto' },
                    ],
                },
                // {
                //     text : 'Vscode',
                //     items: [
                //         { text: '.editorconfig' , link: '/guide/vscode/editconfig' },
                //         { text: 'settings.json' , link: '/guide/vscode/settings'   },
                //         { text: '常用插件'      , link: '/guide/vscode/plugins'    },
                //     ],
                // },
                // {
                //     text : 'Windows',
                //     items: [
                //         { text: '右键打开 cmd 配置' , link: '/guide/window/right-click-to-open-cmd' },
                //     ],
                // },
            ],

            // 网络书签
            '/bookmark/': [
                {
                    text : '站点导航',
                    items: [
                        { text: '前端开发', link: '/bookmark/often/web'    },
                        { text: 'Node开发', link: '/bookmark/often/node'   },
                        { text: '学习资源', link: '/bookmark/often/learn'  },
                        { text: '设计资源', link: '/bookmark/often/online' },
                    ],
                },
                {
                    text : '好文收录',
                    items: [
                        // { text: '开发环境' , link: '/bookmark/question/vue' },
                        { text: 'Vue  相关' , link: '/bookmark/question/vue'  },
                        { text: 'Vite 相关' , link: '/bookmark/question/vite' },
                    ],
                },
            ],
        },
    },
})
