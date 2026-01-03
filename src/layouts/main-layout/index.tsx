import { Outlet } from "react-router-dom";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import {
  AppBar,
  CssBaseline,
  Paper,
  Toolbar,
  useMediaQuery,
} from "@mui/material";

// project imports
//import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from "./Header";
// import Sidebar from './Sidebar';
// import Customization from '../Customization';
// import navigation from 'menu-items';
import { drawerWidth } from "../../types/constant";

// redux
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ActionSidebar } from "../../redux/action";

// assets
import Sidebar from "./Sidebar";
import { SidebarState } from "../../redux/reducers/sidebar";

// styles
const Main = styled("main", {
  shouldForwardProp: (prop: string) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  width: "100%",
  minHeight: "calc(100vh - 64px)",
  flexGrow: 1,
  padding: "20px",
  marginTop: "64px",
  marginRight: "20px",
  borderRadius: "8px 8px 0 0",
  backgroundColor: theme.palette.background.default,
  transition: theme.transitions.create(
    "margin",
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }
  ),
  [theme.breakpoints.up("md")]: {
    marginLeft: open ? 0 : -(drawerWidth - 20),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "20px",
    width: `calc(100% - ${drawerWidth}px)`,
    padding: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
    width: `calc(100% - ${drawerWidth}px)`,
    padding: "16px",
    marginRight: "10px",
  },
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const leftDrawerOpened: boolean = useAppSelector(
    (state: { sidebarReducer: SidebarState }) => state.sidebarReducer.opened
  );
  const dispatch = useAppDispatch();
  // Handle left drawer
  const handleLeftDrawerToggle = () => {
    dispatch<{ type: ActionSidebar; payload: boolean }>({
      type: ActionSidebar.SetMenu,
      payload: !leftDrawerOpened,
    });
  };

  return (
    <Paper sx={{ display: "flex" }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.paper,
          transition: leftDrawerOpened
            ? theme.transitions.create("width")
            : "none",
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar
        drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />

      {/* main content */}
      <Main open={leftDrawerOpened}>
        {/* breadcrumb */}
        {/* //<Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign /> */}
        <Outlet />
      </Main>
    </Paper>
  );
};

export default MainLayout;
