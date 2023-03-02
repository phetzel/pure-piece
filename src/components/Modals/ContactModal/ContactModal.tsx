import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import CommonModal from "../../common/CommonModal/CommonModal";
import {
  toggleLoading,
  updateToastState,
} from "../../../redux/slices/navigationSlice";
import { addContact } from "../../../services/emailServices";
import { isValidEmail } from "../../../util/utilFunctions";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const ContactModal = ({ isOpen, handleClose }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
  const [formErr, setFormErr] = useState<string>("");

  const dispatch = useDispatch();

  const handleContact = () => {
    setFormErr("");

    const isValidForm = handleValidate();
    if (isValidForm) {
      setIsFormDisabled(true);
      dispatch(toggleLoading(true));

      addContact({
        email: email,
        subject: subject,
        message: message,
      })
        .then((res) => {
          setIsFormDisabled(false);
          dispatch(toggleLoading(false));

          if (res) {
            dispatch(
              updateToastState({
                severity: "success",
                children: "Email sent. Thank you for contacting us.",
              })
            );
            handleClose();
          } else {
            setFormErr("Unsuccessful contact attempt");
          }
        })
        .catch((err) => {
          setIsFormDisabled(false);
          dispatch(toggleLoading(false));
          setFormErr("Unsuccessful contact attempt");
        });
    }
  };

  const handleValidate = () => {
    if (!email || !isValidEmail(email)) {
      setFormErr("Enter valid email");
      return false;
    } else if (!subject) {
      setFormErr("Enter valid subject");
      return false;
    } else if (!message) {
      setFormErr("Enter valid message");
      return false;
    }

    return true;
  };

  return (
    <CommonModal isOpen={isOpen} handleClose={handleClose} title={"Contact Us"}>
      <Box>
        <TextField
          margin="normal"
          required
          fullWidth
          id="contactEmail"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="contactSubject"
          label="Email Subject"
          name="emailubject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="contactMessage"
          label="Message"
          name="message"
          multiline
          minRows={4}
          onChange={(e) => setMessage(e.target.value)}
        />
        {formErr && (
          <Typography variant="body2" color="error">
            {formErr}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "12px",
          }}
          onClick={handleContact}
          disabled={isFormDisabled}
        >
          Send
        </Button>
      </Box>
    </CommonModal>
  );
};

export default ContactModal;
