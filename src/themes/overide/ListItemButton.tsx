import { ListItemComponentsPropsOverrides, Theme } from "@mui/material";

export default function ListItemButton(
  theme: Theme
): ListItemComponentsPropsOverrides {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[800],
          paddingTop: "8px",
          paddingBottom: "8px",
          "&.Mui-selected": {
            color: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.lighter,
            "&:hover": {
              backgroundColor: theme.palette.primary.lighter,
            },
            "& .MuiListItemIcon-root": {
              color: theme.palette.primary.light,
            },
          },
          "&:hover": {
            backgroundColor: theme.palette.primary.lighter,
            color: theme.palette.primary.light,
            "& .MuiListItemIcon-root": {
              color: theme.palette.primary.light,
            },
          },
        },
      },
    },
  };
}
