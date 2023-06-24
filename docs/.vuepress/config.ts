import { defineConfig } from 'vuepress/config'
import {Sidebar4ZH} from './config/index'

export default defineConfig(ctx => ({
    title: 'Monday 文档',
    description: '文档',
    editLinks: true,
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
              text: '指南',
              link: '/guide/'
            },
            {
              text: '规则',
              link: '/ly/'
            },
        ],
        repo: 'dawangfangpi/docs',
        repoLabel: 'Github',
        docsRepo: 'dawangfangpi/docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        sidebar: Sidebar4ZH
    }
}))