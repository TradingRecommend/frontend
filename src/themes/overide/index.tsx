import type { Components, Theme } from "@mui/material";
import DataGrid from "./dataGrid";
import ListItemButton from "./listItemButton";

export default function ComponentsOverrides(theme: Theme): Components {
  return Object.assign(DataGrid(theme), ListItemButton(theme));
}
