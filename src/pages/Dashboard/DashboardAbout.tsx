import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

interface Props {}

const DashboardAbout = ({}: Props) => {
  return (
    <Box>
      <Typography variant="h3">About</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}></Grid>
      </Grid>
    </Box>
  );
};

export default DashboardAbout;
