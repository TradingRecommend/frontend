import { ForwardRefExoticComponent, RefAttributes } from "react";
import { MenuType } from "../../types/enum";

import {
    Icon,
    IconProps,
  } from "@tabler/icons-react";

export interface Pages {
    id: string;
    title?: string;
    caption?: string;
    type?: MenuType;
    breadcrumbs?: boolean;
    icon?: ForwardRefExoticComponent<
      Omit<IconProps, "ref"> & RefAttributes<Icon>
    >;
    url?: string;
    target?: boolean;
    disabled?: boolean;
    external?: boolean;
    children?: Array<Pages>;
  }