import React from "react";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// redux
import { RootState } from "../../redux/store";
import { openDrawer } from "../../redux/slices/navigationSlice";
// constants
import { NAV_MENU_ITEMS } from "../../constants/navigationConstants";
// component
import CommonIconButton from "../common/CommonIconButton/CommonIconButton";
// hooks
import useAppNavigation from "../../hooks/useAppNavigation";
// asstes
import logoLight from "../../assets/images/logoLight.png";
import headerStyles from "./styles/headerStyle";

interface Props {}

const Header = ({}: Props) => {
  const appNavigate = useAppNavigation();
  const dispatch = useDispatch();

  const tabState = useSelector((state: RootState) => state.navigation.tabState);
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
          <Box sx={headerStyles.dropdown}>
            <CommonIconButton onClick={() => dispatch(openDrawer("left"))}>
              <MenuIcon />
            </CommonIconButton>
          </Box>

          <Box sx={headerStyles.contentContainer}>
            {/* Title / Logo */}
            <Box
              component="img"
              alt={"Logo"}
              src={logoLight}
              sx={headerStyles.logo}
              onClick={() => appNavigate("Home")}
            />

            {/* nav list */}
            <Box sx={headerStyles.listContainer}>
              {filteredNavMenu.map((item) => (
                <Button
                  key={item.id.toString()}
                  color={
                    tabState.activeTab === item.label ? "secondary" : "white"
                  }
                  onClick={() => appNavigate(item.label)}
                  sx={headerStyles.listItem}
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
