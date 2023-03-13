import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import FadeIn from "react-fade-in";

import dashboardStyles from "./styles/dashboardStyles";
import logoDark from "../../assets/images/logoDark.png";
import highFive from "../../assets/images/high-five.png";
// hooks
import useAppNavigation from "../../hooks/useAppNavigation";

interface Props {
  isInitLoaded: boolean;
  splashRef: (node?: Element | null | undefined) => void;
}

const DashboardSplash = ({ isInitLoaded, splashRef }: Props) => {
  const appNavigate = useAppNavigation();

  return (
    <Box
      sx={dashboardStyles.splashOuterContainer}
      id="dashboardSplash"
      ref={splashRef}
    >
      <Box sx={dashboardStyles.splashInnerContainer}>
        {/* content */}
        {/* <Box> */}
        <Box sx={dashboardStyles.splashContentContainer}>
          <FadeIn delay={100} transitionDuration={1500} visible={isInitLoaded}>
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
        </Box>
        {/* </Box> */}

        {/* splash image */}
        <Box sx={dashboardStyles.splashImageContainer}>
          {/* <Box component="div" sx={dashboardStyles.splashImage} /> */}
          <Box
            component="img"
            alt={"Logo"}
            src={highFive}
            sx={dashboardStyles.splashImage}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardSplash;
