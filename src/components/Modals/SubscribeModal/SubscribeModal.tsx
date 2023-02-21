import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

import CommonModal from "../../common/CommonModal/CommonModal";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
};
const SubscribeModal = ({ isOpen, handleClose }: Props) => {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = () => {
    console.log(email);
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
    </CommonModal>
  );
};

export default SubscribeModal;
