import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// types
import { TabType } from "../../types/commonTypes";
// redux
import { RootState } from "../../redux/store";
import { closeDrawer } from "../../redux/slices/commonSlice";
// constants
import { NAV_MENU_ITEMS } from "../../constants/commonConstants";
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
  const tabState = useSelector((state: RootState) => state.common.tabState);

  const handleNavigate = (target: TabType) => {
    appNavigate(target);
    dispatch(closeDrawer("left"));
  };

  return (
    <List>
      {NAV_MENU_ITEMS.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton onClick={() => handleNavigate(item.label)}>
            <ListItemIcon
              color={tabState.activeTab === item.label ? "primary" : "inheirit"}
              sx={navbarStyles.icons}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText sx={navbarStyles.text} primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavbarMenu;
