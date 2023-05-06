module.exports = {
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