import VitepressTheme   from 'vitepress/theme'
import PageGuide        from '../components/PageGuide.vue'
import PageArchives     from '../components/PageArchives.vue'

export default {
    ...VitepressTheme,
    enhanceApp({ app }) {
        app.component('PageGuide'   , PageGuide)
        app.component('PageArchives', PageArchives)
    },
}
