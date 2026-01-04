import { IconDashboard } from "@tabler/icons-react"
import { MenuType } from "../types/enum"

const icons = { IconDashboard }

const analystic = {
  id: "analystic",
  title: "Phân tích đầu tư",
  type: MenuType.Group,
  children: [
    {
      id: "company-analystic",
      title: "Phân tích doanh nghiệp",
      type: MenuType.Item,
      url: "/analystic/company-analystic",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
  ],
}

export default analystic
