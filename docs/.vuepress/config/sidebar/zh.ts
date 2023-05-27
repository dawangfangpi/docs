import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getGuideSidebar,
  getgzSidebar
} from './shared'

export const Sidebar4ZH: SidebarConfig4Multiple = {
  '/guide/': getGuideSidebar('指南'),
  '/ly/': getgzSidebar('规则'),
}