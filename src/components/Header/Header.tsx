import React, { useState } from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// redux
import { RootState } from "../../redux/store";
import { openDrawer } from "../../redux/slices/commonSlice";
// types
import { ProductType } from "../../types/productTypes";
// constants
import { NAV_MENU_ITEMS } from "../../constants/commonConstants";
// component
import CommonIconButton from "../common/CommonIconButton/CommonIconButton";

// types

type Anchor = "left" | "right";
interface Props {}

const Header = ({}: Props) => {
  const dispatch = useDispatch();

  const headerStyles = {
    wrapper: {
      backgroundColor: "pallete.black",
    },
  };

  return (
    <AppBar color="black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Box
            sx={{
              display: { xs: "flex" },
              flexGrow: 1,
              alignItems: "center",
              mr: 1,
            }}
          > */}
          {/* dropdown */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <CommonIconButton onClick={() => dispatch(openDrawer("left"))}>
              <MenuIcon />
            </CommonIconButton>
          </Box>

          {/* Title / Logo */}
          <Typography
            sx={{ flexGrow: 1, mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            Logo
          </Typography>
          {/* </Box> */}

          {/* cart */}
          <Box sx={{ flexGrow: 0 }}>
            <CommonIconButton
              badgeContent={3}
              onClick={() => dispatch(openDrawer("right"))}
            >
              <ShoppingCartIcon />
            </CommonIconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
