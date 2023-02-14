import React, { useState } from "react";
import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// redux
import { RootState } from "../../redux/store";
import { closeDrawer } from "../../redux/slices/commonSlice";

// components
import NavbarMenu from "./NavbarMenu";
import NavbarCart from "./NavbarCart";

// styles
import { navbarStyles } from "./styles";

export interface Props {}

const Navbar = ({}: Props) => {
  const navState = useSelector((state: RootState) => state.common.drawerState);
  const dispatch = useDispatch();

  const handleClose = (side: "left" | "right") => {
    dispatch(closeDrawer(side));
  };
  return (
    <div>
      {(["left", "right"] as const).map((item) => (
        <React.Fragment key={item}>
          <Drawer
            anchor={item}
            open={navState[item]}
            onClose={() => dispatch(closeDrawer(item))}
            sx={navbarStyles.drawer}
          >
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                paddingTop: "50px",
                paddingBottom: "50Px",
              }}
            >
              <Typography variant="h4" color="common.black">
                Logo
              </Typography>
              <Typography variant="body1">Pure Piece</Typography>
            </Box>
            <Divider />

            {item === "left" ? (
              <NavbarMenu handleClose={() => dispatch(closeDrawer("left"))} />
            ) : (
              <NavbarCart handleClose={() => dispatch(closeDrawer("right"))} />
            )}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Navbar;
