module.exports = {
    title: 'Monday 文档',
    description: '文档',
    themeConfig: {
      plugins: {
        '@vssue/vuepress-plugin-vssue': {
          // 设置 `platform` 而不是 `api`
          platform: 'github-v4',
    
          // 其他的 Vssue 配置
          owner: 'OWNER_OF_REPO',
          repo: 'NAME_OF_REPO',
          clientId: '3099e1787c068d641c7c',
          clientSecret: '2c614fe6e4bb1df984ea168529d62eda461d1b16',
        },
      },
        nav: [
            { text: '首页', link: '/' },
            {
                text: '指南',
                link: '/guide/'
              },
            { 
                text: '链接', 
                items: [
                    { text: 'Github', link: 'https://github.com/dawangfangpi/docs' },
                    { text: '官网', link: 'https://www.monday-ovo.top' }
                ]
            }
        ],
        sidebar: [
            {
              title: "指南",
              path: '/guide/',
              collapsable: false, // 不折叠
              children: [
                { title: "介绍", path: "/guide/" },
                { title: "基本配置", path: "/guide/basic-config.md" },
              ],
            }
          ]
    }
}