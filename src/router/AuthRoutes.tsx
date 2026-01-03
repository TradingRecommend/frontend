import React, { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import Loadable from "../components/third-party/Loadable";

// render - dashboard
const LoginPage: React.FC = Loadable(
  lazy(
    async () =>
      await import("../pages/authentication/login").then(
        ({ default: LoginDefault }) => ({ default: LoginDefault })
      )
  )
);

const AuthRoutes: RouteObject = {
  path: "/login",
  element: <LoginPage />,
};

export default AuthRoutes;
