/**
 * 获取文档的原始信息
 */

import globby from 'globby'
import path   from 'path'
import fs     from 'fs-extra'
import matter from 'gray-matter'
import dayjs  from 'dayjs'

interface FrontmatterConfig {
    title?: string   // 标题
    desc ?: string   // 描述
    date ?: string   // 日期
    tags ?: string[] // 标签
}

interface FrontmatterItem extends Required<FrontmatterConfig> {
    year : string
    month: string
    day  : string
}

export async function getMetaData(base = '')  {
    // 取得所有文章文件
    const md_files = await globby(['./docs/**/*.md'], {
        cwd      : path.resolve(__dirname, '../../'),
        onlyFiles: true,
    })

    // 读取文件定义元信息
    const articles = await Promise.all(
        md_files.map(async (file_path) => {
            // 读取文件内容
            const content = await fs.readFile(file_path, 'utf-8')

            // 解析文件内容
            const { data }: { data: FrontmatterConfig } = matter(content)
            if ( !data.title ) {
                console.warn(`${ file_path } 未定义标题`)
                process.exit(1)
            }

            if ( !data.date ) {
                console.warn(`${ file_path } 未定义日期`)
                process.exit(1)
            }

            let url = file_path.replace('.md', '.html')
            url = base + url.slice(1)
            url = url.replace(/\/{2}/g, '/')
            return {
                frontmatter: converFrontmatter(data),
                url        ,
            }
        }),
    )

    type ArticleItem = typeof articles[0]

    const tags          = [] as string[] // 标签数据
    const tag_map       = {} as Record<string, ArticleItem[]>  // 以标签汇总的文章
    const year_map      = {} as Record<string, ArticleItem[]>  // 以年汇总的文章
    const year_articles = [] as { year: string; articles: ArticleItem[] }[]

    articles.forEach((item) => {
        const frontmatter = item.frontmatter

        // 处理以年汇总的文章
        let  year_item = year_map[frontmatter.year]
        if (!year_item) {
            year_item = []
            year_articles.push({
                year    : frontmatter.year,
                articles: year_item,
            })
            year_map[frontmatter.year] = year_item
        }
        year_item.push(item)

        // 处理以标签汇总的文章
        item.frontmatter.tags.forEach((tag: string) => {
            // 保存标签类别
            if (!tags.includes(tag)) tags.push(tag)

            let  tag_item = tag_map[tag]
            if (!tag_item) {
                tag_item = []
                tag_map[tag] = tag_item
            }
            tag_item.push(item)
        })
    })

    return {
        articles,
        tags,
        tag_map,
        year_map,
        year_articles,
    }
}

// 转换 frontmatter
function converFrontmatter(data: FrontmatterConfig) {
    const o: FrontmatterItem = {
        title: '',
        desc : '',
        tags : [],
        ...data,
        year : dayjs(data.date).format('YYYY'),
        month: dayjs(data.date).format('MM'),
        date : dayjs(data.date).format('YYYY-MM-DD'),
        day  : dayjs(data.date).format('DD'),
    }

    return o
}
