import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";

// redux
import { RootState } from "../../redux/store";
import { updateToastState } from "../../redux/slices/navigationSlice";

interface Props {}

const Toast = ({}: Props) => {
  const { toast } = useSelector(
    (state: RootState) => state.navigation.toastState
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(updateToastState(null));
  };

  return (
    <Snackbar
      autoHideDuration={6000}
      open={toast ? true : false}
      onClose={handleClose}
      key={"snackbar"}
    >
      <Alert {...toast} onClose={handleClose} />
    </Snackbar>
  );
};

export default Toast;
