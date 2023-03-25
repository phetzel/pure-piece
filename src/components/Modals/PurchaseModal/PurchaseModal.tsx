import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

import CommonModal from "../../common/CommonModal/CommonModal";
import { GetProductDetailsType } from "../../../types/paymentTypes";
export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  purchase: GetProductDetailsType;
};

const PurchaseModal = ({ isOpen, handleClose, purchase }: Props) => {
  const { stripe_id, items, shipping } = purchase;
  const { name, address } = shipping;
  return (
    <CommonModal isOpen={isOpen} handleClose={handleClose} title={"Puchase"}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ alignText: "center" }}>
          <Typography variant="subtitle1">Shipping</Typography>
          <Typography variant="subtitle2">Name:</Typography>
          <Typography>{name ? name : ""}</Typography>
          <Typography>Address:</Typography>
          <Typography variant="body2">
            {address.line1 ? address.line1 : ""}
          </Typography>
          <Typography variant="body2">
            {address.line2 ? address.line2 : ""}
          </Typography>
          <Typography variant="body2">
            {address.city ? address.city : ""}{" "}
            {address.state ? address.state : ""}{" "}
            {address.postal_code ? address.postal_code : ""}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1">Products</Typography>
          {items.map((i) => (
            <Box>
              <Typography variant="subtitle2">Quantity:</Typography>
              <Typography variant="body2">{i.quantity}</Typography>
              <Typography variant="subtitle2">Product:</Typography>
              <Typography variant="body2">{i.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </CommonModal>
  );
};

export default PurchaseModal;
