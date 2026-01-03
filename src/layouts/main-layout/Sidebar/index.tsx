// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Chip,
  Drawer,
  ModalProps,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";
import { BrowserView, MobileView } from "react-device-detect";

// project imports
import MenuList from "./MenuList";
import MenuCard from "./MenuCard";
import { drawerWidth } from "../../../types/constant";

// ==============================|| SIDEBAR DRAWER ||============================== //

interface SidebarProps {
  drawerOpen: boolean;
  drawerToggle: ModalProps["onClose"];
}

const Sidebar = ({ drawerOpen, drawerToggle }: SidebarProps) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const drawer = (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box sx={{ display: "flex", p: 2, mx: "auto", alignItems: "center" }}>
          <img src="/favicon.ico" alt="" style={{ width: 40, height: 40 }} />
          <Typography variant="h4" color={"warning.dark"} ml={0.5}>
            TradingRecommend
          </Typography>
        </Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar
          component="div"
          style={{
            height: !matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 64px)",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <MenuList />
          <MenuCard />
          <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
            <Chip
              label={process.env.REACT_APP_VERSION}
              disabled
              size="small"
              sx={{ cursor: "pointer" }}
            />
          </Stack>
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
          <MenuCard />
          <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
            <Chip
              label={process.env.REACT_APP_VERSION}
              disabled
              size="small"
              sx={{ cursor: "pointer" }}
            />
          </Stack>
        </Box>
      </MobileView>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : "auto" }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            overflow: "hidden",
            width: drawerWidth,
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "64px",
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
