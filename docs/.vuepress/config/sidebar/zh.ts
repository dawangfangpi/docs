import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getGuideSidebar,
  getgzSidebar,
  getBCGSidebar
} from './shared'

export const Sidebar4ZH: SidebarConfig4Multiple = {
  '/guide/': getGuideSidebar('教程'),
  '/ly/': getgzSidebar('协议'),
  '/bcg/': getBCGSidebar('BCG'),
}