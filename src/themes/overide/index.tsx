import type { Components, Theme } from "@mui/material";
import DataGrid from "./DataGrid";
import ListItemButton from "./ListItemButton";

export default function ComponentsOverrides(theme: Theme): Components {
  return Object.assign(DataGrid(theme), ListItemButton(theme));
}
