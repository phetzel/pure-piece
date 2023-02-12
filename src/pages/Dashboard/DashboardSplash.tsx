import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import splashBackground from "../../assets/images/dog.jpeg";

interface Props {}

const DashboardSplash = ({}: Props) => {
  const splashStyle = {
    backgroundImage: splashBackground,
  };

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${splashBackground})`,
        height: "100vh",
        // filter: "blur(1px)",
        // "-webkit-filter": "blur(1px)",
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={splashBackground}
          alt={"splash image"}
        />
      }
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      /> */}
      <Grid container>
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
      </Grid>
    </Paper>
  );

  /* Increase the priority of the hero background image
  {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}



        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="h5" color="inherit" paragraph>
          {post.description}
        </Typography>
        <Link variant="subtitle1" href="#">
          {post.linkText}
        </Link>
      </Box>
    </Grid>
  </Grid>
</Paper> */
};

export default DashboardSplash;
