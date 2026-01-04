import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  useEffect,
} from "react";
import { Link } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Icon, IconProps } from "@tabler/icons-react";

// project imports

// assets
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { ActionSidebar } from "../../../../../redux/action";
import { Pages } from "../../../../../menu-items/interface/page";

interface NavItemProps {
  item: Pages;
  level: number;
}

const NavItem = ({ item, level }: NavItemProps) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const sidebarStateOpen = useAppSelector(
    (state) => state.sidebarReducer.isOpen
  );
  const isSelected = sidebarStateOpen === item.id;

  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));

  const Icon = item.icon as ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & RefAttributes<Icon>
  >;
  const itemIcon = item?.icon ? (
    <Icon stroke={1.5} size="1.3rem" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: isSelected ? 8 : 6,
        height: isSelected ? 8 : 6,
      }}
      fontSize={level > 0 ? "inherit" : "medium"}
    />
  );

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: forwardRef<HTMLAnchorElement>((props, ref) => (
      <Link ref={ref} {...props} to={item.url || ""} target={itemTarget} />
    )),
  };

  const itemHandler = (id: string) => {
    dispatch<{ type: string; payload: string }>({
      type: ActionSidebar.MenuOpen,
      payload: id,
    });
    if (matchesSM)
      dispatch<{ type: ActionSidebar; payload: boolean }>({
        type: ActionSidebar.SetMenu,
        payload: true,
      });
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split("/")
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch<{ type: string; payload: string }>({
        type: ActionSidebar.MenuOpen,
        payload: item.id,
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: 30,
        mb: 0.5,
        alignItems: "flex-start",
        backgroundColor: level > 1 ? "transparent !important" : "inherit",
        py: level > 1 ? 0.5 : 1,
        pl: `${level * 24}px`,
      }}
      selected={isSelected}
      onClick={() => itemHandler(item.id)}
    >
      <ListItemIcon sx={{ my: "auto", minWidth: !item?.icon ? 18 : 36 }}>
        {itemIcon}
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography variant={isSelected ? "h5" : "body1"} color="inherit">
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography
              sx={{
                fontSize: "0.6875rem",
                fontWeight: 500,
                textTransform: "capitalize",
              }}
              variant="caption"
              display="block"
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />
    </ListItemButton>
  );
};

export default NavItem;
