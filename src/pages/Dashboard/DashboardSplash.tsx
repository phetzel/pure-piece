import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import FadeIn from "react-fade-in";

import dashboardStyles from "./styles/dashboardStyles";
import logoDark from "../../assets/images/logoDark.png";
// hooks
import useAppNavigation from "../../hooks/useAppNavigation";

interface Props {}

const DashboardSplash = ({}: Props) => {
  const appNavigate = useAppNavigation();

  return (
    <Box sx={dashboardStyles.splashOuterContainer} id="dashboardSplash">
      <Grid container sx={dashboardStyles.splashInnerContainer}>
        {/* content */}
        <Grid item xs={12} md={6}>
          <FadeIn delay={100} transitionDuration={1000}>
            <Box sx={dashboardStyles.splashContent}>
              <Box
                component="img"
                alt={"Logo"}
                src={logoDark}
                sx={dashboardStyles.splashContentLogo}
              />
              <Typography variant="h5" color="black">
                Human Grade Dog Food
              </Typography>
              <Button
                variant="contained"
                onClick={() => appNavigate("Products")}
              >
                Shop Now
              </Button>
            </Box>
          </FadeIn>
        </Grid>

        {/* splash image */}
        <Grid item xs={12} md={6} sx={dashboardStyles.splashImageContainer}>
          <Box component="div" sx={dashboardStyles.splashImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardSplash;
