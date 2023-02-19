import React from "react";

import { Box, TableCell, TableRow } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import { CartItem } from "../../types/productTypes";
import CommonIconButton from "../common/CommonIconButton/CommonIconButton";

export type Props = {
  cartItem: CartItem;
  handleUpdateCart: (cartItem: CartItem, num: number) => void;
};

const NavbarCartItem = ({ cartItem, handleUpdateCart }: Props) => {
  return (
    <TableRow
      key={cartItem.name}
      // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {cartItem.name}
      </TableCell>
      <TableCell align="right">
        ${cartItem.price} * {cartItem.count} = $
        {cartItem.price * cartItem.count}
      </TableCell>

      <TableCell align="right">
        <Box sx={{ display: "flex" }}>
          <CommonIconButton
            iconColor={"error"}
            onClick={() => handleUpdateCart(cartItem, -1)}
          >
            <RemoveIcon sx={{ fontSize: 18 }} />
          </CommonIconButton>

          <CommonIconButton
            iconColor={"success"}
            onClick={() => handleUpdateCart(cartItem, 1)}
          >
            <AddIcon sx={{ fontSize: 18 }} />
          </CommonIconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default NavbarCartItem;
