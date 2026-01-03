/*************************************************************************
 * Source Name : home.tsx
 * Description :
 * Created By  : NamVH
 * Date        : 11/05/2024
 *************************************************************************/

import { IconDashboard } from "@tabler/icons-react"
import { MenuType } from "../types/enum"

const icons = { IconDashboard }

const systemMonitor = {
  id: "system-monitor",
  title: "System Monitor",
  type: MenuType.Group,
  children: [
    {
      id: "system-redirect",
      title: "System Redirect",
      type: MenuType.Item,
      url: "/system-monitor/system-redirect",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
  ],
}

export default systemMonitor
