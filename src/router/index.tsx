import type { ReactElement } from "react";
import { useRoutes } from "react-router-dom";

// project import
import MainRoutes from "./mainRoutes";
import AuthRoutes from "./authRoutes";
// ==============================|| ROUTING RENDER ||============================== //

export default function Routes(): ReactElement | null {
  return useRoutes([MainRoutes, AuthRoutes]);
}
