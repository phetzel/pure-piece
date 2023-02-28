import React from "react";
import { Box, Modal, Typography } from "@mui/material";

import productModalStyles from "../CommonModal/styles/commonModalStyles";

export type Props = {
  children: JSX.Element;
  handleClose: () => void;
  isOpen: boolean;
  title?: string;
};

const CommonModal = ({ children, handleClose, isOpen, title }: Props) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={productModalStyles.modal}>
        {title && (
          <Typography variant="h5" color="black">
            {title}
          </Typography>
        )}

        {children}
      </Box>
    </Modal>
  );
};

export default CommonModal;
