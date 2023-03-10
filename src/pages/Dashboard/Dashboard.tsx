import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

// redux
import { RootState } from "../../redux/store";
import {
  toggleDashboardScroll,
  setActiveTab,
} from "../../redux/slices/navigationSlice";
// types
import { LocationType } from "../../types/navigationTypes";
// components
import DashboardAbout from "./DashboardAbout";
import DashboardContact from "./DashboardContact";
import DashboardProducts from "./DashboardProducts";
import DashboardSplash from "./DashboardSplash";
import { getProducts } from "../../services/productServices";
import { toggleLoading } from "../../redux/slices/navigationSlice";
import { ProductType } from "../../types/productTypes";

interface Props {}

const Dashboard = ({}: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isInitLoaded, setIsInitLoaded] = useState<boolean>(false);

  const location = useLocation();

  const dispatch = useDispatch();
  const scrollState = useSelector(
    (state: RootState) => state.navigation.scrollState
  );

  // track what content is in view
  const [splashRef, splashInView] = useInView({
    threshold: 0.1,
  });
  const [productRef, productInView] = useInView({
    threshold: 0.1,
  });
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.01,
    rootMargin: "100px",
  });
  const [contactRef, contactInView] = useInView({
    threshold: 0.1,
  });

  // update active tab
  useEffect(() => {
    if (contactInView) {
      dispatch(setActiveTab("Contact"));
    } else if (aboutInView) {
      dispatch(setActiveTab("About"));
    } else if (productInView) {
      dispatch(setActiveTab("Products"));
    } else {
      dispatch(setActiveTab("Home"));
    }
  }, [splashInView, productInView, aboutInView, contactInView]);

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

  // scrolling via navigation links
  useEffect(() => {
    scrollState.isScrollActive &&
      location.state &&
      handleScrollTo(location.state.section);

    dispatch(toggleDashboardScroll(false));
  }, [scrollState.isScrollActive]);

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
      <DashboardSplash isInitLoaded={isInitLoaded} splashRef={splashRef} />

      {isInitLoaded && (
        <Box>
          <DashboardProducts
            products={products}
            productRef={productRef}
            isVisible={splashInView || productInView}
          />
          <DashboardAbout
            aboutRef={aboutRef}
            isVisible={aboutInView || contactInView}
          />
          <DashboardContact contactRef={contactRef} />
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
