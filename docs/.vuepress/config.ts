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
            { text: 'Github', link: 'https://github.com/dawangfangpi/docs' },
        ],
        sidebar: Sidebar4ZH
    }
}))