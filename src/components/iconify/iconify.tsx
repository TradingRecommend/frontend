import { Icon, IconifyIcon } from "@iconify/react";
import { Box, SxProps, Theme } from "@mui/material";

interface IconifyProps {
  icon: IconifyIcon | string;
  sx?: SxProps<Theme>;
}

export default function Iconify({ icon, sx }: IconifyProps) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} />;
}
