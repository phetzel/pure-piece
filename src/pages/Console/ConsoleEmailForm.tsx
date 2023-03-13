import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import consoleStyles from "./styles/consoleStyles";
import { addNewsletter } from "../../services/emailServices";
import {
  toggleLoading,
  updateToastState,
} from "../../redux/slices/navigationSlice";

export type Props = {};

const ConsoleEmailForm = ({}: Props) => {
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleSendEmail = () => {
    const isValid = handleValidation();

    if (isValid) {
      dispatch(toggleLoading(true));
      setError("");
      setIsDisabled(true);

      addNewsletter({
        subject: subject,
        message: message,
      })
        .then((res) => {
          handleSubmitSuccess();
          dispatch(toggleLoading(false));
          setIsDisabled(false);
        })
        .catch((err) => {
          dispatch(toggleLoading(false));
          setIsDisabled(false);
        });
    }
  };

  const handleValidation = (): boolean => {
    if (!subject) {
      dispatch(
        updateToastState({
          children: "Please enter a valid subject",
          severity: "error",
        })
      );
      return false;
    } else if (!message) {
      dispatch(
        updateToastState({
          children: "Please enter a valid message",
          severity: "error",
        })
      );
      return false;
    }

    return true;
  };

  const handleSubmitSuccess = () => {
    dispatch(
      updateToastState({
        children: "Newsletter Sent",
        severity: "success",
      })
    );
    setSubject("");
    setMessage("");
  };

  return (
    <Box>
      <Container
        component="main"
        maxWidth="sm"
        sx={{ mb: 4 }}
        id="checkoutPage"
      >
        <Paper variant="outlined" sx={consoleStyles.formContainer}>
          <Typography component="h1" variant="h6" color="black" align="center">
            Send a new email
          </Typography>
          <TextField
            required
            id="emailSubject"
            name="emailSubject"
            label="Email subject"
            fullWidth
            variant="standard"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSubject(event.target.value);
            }}
            value={subject}
          />

          <TextField
            required
            id="emailMessage"
            name="emailMessage"
            label="Email message"
            fullWidth
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMessage(event.target.value);
            }}
            minRows={4}
            multiline
            sx={{ mt: 1 }}
            value={message}
          />

          <Button
            variant="contained"
            color="primary"
            sx={consoleStyles.formButton}
            onClick={handleSendEmail}
            disabled={isDisabled}
          >
            Send
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default ConsoleEmailForm;
