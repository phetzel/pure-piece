import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AnchorType, CommonStateType } from "../../types/commonTypes";

const initialCommonState: CommonStateType = {
  drawerState: {
    left: false,
    right: false,
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
  },
});

export const { openDrawer, closeDrawer } = commonSlice.actions;
export default commonSlice.reducer;
