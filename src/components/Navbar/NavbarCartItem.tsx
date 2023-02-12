import React from "react";

import { TableCell, TableRow } from "@mui/material";
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
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {cartItem.name}
      </TableCell>
      <TableCell align="right">
        ${cartItem.price} * {cartItem.count} = $
        {(cartItem.price * cartItem.count).toFixed(2)}
      </TableCell>
      <TableCell align="right" sx={{ display: "flex" }}>
        <CommonIconButton
          iconColor={"primary"}
          onClick={() => handleUpdateCart(cartItem, 1)}
        >
          <AddIcon />
        </CommonIconButton>
        {cartItem.count > 1 && (
          <CommonIconButton
            iconColor={"warning"}
            onClick={() => handleUpdateCart(cartItem, -1)}
          >
            <RemoveIcon />
          </CommonIconButton>
        )}
        <CommonIconButton
          iconColor={"error"}
          onClick={() => handleUpdateCart(cartItem, -cartItem.count)}
        >
          <DeleteIcon />
        </CommonIconButton>
      </TableCell>
    </TableRow>
  );
};

export default NavbarCartItem;
