import React, { useState } from "react";
import { Box, Container, Grid, Snackbar, Typography } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";

// constants
import dashboardStyles from "./styles/dashboardStyles";

interface Props {}

const DashboardContact = ({}: Props) => {
  return (
    <Box sx={dashboardStyles.section} id="dashboardContact">
      <Grid item xs={12}>
        <Typography variant="h3">Contact</Typography>
        <Typography variant="body1" sx={{ marginBottom: "15px" }}>
          Please follow or contact us!
        </Typography>
      </Grid>
    </Box>
  );
};

export default DashboardContact;
