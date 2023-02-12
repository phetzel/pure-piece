import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
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
  const cartState = useSelector((state: RootState) => state.product.cart);
  const cartCount = cartState.length
    ? cartState.map((product) => product.count).reduce((a, b) => a + b)
    : 0;

  const headerStyles = {
    wrapper: {
      backgroundColor: "pallete.black",
    },
  };

  return (
    <AppBar color="black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* dropdown */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <CommonIconButton onClick={() => dispatch(openDrawer("left"))}>
              <MenuIcon />
            </CommonIconButton>
          </Box>

          {/* Title / Logo */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex" },
            }}
          >
            <Typography variant="h4" color="pallete.white">
              Logo
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                ml: 3,
              }}
            >
              {NAV_MENU_ITEMS.map((item) => (
                <Button color="white">{item.label}</Button>
              ))}
            </Box>
          </Box>

          {/* cart */}
          <Box sx={{ flexGrow: 0 }}>
            <CommonIconButton
              badgeContent={cartCount}
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
