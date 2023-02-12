import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// constants
import { NAV_MENU_ITEMS } from "../../constants/commonConstants";
// style
import { navbarStyles } from "./styles";

interface Props {}

const NavbarMenu = () => {
  return (
    <List>
      {NAV_MENU_ITEMS.map((item, index) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton>
            <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
            <ListItemText sx={navbarStyles.text} primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavbarMenu;
