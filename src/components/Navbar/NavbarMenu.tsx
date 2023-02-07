import React from "react";
import Box from "@mui/material/List";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// constants
import { NAV_MENU_ITEMS } from "../../constants/commonConstants";
// style
import { navbarStyles } from "./styles";

interface Props {}

const NavbarMenu = () => {
  return (
    <Box>
      <Divider />
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
    </Box>
  );
};

export default NavbarMenu;
