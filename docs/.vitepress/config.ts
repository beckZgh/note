/**
 * vitepress 配置文件
 * v22.11.19
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
            { text: '书签', link: '/bookmark/often/web' },
        ],
        sidebar: {
            '/guide/': [
                {
                    text : 'Typescript',
                    items: [
                        { text: '基础知识', link: '/guide/typescript/basic' },
                        { text: '开发实践', link: '/guide/typescript/practice' },
                    ],
                },
                // {
                //     text : 'Nestjs 开发',
                //     items: [
                //         { text: '基础入门'          , link: '/guide/nestjs/index' },
                //     ],
                // },
                // {
                //     text : 'Oprensety-appx 开发',
                //     items: [
                //         { text: '开发约定'          , link: '/guide/openresty/appointment' },
                //         { text: 'Context '          , link: '/guide/openresty/context' },
                //         { text: '执行阶段'          , link: '/guide/openresty/phase' },
                //         { text: 'API开发'           , link: '/guide/openresty/api' },
                //         { text: '类型定义'          , link: '/guide/openresty/types' },
                //         { text: '数据缓存'          , link: '/guide/openresty/cache' },
                //         { text: '权限校验'          , link: '/guide/openresty/auth-valid' },
                //         { text: 'Http请求'          , link: '/guide/openresty/http-request' },
                //         { text: 'Cookie 和 Session' , link: '/guide/openresty/cookie-and-session' },
                //         { text: 'WebSocket'         , link: '/guide/openresty/websocket' },
                //         { text: '文件上传'          , link: '/guide/openresty/file-upload' },
                //         { text: 'Mysql'             , link: '/guide/openresty/mysql' },
                //         { text: '模板渲染'          , link: '/guide/openresty/template-render' },
                //         { text: '定时任务'          , link: '/guide/openresty/schedule' },
                //         { text: '日志管理'          , link: '/guide/openresty/logs' },
                //         { text: '异常处理'          , link: '/guide/openresty/error-handle' },
                //         { text: '代码调试'          , link: '/guide/openresty/code-debug' },
                //         { text: '单元测试'          , link: '/guide/openresty/unit-test' },
                //         { text: '项目部署'          , link: '/guide/openresty/deployment' },
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
            ],

            // 网络书签
            '/bookmark/': [
                {
                    text : '站点导航',
                    items: [
                        { text: '前端开发', link: '/bookmark/often/web'    },
                        { text: 'Node开发', link: '/bookmark/often/node'   },
                        { text: '开发资源', link: '/bookmark/often/online' },
                        { text: '学习资源', link: '/bookmark/often/learn'  },
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
