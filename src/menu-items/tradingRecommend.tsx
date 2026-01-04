import { IconDashboard } from "@tabler/icons-react"
import { MenuType } from "../types/enum"

const icons = { IconDashboard }

const tradingRecommend = {
  id: "trading-recommend",
  title: "Gợi ý đầu tư",
  type: MenuType.Group,
  children: [
    {
      id: "trading-recommend-company",
      title: "Gợi ý đầu tư doanh nghiệp",
      type: MenuType.Item,
      url: "/analystic/trading-recommend-company",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
  ],
}

export default tradingRecommend
