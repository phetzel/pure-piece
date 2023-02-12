import React, { useRef } from "react";
import { Box, Button, Container, Grid } from "@mui/material";

// components
import DashboardAbout from "./DashboardAbout";
import DashboardProducts from "./DashboardProducts";
import DashboardSplash from "./DashboardSplash";

import CommonCard from "../../components/common/CommonCard/CommonCard";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import ProductCard from "../../components/common/ProductCard/ProductCard";

interface Props {}

const Dashboard = ({}: Props) => {
  const splashRef = useRef<null | HTMLElement>(null);
  const productRef = useRef<null | HTMLElement>(null);
  const aboutRef = useRef<null | HTMLElement>(null);

  const handleScrollTo = (target: "splash" | "product" | "about") => {
    const targetIdObj = {
      splash: "#dashboardSplash",
      product: "#dashboardProduct",
      about: "#dashboardAbout",
    };

    const section = document.querySelector(targetIdObj[target]);
    if (section) {
      const scrollTop =
        section.getBoundingClientRect().top + window.pageYOffset + -75;

      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  };

  return (
    <Box>
      <DashboardSplash />
      <Button onClick={() => handleScrollTo("splash")}>Splash</Button>
      <Button onClick={() => handleScrollTo("product")}>Product</Button>
      <Button onClick={() => handleScrollTo("about")}>About</Button>
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
