import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import splashBackground from "../../assets/images/dog.jpeg";
import treats2 from "../../assets/images/treats.png";

interface Props {}

const DashboardSplash = ({}: Props) => {
  const splashStyle = {
    backgroundImage: splashBackground,
  };

  return (
    <Grid container>
      <Box
        sx={{
          height: "100vh",
        }}
      >
        <Paper
          sx={{
            backgroundColor: "grey.800",
            color: "#fff",
            mb: 4,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${splashBackground})`,
            // backgroundImage: `url(${treats2})`,

            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
          id="dashboardSplash"
        >
          {/* Increase the priority of the hero background image */}
          {
            <img
              style={{ display: "none" }}
              src={splashBackground}
              // src={treats2}
              alt={"splash image"}
            />
          }

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                height: "100vh",
              }}
            >
              <Typography variant="h4" color="pallete.white">
                Logo
              </Typography>
              <Typography variant="h2" color="primary">
                Pure Piece Treats
              </Typography>
            </Box>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  );
};

export default DashboardSplash;
