<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
const { theme } = useData()

const tags      = theme.value.metadata.tags || []
const tag_map   = theme.value.metadata.tag_map
const articles  = theme.value.metadata.articles
const curr_tag  = ref('')
const articles$ = computed(() => tag_map[curr_tag.value] || articles)

// 搜素被激活
const search_focus = ref(false)
</script>

<template>
    <div class="container">
        <div class="tag-wrap">
            <div class="tag-wrap__left">
                所有标签:
            </div>
            <div class="tag-wrap__right">
                <button class="tag-item" :class="[{ 'is-selected': curr_tag === '' }]" @click="curr_tag = ''">
                    全部
                </button>
                <button
                    v-for="tag in tags" :key="tag"
                    class="tag-item"
                    :class="[{ 'is-selected': curr_tag === tag }]"
                    @click="curr_tag = tag"
                >
                    {{ tag }}
                </button>
            </div>
        </div>

        <div class="search-wrap" :class="{ 'is-actived': search_focus }">
            <input
                placeholder="输入文章标题快速搜索..."
                style="width: 100%;"
                @focus="search_focus = true"
                @blur="search_focus = false"
            >
        </div>

        <div class="article-wrap">
            <div v-for="article in articles$" :key="article.url" class="article-item">
                <div class="header">
                    <div class="date-wrap">
                        <div class="date-wrap__top">
                            {{ article.frontmatter.month }}-{{ article.frontmatter.day }}
                        </div>
                        <div class="date-wrap__bootom">
                            {{ article.frontmatter.year }}
                        </div>
                    </div>
                    <div class="title">
                        {{ article.frontmatter.title }}
                    </div>
                </div>

                <div class="desc">
                    {{ article.frontmatter.desc || '这是一段非常难忘及记忆尤甚的时光，我时常缅怀过去、亦是致敬过去，生前何必久睡，死后自会长眠' }}
                </div>
                <button v-for="tag in article.frontmatter.tags" :key="tag" class="tag-item">
                    {{ tag }}
                </button>
                <a class="btn" :href="article.url">
                    阅读全文
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    min-height: 100vh;
    padding-top: 30px;
}

.tag-wrap {
    width: 780px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    &__left {
        width: 80px;
    }

    &__right {
        flex: 1;
    }
}

.tag-item {
    border-radius: 0.25rem;
    background-color: #9ca3af0d;
    padding: 0.125rem 0.5rem;
    font-size: .875rem;
    line-height: 1.25rem;
    margin-right: 10px;

    &.is-selected {
        color: var(--vp-c-brand);
    }

    &:hover {
        background-color: #9ca3af1a;
    }
}

.search-wrap {
    width: 780px;
    margin: 20px auto;
    padding: 6px 0;
    border-top: 1px dashed #dedede;
    border-bottom: 1px dashed #dedede;
    transition: border-color .3s ease;

    &.is-actived {
        border-color: var(--vp-c-brand);
    }

    > input {
        display: block;
        width: 100px;
    }
}

.article-wrap {
    width: 780px;
    margin: 0 auto;

    .article-item {
        width: 100%;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 4px;
        position: relative;
        border: 1px solid #dedede;

        .header {
            display: flex;
            align-items: center;

            .date-wrap {
                color: #fff;
                background: var(--vp-c-brand);
                padding: 6px;
                border-radius: 3px;
                font-size: 13px;
                line-height: 1;
                font-family: Georgia,sans-serif;
                margin-right: 10px;

                > div:first-child {
                    margin-bottom: 5px;
                }
            }
        }

        .title {
            font-size: 18px;
            font-weight: bold;
            flex: 1;
            overflow: hidden;
        }

        .desc {
            padding: 10px 0;
            line-height: 1.5;
            font-size: 14px;
            color: #999;
        }

        .date {
            font-size: 14px;
            color: #999;
        }

        .btn {
            display: block;
            position: absolute;
            right: 15px;
            bottom: 15px;
            background: var(--vp-c-brand);
            color: #fff;
            font-size: 14px;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
                border-color: var(--vp-button-brand-hover-border);
                color: var(--vp-button-brand-hover-text);
                background-color: var(--vp-button-brand-hover-bg);
            }
        }

        .tag-item {
            background-color: #9ca3af1a;
        }
    }
}
</style>
