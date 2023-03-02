import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Paper, Typography } from "@mui/material";

import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";
import { toggleLoading } from "../../redux/slices/navigationSlice";
import { unsubscribe } from "../../services/emailServices";
import unsubscribeStyles from "./styles/unsubscribeStyles";

export type Props = {};

const Unsubscribe = ({}: Props) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let hash = urlParams.get("unsubscribe_hash");

    if (hash) {
      dispatch(toggleLoading(true));

      unsubscribe({ hash: hash })
        .then((res) => {
          if (res) {
            setIsSuccess(true);
          } else {
            setErr("Failed to unsubscribe. Contact us for further assistence.");
          }

          dispatch(toggleLoading(false));
        })
        .catch((err) => {
          setErr("Failed to unsubscribe. Contact us for further assistence.");
          dispatch(toggleLoading(false));
        });
    }
  }, []);

  const renderSuccess = () => (
    <Paper variant="outlined" sx={unsubscribeStyles.messageOutline}>
      <Typography variant="h6">Successfully unsubscribed.</Typography>
      <Typography variant="body1">
        You will no longer send you emails.
      </Typography>
    </Paper>
  );

  const renderErr = () => (
    <Paper variant="outlined" sx={unsubscribeStyles.messageOutline}>
      <Typography variant="body1" color="error">
        {err}
      </Typography>
    </Paper>
  );

  return (
    <PageWrapper>
      <Box sx={unsubscribeStyles.content}>
        {isSuccess && renderSuccess()}
        {err && renderErr()}
      </Box>
    </PageWrapper>
  );
};

export default Unsubscribe;
