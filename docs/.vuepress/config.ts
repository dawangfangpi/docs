import { defineConfig } from 'vuepress/config'
import {Sidebar4ZH} from './config/index'

export default defineConfig(ctx => ({
head: [
    [
      "script",
      {
        "data-ad-client": "ca-pub-1049233927634968",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ]
  ]
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