import React, { useState } from "react";
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

import Select, { SelectChangeEvent } from "@mui/material/Select";

import { updateCart } from "../../../redux/slices/productSlice";
import { ProductType } from "../../../types/productTypes";

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

const SubscribeModal = ({ isOpen, handleClose }: Props) => {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = () => {
    console.log(email);
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
          Join Our Newsletter
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="subscribeEmail"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "12px",
          }}
          onClick={handleSubscribe}
        >
          Subscribe
        </Button>
      </Box>
    </Modal>
  );
};

export default SubscribeModal;
