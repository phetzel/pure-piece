import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, Grid } from "@mui/material";

// redux
import { RootState } from "../../redux/store";
import { toggleDashboardScroll } from "../../redux/slices/commonSlice";
// types
import { TabType } from "../../types/commonTypes";
// components
import DashboardAbout from "./DashboardAbout";
import DashboardContact from "./DashboardContact";
import DashboardProducts from "./DashboardProducts";
import DashboardSplash from "./DashboardSplash";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";

interface Props {}

const Dashboard = ({}: Props) => {
  const dispatch = useDispatch();
  const tabState = useSelector((state: RootState) => state.common.tabState);
  const dashboardState = useSelector(
    (state: RootState) => state.common.dashboardState
  );

  useEffect(() => {
    dashboardState.isScrollActive && handleScrollTo(tabState.activeTab);
    dispatch(toggleDashboardScroll(false));
  }, [dashboardState.isScrollActive]);

  const handleScrollTo = (target: TabType) => {
    const targetIdObj = {
      Home: "#dashboardSplash",
      Products: "#dashboardProduct",
      About: "#dashboardAbout",
      Contact: "#dashboardContact",
    };

    const section = document.querySelector(targetIdObj[target]);
    if (section) {
      const scrollTop =
        section.getBoundingClientRect().top + window.pageYOffset - 75;

      window.scrollTo({ top: scrollTop, behavior: "smooth" });
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
