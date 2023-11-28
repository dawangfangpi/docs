import { defineConfig } from 'vuepress/config'
import {Sidebar4ZH} from './config/index'

export default defineConfig(ctx => ({
    title: 'Monday 帮助文档',
    description: '文档',
    editLinks: true,
    algolia: {
      apiKey: '328e575a3431fb48ea09026db382e3ee',
      indexName: 'monday-ovo-eu'
      appId: 'VXFWRUIH25',
    },
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
        lastUpdated: '上次更新',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        sidebar: Sidebar4ZH,
    }
}))