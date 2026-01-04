import { MouseEventHandler } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, ButtonBase, Typography } from "@mui/material";

// project imports
//import LogoSection from '../LogoSection';
//import SearchSection from "./SearchSection";
//import ProfileSection from './ProfileSection';
import NotificationSection from "./notificationSection";

// assets
import { IconMenu2 } from "@tabler/icons-react";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

interface HeaderProps {
  handleLeftDrawerToggle: MouseEventHandler<HTMLDivElement> | undefined;
}

const Header = ({ handleLeftDrawerToggle }: HeaderProps) => {
  const theme = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 330,
          display: "flex",
          alignItems: "center",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box
          component="span"
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          <img src={"/favicon.ico"} alt="" style={{ width: 45, height: 45 }} />
          <Typography variant="h4" color={"primary.main"} ml={0.5}>
            Trading Recommend
          </Typography>
        </Box>
        <ButtonBase sx={{ borderRadius: "8px", overflow: "hidden" }}>
          <Avatar
            variant="rounded"
            sx={{
              cursor: "pointer",
              borderRadius: "8px",
              width: "34px",
              height: "34px",
              fontSize: "1.2rem",
              transition: "all .2s ease-in-out",
              background: theme.palette.secondary.lighter,
              color: theme.palette.secondary.dark,
              "&:hover": {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.lighter,
              },
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      {/* header search */}
      {/* <SearchSection /> */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      <NotificationSection />
      {/* <ProfileSection /> */}
    </>
  );
};
export default Header;
