import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { Icon, IconProps } from "@tabler/icons-react";
import type { PhaseWorkType } from "./enum";

export interface PhaseWorkDetail {
  type: PhaseWorkType;
  label: string;
  icon: ForwardRefExoticComponent<Omit<IconProps, "ref"> & RefAttributes<Icon>>;
}

export interface PhaseWork {
  prepare: PhaseWorkDetail;
  invest: PhaseWorkDetail;
  finish: PhaseWorkDetail;
}

export interface IAuthenStoraged {
  accessToken: string;
  refreshToken: string;
}
