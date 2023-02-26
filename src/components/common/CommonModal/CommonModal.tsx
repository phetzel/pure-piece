import React from "react";
import { Box, Modal, Typography } from "@mui/material";

export type Props = {
  children: JSX.Element;
  handleClose: () => void;
  isOpen: boolean;
  title?: string;
};

const CommonModal = ({ children, handleClose, isOpen, title }: Props) => {
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

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
