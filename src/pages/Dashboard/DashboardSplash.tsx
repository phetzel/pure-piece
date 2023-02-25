import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import splashBackground from "../../assets/images/dog.jpeg";
import logoDark from "../../assets/images/logoDark.png";
import highFive from "../../assets/images/highFive.png";
// hooks
import useAppNavigation from "../../hooks/useAppNavigation";

interface Props {}

const DashboardSplash = ({}: Props) => {
  const dispatch = useDispatch();
  const appNavigate = useAppNavigation();

  const handleShop = () => {};

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        zIndex: -5,
      }}
      id="dashboardSplash"
    >
      <Grid
        container
        sx={{
          height: "100vh",
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              // height: "100vh",
              marginTop: "130px",
            }}
            color="white"
          >
            <Box
              component="img"
              alt={"Logo"}
              src={logoDark}
              sx={{
                objectFit: "cover",
                height: "200px",
                maxWidth: "100%",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Typography variant="h5" color="black">
              Human Grade Dog Food
            </Typography>
            <Button variant="contained" onClick={() => appNavigate("Products")}>
              Shop Now
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            justifyContent: "flex-end",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${highFive})`,
              height: "100%",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardSplash;
