import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import CommonModal from "../../common/CommonModal/CommonModal";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const ContactModal = ({ isOpen, handleClose }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleContact = () => {
    console.log(message);
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
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="contactSubject"
          label="Email Subject"
          name="email"
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
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "12px",
          }}
          onClick={handleContact}
        >
          Send
        </Button>
      </Box>
    </CommonModal>
  );
};

export default ContactModal;
