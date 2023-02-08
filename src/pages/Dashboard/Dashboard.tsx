import React from "react";
import { Box, Container } from "@mui/material";

// components
import DashboardAbout from "./DashboardAbout";
import DashboardProducts from "./DashboardProducts";
import CommonCard from "../../components/common/CommonCard/CommonCard";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import ProductCard from "../../components/common/ProductCard/ProductCard";

interface Props {}

const Dashboard = ({}: Props) => {
  return (
    <GridWrapper>
      <Box>
        <DashboardProducts />
        <DashboardAbout />
      </Box>
    </GridWrapper>
  );
};

export default Dashboard;
