import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { updateToastState } from "../../../redux/slices/navigationSlice";
import { updateCart } from "../../../redux/slices/productSlice";
import { ProductType } from "../../../types/productTypes";
import useAppNavigation from "../../../hooks/useAppNavigation";

import CommonModal from "../../common/CommonModal/CommonModal";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  product: ProductType | undefined;
};

const ProductModal = ({ isOpen, handleClose, product }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const appNavigate = useAppNavigation();

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(+event.target.value);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    product && dispatch(updateCart({ count: quantity, product: product }));
    dispatch(
      updateToastState({
        severity: "success",
        children: `${quantity} product${quantity > 1 ? "s" : ""} added to cart`,
      })
    );
    handleClose();
  };

  const handleCheckout = () => {
    handleAddToCart();
    handleClose();
    appNavigate("Checkout");
  };

  return (
    <CommonModal isOpen={isOpen} handleClose={handleClose}>
      <Grid container columnSpacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            alt={product?.name}
            src={product?.imageUrl}
            sx={{
              objectFit: "cover",
              height: "300px",
              maxWidth: "100%",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {product?.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", marginTop: "15px" }}
            >
              ${product?.price} *
            </Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
              <InputLabel id="productQuantityLabel">Quantity</InputLabel>
              <Select
                labelId="productQuantityLabel"
                id="productQuantity"
                value={quantity.toString()}
                onChange={handleChange}
                label="Quantity"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", marginTop: "15px" }}
            >
              = {product?.price ? `$${product.price * quantity}` : ""}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                fontSize: "12px",
                marginRight: "10px",
              }}
              color="info"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "12px",
              }}
              onClick={handleCheckout}
            >
              Buy Now
            </Button>
          </Box>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {product && product.description}
          </Typography>
        </Grid>
      </Grid>
    </CommonModal>
  );
};

export default ProductModal;
