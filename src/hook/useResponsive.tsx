import { Breakpoint, Theme, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function useResponsive(
  query: string,
  key: Breakpoint,
  start?: Breakpoint,
  end?: Breakpoint
): boolean | null {
  const theme: Theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(start || 0, end || 0)
  );

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

  switch (query) {
    case "up":
      return mediaUp;
    case "down":
      return mediaDown;
    case "between":
      return mediaBetween;
    case "only":
      return mediaOnly;
    default:
      return null;
  }
}
