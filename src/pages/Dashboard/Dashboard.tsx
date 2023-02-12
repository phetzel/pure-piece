import React from "react";
import { Box, Container, Grid } from "@mui/material";

// components
import DashboardAbout from "./DashboardAbout";
import DashboardProducts from "./DashboardProducts";
import DashboardSplash from "./DashboardSplash";

import CommonCard from "../../components/common/CommonCard/CommonCard";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import ProductCard from "../../components/common/ProductCard/ProductCard";

interface Props {}

const Dashboard = ({}: Props) => {
  return (
    <Box>
      <DashboardSplash />
      <GridWrapper>
        <Grid container rowSpacing={3}>
          <DashboardProducts />
          <DashboardAbout />
        </Grid>
      </GridWrapper>
    </Box>
  );
};

export default Dashboard;
