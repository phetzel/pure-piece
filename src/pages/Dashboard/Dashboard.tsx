import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";

// redux
import { RootState } from "../../redux/store";
import { toggleDashboardScroll } from "../../redux/slices/navigationSlice";
// types
import { LocationType } from "../../types/navigationTypes";
// components
import DashboardAbout from "./DashboardAbout";
import DashboardContact from "./DashboardContact";
import DashboardProducts from "./DashboardProducts";
import DashboardSplash from "./DashboardSplash";
import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";

interface Props {}

const Dashboard = ({}: Props) => {
  const dispatch = useDispatch();
  const tabState = useSelector((state: RootState) => state.navigation.tabState);
  const scrollState = useSelector(
    (state: RootState) => state.navigation.scrollState
  );

  // navigation scrolling
  useEffect(() => {
    scrollState.isScrollActive &&
      tabState.activeTab &&
      handleScrollTo(tabState.activeTab);
    dispatch(toggleDashboardScroll(false));
  }, [scrollState.isScrollActive]);

  // user scrolling
  useEffect(() => {
    // const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.addEventListener("scroll", handleUserScroll);

    return () => window.removeEventListener("scroll", handleUserScroll);
  }, []);

  const handleUserScroll = () => {
    // console.log("handleUserScroll");
    if (!scrollState.isScrollActive) {
      console.log("scrolling: ");
    }
  };

  const handleScrollTo = (target: LocationType) => {
    const targetIdObj = {
      Home: "#dashboardSplash",
      Products: "#dashboardProduct",
      About: "#dashboardAbout",
      Contact: "#dashboardContact",
      Checkout: "#checkoutPage",
      Admin: "#adminPage",
      Console: "#consolePage",
    };

    if (targetIdObj[target]) {
      const section = document.querySelector(targetIdObj[target]);
      if (section) {
        const scrollTop =
          section.getBoundingClientRect().top + window.pageYOffset - 75;
        // section.getBoundingClientRect().top + window.pageYOffset - 180;

        window.scrollTo({ top: scrollTop, behavior: "smooth" });
      }
    }
  };

  return (
    <Box>
      {/* <PageWrapper> */}
      <Grid container>
        <DashboardSplash />
        <DashboardProducts />
        <DashboardAbout />
      </Grid>
      {/* </PageWrapper> */}
      <DashboardContact />
    </Box>
  );
};

export default Dashboard;
