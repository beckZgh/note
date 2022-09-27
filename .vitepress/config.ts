
import { getMetaData } from './utils'

const BASE_PATH = '/note/'
const genConfig = async () => {
    const metadata = await getMetaData(BASE_PATH)

    return {
        base       : BASE_PATH,
        title      : 'Web Notebook',
        description: '记录学习',
        themeConfig: {
            outlineTitle: '在这个页面',
            nav         : [
                { text: '概览', link: '/guide'    },
                { text: '归档', link: '/archives' },
                {
                    text : '编程',
                    items: [
                        { text: 'Vue'       , link: '/docs/lang/vue/'        },
                        { text: 'Typescript', link: '/docs/lang/typescript/' },
                        { text: 'Javascript', link: '/docs/lang/javascript/' },
                        { text: 'Css'       , link: '/docs/lang/css/'        },
                        { text: 'Html'      , link: '/docs/lang/html/'       },
                    ],
                },
                {
                    text : '源码',
                    items: [
                        { text: 'Vue源码'       , link: '/docs/example/javascript/' },
                        { text: 'VueRouter源码' , link: '/docs/example/javascript/' },
                        { text: 'Pinia源码'     , link: '/docs/example/css/'        },
                        { text: 'Axios源码'     , link: '/docs/example/css/'        },
                    ],
                },
                {
                    text : '实践',
                    items: [
                        { text: '搭建组件库'    , link: '/docs/example/vue/'        },
                        { text: '搭建工具库'    , link: '/docs/example/typescript/' },
                        { text: 'Admin 主题'    , link: '/docs/example/typescript/' },
                    ],
                },
                {
                    text : '工程',
                    items: [
                        { text: '前端开发环境', link: '/docs/engineering/typescript/' },
                        { text: 'Git 代码管理', link: '/docs/engineering/vue/'        },
                    ],
                },
            ],
            sidebar: {

            },
            metadata,
        },
    }
}

export default genConfig()
