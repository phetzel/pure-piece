import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  DrawerAnchorType,
  NavigationStateType,
  LocationType,
} from "../../types/navigationTypes";

const initialNavigationState: NavigationStateType = {
  drawerState: {
    left: false,
    right: false,
  },
  scrollState: {
    isScrollActive: false,
  },
  tabState: {
    activeTab: "Home",
  },
};

export const navigationSlice = createSlice({
  name: "UpdateNavigationAction",
  initialState: initialNavigationState,
  reducers: {
    openDrawer: (state, action: PayloadAction<DrawerAnchorType>) => {
      state.drawerState[action.payload] = true;
    },
    closeDrawer: (state, action: PayloadAction<DrawerAnchorType>) => {
      state.drawerState[action.payload] = false;
    },
    setActiveTab: (state, action: PayloadAction<LocationType>) => {
      state.tabState.activeTab = action.payload;
    },
    toggleDashboardScroll: (state, action: PayloadAction<boolean>) => {
      state.scrollState.isScrollActive = action.payload;
    },
    default: (state) => {
      return state;
    },
  },
});

export const { openDrawer, closeDrawer, setActiveTab, toggleDashboardScroll } =
  navigationSlice.actions;
export default navigationSlice.reducer;
