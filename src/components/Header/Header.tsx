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
// constants
import { NAV_MENU_ITEMS } from "../../constants/commonConstants";
// component
import CommonIconButton from "../common/CommonIconButton/CommonIconButton";
// hooks
import useAppNavigation from "../../hooks/useAppNavigation";
// asstes
import logoLight from "../../assets/images/logoLight.png";

interface Props {}

const Header = ({}: Props) => {
  const appNavigate = useAppNavigation();
  const dispatch = useDispatch();

  const tabState = useSelector((state: RootState) => state.common.tabState);
  const cartState = useSelector((state: RootState) => state.product.cartState);
  const cartCount = cartState.length
    ? cartState.map((product) => product.count).reduce((a, b) => a + b)
    : 0;

  const filteredNavMenu = NAV_MENU_ITEMS.filter(
    (menuItem) => menuItem.label !== "Home"
  );

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
            <Box
              component="img"
              alt={"Logo"}
              src={logoLight}
              sx={{
                objectFit: "cover",
                height: "60px",
                maxWidth: "100%",
                marginTop: "10px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              onClick={() => appNavigate("Home")}
            />

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                ml: 3,
              }}
            >
              {filteredNavMenu.map((item) => (
                <Button
                  key={item.id.toString()}
                  color={
                    tabState.activeTab === item.label ? "primary" : "white"
                  }
                  onClick={() => appNavigate(item.label)}
                >
                  {item.label}
                </Button>
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
