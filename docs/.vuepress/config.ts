import { defineConfig } from 'vuepress/config'
import {Sidebar4ZH} from './config/index'

export default defineConfig(ctx => ({
    title: 'Monday 帮助文档',
    description: 'Monday官方服务器文档😋',
    editLinks: true,
    themeConfig: {
      plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp, lang) => {
              return new Date(timestamp).toLocaleDateString();
            }
          }
        ],
        [
          'sitemap',
          {
            hostname: 'https://docs.monday-ovo.eu.org'
          }
        ]
      ],
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
        algolia: {
            apiKey: '328e575a3431fb48ea09026db382e3ee',
            indexName: 'monday-ovo-eu',
            appId: 'VXFWRUIH25',
    },
        repo: 'dawangfangpi/docs',
        repoLabel: 'Github',
        docsRepo: 'dawangfangpi/docs',
        lastUpdated: '上次更新',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        sidebar: Sidebar4ZH,
        label: '贡献者',
    }
}))