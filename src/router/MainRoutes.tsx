import React, { lazy } from "react"
import type { RouteObject } from "react-router-dom"
import Loadable from "../components/third-party/Loadable"

// project imports
import MainLayout from "../layouts/main-layout"

// render - dashboard
const DashboardDefault: React.FC = Loadable(
  lazy(
    async () =>
      await import("../pages/dashboard").then(
        ({ default: DashboardDefault }) => ({ default: DashboardDefault })
      )
  )
)

// render - capitalPlanningPage
const CapitalPlanningPage: React.FC = Loadable(
  lazy(
    async () =>
      await import("../pages/capital-planning").then(
        ({ default: CapitalPlanning }) => ({ default: CapitalPlanning })
      )
  )
)

// render - systemRedirect
const SystemRedirectDefault: React.FC = Loadable(
  lazy(
    async () =>
      await import("../pages/system-monitor/system-redirect/index").then(
        ({ default: SystemRedirectDefault }) => ({
          default: SystemRedirectDefault,
        })
      )
  )
)

const MainRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "system-monitor",
      children: [
        {
          path: "system-redirect",
          element: <SystemRedirectDefault />,
        },
      ],
    },
    {
      path: "dashboard",
      index: true,
      element: <DashboardDefault />,
    },
    {
      path: "contruction",
      children: [
        {
          path: "prepare-permises",
          element: <div />,
        },
        {
          path: "compettive-exam",
          element: <div />,
        },
        {
          path: "investment-project",
          element: <div />,
        },
        {
          path: "technical-design",
          element: <div />,
        },
        {
          path: "work-estimate",
          element: <div />,
        },
        {
          path: "bidding-schedule",
          element: <div />,
        },
        {
          path: "bidding-additional",
          element: <div />,
        },
        {
          path: "inviting-bidding",
          element: <div />,
        },
        {
          path: "bidding-result",
          element: <div />,
        },
        {
          path: "contract",
          element: <div />,
        },
        {
          path: "work-beginning",
          element: <div />,
        },
        {
          path: "addtional",
          element: <div />,
        },
        {
          path: "balance",
          element: <div />,
        },
      ],
    },
    {
      path: "progress",
      children: [
        {
          path: "work",
          element: <div />,
        },
        {
          path: "progress-management",
          element: <div />,
        },
      ],
    },
    {
      path: "/capital-planning",
      element: <CapitalPlanningPage />,
    },
    {
      path: "/colors",
      element: <div />,
    },
  ],
}

export default MainRoutes
