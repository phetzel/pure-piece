import React from "react";
import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import TableContainer from "@mui/material/TableContainer";

import { useDispatch, useSelector } from "react-redux";

import { updateCart, emptyCart } from "../../redux/slices/productSlice";

// redux
import { RootState } from "../../redux/store";
// types
import { CartItem } from "../../types/productTypes";
// constants
import { NAV_MENU_ITEMS } from "../../constants/commonConstants";
// component
import NavbarCartItem from "./NavbarCartItem";
// style
import { navbarStyles } from "./styles";

interface Props {}

const NavbarCart = () => {
  const cartState = useSelector((state: RootState) => state.product.cart);
  const dispatch = useDispatch();

  const handleUpdateCart = (cartItem: CartItem, count: number) => {
    console.log("handleUpdateCart");
    dispatch(updateCart({ count: count, product: cartItem }));
  };

  const handleClearCart = () => {
    dispatch(emptyCart());
  };

  return (
    <Box>
      <Typography variant="h5">Menu</Typography>

      {cartState.length ? (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Table sx={{ width: "100%" }} size="small" aria-label="Cart Table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align="right">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartState.map((cartItem) => (
                <NavbarCartItem
                  cartItem={cartItem}
                  handleUpdateCart={handleUpdateCart}
                />
              ))}
            </TableBody>
          </Table>
          <Button variant="text" onClick={handleClearCart}>
            Clear
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            No Products in list
          </Typography>
          <Button variant="text" onClick={handleClearCart}>
            Shop Products
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default NavbarCart;
