import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import { updateCart } from "../../../redux/slices/productSlice";
import { ProductType } from "../../../types/productTypes";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  product: ProductType | undefined;
  setAddedProductCount: (num: number) => void;
};

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

const ProductModal = ({
  isOpen,
  handleClose,
  product,
  setAddedProductCount,
}: Props) => {
  const [quantity, setQuantity] = React.useState<number>(1);
  const quantityValuesArr = [Array.from({ length: 10 }, (_, i) => i + 1)];

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(+event.target.value);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    product && dispatch(updateCart({ count: quantity, product: product }));
    handleClose();
    setAddedProductCount(quantity);
  };

  const handleCheckout = () => {
    handleAddToCart();
    handleClose();
    navigate("/checkout");
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
                color="secondary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
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
      </Box>
    </Modal>
  );
};

export default ProductModal;
