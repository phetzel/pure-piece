import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { updateCart, emptyCart } from "../../redux/slices/productSlice";

// redux
import { RootState } from "../../redux/store";
// types
import { CartItem } from "../../types/productTypes";
// component
import NavbarCartItem from "./NavbarCartItem";
// hooks
import useAppNavigation from "../../hooks/useAppNavigation";

interface Props {
  handleClose: () => void;
}

const NavbarCart = ({ handleClose }: Props) => {
  const dispatch = useDispatch();
  const appNavigate = useAppNavigation();

  const cartState = useSelector((state: RootState) => state.product.cartState);

  const handleUpdateCart = (cartItem: CartItem, count: number) => {
    dispatch(updateCart({ count: count, product: cartItem }));
  };

  const handleClearCart = () => {
    dispatch(emptyCart());
  };

  const handleCheckout = () => {
    handleClose();
    appNavigate("Checkout");
  };

  const handleShop = () => {
    handleClose();
    appNavigate("Products");
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Button
              variant="text"
              onClick={handleClearCart}
              color="error"
              sx={{ marginRight: "5px" }}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              onClick={handleCheckout}
              sx={{ marginLeft: "5px" }}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            There are no products in your cart
          </Typography>
          <Button variant="text" onClick={handleShop}>
            Shop Products
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default NavbarCart;
