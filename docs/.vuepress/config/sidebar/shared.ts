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

export function getGuideSidebar (groupA,groupB): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'gfq',
        'help'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'bcg',
        'faq',
        'tutorial',
        'mod'
      ]
    },
  ]

  return sidebar
}