import { SidebarConfigArray } from 'vuepress/config'

export function getgzSidebar (groupA): SidebarConfigArray {
    const sidebar: SidebarConfigArray = [
      {
        title: groupA,
        collapsable: false,
        children: [
          '',
          'wjly',
          'ysly'
        ]
      },
    ]
  
    return sidebar
  }

export function getGuideSidebar (groupA): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'commands',
        'gfq'
      ]
    },
  ]

  return sidebar
}
export function getBCGSidebar (groupA): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'faq',
        'tutorial'
      ]
    },
  ]

  return sidebar
}