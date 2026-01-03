import { Theme } from "@mui/material"
import type { DataGridComponents } from "@mui/x-data-grid/themeAugmentation"

export default function DataGrid(theme: Theme): DataGridComponents {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {
         // backgroundColor: theme.palette.primary.lighter
        }
      },
    },
  };
}
