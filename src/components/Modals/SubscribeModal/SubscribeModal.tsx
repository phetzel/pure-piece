import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import CommonModal from "../../common/CommonModal/CommonModal";
import {
  toggleLoading,
  updateToastState,
} from "../../../redux/slices/navigationSlice";
import { addSubscription } from "../../../services/emailServices";
import { isValidEmail } from "../../../util/utilFunctions";
import subscribeModalStyles from "./styles/subscribeModalStyles";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const SubscribeModal = ({ isOpen, handleClose }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
  const [formErr, setFormErr] = useState<string>("");

  const dispatch = useDispatch();

  const handleSubscribe = () => {
    setFormErr("");

    const isValidForm = handleValidate();
    if (isValidForm) {
      setIsFormDisabled(true);
      dispatch(toggleLoading(true));

      addSubscription({
        email: email,
      })
        .then((res) => {
          setIsFormDisabled(false);
          dispatch(toggleLoading(false));

          if (typeof res === "string") {
            setFormErr(res);
          } else if (res) {
            dispatch(
              updateToastState({
                severity: "success",
                children: "Subscribed to emailing list",
              })
            );
            handleClose();
          } else {
            setFormErr("Unsuccessful subscription request");
          }
        })
        .catch((err) => {
          setIsFormDisabled(false);
          dispatch(toggleLoading(false));

          if (typeof err === "string") {
            setFormErr(err);
          } else {
            setFormErr("Unsuccessful subscription request");
          }
        });
    }
  };

  const handleValidate = () => {
    if (!email || !isValidEmail(email)) {
      setFormErr("Enter valid email");
      return false;
    }

    return true;
  };

  return (
    <CommonModal
      isOpen={isOpen}
      handleClose={handleClose}
      title={"Join Mailing List"}
    >
      <Box>
        <TextField
          margin="normal"
          required
          fullWidth
          id="subscribeEmail"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />

        {formErr && (
          <Typography variant="body2" color="error">
            {formErr}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={subscribeModalStyles.button}
          onClick={handleSubscribe}
          disabled={isFormDisabled}
        >
          Subscribe
        </Button>
      </Box>
    </CommonModal>
  );
};

export default SubscribeModal;
