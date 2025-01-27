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
        'gfq'
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
/*export function getBCGSidebar (groupA): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'faq',
        'tutorial',
        'mod'
      ]
    },
  ]

  return sidebar
}*/