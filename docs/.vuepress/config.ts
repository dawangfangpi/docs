import { defineConfig } from 'vuepress/config'
import {Sidebar4ZH} from './config/index'

export default defineConfig(ctx => ({
    title: 'Monday 帮助文档',
    description: '希望能帮到你~',
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
        editLinkText: '在 GitHub 上编辑此页',
        sidebar: Sidebar4ZH
    }
}))