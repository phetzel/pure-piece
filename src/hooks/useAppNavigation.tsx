import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// redux
// import { openDrawer } from "../redux/slices/navigationSlice";
import {
  setActiveTab,
  toggleDashboardScroll,
} from "../redux/slices/navigationSlice";
//  constants
import { LOCATION_ITEMS } from "../constants/navigationConstants";
// types
import { LocationItemType, LocationType } from "../types/navigationTypes";

const useAppNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUseAppNavigation = (target: LocationType) => {
    const targetItem: LocationItemType | undefined = LOCATION_ITEMS.find(
      (item) => item.location === target
    );

    if (targetItem) {
      navigate(targetItem.route);
      dispatch(setActiveTab(targetItem.location));

      if (targetItem.route === "/") {
        dispatch(toggleDashboardScroll(true));
      }
    }
  };

  return handleUseAppNavigation;
};

export default useAppNavigation;
