import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// redux
import { openDrawer } from "../redux/slices/navigationSlice";
import {
  setActiveTab,
  toggleDashboardScroll,
} from "../redux/slices/navigationSlice";
//  constants
import {
  NAV_MENU_ITEMS,
  LOCATION_ITEMS,
} from "../constants/navigationConstants";
// types
import {
  MenuItemType,
  LocationItemType,
  LocationType,
  TabType,
} from "../types/navigationTypes";

interface Props {
  target: LocationType;
}

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
