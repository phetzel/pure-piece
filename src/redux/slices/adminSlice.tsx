import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AdminStateType, UserType } from "../../types/adminTypes";

const initialAdminState: AdminStateType = {
  admin: null,
};

export const adminSlice = createSlice({
  name: "UpdateAdminAction",
  initialState: initialAdminState,
  reducers: {
    adminLoggedIn: (state, action: PayloadAction<UserType>) => {
      state.admin = action.payload;
    },
    adminLoggedOut: (state, action: PayloadAction<null>) => {
      state.admin = null;
    },
    default: (state) => {
      return state;
    },
  },
});

export const { adminLoggedIn, adminLoggedOut } = adminSlice.actions;
export default adminSlice.reducer;
