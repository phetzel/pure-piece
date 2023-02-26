import React from "react";
import { useSelector } from "react-redux";
import { Backdrop, CircularProgress } from "@mui/material";

import { RootState } from "../../redux/store";

export type Props = {};

const LoadingSpinner = ({}: Props) => {
  const loadState = useSelector(
    (state: RootState) => state.navigation.loadState
  );

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loadState.isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingSpinner;
