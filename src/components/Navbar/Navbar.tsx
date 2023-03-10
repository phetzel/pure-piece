import React from "react";
import { Box, Divider, Drawer, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// redux
import { RootState } from "../../redux/store";
import { closeDrawer } from "../../redux/slices/navigationSlice";

// components
import NavbarMenu from "./NavbarMenu";
import NavbarCart from "./NavbarCart";

// styles
import { navbarStyles } from "./styles";
import logoDark from "../../assets/images/logoDark.png";

export interface Props {}

const Navbar = ({}: Props) => {
  const navState = useSelector(
    (state: RootState) => state.navigation.drawerState
  );
  const dispatch = useDispatch();

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
              }}
            >
              <Box
                component="img"
                alt={"Logo"}
                src={logoDark}
                sx={{
                  objectFit: "cover",
                  height: "90px",
                  maxWidth: "100%",
                  cursor: "pointer",
                }}
              />
              <Typography sx={{ marginTop: "20px" }} color="error" variant="h6">
                Human Grade Dog Food
              </Typography>
            </Box>

            <Divider sx={{ marginTop: "25px", marginBottom: "25px" }} />

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
