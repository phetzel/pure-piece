import React, { cloneElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// types
import { TabType } from "../../types/navigationTypes";
// redux
import { RootState } from "../../redux/store";
import { closeDrawer } from "../../redux/slices/navigationSlice";
// constants
import { NAV_MENU_ITEMS } from "../../constants/navigationConstants";
// style
import { navbarStyles } from "./styles";
// hooks
import useAppNavigation from "../../hooks/useAppNavigation";

interface Props {
  handleClose: () => void;
}

const NavbarMenu = ({ handleClose }: Props) => {
  const dispatch = useDispatch();
  const appNavigate = useAppNavigation();
  const tabState = useSelector((state: RootState) => state.navigation.tabState);

  const handleNavigate = (target: TabType) => {
    appNavigate(target);
    dispatch(closeDrawer("left"));
  };

  return (
    <List>
      {NAV_MENU_ITEMS.map((item) => {
        return (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => handleNavigate(item.label)}>
              <ListItemIcon
                color={
                  tabState.activeTab === item.label ? "primary" : "inheirit"
                }
                sx={navbarStyles.icons}
              >
                {cloneElement(item.icon, {
                  color:
                    tabState.activeTab === item.label ? "primary" : "inheirit",
                })}
              </ListItemIcon>
              <ListItemText
                sx={navbarStyles.text}
                disableTypography
                primary={
                  <Typography
                    variant="h6"
                    color={
                      tabState.activeTab === item.label ? "primary" : "inheirit"
                    }
                  >
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default NavbarMenu;
