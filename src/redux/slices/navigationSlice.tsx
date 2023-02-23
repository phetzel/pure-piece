import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  DrawerAnchorType,
  NavigationStateType,
  LocationType,
  ToastType,
} from "../../types/navigationTypes";

const initialNavigationState: NavigationStateType = {
  drawerState: {
    left: false,
    right: false,
  },
  loadState: {
    isLoading: false,
  },
  scrollState: {
    isScrollActive: false,
  },
  tabState: {
    activeTab: "Home",
  },
  toastState: {
    toast: null,
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
    toggleLoading: (state, action: PayloadAction<boolean>) => {
      state.loadState.isLoading = action.payload;
    },
    toggleDashboardScroll: (state, action: PayloadAction<boolean>) => {
      state.scrollState.isScrollActive = action.payload;
    },
    updateToastState: (state, action: PayloadAction<ToastType | null>) => {
      state.toastState.toast = action.payload;
    },
    default: (state) => {
      return state;
    },
  },
});

export const {
  openDrawer,
  closeDrawer,
  setActiveTab,
  updateToastState,
  toggleLoading,
  toggleDashboardScroll,
} = navigationSlice.actions;
export default navigationSlice.reducer;
