import type { ReactElement } from "react";
import { useRoutes } from "react-router-dom";

// project import
import MainRoutes from "./MainRoutes";
import AuthRoutes from "./AuthRoutes";
// ==============================|| ROUTING RENDER ||============================== //

export default function Routes(): ReactElement | null {
  return useRoutes([MainRoutes, AuthRoutes]);
}
