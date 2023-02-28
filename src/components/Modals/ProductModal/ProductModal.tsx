import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

// redux
import { RootState } from "../../../redux/store";

import { updateToastState } from "../../../redux/slices/navigationSlice";
import { updateCart } from "../../../redux/slices/productSlice";
import { ProductType, CartItem } from "../../../types/productTypes";
import useAppNavigation from "../../../hooks/useAppNavigation";

import CommonModal from "../../common/CommonModal/CommonModal";

import { addCheckout } from "../../../services/paymentServices";
import { formatCheckoutItems } from "../../../util/utilFunctions";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  product: ProductType | undefined;
};

const ProductModal = ({ isOpen, handleClose, product }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  // const appNavigate = useAppNavigation();
  const cartState = useSelector((state: RootState) => state.product.cartState);

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

  const handleCheckout = async () => {
    handleAddToCart();
    // handleClose();
    // appNavigate("Checkout");
    if (product) {
      let items: CartItem[] = [];
      const itemIds = cartState.map((i) => i.priceId);

      if (itemIds.includes(product.priceId)) {
        cartState.map((item) => {
          if (item.priceId === product.priceId) {
            const newItem = {
              ...item,
              count: item.count + quantity,
            };
            items.push(newItem);
          } else {
            items.push(item);
          }
        });
      } else {
        items = [...items, { ...product, count: quantity }];
      }
      let formattedItems = formatCheckoutItems(items);

      addCheckout(formattedItems);
    }
  };

  return (
    <CommonModal isOpen={isOpen} handleClose={handleClose}>
      <Grid container columnSpacing={2} sx={{ overflow: "scroll" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {product?.images[0] && (
            <Box
              component="img"
              alt={product?.name}
              src={product?.images[0]}
              sx={{
                objectFit: "cover",
                height: "300px",
                maxWidth: "100%",
              }}
            />
          )}
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            {product?.name}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  fontSize: "12px",
                  marginRight: "10px",
                  height: "50%",
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
                  height: "50%",
                }}
                onClick={handleCheckout}
              >
                Buy Now
              </Button>
            </Box>
          </Box>

          <Typography variant="body1">Description</Typography>
          <Typography variant="body2">
            {product && product.description}
          </Typography>
        </Grid>
      </Grid>
    </CommonModal>
  );
};

export default ProductModal;
