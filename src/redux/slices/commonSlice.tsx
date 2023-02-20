import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AnchorType, CommonStateType, TabType } from "../../types/commonTypes";

const initialCommonState: CommonStateType = {
  drawerState: {
    left: false,
    right: false,
  },
  dashboardState: {
    isScrollActive: false,
  },
  tabState: {
    activeTab: "Home",
  },
};

export const commonSlice = createSlice({
  name: "UpdateCommonAction",
  initialState: initialCommonState,
  reducers: {
    openDrawer: (state, action: PayloadAction<AnchorType>) => {
      state.drawerState[action.payload] = true;
    },
    closeDrawer: (state, action: PayloadAction<AnchorType>) => {
      state.drawerState[action.payload] = false;
    },
    setActiveTab: (state, action: PayloadAction<TabType | null>) => {
      state.tabState.activeTab = action.payload;
    },
    toggleDashboardScroll: (state, action: PayloadAction<boolean>) => {
      state.dashboardState.isScrollActive = action.payload;
    },
    default: (state) => {
      return state;
    },
  },
});

export const { openDrawer, closeDrawer, setActiveTab, toggleDashboardScroll } =
  commonSlice.actions;
export default commonSlice.reducer;
