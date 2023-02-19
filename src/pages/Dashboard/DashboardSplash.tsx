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
          backgroundColor: "#212121",
          height: "100vh",
        }}
      >
        <Paper
          sx={{
            backgroundColor: "#212121",
            color: "#fff",
            // mb: 4,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${splashBackground})`,
            backgroundAttachment: "fixed",

            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,

            zIndex: -5,
          }}
          id="dashboardSplash"
        >
          <Box
            sx={{
              borderTop: "100vh solid #212121",
              borderRight: "100vw solid transparent",
              position: "absolute",
              top: 0,
              zIndex: -4,
            }}
          />

          {/* <Box
            sx={{
              borderBottom: "80vh solid #fff",
              borderLeft: "100vw solid transparent",
              position: "absolute",
              bottom: -250,
              zIndex: -4,
            }}
          /> */}

          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
              paddingTop: "100px",
              left: 100,
            }}
          >
            <Typography variant="h4" color="primary">
              Human Grade Dog Food
            </Typography>
          </Box>
          {/* </Grid> */}
        </Paper>
      </Box>
    </Grid>
  );
};

export default DashboardSplash;
