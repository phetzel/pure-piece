import React, { useEffect, useState } from "react";
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
import { getProducts } from "../../services/productServices";
import { toggleLoading } from "../../redux/slices/navigationSlice";
import { ProductType } from "../../types/productTypes";

interface Props {}

const Dashboard = ({}: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isInitLoaded, setIsInitLoaded] = useState<boolean>(false);

  const dispatch = useDispatch();
  const tabState = useSelector((state: RootState) => state.navigation.tabState);
  const scrollState = useSelector(
    (state: RootState) => state.navigation.scrollState
  );

  // get products
  useEffect(() => {
    dispatch(toggleLoading(true));

    getProducts({ isActiveOnly: true })
      .then((res) => {
        if (typeof res != "string") {
          setProducts(res);
        }
        dispatch(toggleLoading(false));
        setIsInitLoaded(true);
      })
      .catch((err) => {
        dispatch(toggleLoading(false));
        setIsInitLoaded(true);
      });
  }, []);

  // navigation scrolling
  useEffect(() => {
    scrollState.isScrollActive &&
      tabState.activeTab &&
      handleScrollTo(tabState.activeTab);
    dispatch(toggleDashboardScroll(false));
  }, [scrollState.isScrollActive]);

  // // user scrolling
  // useEffect(() => {
  //   window.removeEventListener("scroll", handleUserScroll);
  //   window.addEventListener("scroll", handleUserScroll);

  //   return () => window.removeEventListener("scroll", handleUserScroll);
  // }, [scrollState.isScrollActive]);

  // const handleUserScroll = () => {
  //   console.log(scrollState.isScrollActive);
  //   if (!scrollState.isScrollActive) {
  //     console.log("scrolling: ");
  //   }
  // };

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

        window.scrollTo({ top: scrollTop, behavior: "smooth" });
      }
    }
  };

  return (
    <Box>
      <DashboardSplash isInitLoaded={isInitLoaded} />

      {isInitLoaded && (
        <Box>
          <DashboardProducts products={products} />
          <DashboardAbout />
          <DashboardContact />
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
