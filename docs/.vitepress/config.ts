/**
 * vitepress 配置文件
 * v22.11.29
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
            { text: '计算机基础' ,  activeMatch: '/computer-basics/' , link: '/computer-basics/standard/css-var'     },
            { text: '前端系列'   ,  activeMatch: '/front-end-series/', link: '/front-end-series/typescript/overview' },
            { text: '后端系列'   ,  activeMatch: '/back-end-series/' , link: '/back-end-series/'                     },
            { text: '工具 & 环境',  activeMatch: '/tools-and-env/'   , link: '/tools-and-env/git/basic'              },
            { text: '书签 & 软件',  activeMatch: '/bookmark/'        , link: '/bookmark/web'                         },
        ],
        sidebar: {
            '/computer-basics/': [
                {
                    text       : '规范指南',
                    collapsible: true,
                    items      : [
                        { text: '样式变量命名规范', link: '/computer-basics/standard/css-var' },
                    ],
                },
            ],

            '/front-end-series/': [
                {
                    text       : 'Typescript',
                    collapsible: true,
                    items      : [
                        { text: '概览'    , link: '/front-end-series/typescript/overview' },
                        { text: '开发实践', link: '/front-end-series/typescript/practice' },
                        { text: '相关链接', link: '/front-end-series/typescript/bookmark' },
                    ],
                },
                {
                    text       : 'Vue',
                    collapsible: true,
                    items      : [
                        { text: '相关链接', link: '/front-end-series/vue/bookmark' },
                    ],
                },
                {
                    text       : 'Vue-Il8n',
                    collapsible: true,
                    items      : [
                        { text: '概览'                , link: '/front-end-series/vue-il8n/overview'       },
                        { text: '基础语法'           , link: '/front-end-series/vue-il8n/basic'           },
                        { text: '货币符号 & 语言代码', link: '/front-end-series/vue-il8n/symbol-and-lang' },
                    ],
                },
                {
                    text       : 'Vite',
                    collapsible: true,
                    items      : [
                        { text: '相关链接', link: '/front-end-series/vite/bookmark' },
                    ],
                },
                {
                    text       : 'H5-开发',
                    collapsible: true,
                    items      : [
                        { text: '相关链接', link: '/front-end-series/h5-dev/bookmark' },
                    ],
                },
            ],

            '/tools-and-env/': [
                {
                    text       : 'Git',
                    collapsible: true,
                    items      : [
                        { text: '基础使用', link: '/tools-and-env/git/basic' },
                        { text: '相关链接', link: '/tools-and-env/git/bookmark' },
                    ],
                },
                {
                    text       : 'Vmware 虚拟机',
                    collapsible: true,
                    items      : [
                        { text: 'Ubunto Server 环境搭建', link: '/tools-and-env/vmware/ubunto' },
                    ],
                },
            ],

            // 网络书签
            '/bookmark/': [
                {
                    text       : '站点导航',
                    collapsible: true,
                    items      : [
                        { text: '前端开发'  , link: '/bookmark/web'    },
                        { text: 'Node开发'  , link: '/bookmark/node'   },
                        { text: '开发资源'  , link: '/bookmark/online' },
                        { text: '学习资源'  , link: '/bookmark/learn'  },
                        { text: '待分类链接', link: '/bookmark/other'  },
                    ],
                },
            ],
        },
    },
})

