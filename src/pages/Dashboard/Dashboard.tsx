import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, Grid } from "@mui/material";

// redux
import { RootState } from "../../redux/store";
import { toggleDashboardScroll } from "../../redux/slices/navigationSlice";
// types
import { TabType, LocationType } from "../../types/navigationTypes";
// components
import DashboardAbout from "./DashboardAbout";
import DashboardContact from "./DashboardContact";
import DashboardProducts from "./DashboardProducts";
import DashboardSplash from "./DashboardSplash";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";

interface Props {}

const Dashboard = ({}: Props) => {
  const dispatch = useDispatch();
  const tabState = useSelector((state: RootState) => state.navigation.tabState);
  const dashboardState = useSelector(
    (state: RootState) => state.navigation.dashboardState
  );

  useEffect(() => {
    dashboardState.isScrollActive &&
      tabState.activeTab &&
      handleScrollTo(tabState.activeTab);
    dispatch(toggleDashboardScroll(false));
  }, [dashboardState.isScrollActive]);

  const handleScrollTo = (target: LocationType) => {
    const targetIdObj = {
      Home: "#dashboardSplash",
      Products: "#dashboardProduct",
      About: "#dashboardAbout",
      Contact: "#dashboardContact",
      Checkout: "#checkoutPage",
      Admin: "#adminPage",
    };

    if (targetIdObj[target]) {
      const section = document.querySelector(targetIdObj[target]);
      if (section) {
        const scrollTop =
          section.getBoundingClientRect().top + window.pageYOffset - 75;

        window.scrollTo({ top: scrollTop, behavior: "smooth" });
      }
    }
  };

  return (
    <GridWrapper>
      <Grid container>
        <DashboardSplash />
        <DashboardProducts />
        <DashboardAbout />
        <DashboardContact />
      </Grid>
    </GridWrapper>
  );
};

export default Dashboard;
