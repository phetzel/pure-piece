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
      <Box>
        <Typography>Shipping</Typography>
        <Typography>Name:</Typography>
        <Typography>{name ? name : ""}</Typography>
        <Typography>Address:</Typography>
        <Typography>{address.line1 ? address.line1 : ""}</Typography>
        <Typography>{address.line2 ? address.line2 : ""}</Typography>
        <Typography>{address.city ? address.city : ""}</Typography>
        <Typography>{address.state ? address.state : ""}</Typography>
        <Typography>
          {address.postal_code ? address.postal_code : ""}
        </Typography>
      </Box>
    </CommonModal>
  );
};

export default PurchaseModal;

// stripe_id: string;
// items: {
//   description: string;
//   quantity: number;
// }[];
// shipping: {
//   address: {
//     city: string;
//     country: string;
//     line1: string;
//     line2: string;
//     postal_code: string;
//     state: string;
//   };
//   name: string;
// };
