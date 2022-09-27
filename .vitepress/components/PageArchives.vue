<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
const { theme } = useData()
const group$ = computed(() => theme.value.metadata.year_articles)
</script>

<template>
    <div class="container">
        <div v-for="group in group$" :key="group.year" class="group-wrap">
            <div class="group-wrap__year">
                {{ group.year }}
            </div>
            <ul>
                <li v-for="article in group.articles" :key="article.url">
                    <a class="article-item" :href="article.url">
                        <span>{{ article.frontmatter.title }}</span>
                        <span class="date">{{ article.frontmatter.month }}-{{ article.frontmatter.day }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 780px;
    margin: 0 auto;
    padding: 30px 0;

    .group-wrap {
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px dashed #999;

        &__year {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
            font-family: Georgia,sans-serif;
        }
    }

    .article-item {
        position: relative;
        display: flex;
        justify-content: space-between;
        line-height: 36px;
        width: 100%;
        padding: 0 10px 0 20px;
        transition: color .3s ease;

        &::before {
            content: '';
            position: absolute;
            left: 5px;
            top: 50%;
            transform: translateY(-50%);
            width: 5px;
            height: 5px;
            border-radius: 50%;
            transition: background .3s ease;
            background: #666;
        }

        .date {
            font-family: Georgia,sans-serif;
        }

        &:hover {
            color: var(--vp-c-brand);
            &::before {
                background: var(--vp-c-brand);
            }
        }
    }
}
</style>
