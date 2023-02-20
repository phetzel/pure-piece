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

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ContactModal = ({ isOpen, handleClose }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleContact = () => {
    console.log(message);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h5" color="black">
          Contact Us
        </Typography>
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
    </Modal>
  );
};

export default ContactModal;
