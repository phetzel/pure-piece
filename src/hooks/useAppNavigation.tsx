import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// redux
import { openDrawer } from "../redux/slices/commonSlice";
import {
  setActiveTab,
  toggleDashboardScroll,
} from "../redux/slices/commonSlice";
//  constants
import { NAV_MENU_ITEMS } from "../constants/commonConstants";
// types
import { MenuItemType, TabType } from "../types/commonTypes";

interface Props {
  target: TabType;
}

const useAppNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUseAppNavigation = (target: TabType) => {
    const targetItem: MenuItemType | undefined = NAV_MENU_ITEMS.find(
      (item) => item.label === target
    );

    if (targetItem) {
      dispatch(setActiveTab(targetItem.label));
      navigate(targetItem.route);

      if (targetItem.route === "/") {
        dispatch(toggleDashboardScroll(true));
      }
    }
  };

  return handleUseAppNavigation;
};

export default useAppNavigation;
